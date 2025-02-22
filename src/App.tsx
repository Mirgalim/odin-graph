import { useState, useEffect, type ReactNode } from "react";
import "./App.css";
import Chart from "./svg/Chart";
import Select from "react-dropdown-select";
import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";
import { FilterValueType, Level, Section } from "./types";

const sectionDictionary: Record<string, string> = {
  STATE: "State",
  SOCIAL: "Social",
  EDU: "Education",
  GOV: "Government",
  SOC_1: "Social",
  EXT: "External",
  INT: "Internal",
  PRIVATE: "Private",
};

function App() {
  const [filter, setFilter] = useState<FilterValueType | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedTexts, setSelectedTexts] = useState<string[]>([]);
  const [label, setLabel] = useState<string>("");
  const [chartData, setChartData] = useState<
    Map<Section, Map<string, Map<number, any>>>
  >(new Map());

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://18.140.234.198:8087/api/data");
        const result = await response.json();

        // Transform API data to match the expected structure
        const transformedData = transformApiData(result);
        setChartData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const transformApiData = (apiData: any) => {
    const newData = new Map<Section, Map<string, Map<number, any>>>();

    apiData.forEach((sectionData: any) => {
      const sectionKey = Section[sectionData.section as keyof typeof Section];
      if (!sectionKey) return;

      const sectionMap = new Map<string, Map<number, any>>();

      sectionData.quadrants.forEach((quadrant: any) => {
        ["sun_data", "moon_data"].forEach((placement) => {
          const placementKey = placement === "sun_data" ? "center" : "self";

          if (!sectionMap.has(placementKey)) {
            sectionMap.set(placementKey, new Map());
          }

          quadrant[placement].forEach((item: any) => {
            const level = parseInt(item.level, 10);
            if (!sectionMap.get(placementKey)!.has(level)) {
              sectionMap.get(placementKey)!.set(level, []);
            }

            // Transform each label into separate words and format the data
            const words = item.label.split(" ");
            const transformedItems = words.map((word: string) => ({
              text: word, // Convert label → text
              filterable: ["Inflation"], // Modify based on real data
              x: Math.random() * 800 + 100, // Random positioning
              y: Math.random() * 800 + 100,
              fontSize: 5,
              expandedX: Math.random() * 100 - 50,
              expandedY: Math.random() * 100 - 50,
              details: item.items, // Convert items → details
            }));

            sectionMap.get(placementKey)!.get(level)!.push(transformedItems);
          });
        });
      });

      newData.set(sectionKey, sectionMap);
    });

    return newData;
  };

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setSelectedTexts([]);
    setLabel("");
  };

  const handleChipClick = (text: string) => {
    if (selectedTexts.includes(text)) {
      const updated = selectedTexts.filter(
        (textElement) => textElement !== text
      );
      setSelectedTexts(updated);
    } else {
      setSelectedTexts([...selectedTexts, text]);
    }
  };

  const renderModalSelections = () => {
    const elements: ReactNode[] = [];
    for (const [sectionKey, section] of chartData) {
      elements.push(
        <h3 key={`section-${sectionKey}`}>{sectionDictionary[sectionKey]}</h3>
      );
      for (const [placementKey, placement] of section) {
        elements.push(
          <h4 key={`placement-${sectionKey}-${placementKey}`}>
            {placementKey === "center" ? "Sun" : "Moon"}
          </h4>
        );
        for (const [levelKey, level] of placement) {
          elements.push(
            <h5 key={`level-${sectionKey}-${placementKey}-${levelKey}`}>
              Layer: {levelKey}
            </h5>
          );
          const chipElements: ReactNode[] = [];
          for (
            let textGroupIndex = 0;
            textGroupIndex < level.length;
            textGroupIndex++
          ) {
            const groupText = level[textGroupIndex];
            const fullText = groupText.map((item: any) => item.text).join(" ");
            const isSelected = selectedTexts.includes(fullText);
            chipElements.push(
              <span
                key={`chip-${sectionKey}-${placementKey}-${levelKey}-${textGroupIndex}`}
                className={`chip ${isSelected ? "selected-chip" : ""}`}
                onClick={() => handleChipClick(fullText)}
              >
                {fullText}
              </span>
            );
          }
          elements.push(
            <div
              key={`chip-row-${sectionKey}-${placementKey}-${levelKey}`}
              className="chip-row"
            >
              {chipElements}
            </div>
          );
        }
      }
    }
    return elements;
  };

  const submit = () => {
    const body = {
      label,
      items: selectedTexts,
    };
    console.log("body>>>", body);
  };

  return (
    <main
      style={{
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Chart
        filter={filter ?? null}
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
        data={chartData}
      />
      <div className="filter">
        <Select
          values={filter ? [{ value: filter, label: filter }] : []} // Ensure correct format
          clearable
          placeholder="Filter"
          options={[
            { value: "Inflation", label: "Inflation" },
            { value: "Natural disasters", label: "Natural disasters" },
            { value: "Crises", label: "Crises" },
            { value: "Geopolitical factors", label: "Geopolitical factors" },
          ]}
          onChange={(value) => {
            if (value?.[0]?.value) {
              setFilter(value[0].value as FilterValueType); // Type assertion ensures correct type
            } else {
              setFilter(null);
            }
          }}
        />
        <button onClick={onOpenModal} className="create">
          +
        </button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="input-row">
          <span>Нэр:</span>
          <input
            className="input"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
          <button className="submit" onClick={submit}>
            Хадгалах
          </button>
        </div>
        {renderModalSelections()}
      </Modal>
    </main>
  );
}

export default App;
