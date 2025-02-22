// @ts-nocheck

import type { FilterValueType } from '../types';

export enum Section {
	STATE = 1,
	SOCIAL = 2,
	EDU = 3,
	GOV = 4,
	SOC_1 = 5,
	EXT = 6,
	INT = 7,
	PRIVATE = 8
}

interface Item {
	text: string;
	filterable: FilterValueType[];
	x: number;
	y: number;
	fontSize: number;
	fontWeight?: number;
	expandedX?: number;
	expandedY?: number;
	textAnchor?: 'start' | 'middle' | 'end';
	details?: string[]
}

export const data: Map<Section, Map<'center' | 'self', Map<1 | 2 | 3 | 4 | 5, Item[][]>>> = new Map([
	[
		Section.STATE,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Seasonal', filterable: ['Inflation'], x: 770, y: 750, fontSize: 4, expandedX: -50, expandedY: -84, details: ["Industry and Job Type factors", "Economic and Market factors", "Geographic factors", "Consumer Behavior"] },
								{ text: 'variation', filterable: ['Inflation'], x: 770, y: 754, fontSize: 4, expandedX: -50, expandedY: -80, details: ["Industry and Job Type factors", "Economic and Market factors", "Geographic factors", "Consumer Behavior"] },
								{ text: 'in earnings', filterable: ['Inflation'], x: 765, y: 758, fontSize: 4, expandedX: -50, expandedY: -76, details: ["Industry and Job Type factors", "Economic and Market factors", "Geographic factors", "Consumer Behavior"] }
							],
							[
								{ text: 'Credit', filterable: ['Inflation'], x: 787, y: 766, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: -60, details: ["Income level", "Spending and Saing Habits", "Debt management"] },
								{ text: 'score', filterable: ['Inflation'], x: 787, y: 770, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: -56, details: ["Income level", "Spending and Saing Habits", "Debt management"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'State', filterable: ['Inflation'], x: 740, y: 720, fontSize: 6, expandedX: 0, expandedY: -35, details: ["Income/Asset Eligibility Thresholds", "Unemployment", "Childcare", "Healthcare benefits", "Political and Policy factors"] },
								{ text: 'Support', filterable: ['Inflation'], x: 740, y: 726, fontSize: 6, expandedX: 0, expandedY: -30, details: ["Income/Asset Eligibility Thresholds", "Unemployment", "Childcare", "Healthcare benefits", "Political and Policy factors"] },
								{ text: 'Benefits', filterable: ['Inflation'], x: 740, y: 732, fontSize: 6, expandedX: 0, expandedY: -25, details: ["Income/Asset Eligibility Thresholds", "Unemployment", "Childcare", "Healthcare benefits", "Political and Policy factors"] }
							],
							[
								{ text: 'Social', filterable: ['Inflation'], x: 769, y: 700, fontSize: 6, expandedX: -25, expandedY: -75, details: ["Eligibility Criteria", "Contribution Rates", "Coverage Types", "Government Policy", "Demoghraphic Trends"] },
								{ text: 'Security', filterable: ['Inflation'], x: 763, y: 706, fontSize: 6, expandedX: -25, expandedY: -70, details: ["Eligibility Criteria", "Contribution Rates", "Coverage Types", "Government Policy", "Demoghraphic Trends"] },
								{ text: 'Coverage', filterable: ['Inflation'], x: 760, y: 712, fontSize: 6, expandedX: -25, expandedY: -65, details: ["Eligibility Criteria", "Contribution Rates", "Coverage Types", "Government Policy", "Demoghraphic Trends"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Public', filterable: ['Inflation'], x: 705, y: 695, fontSize: 5, expandedX: 10, expandedY: -15, details: ["Transportation", "Energy grids and Utilities", "Construction and maintenance funding", "Economic growth", "Public-Private Impacts"] },
								{ text: 'Infrastructure', filterable: ['Inflation'], x: 705, y: 700, fontSize: 5, expandedX: 10, expandedY: -10, details: ["Transportation", "Energy grids and Utilities", "Construction and maintenance funding", "Economic growth", "Public-Private Impacts"] },
								{ text: 'Development', filterable: ['Inflation'], x: 705, y: 705, fontSize: 5, expandedX: 10, expandedY: -5, details: ["Transportation", "Energy grids and Utilities", "Construction and maintenance funding", "Economic growth", "Public-Private Impacts"] }
							],
							[
								{ text: 'Regional', filterable: ['Inflation'], x: 757, y: 675, fontSize: 5, expandedX: -35, expandedY: -35, details: ["Allocation of Government Funds across Regions", "Urban Rural Investment Disparities", "Infrastructure cennectivity", "Inter-Regional Migration Patterns"] },
								{ text: 'Development', filterable: ['Inflation'], x: 757, y: 680, fontSize: 5, expandedX: -45, expandedY: -30, details: ["Allocation of Government Funds across Regions", "Urban Rural Investment Disparities", "Infrastructure cennectivity", "Inter-Regional Migration Patterns"] },
								{ text: 'Balance', filterable: ['Inflation'], x: 757, y: 685, fontSize: 5, expandedX: -35, expandedY: -25, details: ["Allocation of Government Funds across Regions", "Urban Rural Investment Disparities", "Infrastructure cennectivity", "Inter-Regional Migration Patterns"] }
							],
							[
								{ text: 'State', filterable: ['Inflation'], x: 730, y: 670, fontSize: 5, expandedX: -65, expandedY: -40, details: ["Social Safety Nets", "Funding mechanism and budget aallocations", "Political priorities and Policy Framework", "Administrative Coverage and Reach"] },
								{ text: 'Support', filterable: ['Inflation'], x: 730, y: 675, fontSize: 5, expandedX: -65, expandedY: -36, details: ["Social Safety Nets", "Funding mechanism and budget aallocations", "Political priorities and Policy Framework", "Administrative Coverage and Reach"] },
								{ text: 'System', filterable: ['Inflation'], x: 730, y: 680, fontSize: 5, expandedX: -65, expandedY: -32, details: ["Social Safety Nets", "Funding mechanism and budget aallocations", "Political priorities and Policy Framework", "Administrative Coverage and Reach"] }
							],
							[
								{ text: 'Public', filterable: ['Inflation'], x: 700, y: 675, fontSize: 5, expandedX: 53, expandedY: 40, details: ["Quality of healthcare", "education", "pubic utilities", "Service accessbility", "Efficiency and Responsiveness", "Digitalization"] },
								{ text: 'Service', filterable: ['Inflation'], x: 700, y: 680, fontSize: 5, expandedX: 48, expandedY: 45, details: ["Quality of healthcare", "education", "pubic utilities", "Service accessbility", "Efficiency and Responsiveness", "Digitalization"] },
								{ text: 'Delivery', filterable: ['Inflation'], x: 700, y: 685, fontSize: 5, expandedX: 45, expandedY: 50, details: ["Quality of healthcare", "education", "pubic utilities", "Service accessbility", "Efficiency and Responsiveness", "Digitalization"] }
							],
							[
								{ text: 'Local', filterable: ['Inflation'], x: 760, y: 650, fontSize: 5, expandedX: -25, expandedY: -50, details: ["Policies", "Municipal budgets", "Business incubators", "Public-Private Partnership,"] },
								{ text: 'Ergonomic', filterable: ['Inflation'], x: 760, y: 655, fontSize: 5, expandedX: -35, expandedY: -45, details: ["Policies", "Municipal budgets", "Business incubators", "Public-Private Partnership,"] },
								{ text: 'Programs', filterable: ['Inflation'], x: 760, y: 660, fontSize: 5, expandedX: -35, expandedY: -40, details: ["Policies", "Municipal budgets", "Business incubators", "Public-Private Partnership,"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'State', filterable: ['Inflation'], x: 665, y: 650, fontSize: 6, expandedX: 20, expandedY: 10, details: ["Natural Resource allocation", "Budget usage and procurement", "Transparency and oversight", "Long-term sustainability focus", "Public debt levels", "Revenue vs expenditure balance"] },
								{ text: 'Resource', filterable: ['Inflation'], x: 665, y: 656, fontSize: 6, expandedX: 20, expandedY: 15, details: ["Natural Resource allocation", "Budget usage and procurement", "Transparency and oversight", "Long-term sustainability focus", "Public debt levels", "Revenue vs expenditure balance"] },
								{ text: 'Management', filterable: ['Inflation'], x: 665, y: 662, fontSize: 6, expandedX: 20, expandedY: 20, details: ["Natural Resource allocation", "Budget usage and procurement", "Transparency and oversight", "Long-term sustainability focus", "Public debt levels", "Revenue vs expenditure balance"] }
							],
							[
								{ text: 'Economic', filterable: ['Inflation'], x: 690, y: 630, fontSize: 6, expandedX: 30, expandedY: 0, details: ["Clarity and Stability of rules", "Enforcement of contracts", "Consumer protection laws", "Environmental regulations", "Competition Policy"] },
								{ text: 'Regulation', filterable: ['Inflation'], x: 690, y: 636, fontSize: 6, expandedX: 30, expandedY: 5, details: ["Clarity and Stability of rules", "Enforcement of contracts", "Consumer protection laws", "Environmental regulations", "Competition Policy"] },
								{ text: 'Quality', filterable: ['Inflation'], x: 690, y: 642, fontSize: 6, expandedX: 30, expandedY: 10, details: ["Clarity and Stability of rules", "Enforcement of contracts", "Consumer protection laws", "Environmental regulations", "Competition Policy"] }
							],
							[
								{ text: 'Public', filterable: ['Inflation'], x: 730, y: 615, fontSize: 6, expandedX: 15, expandedY: -30, details: ["Bureaucratic complexity and red tape", "Government spending accountability", "Quality of public service delivery", "Anticorruption measures", "E-Government initiatives", "Workforce competencein the public sector"] },
								{ text: 'Sector', filterable: ['Inflation'], x: 730, y: 621, fontSize: 6, expandedX: 15, expandedY: -25, details: ["Bureaucratic complexity and red tape", "Government spending accountability", "Quality of public service delivery", "Anticorruption measures", "E-Government initiatives", "Workforce competencein the public sector"] },
								{ text: 'Efficiency', filterable: ['Inflation'], x: 730, y: 627, fontSize: 6, expandedX: -3, expandedY: -20, details: ["Bureaucratic complexity and red tape", "Government spending accountability", "Quality of public service delivery", "Anticorruption measures", "E-Government initiatives", "Workforce competencein the public sector"] }
							],
							[
								{ text: 'Real', filterable: ['Inflation'], x: 770, y: 610, fontSize: 6, expandedX: -15, expandedY: 80, details: ["Consumer Spending", "Private investment lvls", "Government spending", "Net exports", "Monetary Policy", "Global economic trends"] },
								{ text: 'GDP', filterable: ['Inflation'], x: 770, y: 616, fontSize: 6, expandedX: -15, expandedY: 85, details: ["Consumer Spending", "Private investment lvls", "Government spending", "Net exports", "Monetary Policy", "Global economic trends"] },
								{ text: 'rate', filterable: ['Inflation'], x: 770, y: 622, fontSize: 6, expandedX: -15, expandedY: 90, details: ["Consumer Spending", "Private investment lvls", "Government spending", "Net exports", "Monetary Policy", "Global economic trends"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'State', filterable: ['Inflation'], x: 630, y: 610, fontSize: 6, expandedX: 5, expandedY: 0, details: ["Total Revenue vs Total expenditures", "Cyclical vs structural deficits", "Public debt implications", "Long-term sustainability", "Macroeconomic stability", "Policy trade-offs"] },
								{ text: 'Budget', filterable: ['Inflation'], x: 630, y: 616, fontSize: 6, expandedX: 5, expandedY: 5, details: ["Total Revenue vs Total expenditures", "Cyclical vs structural deficits", "Public debt implications", "Long-term sustainability", "Macroeconomic stability", "Policy trade-offs"] },
								{ text: 'Balance', filterable: ['Inflation'], x: 630, y: 622, fontSize: 6, expandedX: 5, expandedY: 10, details: ["Total Revenue vs Total expenditures", "Cyclical vs structural deficits", "Public debt implications", "Long-term sustainability", "Macroeconomic stability", "Policy trade-offs"] }
							],
							[
								{ text: 'Fiscal', filterable: ['Inflation'], x: 655, y: 595, fontSize: 6, expandedX: 15, expandedY: -15, details: ["Government spending priorities", "Taxation structure and incentives", "Impact on social welfare and infrastructure", "Budget deficits vs surpluses", "Economic multiplier effects", "Policy timing and Coordination"] },
								{ text: 'Policy', filterable: ['Inflation'], x: 655, y: 601, fontSize: 6, expandedX: 15, expandedY: -10, details: ["Government spending priorities", "Taxation structure and incentives", "Impact on social welfare and infrastructure", "Budget deficits vs surpluses", "Economic multiplier effects", "Policy timing and Coordination"] },
								{ text: 'Effectiveness', filterable: ['Inflation'], x: 655, y: 607, fontSize: 6, expandedX: 15, expandedY: -5, details: ["Government spending priorities", "Taxation structure and incentives", "Impact on social welfare and infrastructure", "Budget deficits vs surpluses", "Economic multiplier effects", "Policy timing and Coordination"] }
							],
							[
								{ text: 'Economic', filterable: ['Inflation'], x: 675, y: 585, fontSize: 6, expandedX: 60, expandedY: -30, details: ["Fiscal and monetary policy alignment", "Industrial and trade policies", "Political stability and governance", "Strategic economic planning", "Stakeholder consultation"] },
								{ text: 'Policy', filterable: ['Inflation'], x: 677, y: 591, fontSize: 6, expandedX: 58, expandedY: -25, details: ["Fiscal and monetary policy alignment", "Industrial and trade policies", "Political stability and governance", "Strategic economic planning", "Stakeholder consultation"] },
								{ text: 'Framework', filterable: ['Inflation'], x: 680, y: 597, fontSize: 6, expandedX: 50, expandedY: -20, details: ["Fiscal and monetary policy alignment", "Industrial and trade policies", "Political stability and governance", "Strategic economic planning", "Stakeholder consultation"] }
							],
							[
								{ text: 'State', filterable: ['Inflation'], x: 705, y: 570, fontSize: 6, expandedX: -10, expandedY: 60, details: ["Tax collection efficiency", "Diversification of Revenue sources", "Public sector reforms", "Economic growth correlation", "Natural resources revenues", "Compliance and enforcement"] },
								{ text: 'Revenue', filterable: ['Inflation'], x: 705, y: 576, fontSize: 6, expandedX: -10, expandedY: 65, details: ["Tax collection efficiency", "Diversification of Revenue sources", "Public sector reforms", "Economic growth correlation", "Natural resources revenues", "Compliance and enforcement"] },
								{ text: 'Performance', filterable: ['Inflation'], x: 705, y: 582, fontSize: 6, expandedX: -10, expandedY: 70, details: ["Tax collection efficiency", "Diversification of Revenue sources", "Public sector reforms", "Economic growth correlation", "Natural resources revenues", "Compliance and enforcement"] }
							],
							[
								{ text: 'Debt', filterable: ['Inflation'], x: 734, y: 560, fontSize: 6, expandedX: 10, expandedY: 50, details: ["Debt to GDP ratio", "Maturity profile of debt", "Sovereign credit ranks", "Interest rate and Refinancing Risk", "Fiscal Discipline", "Contingent liabilities"] },
								{ text: 'Manage', filterable: ['Inflation'], x: 734, y: 566, fontSize: 6, expandedX: 10, expandedY: 55, details: ["Debt to GDP ratio", "Maturity profile of debt", "Sovereign credit ranks", "Interest rate and Refinancing Risk", "Fiscal Discipline", "Contingent liabilities"] },
								{ text: 'ment', filterable: ['Inflation'], x: 734, y: 572, fontSize: 6, expandedX: 10, expandedY: 60, details: ["Debt to GDP ratio", "Maturity profile of debt", "Sovereign credit ranks", "Interest rate and Refinancing Risk", "Fiscal Discipline", "Contingent liabilities"] }
							],
							[
								{ text: 'Central', filterable: ['Inflation'], x: 763, y: 555, fontSize: 6, expandedX: -25, expandedY: 120, details: ["Inflation targets", "Economic Growth", "GDP", "Unemployment rate", "Financial system stability", "Exchange rate policies", "Govetnment borrowing costs", "Global economic environments"] },
								{ text: 'Bank', filterable: ['Inflation'], x: 763, y: 561, fontSize: 6, expandedX: -25, expandedY: 125, details: ["Inflation targets", "Economic Growth", "GDP", "Unemployment rate", "Financial system stability", "Exchange rate policies", "Govetnment borrowing costs", "Global economic environments"] },
								{ text: 'Interest', filterable: ['Inflation'], x: 763, y: 567, fontSize: 6, expandedX: -25, expandedY: 130, details: ["Inflation targets", "Economic Growth", "GDP", "Unemployment rate", "Financial system stability", "Exchange rate policies", "Govetnment borrowing costs", "Global economic environments"] },
								{ text: 'Rate', filterable: ['Inflation'], x: 763, y: 573, fontSize: 6, expandedX: -25, expandedY: 135, details: ["Inflation targets", "Economic Growth", "GDP", "Unemployment rate", "Financial system stability", "Exchange rate policies", "Govetnment borrowing costs", "Global economic environments"] }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Opportunity', filterable: ['Inflation'], x: 788, y: 283, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 60, details: ["test1", "test2"] },
								{ text: 'Barriers', filterable: ['Inflation'], x: 788, y: 287, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 64, details: ["test1", "test2"] }
							],
							[
								{ text: 'Job quality', filterable: ['Inflation'], x: 788, y: 295, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 90, details: ["test1", "test2"] },
								{ text: 'degradation', filterable: ['Inflation'], x: 788, y: 299, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 94, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Protection', filterable: ['Inflation'], x: 770, y: 318, fontSize: 6, textAnchor: 'end', expandedX: 10, expandedY: 20, details: ["test1", "test2"] },
								{ text: 'System Gaps', filterable: ['Inflation'], x: 770, y: 324, fontSize: 6, textAnchor: 'end', expandedX: 10, expandedY: 25, details: ["test1", "test2"] }
							],
							[
								{ text: 'Benefit', filterable: ['Inflation'], x: 786, y: 336, fontSize: 6, textAnchor: 'end', expandedX: -10, expandedY: 50, details: ["test1", "test2"] },
								{ text: 'Distribution', filterable: ['Inflation'], x: 786, y: 342, fontSize: 6, textAnchor: 'end', expandedX: -10, expandedY: 55, details: ["test1", "test2"] },
								{ text: 'Failure', filterable: ['Inflation'], x: 786, y: 348, fontSize: 6, textAnchor: 'end', expandedX: -10, expandedY: 60, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Regional', filterable: ['Inflation'], x: 706, y: 345, fontSize: 6, expandedX: -50, expandedY: 60, details: ["test1", "test2"] },
								{ text: 'Imbalance', filterable: ['Inflation'], x: 705, y: 351, fontSize: 6, expandedX: -50, expandedY: 65, details: ["test1", "test2"] }
							],
							[
								{ text: 'Infrastructure Gaps', filterable: ['Inflation'], x: 700, y: 365, fontSize: 6, expandedX: -20, expandedY: 25, details: ["test1", "test2"] },
							],
							[
								{ text: 'Service', filterable: ['Inflation'], x: 765, y: 366, fontSize: 6, expandedX: -20, expandedY: -50, details: ["test1", "test2"] },
								{ text: 'Delivery', filterable: ['Inflation'], x: 765, y: 372, fontSize: 6, expandedX: -20, expandedY: -45, details: ["test1", "test2"] },
								{ text: 'Failure', filterable: ['Inflation'], x: 765, y: 378, fontSize: 6, expandedX: -20, expandedY: -40, details: ["test1", "test2"] },
							],
							[
								{ text: 'Support System', filterable: ['Inflation'], x: 710, y: 375, fontSize: 6, expandedX: -10, expandedY: -15, details: ["test1", "test2"] },
								{ text: 'Breakdown', filterable: ['Inflation'], x: 710, y: 381, fontSize: 6, expandedX: -0, expandedY: -10, details: ["test1", "test2"] },
							],
							[
								{ text: 'Program', filterable: ['Inflation'], x: 763, y: 390, fontSize: 6, expandedX: -40, expandedY: 45, details: ["test1", "test2"] },
								{ text: 'Implementation', filterable: ['Inflation'], x: 744, y: 396, fontSize: 6, expandedX: -40, expandedY: 50, details: ["test1", "test2"] },
								{ text: 'Gaps', filterable: ['Inflation'], x: 773, y: 402, fontSize: 6, expandedX: -40, expandedY: 55, details: ["test1", "test2"] },
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Resource', filterable: ['Inflation'], x: 670, y: 385, fontSize: 6, expandedX: 10, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Mismanagement', filterable: ['Inflation'], x: 660, y: 391, fontSize: 6, expandedX: 10, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Regulatory', filterable: ['Inflation'], x: 680, y: 410, fontSize: 6, expandedX: 20, expandedY: 15, details: ["test1", "test2"] },
								{ text: 'Dysfunction', filterable: ['Inflation'], x: 680, y: 416, fontSize: 6, expandedX: 20, expandedY: 20, details: ["test1", "test2"] }
							],
							[
								{ text: 'Debt', filterable: ['Inflation'], x: 720, y: 420, fontSize: 6, expandedX: 32, expandedY: -80, details: ["test1", "test2"] },
								{ text: 'burden', filterable: ['Inflation'], x: 720, y: 426, fontSize: 6, expandedX: 20, expandedY: -75, details: ["test1", "test2"] },
								{ text: 'increase', filterable: ['Inflation'], x: 720, y: 432, fontSize: 6, expandedX: 13, expandedY: -70, details: ["test1", "test2"] }
							],
							[
								{ text: 'Inefficiency', filterable: ['Inflation'], x: 750, y: 440, fontSize: 6, expandedX: -30, expandedY: 20, details: ["test1", "test2"] }
							]
							// [
							// 	{ text: 'Industrial', filterable: ['Inflation'], x: 745, y: 420, fontSize: 7, expandedX: -20, expandedY: -70, details: ["test1", "test2"] },
							// 	{ text: 'production', filterable: ['Inflation'], x: 745, y: 429, fontSize: 7, expandedX: -20, expandedY: -66, details: ["test1", "test2"] },
							// 	{ text: 'decline', filterable: ['Inflation'], x: 745, y: 438, fontSize: 7, expandedX: -20, expandedY: -62, details: ["test1", "test2"] }
							// ]
						]
					],
					[
						5,
						[
							[
								{ text: 'Budget', filterable: ['Inflation'], x: 635, y: 420, fontSize: 6, expandedX: 100, expandedY: -60, details: ["test1", "test2"] },
								{ text: 'Deficit', filterable: ['Inflation'], x: 635, y: 426, fontSize: 6, expandedX: 100, expandedY: -55, details: ["test1", "test2"] }
							],
							[
								{ text: 'Fiscal', filterable: ['Inflation'], x: 640, y: 440, fontSize: 6, expandedX: 35, expandedY: -50, details: ["test1", "test2"] },
								{ text: 'Policy', filterable: ['Inflation'], x: 640, y: 446, fontSize: 6, expandedX: 35, expandedY: -45, details: ["test1", "test2"] },
								{ text: 'Failure', filterable: ['Inflation'], x: 640, y: 452, fontSize: 6, expandedX: 35, expandedY: -40, details: ["test1", "test2"] }
							],
							[
								{ text: 'Policy', filterable: ['Inflation'], x: 665, y: 450, fontSize: 6, expandedX: 60, expandedY: -45, details: ["test1", "test2"] },
								{ text: 'Framework', filterable: ['Inflation'], x: 665, y: 456, fontSize: 6, expandedX: 60, expandedY: -40, details: ["test1", "test2"] },
								{ text: 'Weakness', filterable: ['Inflation'], x: 665, y: 462, fontSize: 6, expandedX: 60, expandedY: -35, details: ["test1", "test2"] }
							],
							[
								{ text: 'Revenue', filterable: ['Inflation'], x: 695, y: 470, fontSize: 6, expandedX: 40, expandedY: 20, details: ["test1", "test2"] },
								{ text: 'Shortfall', filterable: ['Inflation'], x: 695, y: 476, fontSize: 6, expandedX: 40, expandedY: 25, details: ["test1", "test2"] },
							],
							[
								{ text: 'National', filterable: ['Inflation'], x: 730, y: 480, fontSize: 6, expandedX: -80, expandedY: -40, details: ["test1", "test2"] },
								{ text: 'Debt', filterable: ['Inflation'], x: 730, y: 486, fontSize: 6, expandedX: -80, expandedY: -35, details: ["test1", "test2"] },
							],
							[
								{ text: 'Currency', filterable: ['Inflation'], x: 760, y: 485, fontSize: 6, expandedX: -70, expandedY: -25, details: ["test1", "test2"] },
								{ text: 'Stability', filterable: ['Inflation'], x: 760, y: 491, fontSize: 6, expandedX: -70, expandedY: -20, details: ["test1", "test2"] },
							],
							// [
							// 	{ text: 'Unequal', filterable: ['Inflation'], x: 630, y: 423, fontSize: 7, expandedX: 10, expandedY: 5, details: ["test1", "test2"] },
							// 	{ text: 'infrastructure', filterable: ['Inflation'], x: 627, y: 430, fontSize: 7, expandedX: 10, expandedY: 9, details: ["test1", "test2"] },
							// 	{ text: 'development', filterable: ['Inflation'], x: 627, y: 437, fontSize: 7, expandedX: 10, expandedY: 13, details: ["test1", "test2"] }
							// ],
							// [
							// 	{ text: 'Capital', filterable: ['Inflation'], x: 670, y: 447, fontSize: 7, expandedX: 40, expandedY: -25, details: ["test1", "test2"] },
							// 	{ text: 'depreciation', filterable: ['Inflation'], x: 670, y: 454, fontSize: 7, expandedX: 40, expandedY: -22, details: ["test1", "test2"] },
							// 	{ text: 'rate', filterable: ['Inflation'], x: 670, y: 461, fontSize: 7, expandedX: 40, expandedY: -18, details: ["test1", "test2"] }
							// ],
							// [
							// 	{ text: 'Slow Real', filterable: ['Inflation'], x: 700, y: 465, fontSize: 7, expandedX: 40, expandedY: 0, details: ["test1", "test2"] },
							// 	{ text: 'State', filterable: ['Inflation'], x: 700, y: 472, fontSize: 7, expandedX: 40, expandedY: 4, details: ["test1", "test2"] },
							// 	{ text: 'Market', filterable: ['Inflation'], x: 700, y: 479, fontSize: 7, expandedX: 40, expandedY: 8, details: ["test1", "test2"] }
							// ],
							// [
							// 	{ text: 'Boost', filterable: ['Inflation'], x: 730, y: 480, fontSize: 7, expandedX: 10, expandedY: -90, details: ["test1", "test2"] },
							// 	{ text: 'Inflation', filterable: ['Inflation'], x: 730, y: 489, fontSize: 7, expandedX: 10, expandedY: -89, details: ["test1", "test2"] }
							// ],
							// [
							// 	{ text: 'Real wage', filterable: ['Inflation'], x: 755, y: 470, fontSize: 7, expandedX: -45, expandedY: -120, details: ["test1", "test2"] },
							// 	{ text: 'decline', filterable: ['Inflation'], x: 755, y: 477, fontSize: 7, expandedX: -45, expandedY: -116, details: ["test1", "test2"] }
							// ]
						]
					]
				])
			]
		])
	],
	[
		Section.SOCIAL,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Self', filterable: [], x: 750, y: 767, fontSize: 4, expandedX: -90, expandedY: -50, details: ["Creative output measures", "Communication confidence scores", "Personal project completion rates", "Participation in activities", "Initiative taking frequency"] },
								{ text: 'expression', filterable: [], x: 747, y: 771, fontSize: 4, expandedX: -90, expandedY: -46, details: ["Creative output measures", "Communication confidence scores", "Personal project completion rates", "Participation in activities", "Initiative taking frequency"] }
							],
							[
								{ text: 'Free', filterable: [], x: 747, y: 782, fontSize: 4, expandedX: -100, expandedY: -25, details: ["Critical thinking assessments", "Innovation metrics", "Independent problem-solving rates", "Decision-making capability scores", "Creative solution generation"] },
								{ text: 'thinking', filterable: [], x: 745, y: 786, fontSize: 4, expandedX: -100, expandedY: -21, details: ["Critical thinking assessments", "Innovation metrics", "Independent problem-solving rates", "Decision-making capability scores", "Creative solution generation"] }
							],
							[
								{ text: 'EQ', filterable: [], x: 767, y: 786, fontSize: 7, expandedX: -30, expandedY: -10, details: ["Emotional awareness scores", "Interpersonal skills assessment", "Empathy measurement", "Social adaptability index", "Emotional regulation metrics"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Digital', filterable: [], x: 715, y: 740, fontSize: 6, expandedX: -70, expandedY: -30, details: ["Technology proficiency scores", "Online tool usage metrics", "Digital safety awareness", "Device operation capability", "Online research skills"] },
								{ text: 'literacy', filterable: [], x: 715, y: 746, fontSize: 6, expandedX: -70, expandedY: -26, details: ["Technology proficiency scores", "Online tool usage metrics", "Digital safety awareness", "Device operation capability", "Online research skills"] }
							],
							[
								{ text: 'Parental', filterable: [], x: 710, y: 760, fontSize: 6, expandedX: -15, expandedY: -5, details: ["Parent-teacher meeting attendance", "Homework supervision time", "Educational support hours", "School activity participation", "Learning progress monitoring"] },
								{ text: 'engagement', filterable: [], x: 710, y: 766, fontSize: 6, expandedX: -15, expandedY: -1, details: ["Parent-teacher meeting attendance", "Homework supervision time", "Educational support hours", "School activity participation", "Learning progress monitoring"] }
							],
							[
								{ text: 'Family', filterable: [], x: 705, y: 779, fontSize: 6, expandedX: -80, expandedY: -20, details: ["Cultural practice frequenc", "Traditional knowledge transfer", "Family learning activities", "Intergenerational teaching", "Cultural value preservation"] },
								{ text: 'traditions', filterable: [], x: 705, y: 785, fontSize: 6, expandedX: -80, expandedY: -16, details: ["Cultural practice frequenc", "Traditional knowledge transfer", "Family learning activities", "Intergenerational teaching", "Cultural value preservation"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Social and', filterable: [], x: 670, y: 710, fontSize: 6, expandedX: -45, expandedY: -15, details: ["Activity availability index", "Program participation rates", "Facility usage statistics", "Event frequency metrics", "Community engagement levels"] },
								{ text: 'Recreational', filterable: [], x: 670, y: 716, fontSize: 6, expandedX: -45, expandedY: -11, details: ["Activity availability index", "Program participation rates", "Facility usage statistics", "Event frequency metrics", "Community engagement levels"] },
								{ text: 'opportunities', filterable: [], x: 670, y: 722, fontSize: 6, expandedX: -45, expandedY: -7, details: ["Activity availability index", "Program participation rates", "Facility usage statistics", "Event frequency metrics", "Community engagement levels"] }
							],
							[
								{ text: 'Community', filterable: [], x: 658, y: 735, fontSize: 6, expandedX: 5, expandedY: 5, details: ["Volunteer rates", "Community event attendance", "Local project involvement", "Civic activity engagement", "Community meeting participation"] },
								{ text: 'participation', filterable: [], x: 658, y: 741, fontSize: 6, expandedX: 5, expandedY: 9, details: ["Volunteer rates", "Community event attendance", "Local project involvement", "Civic activity engagement", "Community meeting participation"] }
							],
							[
								{ text: 'Community', filterable: [], x: 655, y: 755, fontSize: 6, expandedX: -55, expandedY: 5, details: ["Forum attendance rates", "Discussion topic diversity", "Online platform engagement", "Community feedback frequency", "Issue resolution rates"] },
								{ text: 'forums', filterable: [], x: 655, y: 761, fontSize: 6, expandedX: -55, expandedY: 9, details: ["Forum attendance rates", "Discussion topic diversity", "Online platform engagement", "Community feedback frequency", "Issue resolution rates"] }
							],
							[
								{ text: 'Social', filterable: [], x: 655, y: 775, fontSize: 6, expandedX: 25, expandedY: -5, details: ["Cross-cultural interaction levels", "Social group membership", "Integration program participation", "Community cohesion metrics", "Intercultural event frequency"] },
								{ text: 'Integration', filterable: [], x: 650, y: 781, fontSize: 6, expandedX: 25, expandedY: -1, details: ["Cross-cultural interaction levels", "Social group membership", "Integration program participation", "Community cohesion metrics", "Intercultural event frequency"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'General', filterable: [], x: 630, y: 690, fontSize: 6, expandedX: -25, expandedY: -20, details: ["Intergenerational program participation", "Knowledge transfer success", "Cultural continuity metrics", "Traditional practice preservation", "Cross-age interaction rates"] },
								{ text: 'Connection', filterable: [], x: 630, y: 696, fontSize: 6, expandedX: -25, expandedY: -15, details: ["Intergenerational program participation", "Knowledge transfer success", "Cultural continuity metrics", "Traditional practice preservation", "Cross-age interaction rates"] }
							],
							[
								{ text: 'Civil society', filterable: [], x: 620, y: 715, fontSize: 6, expandedX: 0, expandedY: -10, details: ["NGO activity levels", "Civil organization density", "Public participation rates", "Social initiative success", "Community organization effectiveness"] },
								{ text: 'strength', filterable: [], x: 620, y: 721, fontSize: 6, expandedX: 0, expandedY: -5, details: ["NGO activity levels", "Civil organization density", "Public participation rates", "Social initiative success", "Community organization effectiveness"] }
							],
							[
								{ text: 'Cultural heritage', filterable: [], x: 600, y: 740, fontSize: 6, expandedX: -20, expandedY: 15, details: ["Heritage site maintenance", "Traditional practice continuation", "Cultural education programs", "Heritage documentation quality", "Preservation investment levels"] },
								{ text: 'preservation', filterable: [], x: 600, y: 746, fontSize: 6, expandedX: -20, expandedY: 19, details: ["Heritage site maintenance", "Traditional practice continuation", "Cultural education programs", "Heritage documentation quality", "Preservation investment levels"] }
							],
							[
								{ text: 'Inclusive', filterable: [], x: 605, y: 765, fontSize: 6, expandedX: 70, expandedY: -5, details: ["Diversity participation rate", "Special needs accommodation level", "Language support availability", "Cultural program participation", "Accessibility score"] },
								{ text: 'culture', filterable: [], x: 605, y: 771, fontSize: 6, expandedX: 70, expandedY: -1, details: ["Diversity participation rate", "Special needs accommodation level", "Language support availability", "Cultural program participation", "Accessibility score"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Social', filterable: [], x: 555, y: 760, fontSize: 7, expandedX: 90, expandedY: -15, details: ["Regional development equity", "Resource distribution fairness", "Opportunity access equality", "Social mobility measures", "Development sustainability index"] },
								{ text: 'Development', filterable: [], x: 545, y: 767, fontSize: 7, expandedX: 90, expandedY: -10, details: ["Regional development equity", "Resource distribution fairness", "Opportunity access equality", "Social mobility measures", "Development sustainability index"] },
								{ text: 'Balance', filterable: [], x: 553, y: 774, fontSize: 7, expandedX: 90, expandedY: -5, details: ["Regional development equity", "Resource distribution fairness", "Opportunity access equality", "Social mobility measures", "Development sustainability index"] }
							],
							[
								{ text: 'Social', filterable: [], x: 565, y: 705, fontSize: 7, expandedX: 0, expandedY: 30, details: ["Social trust metrics", "Community bond strength", "Intercultural harmony levels", "Social network density", "Collective action effectiveness"] },
								{ text: 'Cohesion', filterable: [], x: 560, y: 712, fontSize: 7, expandedX: 0, expandedY: 35, details: ["Social trust metrics", "Community bond strength", "Intercultural harmony levels", "Social network density", "Collective action effectiveness"] },
								{ text: 'Framework', filterable: [], x: 560, y: 719, fontSize: 7, expandedX: 0, expandedY: 40, details: ["Social trust metrics", "Community bond strength", "Intercultural harmony levels", "Social network density", "Collective action effectiveness"] }
							],
							[
								{ text: 'National', filterable: [], x: 595, y: 650, fontSize: 7, expandedX: -5, expandedY: 30, details: ["Cultural awareness levels", "National value adherence", "Traditional knowledge retention", "Identity expression measures", "Cultural participation rates"] },
								{ text: 'identity', filterable: [], x: 595, y: 657, fontSize: 7, expandedX: -5, expandedY: 35, details: ["Cultural awareness levels", "National value adherence", "Traditional knowledge retention", "Identity expression measures", "Cultural participation rates"] },
								{ text: 'strength', filterable: [], x: 595, y: 664, fontSize: 7, expandedX: -5, expandedY: 40, details: ["Cultural awareness levels", "National value adherence", "Traditional knowledge retention", "Identity expression measures", "Cultural participation rates"] }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Lack of self', filterable: [], x: 273, y: 780, fontSize: 6, expandedX: 60, expandedY: -30, details: ["Personal Expression Deficit Patterns", "Cultural Connection Gaps", "Self-Awareness Limitation Metrics", "Identity Development Barriers", "Confidence Formation Failures"] },
								{ text: 'identity', filterable: [], x: 278, y: 786, fontSize: 6, expandedX: 60, expandedY: -26, details: ["Personal Expression Deficit Patterns", "Cultural Connection Gaps", "Self-Awareness Limitation Metrics", "Identity Development Barriers", "Confidence Formation Failures"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Lack of', filterable: [], x: 310, y: 745, fontSize: 7, expandedX: 40, expandedY: -30, details: ["Engagement Deficit Patterns", "Parent Involvement Gaps", "Communication Failure Rates", "Support Absence Frequency", "Collaboration Deficit Metrics"] },
								{ text: 'parental', filterable: [], x: 310, y: 752, fontSize: 7, expandedX: 40, expandedY: -26, details: ["Engagement Deficit Patterns", "Parent Involvement Gaps", "Communication Failure Rates", "Support Absence Frequency", "Collaboration Deficit Metrics"] },
								{ text: 'participation', filterable: [], x: 310, y: 759, fontSize: 7, expandedX: 40, expandedY: -22, details: ["Engagement Deficit Patterns", "Parent Involvement Gaps", "Communication Failure Rates", "Support Absence Frequency", "Collaboration Deficit Metrics"] }
							],
							[
								{ text: 'Limited', filterable: [], x: 320, y: 778, fontSize: 7, expandedX: 40, expandedY: -20, details: ["Enrollment Barrier Patterns", "Educational Access Deficits", "Program Participation Gaps", "Resource Availability Failures", "Opportunity Limitation Metrics"] },
								{ text: 'access', filterable: [], x: 320, y: 785, fontSize: 7, expandedX: 40, expandedY: -16, details: ["Enrollment Barrier Patterns", "Educational Access Deficits", "Program Participation Gaps", "Resource Availability Failures", "Opportunity Limitation Metrics"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Social', filterable: [], x: 345, y: 710, fontSize: 7, expandedX: 20, expandedY: -20, details: ["Engagement Deficit Patterns", "Involvement Reduction Rates", "Activity Withdrawal Metrics", "Participation Gap Frequency", "Social Isolation Indicators"] },
								{ text: 'participation', filterable: [], x: 345, y: 717, fontSize: 7, expandedX: 20, expandedY: -15, details: ["Engagement Deficit Patterns", "Involvement Reduction Rates", "Activity Withdrawal Metrics", "Participation Gap Frequency", "Social Isolation Indicators"] },
								{ text: 'decline', filterable: [], x: 345, y: 724, fontSize: 7, expandedX: 20, expandedY: -10, details: ["Engagement Deficit Patterns", "Involvement Reduction Rates", "Activity Withdrawal Metrics", "Participation Gap Frequency", "Social Isolation Indicators"] }
							],
							[
								{ text: 'Community', filterable: [], x: 356, y: 740, fontSize: 7, expandedX: -20, expandedY: -5, details: ["Service Capacity Deficits", "Program Availability Gaps", "Initiative Shortage Metrics", "Activity Coverage Limitations", "Resource Volume Constraints"] },
								{ text: 'program', filterable: [], x: 360, y: 747, fontSize: 7, expandedX: -20, expandedY: 0, details: ["Service Capacity Deficits", "Program Availability Gaps", "Initiative Shortage Metrics", "Activity Coverage Limitations", "Resource Volume Constraints"] },
								{ text: 'volume', filterable: [], x: 360, y: 754, fontSize: 7, expandedX: -20, expandedY: 5, details: ["Service Capacity Deficits", "Program Availability Gaps", "Initiative Shortage Metrics", "Activity Coverage Limitations", "Resource Volume Constraints"] }
							],
							[
								{ text: 'Social', filterable: [], x: 365, y: 770, fontSize: 7, expandedX: 30, expandedY: -8, details: ["Inclusion Deficit Patterns", "Connection Barrier Metrics", "Participation Gap Rates", "Integration Failure Frequency", "Social Cohesion Limitations"] },
								{ text: 'integration', filterable: [], x: 365, y: 777, fontSize: 7, expandedX: 30, expandedY: -4, details: ["Inclusion Deficit Patterns", "Connection Barrier Metrics", "Participation Gap Rates", "Integration Failure Frequency", "Social Cohesion Limitations"] },
								{ text: 'barriers', filterable: [], x: 365, y: 784, fontSize: 7, expandedX: 30, expandedY: 0, details: ["Inclusion Deficit Patterns", "Connection Barrier Metrics", "Participation Gap Rates", "Integration Failure Frequency", "Social Cohesion Limitations"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Generation', filterable: [], x: 385, y: 690, fontSize: 7, expandedX: 0, expandedY: 0, details: ["Intergenerational Gap Metrics", "Communication Barrier Patterns", "Value Disconnect Frequency", "Understanding Deficit Rates", "Cultural Division Indicators"] },
								{ text: 'differences', filterable: [], x: 385, y: 697, fontSize: 7, expandedX: 0, expandedY: 5, details: ["Intergenerational Gap Metrics", "Communication Barrier Patterns", "Value Disconnect Frequency", "Understanding Deficit Rates", "Cultural Division Indicators"] }
							],
							[
								{ text: 'Social', filterable: [], x: 410, y: 730, fontSize: 7, expandedX: -70, expandedY: 10, details: ["Advancement Barrier Patterns", "Opportunity Gap Metrics", "Progress Limitation Rates", "Status Transition Failures", "Mobility Restriction Indicators"] },
								{ text: 'Mobility', filterable: [], x: 410, y: 737, fontSize: 7, expandedX: -70, expandedY: 15, details: ["Advancement Barrier Patterns", "Opportunity Gap Metrics", "Progress Limitation Rates", "Status Transition Failures", "Mobility Restriction Indicators"] },
								{ text: 'Systems', filterable: [], x: 410, y: 744, fontSize: 7, expandedX: -70, expandedY: 20, details: ["Advancement Barrier Patterns", "Opportunity Gap Metrics", "Progress Limitation Rates", "Status Transition Failures", "Mobility Restriction Indicators"] }
							],
							[
								{ text: 'Community', filterable: [], x: 415, y: 765, fontSize: 7, expandedX: -10, expandedY: -20, details: ["Connection Erosion Patterns", "Social Cohesion Deficits", "Relationship Decay Metrics", "Unity Breakdown Frequency", "Bonding Failure Indicators"] },
								{ text: 'bond', filterable: [], x: 415, y: 772, fontSize: 7, expandedX: -10, expandedY: -15, details: ["Connection Erosion Patterns", "Social Cohesion Deficits", "Relationship Decay Metrics", "Unity Breakdown Frequency", "Bonding Failure Indicators"] },
								{ text: 'deterioration', filterable: [], x: 415, y: 779, fontSize: 7, expandedX: -10, expandedY: -10, details: ["Connection Erosion Patterns", "Social Cohesion Deficits", "Relationship Decay Metrics", "Unity Breakdown Frequency", "Bonding Failure Indicators"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Cultural', filterable: [], x: 425, y: 650, fontSize: 7, expandedX: -20, expandedY: 30, details: ["Heritage Loss Patterns", "Cultural Practice Decline Rates", "Tradition Disconnect Metrics", "Identity Dilution Frequency", "Cultural Knowledge Deficit"] },
								{ text: 'identity', filterable: [], x: 425, y: 657, fontSize: 7, expandedX: -20, expandedY: 35, details: ["Heritage Loss Patterns", "Cultural Practice Decline Rates", "Tradition Disconnect Metrics", "Identity Dilution Frequency", "Cultural Knowledge Deficit"] },
								{ text: 'erosion', filterable: [], x: 425, y: 664, fontSize: 7, expandedX: -20, expandedY: 40, details: ["Heritage Loss Patterns", "Cultural Practice Decline Rates", "Tradition Disconnect Metrics", "Identity Dilution Frequency", "Cultural Knowledge Deficit"] }
							],
							[
								{ text: 'Social', filterable: [], x: 458, y: 706, fontSize: 7, expandedX: -110, expandedY: 30, details: ["Community Bond Decay Metrics", "Social Trust Erosion Patterns", "Unity Breakdown Frequency", "Collective Value Decline Rates", "Relationship Deterioration Index"] },
								{ text: 'cohesion', filterable: [], x: 458, y: 713, fontSize: 7, expandedX: -110, expandedY: 35, details: ["Community Bond Decay Metrics", "Social Trust Erosion Patterns", "Unity Breakdown Frequency", "Collective Value Decline Rates", "Relationship Deterioration Index"] },
								{ text: 'weakening', filterable: [], x: 458, y: 720, fontSize: 7, expandedX: -110, expandedY: 40, details: ["Community Bond Decay Metrics", "Social Trust Erosion Patterns", "Unity Breakdown Frequency", "Collective Value Decline Rates", "Relationship Deterioration Index"] }
							],
							[
								{ text: 'Social', filterable: [], x: 470, y: 756, fontSize: 7, expandedX: -37, expandedY: -10, details: ["Growth Disparity Patterns", "Development Gap Metrics", "Progress Inequality Rates", "Advancement Deficit Indicators", "Opportunity Distribution Failures"] },
								{ text: 'development', filterable: [], x: 463, y: 763, fontSize: 7, expandedX: -40, expandedY: -7, details: ["Growth Disparity Patterns", "Development Gap Metrics", "Progress Inequality Rates", "Advancement Deficit Indicators", "Opportunity Distribution Failures"] },
								{ text: 'imbalance', filterable: [], x: 465, y: 770, fontSize: 7, expandedX: -40, expandedY: -4, details: ["Growth Disparity Patterns", "Development Gap Metrics", "Progress Inequality Rates", "Advancement Deficit Indicators", "Opportunity Distribution Failures"] },
							]
						]
					],
				])
			]
		])
	],
	[
		Section.EDU,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Learning', filterable: [], x: 743, y: 795, fontSize: 4, expandedX: -100, expandedY: 10, details: ["Academic performance tracking", "Skill acquisition rate", "Knowledge retention rates", "Learning milestone achievements", "Progress assessment scores"] },
								{ text: 'progress', filterable: [], x: 743, y: 799, fontSize: 4, expandedX: -100, expandedY: 14, details: ["Academic performance tracking", "Skill acquisition rate", "Knowledge retention rates", "Learning milestone achievements", "Progress assessment scores"] }
							],
							[
								{ text: 'Hard vs Soft skills', filterable: [], x: 745, y: 805, fontSize: 4, expandedX: -105, expandedY: 40, details: ["Technical skill proficiency levels", "Communication skill assessments", "Leadership capability metrics", "Problem-solving ability scores", "Teamwork effectiveness ratings"] },
								{ text: 'developments', filterable: [], x: 745, y: 809, fontSize: 4, expandedX: -105, expandedY: 44, details: ["Technical skill proficiency levels", "Communication skill assessments", "Leadership capability metrics", "Problem-solving ability scores", "Teamwork effectiveness ratings"] }
							],
							[
								{ text: 'IQ', filterable: [], x: 770, y: 798, fontSize: 7, expandedX: -30, expandedY: 10, details: ["Standard IQ test scores", "Problem-solving ability metrics", "Logical reasoning assessments","Pattern recognition scores", "Memory capacity tests"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Educational', filterable: ['Inflation'], x: 700, y: 800, fontSize: 6, expandedX: -75, expandedY: 15, details: ["Learning materials availability", "Access to educational technology", "Study resource inventory", "Reference material access", "Educational tool availability"] },
								{ text: 'resources', filterable: ['Inflation'], x: 700, y: 806, fontSize: 6, expandedX: -75, expandedY: 19, details: ["Learning materials availability", "Access to educational technology", "Study resource inventory", "Reference material access", "Educational tool availability"] }
							],
							[
								{ text: 'Home learning', filterable: [], x: 702, y: 817, fontSize: 6, expandedX: -75, expandedY: 40, details: ["Study area availability", "Learning environment quality", "Internet connectivity quality"] },
								{ text: 'space', filterable: [], x: 702, y: 823, fontSize: 6, expandedX: -75, expandedY: 44, details: ["Study area availability", "Learning environment quality", "Internet connectivity quality"] }
							],
							[
								{ text: 'Learning', filterable: [], x: 710, y: 833, fontSize: 6, expandedX: -5, expandedY: -25, details: ["Homework completion rates", "Extra-curricular participation", "Self-study time tracking", "Group study frequency", "Educational game engagement"] },
								{ text: 'activities', filterable: [], x: 710, y: 839, fontSize: 6, expandedX: -5, expandedY: -21, details: ["Homework completion rates", "Extra-curricular participation", "Self-study time tracking", "Group study frequency", "Educational game engagement"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Education', filterable: [], x: 665, y: 800, fontSize: 6, textAnchor: 'middle', expandedX: -30, expandedY: 10, details: ["Graduation rates", "Certification achievements", "Higher education enrollment", "Professional qualification rates", "Skill certification levels"] },
								{ text: 'attainment levels', filterable: [], x: 665, y: 806, fontSize: 6, textAnchor: 'middle', expandedX: -30, expandedY: 14, details: ["Graduation rates", "Certification achievements", "Higher education enrollment", "Professional qualification rates", "Skill certification levels"] }
							],
							[
								{ text: 'Access to', filterable: ['Inflation'], x: 675, y: 830, fontSize: 6, textAnchor: 'middle', expandedX: 35, expandedY: -15, details: ["School proximity metrics", "Transportation availability", "Facility capacity utilization", "Resource distribution maps", "Infrastructure quality ratings"] },
								{ text: 'educational', filterable: ['Inflation'], x: 675, y: 836, fontSize: 6, textAnchor: 'middle', expandedX: 35, expandedY: -11, details: ["School proximity metrics", "Transportation availability", "Facility capacity utilization", "Resource distribution maps", "Infrastructure quality ratings"] },
								{ text: 'facilities', filterable: ['Inflation'], x: 675, y: 842, fontSize: 6, textAnchor: 'middle', expandedX: 35, expandedY: -7, details: ["School proximity metrics", "Transportation availability", "Facility capacity utilization", "Resource distribution maps", "Infrastructure quality ratings"] }
							],
							[
								{ text: 'Technology', filterable: [], x: 685, y: 865, fontSize: 6, textAnchor: 'middle', expandedX: -40, expandedY: 0, details: ["Digital tool adoption rates", "Online learning platform usage", "Tech infrastructure availability", "Digital resource accessibility", "EdTech implementation levels"] },
								{ text: 'Integration', filterable: [], x: 685, y: 871, fontSize: 6, textAnchor: 'middle', expandedX: -40, expandedY: 4, details: ["Digital tool adoption rates", "Online learning platform usage", "Tech infrastructure availability", "Digital resource accessibility", "EdTech implementation levels"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Instructional', filterable: [], x: 595, y: 800, fontSize: 7, expandedX: -10, expandedY: 20, details: ["Teacher qualification levels", "Student performance metrics", "Teaching methodology effectiveness", "Learning outcome achievement", "Professional development rates"] },
								{ text: 'quality', filterable: [], x: 595, y: 807, fontSize: 7, expandedX: -10, expandedY: 24, details: ["Teacher qualification levels", "Student performance metrics", "Teaching methodology effectiveness", "Learning outcome achievement", "Professional development rates"] }
							],
							[
								{ text: 'Assessment', filterable: [], x: 600, y: 830, fontSize: 7, expandedX: 60, expandedY: -20, details: ["Standardized test results", "Performance evaluation metrics", "Grading consistency measures", "Learning outcome alignment", "Assessment tool validity"] },
								{ text: 'Standards', filterable: [], x: 600, y: 837, fontSize: 7, expandedX: 60, expandedY: -16, details: ["Standardized test results", "Performance evaluation metrics", "Grading consistency measures", "Learning outcome alignment", "Assessment tool validity"] }
							],
							[
								{ text: 'Curriculum', filterable: [], x: 610, y: 860, fontSize: 7, expandedX: 60, expandedY: -20, details: ["Content relevance metrics", "Curriculum update frequency", "Industry alignment measures", "Skill gap analysis", "Learning pathway effectiveness"] },
								{ text: 'Development', filterable: [], x: 610, y: 867, fontSize: 7, expandedX: 60, expandedY: -16, details: ["Content relevance metrics", "Curriculum update frequency", "Industry alignment measures", "Skill gap analysis", "Learning pathway effectiveness"] }
							],
							[
								{ text: 'Innovative', filterable: [], x: 630, y: 890, fontSize: 7, expandedX: -20, expandedY: -10, details: ["New technology adoption rates", "Teaching innovation metrics", "Alternative learning approaches", "Experimental program success", "Modern tool integration"] },
								{ text: 'methods', filterable: [], x: 635, y: 897, fontSize: 7, expandedX: -20, expandedY: -6, details: ["New technology adoption rates", "Teaching innovation metrics", "Alternative learning approaches", "Experimental program success", "Modern tool integration"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Educational', filterable: ['Inflation'], x: 547, y: 800, fontSize: 7, expandedX: 90, expandedY: 5, details: ["Cost per student", "Financial aid coverage", "Material costs", "Technology costs", "Transportation costs"] },
								{ text: 'expense', filterable: ['Inflation'], x: 550, y: 807, fontSize: 7, expandedX: 90, expandedY: 9, details: ["Cost per student", "Financial aid coverage", "Material costs", "Technology costs", "Transportation costs"] }
							],
							[
								{ text: 'Social norm', filterable: [], x: 550, y: 830, fontSize: 7, expandedX: 5, expandedY: -10, details: ["Community value alignment", "Traditional practice rates", "Social responsibility level", "Behavioral standards compliance", "Cultural etiquette adherence"] }
							],
							[
								{ text: 'Сургалтын', filterable: [], x: 555, y: 850, fontSize: 7, expandedX: 10, expandedY: 10, details: ["Learning outcome achievement", "Teacher effectiveness metrics", "Resource adequacy measures", "Student satisfaction rates", "Program success indicators"] },
								{ text: 'чанар', filterable: [], x: 555, y: 857, fontSize: 7, expandedX: 15, expandedY: 14, details: ["Learning outcome achievement", "Teacher effectiveness metrics", "Resource adequacy measures", "Student satisfaction rates", "Program success indicators"] }
							],
							[
								{ text: 'Сургалтын', filterable: ['Inflation'], x: 565, y: 880, fontSize: 7, expandedX: 25, expandedY: 30, details: ["Facility quality metrics", "Learning space adequacy", "Equipment availability", "Safety standards compliance", "Environmental comfort measures"] },
								{ text: 'орчин', filterable: ['Inflation'], x: 565, y: 887, fontSize: 7, expandedX: 25, expandedY: 34, details: ["Facility quality metrics", "Learning space adequacy", "Equipment availability", "Safety standards compliance", "Environmental comfort measures"] }
							],
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Old school', filterable: [], x: 273, y: 798, fontSize: 6, expandedX: 60, expandedY: 20, details: ["Teaching Method Obsolescence Patterns", "Facility Modernization Gaps", "Technology Integration Deficits", "Curriculum Relevance Failures", "Learning Space Limitation Metrics"] },
								{ text: 'environment', filterable: [], x: 273, y: 804, fontSize: 6, expandedX: 60, expandedY: 24, details: ["Teaching Method Obsolescence Patterns", "Facility Modernization Gaps", "Technology Integration Deficits", "Curriculum Relevance Failures", "Learning Space Limitation Metrics"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Educational', filterable: [], x: 315, y: 800, fontSize: 6, expandedX: 35, expandedY: 10, details: ["Material Access Deficit Patterns", "Learning Tool Shortage Metrics", "Resource Distribution Gaps", "Support Material Limitations", "Equipment Availability Failures"] },
								{ text: 'resource', filterable: [], x: 315, y: 806, fontSize: 6, expandedX: 35, expandedY: 15, details: ["Material Access Deficit Patterns", "Learning Tool Shortage Metrics", "Resource Distribution Gaps", "Support Material Limitations", "Equipment Availability Failures"] },
								{ text: 'scarcity', filterable: [], x: 315, y: 812, fontSize: 6, expandedX: 35, expandedY: 20, details: ["Material Access Deficit Patterns", "Learning Tool Shortage Metrics", "Resource Distribution Gaps", "Support Material Limitations", "Equipment Availability Failures"] },
							],
							[

								{ text: 'Learning', filterable: [], x: 310, y: 830, fontSize: 6, expandedX: 40, expandedY: 30, details: ["Assistance Coverage Deficits", "Support Service Gap Metrics", "Intervention Access Barriers", "Guidance Program Limitations", "Help System Failure Rates"] },
								{ text: 'support', filterable: [], x: 310, y: 836, fontSize: 6, expandedX: 40, expandedY: 35, details: ["Assistance Coverage Deficits", "Support Service Gap Metrics", "Intervention Access Barriers", "Guidance Program Limitations", "Help System Failure Rates"] },
								{ text: 'inadequacy', filterable: [], x: 310, y: 842, fontSize: 6, expandedX: 40, expandedY: 40, details: ["Assistance Coverage Deficits", "Support Service Gap Metrics", "Intervention Access Barriers", "Guidance Program Limitations", "Help System Failure Rates"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Dropout rate', filterable: [], x: 362, y: 800, fontSize: 7, expandedX: -50, expandedY: 5, details: ["Academic Abandonment Patterns", "Retention Failure Metrics", "Completion Deficit Rates", "Persistence Gap Frequency", "Withdrawal Risk Indicators"] }
							],
							[
								{ text: 'Technology', filterable: [], x: 362, y: 815, fontSize: 7, expandedX: 30, expandedY: -5, details: ["Digital Adoption Failure Rates", "Tech Implementation Gaps", "Device Access Deficit Patterns", "System Integration Barriers", "Usage Limitation Metrics"] },
								{ text: 'integration', filterable: [], x: 362, y: 822, fontSize: 7, expandedX: 30, expandedY: 0, details: ["Digital Adoption Failure Rates", "Tech Implementation Gaps", "Device Access Deficit Patterns", "System Integration Barriers", "Usage Limitation Metrics"] },
								{ text: 'barriers', filterable: [], x: 362, y: 829, fontSize: 7, expandedX: 30, expandedY: 4, details: ["Digital Adoption Failure Rates", "Tech Implementation Gaps", "Device Access Deficit Patterns", "System Integration Barriers", "Usage Limitation Metrics"] }
							],
							[
								{ text: 'Limited access', filterable: [], x: 345, y: 850, fontSize: 7, expandedX: -20, expandedY: -5, details: ["Service Accessibility Gaps", "Resource Barrier Patterns", "Entry Restriction Metrics", "Participation Limitation Rates", "Access Inequality Indicators"] }
							],
						]
					],
					[
						4,
						[
							[
								{ text: 'Quality', filterable: [], x: 425, y: 810, fontSize: 7, expandedX: 0, expandedY: 0, details: ["Standard Deviation Patterns", "Performance Deficit Metrics", "Quality Assurance Failures", "Excellence Gap Frequency", "Benchmark Deficit Rates"] },
								{ text: 'gaps', filterable: [], x: 425, y: 817, fontSize: 7, expandedX: 0, expandedY: 5, details: ["Standard Deviation Patterns", "Performance Deficit Metrics", "Quality Assurance Failures", "Excellence Gap Frequency", "Benchmark Deficit Rates"] }
							],
							[
								{ text: 'Assessment', filterable: [], x: 405, y: 850, fontSize: 7, expandedX: -70, expandedY: -30, details: ["Evaluation Error Patterns", "Testing Inadequacy Metrics", "Measurement Failure Rates", "Assessment Validity Gaps", "Grading System Deficits"] },
								{ text: 'system flaws', filterable: [], x: 400, y: 857, fontSize: 7, expandedX: -70, expandedY: -25, details: ["Evaluation Error Patterns", "Testing Inadequacy Metrics", "Measurement Failure Rates", "Assessment Validity Gaps", "Grading System Deficits"] },
							],
							[
								{ text: 'Curriculum', filterable: [], x: 385, y: 890, fontSize: 7, expandedX: -10, expandedY: -20, details: ["Content Relevance Gaps", "Syllabus Obsolescence Metrics", "Material Update Failures", "Framework Aging Patterns", "Learning Objective Deficits"] },
								{ text: 'outdatedness', filterable: [], x: 380, y: 897, fontSize: 7, expandedX: -10, expandedY: -16, details: ["Content Relevance Gaps", "Syllabus Obsolescence Metrics", "Material Update Failures", "Framework Aging Patterns", "Learning Objective Deficits"] },
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Digital', filterable: [], x: 470, y: 800, fontSize: 6, expandedX: -30, expandedY: 5, details: ["Technology Access Gap Metrics", "Digital Resource Disparity Rates", "Online Learning Barrier Patterns", "Connectivity Deficit Indicators", "Device Availability Failures"] },
								{ text: 'divide in', filterable: [], x: 470, y: 806, fontSize: 6, expandedX: -30, expandedY: 9, details: ["Technology Access Gap Metrics", "Digital Resource Disparity Rates", "Online Learning Barrier Patterns", "Connectivity Deficit Indicators", "Device Availability Failures"] },
								{ text: 'learning', filterable: [], x: 470, y: 812, fontSize: 6, expandedX: -30, expandedY: 13, details: ["Technology Access Gap Metrics", "Digital Resource Disparity Rates", "Online Learning Barrier Patterns", "Connectivity Deficit Indicators", "Device Availability Failures"] },
								{ text: 'access', filterable: [], x: 470, y: 818, fontSize: 6, expandedX: -30, expandedY: 17, details: ["Technology Access Gap Metrics", "Digital Resource Disparity Rates", "Online Learning Barrier Patterns", "Connectivity Deficit Indicators", "Device Availability Failures"] }
							],
							[
								{ text: 'Traditional', filterable: [], x: 462, y: 838, fontSize: 6, expandedX: -30, expandedY: 20, details: ["Pedagogy Obsolescence Patterns", "Innovation Resistance Metrics", "Method Stagnation Rates", "Adaptation Deficit Indicators", "Teaching Rigidity Frequency"] },
								{ text: 'teaching', filterable: [], x: 462, y: 844, fontSize: 6, expandedX: -30, expandedY: 24, details: ["Pedagogy Obsolescence Patterns", "Innovation Resistance Metrics", "Method Stagnation Rates", "Adaptation Deficit Indicators", "Teaching Rigidity Frequency"] },
								{ text: 'methods', filterable: [], x: 462, y: 850, fontSize: 6, expandedX: -30, expandedY: 28, details: ["Pedagogy Obsolescence Patterns", "Innovation Resistance Metrics", "Method Stagnation Rates", "Adaptation Deficit Indicators", "Teaching Rigidity Frequency"] }
							],
							[
								{ text: 'Public vs', filterable: [], x: 440, y: 890, fontSize: 6, expandedX: -90, expandedY: -80, details: ["Resource Inequality Metrics", "Facility Disparity Patterns", "Quality Gap Indicators", "Performance Divide Rates", "Opportunity Differential Frequency"] },
								{ text: 'Private', filterable: [], x: 440, y: 896, fontSize: 6, expandedX: -90, expandedY: -76, details: ["Resource Inequality Metrics", "Facility Disparity Patterns", "Quality Gap Indicators", "Performance Divide Rates", "Opportunity Differential Frequency"] },
								{ text: 'contrast', filterable: [], x: 440, y: 902, fontSize: 6, expandedX: -90, expandedY: -72, details: ["Resource Inequality Metrics", "Facility Disparity Patterns", "Quality Gap Indicators", "Performance Divide Rates", "Opportunity Differential Frequency"] }
							],
						]
					],
				])
			]
		])
	],
	[
		Section.GOV,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Civil', filterable: [], x: 788, y: 810, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 60, details: ["Legal aid accessibility", "Rights awareness level", "Complaint resolution rate", "Minority rights protection", "Equal access measures"] },
								{ text: 'Rights', filterable: [], x: 788, y: 814, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 65, details: ["Legal aid accessibility", "Rights awareness level", "Complaint resolution rate", "Minority rights protection", "Equal access measures"] },
								{ text: 'Protection', filterable: [], x: 788, y: 818, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 70, details: ["Legal aid accessibility", "Rights awareness level", "Complaint resolution rate", "Minority rights protection", "Equal access measures"] }
							],
							[
								{ text: 'Public Service', filterable: [], x: 788, y: 829, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 85, details: ["Service center coverage", "Digital service availability", "Rural service reach", "Response time", "Service quality rating"] },
								{ text: 'Access', filterable: [], x: 788, y: 833, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 90, details: ["Service center coverage", "Digital service availability", "Rural service reach", "Response time", "Service quality rating"] },
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Administrative', filterable: [], x: 753, y: 844, fontSize: 5, expandedX: -45, expandedY: 100, details: ["Service efficiency level", "Staff response time", "Document processing speed", "Information accessibility", "Support service quality"] },
								{ text: 'Support', filterable: [], x: 768, y: 848, fontSize: 5, expandedX: -25, expandedY: 105, details: ["Service efficiency level", "Staff response time", "Document processing speed", "Information accessibility", "Support service quality"] }
							],
							[
								{ text: 'Legal', filterable: [], x: 760, y: 855, fontSize: 5, expandedX: -5, expandedY: -10, details: ["Court accessibility", "Legal service coverage", "Rights enforcement rate", "Justice system fairness", "Dispute resolution efficiency"] },
								{ text: 'Protection', filterable: [], x: 760, y: 860, fontSize: 5, expandedX: -30, expandedY: -5, details: ["Court accessibility", "Legal service coverage", "Rights enforcement rate", "Justice system fairness", "Dispute resolution efficiency"] },
								{ text: 'Systems', filterable: [], x: 760, y: 865, fontSize: 5, expandedX: -20, expandedY: 0, details: ["Court accessibility", "Legal service coverage", "Rights enforcement rate", "Justice system fairness", "Dispute resolution efficiency"] }
							],
							[
								{ text: 'Public', filterable: [], x: 732, y: 858, fontSize: 5, expandedX: -35, expandedY: 45, details: ["Service center coverage", "Response time efficiency", "Rural access rate", "Digital service availability", "Service quality rating"] },
								{ text: 'Service', filterable: [], x: 732, y: 863, fontSize: 5, expandedX: -35, expandedY: 50, details: ["Service center coverage", "Response time efficiency", "Rural access rate", "Digital service availability", "Service quality rating"] },
								{ text: 'Access', filterable: [], x: 732, y: 868, fontSize: 5, expandedX: -35, expandedY: 55, details: ["Service center coverage", "Response time efficiency", "Rural access rate", "Digital service availability", "Service quality rating"] }
							],
							[
								{ text: 'Service', filterable: [], x: 760, y: 875, fontSize: 5, expandedX: -15, expandedY: 10, details: ["Cross-agency coordination", "One-stop service centers", "Digital platform integration", "Information sharing level", "Service continuity rate"] },
								{ text: 'Integration', filterable: [], x: 760, y: 880, fontSize: 5, expandedX: -35, expandedY: 15, details: ["Cross-agency coordination", "One-stop service centers", "Digital platform integration", "Information sharing level", "Service continuity rate"] },
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Emergency', filterable: [], x: 705, y: 882, fontSize: 6, expandedX: -40, expandedY: 45, details: ["Response time", "Resource readiness", "Communication efficiency", "Community preparedness", "Recovery effectiveness"] },
								{ text: 'Management', filterable: [], x: 705, y: 888, fontSize: 6, expandedX: -40, expandedY: 50, details: ["Response time", "Resource readiness", "Communication efficiency", "Community preparedness", "Recovery effectiveness"] },
								{ text: 'Systems', filterable: [], x: 705, y: 894, fontSize: 6, expandedX: -40, expandedY: 55, details: ["Response time", "Resource readiness", "Communication efficiency", "Community preparedness", "Recovery effectiveness"] }
							],
							[
								{ text: 'Local', filterable: [], x: 771, y: 895, fontSize: 6, expandedX: -15, expandedY: -40, details: ["Information accessibility", "Decision process clarity", "Budget transparency", "Public reporting frequency", "Feedback response rate"] },
								{ text: 'Governance', filterable: [], x: 752, y: 901, fontSize: 6, expandedX: -30, expandedY: -35, details: ["Information accessibility", "Decision process clarity", "Budget transparency", "Public reporting frequency", "Feedback response rate"] },
								{ text: 'Transparency', filterable: [], x: 748, y: 907, fontSize: 6, expandedX: -35, expandedY: -30, details: ["Information accessibility", "Decision process clarity", "Budget transparency", "Public reporting frequency", "Feedback response rate"] }
							],
							[
								{ text: 'Local', filterable: [], x: 715, y: 905, fontSize: 6, expandedX: 25, expandedY: -10, details: ["Resource allocation efficiency", "Sustainable use rate", "Community participation", "Monitoring effectiveness", "Distribution fairness"] },
								{ text: 'Resource', filterable: [], x: 715, y: 911, fontSize: 6, expandedX: 5, expandedY: -5, details: ["Resource allocation efficiency", "Sustainable use rate", "Community participation", "Monitoring effectiveness", "Distribution fairness"] },
								{ text: 'Management', filterable: [], x: 715, y: 917, fontSize: 6, expandedX: -13, expandedY: 0, details: ["Resource allocation efficiency", "Sustainable use rate", "Community participation", "Monitoring effectiveness", "Distribution fairness"] }
							],
							[
								{ text: 'Public', filterable: [], x: 765, y: 920, fontSize: 6, expandedX: -15, expandedY: 40, details: ["Service quality rating", "Coverage effectiveness", "Response timeliness", "User satisfaction", "Access equality"] },
								{ text: 'Service', filterable: [], x: 765, y: 926, fontSize: 6, expandedX: -22, expandedY: 45, details: ["Service quality rating", "Coverage effectiveness", "Response timeliness", "User satisfaction", "Access equality"] },
								{ text: 'Delivery', filterable: [], x: 765, y: 932, fontSize: 6, expandedX: -25, expandedY: 50, details: ["Service quality rating", "Coverage effectiveness", "Response timeliness", "User satisfaction", "Access equality"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Policy', filterable: [], x: 670, y: 920, fontSize: 6, expandedX: 55, expandedY: -10, details: ["Execution efficiency", "Target achievement rate", "Resource allocation", "Monitoring effectiveness", "Feedback integration"] },
								{ text: 'Implementation', filterable: [], x: 670, y: 926, fontSize: 6, expandedX: 30, expandedY: -5, details: ["Execution efficiency", "Target achievement rate", "Resource allocation", "Monitoring effectiveness", "Feedback integration"] },
								{ text: 'Systems', filterable: [], x: 670, y: 932, fontSize: 6, expandedX: 45, expandedY: 0, details: ["Execution efficiency", "Target achievement rate", "Resource allocation", "Monitoring effectiveness", "Feedback integration"] }
							],
							[
								{ text: 'Anti-Corruption', filterable: [], x: 680, y: 945, fontSize: 6, expandedX: 25, expandedY: -60, details: ["Transparency level", "Reporting mechanism usage", "Investigation effectiveness", "Prevention system strength", "Public awareness level"] },
								{ text: 'Measures', filterable: [], x: 680, y: 951, fontSize: 6, expandedX: 25, expandedY: -56, details: ["Transparency level", "Reporting mechanism usage", "Investigation effectiveness", "Prevention system strength", "Public awareness level"] }
							],
							[
								{ text: 'Administrative', filterable: [], x: 710, y: 955, fontSize: 6, expandedX: -50, expandedY: -10, details: ["Service delivery speed", "Resource utilization", "Process streamlining", "Staff performance", "Digital system adoption"] },
								{ text: 'Efficiency', filterable: [], x: 710, y: 961, fontSize: 6, expandedX: -50, expandedY: -5, details: ["Service delivery speed", "Resource utilization", "Process streamlining", "Staff performance", "Digital system adoption"] }
							],
							[
								{ text: 'Decentralization', filterable: [], x: 740, y: 970, fontSize: 6, expandedX: -50, expandedY: 10, details: ["Local decision power", "Resource control level", "Service localization", "Capacity development", "Coordination efficiency"] },
								{ text: 'Effectiveness', filterable: [], x: 740, y: 976, fontSize: 6, expandedX: -30, expandedY: 14, details: ["Local decision power", "Resource control level", "Service localization", "Capacity development", "Coordination efficiency"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Quality of', filterable: [], x: 630, y: 963, fontSize: 7, expandedX: 100, expandedY: -80, details: ["Review effectiveness", "Compliance monitoring", "Public input integration", "Reform implementation", "Performance evaluation"] },
								{ text: 'Legislative', filterable: [], x: 630, y: 970, fontSize: 7, expandedX: 100, expandedY: -75, details: ["Review effectiveness", "Compliance monitoring", "Public input integration", "Reform implementation", "Performance evaluation"] },
								{ text: 'Oversight', filterable: [], x: 630, y: 977, fontSize: 7, expandedX: 100, expandedY: -70, details: ["Review effectiveness", "Compliance monitoring", "Public input integration", "Reform implementation", "Performance evaluation"] }
							],
							[
								{ text: 'Judicial Independence', filterable: [], x: 650, y: 988, fontSize: 7, expandedX: 20, expandedY: -60, details: ["Court autonomy level", "Decision enforcement rate", "Access to justice", "Case resolution speed", "Public trust rating"] },
								{ text: 'and Rule of Law', filterable: [], x: 650, y: 995, fontSize: 7, expandedX: 20, expandedY: -55, details: ["Court autonomy level", "Decision enforcement rate", "Access to justice", "Case resolution speed", "Public trust rating"] }
							],
							[
								{ text: 'Fiscal Accountability', filterable: [], x: 715, y: 998, fontSize: 7, expandedX: -70, expandedY: -30, details: ["Budget transparency level", "Audit compliance rate", "Public reporting frequency", "Fund utilization efficiency", "Oversight effectiveness"] },
								{ text: 'and Transparency', filterable: [], x: 715, y: 1005, fontSize: 7, expandedX: -70, expandedY: -25, details: ["Budget transparency level", "Audit compliance rate", "Public reporting frequency", "Fund utilization efficiency", "Oversight effectiveness"] }
							],
							[
								{ text: 'Long-Term', filterable: [], x: 725, y: 1020, fontSize: 7, expandedX: -20, expandedY: -20, details: ["Goal achievement rate", "Implementation progress", "Resource allocation", "Adaptation capability", "Monitoring effectiveness"] },
								{ text: 'Strategic Planning', filterable: [], x: 725, y: 1027, fontSize: 7, expandedX: -40, expandedY: -16, details: ["Goal achievement rate", "Implementation progress", "Resource allocation", "Adaptation capability", "Monitoring effectiveness"] }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Rights', filterable: [], x: 767, y: 1297, fontSize: 5, expandedX: -40, expandedY: -65, details: ["Protection Breach Patterns", "Legal Rights Infringement Metrics", "Basic Rights Denial Frequency", "Constitutional Violation Rates", "Liberty Restriction Indicators"] },
								{ text: 'Violation', filterable: [], x: 767, y: 1302, fontSize: 5, expandedX: -40, expandedY: -60, details: ["Protection Breach Patterns", "Legal Rights Infringement Metrics", "Basic Rights Denial Frequency", "Constitutional Violation Rates", "Liberty Restriction Indicators"] }
							],
							[
								{ text: 'Civic Rights', filterable: [], x: 760, y: 1284, fontSize: 5, expandedX: -40, expandedY: -95, details: ["Rights Limitation Patterns", "Freedom Restriction Metrics", "Civil Liberty Violation Rates", "Democratic Access Barriers", "Justice Denial Frequency"] },
								{ text: 'Suppression', filterable: [], x: 760, y: 1289, fontSize: 5, expandedX: -40, expandedY: -90, details: ["Rights Limitation Patterns", "Freedom Restriction Metrics", "Civil Liberty Violation Rates", "Democratic Access Barriers", "Justice Denial Frequency"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Service', filterable: [], x: 735, y: 1264, fontSize: 6, expandedX: 0, expandedY: -100, details: ["Integration Failure Patterns", "Coordination Gap Metrics", "System Disconnect Rates", "Service Coherence Deficits", "Unity Breakdown Indicators"] },
								{ text: 'Fragmentation', filterable: [], x: 735, y: 1270, fontSize: 6, expandedX: -30, expandedY: -95, details: ["Integration Failure Patterns", "Coordination Gap Metrics", "System Disconnect Rates", "Service Coherence Deficits", "Unity Breakdown Indicators"] },
							],
							[
								{ text: 'Legal', filterable: [], x: 737, y: 1242, fontSize: 6, expandedX: 15, expandedY: 0, details: ["Rights Defense Gap Metrics", "Legal Support Deficit Patterns", "Justice Access Barrier Rates", "Protection System Breakdown", "Advocacy Service Failures"] },
								{ text: 'Protection', filterable: [], x: 737, y: 1248, fontSize: 6, expandedX: -10, expandedY: 5, details: ["Rights Defense Gap Metrics", "Legal Support Deficit Patterns", "Justice Access Barrier Rates", "Protection System Breakdown", "Advocacy Service Failures"] },
								{ text: 'Failures', filterable: [], x: 737, y: 1254, fontSize: 6, expandedX: 0, expandedY: 10, details: ["Rights Defense Gap Metrics", "Legal Support Deficit Patterns", "Justice Access Barrier Rates", "Protection System Breakdown", "Advocacy Service Failures"] }
							],
							[
								{ text: 'Service', filterable: [], x: 766, y: 1230, fontSize: 6, expandedX: -70, expandedY: -30, details: ["Resource Availability Gaps", "Service Delivery Obstacles", "Access Limitation Patterns", "Support System Deficits", "Assistance Barrier Metrics"] },
								{ text: 'Access', filterable: [], x: 766, y: 1236, fontSize: 6, expandedX: -70, expandedY: -25, details: ["Resource Availability Gaps", "Service Delivery Obstacles", "Access Limitation Patterns", "Support System Deficits", "Assistance Barrier Metrics"] },
								{ text: 'Barriers', filterable: [], x: 766, y: 1242, fontSize: 6, expandedX: -70, expandedY: -20, details: ["Resource Availability Gaps", "Service Delivery Obstacles", "Access Limitation Patterns", "Support System Deficits", "Assistance Barrier Metrics"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Resource', filterable: [], x: 695, y: 1220, fontSize: 7, expandedX: -10, expandedY: -20, details: ["Allocation Error Patterns", "Resource Waste Metrics", "Distribution Failure Rates", "Management Deficit Indicators", "Utilization Gap Frequency"] },
								{ text: 'Mismanagement', filterable: [], x: 695, y: 1227, fontSize: 7, expandedX: -10, expandedY: -17, details: ["Allocation Error Patterns", "Resource Waste Metrics", "Distribution Failure Rates", "Management Deficit Indicators", "Utilization Gap Frequency"] }
							],
							[
								{ text: 'Emergency', filterable: [], x: 715, y: 1196, fontSize: 7, expandedX: 10, expandedY: 45, details: ["Response Time Delay Patterns", "Crisis Management Failures", "Emergency System Deficits", "Reaction Inadequacy Metrics", "Intervention Gap Frequency"] },
								{ text: 'Response', filterable: [], x: 715, y: 1203, fontSize: 7, expandedX: 17, expandedY: 48, details: ["Response Time Delay Patterns", "Crisis Management Failures", "Emergency System Deficits", "Reaction Inadequacy Metrics", "Intervention Gap Frequency"] },
								{ text: 'problems', filterable: [], x: 715, y: 1210, fontSize: 7, expandedX: 20, expandedY: 51, details: ["Response Time Delay Patterns", "Crisis Management Failures", "Emergency System Deficits", "Reaction Inadequacy Metrics", "Intervention Gap Frequency"] }
							],
							[
								{ text: 'Service', filterable: [], x: 757, y: 1185, fontSize: 7, expandedX: -40, expandedY: -40, details: ["Service Quality Gaps", "Delivery System Breakdowns", "Performance Deficit Metrics", "Implementation Error Rates", "Operation Failure Patterns"] },
								{ text: 'Delivery', filterable: [], x: 757, y: 1192, fontSize: 7, expandedX: -30, expandedY: -37, details: ["Service Quality Gaps", "Delivery System Breakdowns", "Performance Deficit Metrics", "Implementation Error Rates", "Operation Failure Patterns"] },
								{ text: 'Failures', filterable: [], x: 757, y: 1199, fontSize: 7, expandedX: -30, expandedY: -34, details: ["Service Quality Gaps", "Delivery System Breakdowns", "Performance Deficit Metrics", "Implementation Error Rates", "Operation Failure Patterns"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Bureaucratic', filterable: [], x: 657, y: 1180, fontSize: 7, expandedX: 15, expandedY: 20, details: ["Process Delay Patterns", "Administrative Failure Metrics", "System Response Gaps", "Operational Deficit Rates", "Service Delivery Barriers"] },
								{ text: 'Inefficiency', filterable: [], x: 657, y: 1187, fontSize: 7, expandedX: 30, expandedY: 24, details: ["Process Delay Patterns", "Administrative Failure Metrics", "System Response Gaps", "Operational Deficit Rates", "Service Delivery Barriers"] }
							],
							[
								{ text: 'Implementation', filterable: [], x: 690, y: 1160, fontSize: 7, expandedX: -30, expandedY: 0, details: ["Execution Deficit Patterns", "Policy Application Failures", "Program Delivery Gaps", "Implementation Delay Metrics", "Action Deficiency Rates"] },
								{ text: 'Gaps', filterable: [], x: 690, y: 1167, fontSize: 7, expandedX: -30, expandedY: 4, details: ["Execution Deficit Patterns", "Policy Application Failures", "Program Delivery Gaps", "Implementation Delay Metrics", "Action Deficiency Rates"] }
							],
							[
								{ text: 'Power', filterable: [], x: 735, y: 1142, fontSize: 7, expandedX: -25, expandedY: -20, details: ["Authority Imbalance Metrics", "Control Centralization Patterns", "Power Distribution Gaps", "Decision Access Barriers", "Influence Disparity Rates"] },
								{ text: 'Concentration', filterable: [], x: 735, y: 1149, fontSize: 7, expandedX: -40, expandedY: -16, details: ["Authority Imbalance Metrics", "Control Centralization Patterns", "Power Distribution Gaps", "Decision Access Barriers", "Influence Disparity Rates"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Injustice and', filterable: [], x: 735, y: 1100, fontSize: 7, expandedX: -40, expandedY: 20, details: ["Integrity Violation Patterns", "Accountability Gap Metrics", "Transparency Deficit Rates", "Fairness Breakdown Indicators", "Ethics Compliance Failures"] },
								{ text: 'Corruption', filterable: [], x: 735, y: 1107, fontSize: 7, expandedX: -40, expandedY: 25, details: ["Integrity Violation Patterns", "Accountability Gap Metrics", "Transparency Deficit Rates", "Fairness Breakdown Indicators", "Ethics Compliance Failures"] }
							],
							[
								{ text: 'Fiscal', filterable: [], x: 685, y: 1115, fontSize: 7, expandedX: 0, expandedY: 50, details: ["Financial Transparency Gaps", "Accountability Deficit Metrics", "Reporting Failure Patterns", "Disclosure Limitation Rates", "Oversight Gap Indicators"] },
								{ text: 'Opacity', filterable: [], x: 685, y: 1122, fontSize: 7, expandedX: 0, expandedY: 54, details: ["Financial Transparency Gaps", "Accountability Deficit Metrics", "Reporting Failure Patterns", "Disclosure Limitation Rates", "Oversight Gap Indicators"] }
							],
							[
								{ text: 'Short term', filterable: [], x: 640, y: 1145, fontSize: 7, expandedX: 70, expandedY: 70, details: ["Sustainability Deficit Patterns", "Long-term Planning Gaps", "Strategic Vision Failures", "Duration Inadequacy Metrics", "Permanence Limitation Rates"] },
								{ text: 'solutions', filterable: [], x: 640, y: 1152, fontSize: 7, expandedX: 70, expandedY: 74, details: ["Sustainability Deficit Patterns", "Long-term Planning Gaps", "Strategic Vision Failures", "Duration Inadequacy Metrics", "Permanence Limitation Rates"] }
							]
						]
					],
				])
			]
		])
	],
	[
		Section.SOC_1,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Voter', filterable: [], x: 792, y: 816, fontSize: 4, expandedX: 10, expandedY: 60, details: ["Voter registration rate", "Election turnout", "Rural voter access", "Voter education level", "Youth participation rate"] },
								{ text: 'Participation', filterable: [], x: 792, y: 820, fontSize: 4, expandedX: 10, expandedY: 65, details: ["Voter registration rate", "Election turnout", "Rural voter access", "Voter education level", "Youth participation rate"] }
							],
							[
								{ text: 'Social', filterable: [], x: 792, y: 827, fontSize: 4, expandedX: 5, expandedY: 95, details: ["Community service participation", "Environmental consciousness", "Traditional value preservation", "Public resource care", "Civic duty understanding"] },
								{ text: 'responsibility', filterable: [], x: 792, y: 831, fontSize: 4, expandedX: 5, expandedY: 100, details: ["Community service participation", "Environmental consciousness", "Traditional value preservation", "Public resource care", "Civic duty understanding"] },
								{ text: 'awareness', filterable: [], x: 792, y: 835, fontSize: 4, expandedX: 5, expandedY: 105, details: ["Community service participation", "Environmental consciousness", "Traditional value preservation", "Public resource care", "Civic duty understanding"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Family Support', filterable: [], x: 792, y: 850, fontSize: 5, expandedX: 0, expandedY: 40, details: ["Family benefit coverage", "Child support access", "Elderly care support", "Crisis assistance availability", "Family counseling access"] },
								{ text: 'Systems', filterable: [], x: 792, y: 855, fontSize: 5, expandedX: 0, expandedY: 45, details: ["Family benefit coverage", "Child support access", "Elderly care support", "Crisis assistance availability", "Family counseling access"] }
							],
							[
								{ text: 'Social', filterable: [], x: 795, y: 870, fontSize: 5, expandedX: 5, expandedY: 65, details: ["Program Coverage Rate", "Access Convenience Level", "Benefit Adequacy Score", "Service Response Time", "User Satisfaction Rate"] },
								{ text: 'Welfare', filterable: [], x: 795, y: 875, fontSize: 5, expandedX: 5, expandedY: 70, details: ["Program Coverage Rate", "Access Convenience Level", "Benefit Adequacy Score", "Service Response Time", "User Satisfaction Rate"] },
								{ text: 'Access', filterable: [], x: 795, y: 880, fontSize: 5, expandedX: 5, expandedY: 75, details: ["Program Coverage Rate", "Access Convenience Level", "Benefit Adequacy Score", "Service Response Time", "User Satisfaction Rate"] }
							],
							[
								{ text: 'Social', filterable: [], x: 825, y: 860, fontSize: 5, expandedX: 25, expandedY: 55, details: ["Insurance enrollment rate", "Pension coverage", "Disability support access", "Unemployment protection", "Vulnerable group support"] },
								{ text: 'Protection', filterable: [], x: 825, y: 865, fontSize: 5, expandedX: 25, expandedY: 60, details: ["Insurance enrollment rate", "Pension coverage", "Disability support access", "Unemployment protection", "Vulnerable group support"] },
								{ text: 'Coverage', filterable: [], x: 825, y: 870, fontSize: 5, expandedX: 25, expandedY: 65, details: ["Insurance enrollment rate", "Pension coverage", "Disability support access", "Unemployment protection", "Vulnerable group support"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Community', filterable: [], x: 793, y: 922, fontSize: 5, expandedX: 5, expandedY: -30, details: ["Project completion rate", "Community input level", "Resource utilization", "Maintenance quality", "Local needs alignment"] },
								{ text: 'Infrastructure', filterable: [], x: 793, y: 927, fontSize: 5, expandedX: 5, expandedY: -26, details: ["Project completion rate", "Community input level", "Resource utilization", "Maintenance quality", "Local needs alignment"] },
								{ text: 'Development', filterable: [], x: 793, y: 932, fontSize: 5, expandedX: 5, expandedY: -22, details: ["Project completion rate", "Community input level", "Resource utilization", "Maintenance quality", "Local needs alignment"] }
							],
							[
								{ text: 'Public Participation in', filterable: [], x: 792, y: 900, fontSize: 5, expandedX: 10, expandedY: 27, details: ["Meeting attendance rate", "Citizen proposal numbers", "Community vote participation", "Public hearing frequency", "Local budget input level"] },
								{ text: 'Local Governance', filterable: [], x: 792, y: 905, fontSize: 5, expandedX: 10, expandedY: 32, details: ["Meeting attendance rate", "Citizen proposal numbers", "Community vote participation", "Public hearing frequency", "Local budget input level"] }
							],
							[
								{ text: 'Collective', filterable: [], x: 850, y: 900, fontSize: 5, expandedX: 10, expandedY: 50, details: ["Community project success", "Group initiative rate", "Joint resource management", "Coordination effectiveness", "Community mobilization"] },
								{ text: 'action', filterable: [], x: 850, y: 905, fontSize: 5, expandedX: 10, expandedY: 55, details: ["Community project success", "Group initiative rate", "Joint resource management", "Coordination effectiveness", "Community mobilization"] },
								{ text: 'capacity', filterable: [], x: 850, y: 910, fontSize: 5, expandedX: 10, expandedY: 60, details: ["Community project success", "Group initiative rate", "Joint resource management", "Coordination effectiveness", "Community mobilization"] }
							],
							[
								{ text: 'Social', filterable: [], x: 827, y: 913, fontSize: 5, expandedX: -30, expandedY: 50, details: ["Community group membership", "Digital platform usage", "Local network strength", "Information flow rate", "Partnership effectiveness"] },
								{ text: 'network', filterable: [], x: 827, y: 918, fontSize: 5, expandedX: -30, expandedY: 55, details: ["Community group membership", "Digital platform usage", "Local network strength", "Information flow rate", "Partnership effectiveness"] },
								{ text: 'engagement', filterable: [], x: 827, y: 923, fontSize: 5, expandedX: -30, expandedY: 60, details: ["Community group membership", "Digital platform usage", "Local network strength", "Information flow rate", "Partnership effectiveness"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Social', filterable: [], x: 793, y: 960, fontSize: 6, expandedX: 5, expandedY: -90, details: ["Inter-group cooperation", "Cultural integration level","Community bond strength", "Shared activity participation", "Social conflict resolution"] },
								{ text: 'cohesion', filterable: [], x: 793, y: 966, fontSize: 6, expandedX: 5, expandedY: -85, details: ["Inter-group cooperation", "Cultural integration level","Community bond strength", "Shared activity participation", "Social conflict resolution"] },
								{ text: 'measures', filterable: [], x: 793, y: 972, fontSize: 6, expandedX: 5, expandedY: -80, details: ["Inter-group cooperation", "Cultural integration level","Community bond strength", "Shared activity participation", "Social conflict resolution"] }
							],
							[
								{ text: 'Minority', filterable: [], x: 826, y: 955, fontSize: 6, expandedX: -30, expandedY: 20, details: ["Equal access measures", "Cultural rights preservation", "Language support availability", "Representation level", "Anti-discrimination effectiveness"] },
								{ text: 'rights', filterable: [], x: 826, y: 961, fontSize: 6, expandedX: -30, expandedY: 25, details: ["Equal access measures", "Cultural rights preservation", "Language support availability", "Representation level", "Anti-discrimination effectiveness"] },
								{ text: 'protection', filterable: [], x: 826, y: 967, fontSize: 6, expandedX: -30, expandedY: 30, details: ["Equal access measures", "Cultural rights preservation", "Language support availability", "Representation level", "Anti-discrimination effectiveness"] }
							],
							[
								{ text: 'Public', filterable: [], x: 854, y: 940, fontSize: 6, expandedX: -50, expandedY: -25, details: ["Service satisfaction rate", "Policy approval level", "Leadership confidence", "Transparency perception", "Government responsiveness"] },
								{ text: 'Trust in', filterable: [], x: 854, y: 947, fontSize: 6, expandedX: -50, expandedY: -20, details: ["Service satisfaction rate", "Policy approval level", "Leadership confidence", "Transparency perception", "Government responsiveness"] },
								{ text: 'Governance', filterable: [], x: 854, y: 954, fontSize: 6, expandedX: -50, expandedY: -15, details: ["Service satisfaction rate", "Policy approval level", "Leadership confidence", "Transparency perception", "Government responsiveness"] }
							],
							[
								{ text: 'Civil', filterable: [], x: 883, y: 930, fontSize: 6, expandedX: -20, expandedY: 25, details: ["NGO activity level", "Volunteer participation rate", "Public forum attendance", "Civil initiative success", "Community project involvement"] },
								{ text: 'society', filterable: [], x: 883, y: 936, fontSize: 6, expandedX: -20, expandedY: 30, details: ["NGO activity level", "Volunteer participation rate", "Public forum attendance", "Civil initiative success", "Community project involvement"] },
								{ text: 'engagement', filterable: [], x: 883, y: 942, fontSize: 6, expandedX: -25, expandedY: 35, details: ["NGO activity level", "Volunteer participation rate", "Public forum attendance", "Civil initiative success", "Community project involvement"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'National', filterable: [], x: 795, y: 1010, fontSize: 6, expandedX: 0, expandedY: -120, details: ["Public forum frequency", "Multi-stakeholder engagement", "Consensus building success", "Communication effectiveness", "Resolution achievement rate"] },
								{ text: 'social', filterable: [], x: 795, y: 1016, fontSize: 6, expandedX: 0, expandedY: -115, details: ["Public forum frequency", "Multi-stakeholder engagement", "Consensus building success", "Communication effectiveness", "Resolution achievement rate"] },
								{ text: 'dialogue', filterable: [], x: 795, y: 1022, fontSize: 6, expandedX: 0, expandedY: -110, details: ["Public forum frequency", "Multi-stakeholder engagement", "Consensus building success", "Communication effectiveness", "Resolution achievement rate"] }
							],
							[
								{ text: 'Inclusivity in', filterable: [], x: 830, y: 1005, fontSize: 6, expandedX: -30, expandedY: -10, details: ["Stakeholder representation", "Public consultation rate", "Minority participation", "Gender balance level", "Regional input integration"] },
								{ text: 'National', filterable: [], x: 830, y: 1011, fontSize: 6, expandedX: -30, expandedY: -5, details: ["Stakeholder representation", "Public consultation rate", "Minority participation", "Gender balance level", "Regional input integration"] },
								{ text: 'Decision-Making', filterable: [], x: 830, y: 1017, fontSize: 6, expandedX: -30, expandedY: 0, details: ["Stakeholder representation", "Public consultation rate", "Minority participation", "Gender balance level", "Regional input integration"] }
							],
							[
								{ text: 'Social', filterable: [], x: 870, y: 990, fontSize: 6, expandedX: -70, expandedY: -50, details: ["Development goal achievement", "Resource distribution equity", "Social program coverage", "Implementation success", "Impact assessment rate"] },
								{ text: 'Development', filterable: [], x: 870, y: 997, fontSize: 6, expandedX: -70, expandedY: -45, details: ["Development goal achievement", "Resource distribution equity", "Social program coverage", "Implementation success", "Impact assessment rate"] },
								{ text: 'Framework', filterable: [], x: 870, y: 1004, fontSize: 6, expandedX: -70, expandedY: -40, details: ["Development goal achievement", "Resource distribution equity", "Social program coverage", "Implementation success", "Impact assessment rate"] }
							],
							[
								{ text: 'National', filterable: [], x: 910, y: 970, fontSize: 6, expandedX: -30, expandedY: -30, details: ["Regional balance measures", "Cultural integration level", "Economic equity rate", "Social mobility access", "Policy coverage effectiveness"] },
								{ text: 'Integration', filterable: [], x: 910, y: 977, fontSize: 6, expandedX: -30, expandedY: -25, details: ["Regional balance measures", "Cultural integration level", "Economic equity rate", "Social mobility access", "Policy coverage effectiveness"] },
								{ text: 'Policy', filterable: [], x: 910, y: 984, fontSize: 6, expandedX: -30, expandedY: -20, details: ["Regional balance measures", "Cultural integration level", "Economic equity rate", "Social mobility access", "Policy coverage effectiveness"] }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Voter', filterable: [], x: 792, y: 1278, fontSize: 5, expandedX: 10, expandedY: -90, details: ["Access Restriction Patterns", "Participation Barrier Metrics", "Registration Obstacle Rates", "Voting Right Violation Frequency", "Electoral Access Deficit Indicators"] },
								{ text: 'suppression', filterable: [], x: 792, y: 1283, fontSize: 5, expandedX: 10, expandedY: -85, details: ["Access Restriction Patterns", "Participation Barrier Metrics", "Registration Obstacle Rates", "Voting Right Violation Frequency", "Electoral Access Deficit Indicators"] }
							],
							[
								{ text: 'Social', filterable: [], x: 792, y: 1292, fontSize: 5, expandedX: 10, expandedY: -65, details: ["Civic Duty Neglect Patterns", "Community Engagement Deficits", "Social Obligation Failure Rates", "Responsibility Avoidance Metrics", "Public Participation Gaps"] },
								{ text: 'Respon', filterable: [], x: 792, y: 1297, fontSize: 5, expandedX: 10, expandedY: -60, details: ["Civic Duty Neglect Patterns", "Community Engagement Deficits", "Social Obligation Failure Rates", "Responsibility Avoidance Metrics", "Public Participation Gaps"] },
								{ text: 'sibility', filterable: [], x: 792, y: 1302, fontSize: 5, expandedX: 10, expandedY: -55, details: ["Civic Duty Neglect Patterns", "Community Engagement Deficits", "Social Obligation Failure Rates", "Responsibility Avoidance Metrics", "Public Participation Gaps"] },
								{ text: 'Gaps', filterable: [], x: 792, y: 1307, fontSize: 5, expandedX: 10, expandedY: -50, details: ["Civic Duty Neglect Patterns", "Community Engagement Deficits", "Social Obligation Failure Rates", "Responsibility Avoidance Metrics", "Public Participation Gaps"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Welfare', filterable: [], x: 795, y: 1230, fontSize: 5, expandedX: 0, expandedY: -80, details: ["Benefit Access Gap Patterns", "Aid Distribution Deficit Metrics", "Support Service Barriers", "Assistance Program Failures", "Resource Access Limitation Rates"] },
								{ text: 'Access', filterable: [], x: 795, y: 1235, fontSize: 5, expandedX: 0, expandedY: -75, details: ["Benefit Access Gap Patterns", "Aid Distribution Deficit Metrics", "Support Service Barriers", "Assistance Program Failures", "Resource Access Limitation Rates"] },
								{ text: 'Barriers', filterable: [], x: 795, y: 1240, fontSize: 5, expandedX: 0, expandedY: -70, details: ["Benefit Access Gap Patterns", "Aid Distribution Deficit Metrics", "Support Service Barriers", "Assistance Program Failures", "Resource Access Limitation Rates"] }
							],
							[
								{ text: 'Housing', filterable: [], x: 795, y: 1255, fontSize: 5, expandedX: 0, expandedY: -20, details: ["Accommodation Access Deficits", "Housing Support Gap Metrics", "Shelter Program Breakdown Rates", "Residence Assistance Failures", "Housing Solution Inadequacy"] },
								{ text: 'Program', filterable: [], x: 795, y: 1260, fontSize: 5, expandedX: 0, expandedY: -15, details: ["Accommodation Access Deficits", "Housing Support Gap Metrics", "Shelter Program Breakdown Rates", "Residence Assistance Failures", "Housing Solution Inadequacy"] },
								{ text: 'Failures', filterable: [], x: 795, y: 1265, fontSize: 5, expandedX: 0, expandedY: -10, details: ["Accommodation Access Deficits", "Housing Support Gap Metrics", "Shelter Program Breakdown Rates", "Residence Assistance Failures", "Housing Solution Inadequacy"] }
							],
							[
								{ text: 'Family', filterable: [], x: 825, y: 1250, fontSize: 5, expandedX: 10, expandedY: -60, details: ["Support System Failure Patterns", "Family Connection Deficit Metrics", "Parental Involvement Gaps", "Household Stability Decline Rates", "Care Network Disruption Frequency"] },
								{ text: 'Support', filterable: [], x: 825, y: 1255, fontSize: 5, expandedX: 10, expandedY: -55, details: ["Support System Failure Patterns", "Family Connection Deficit Metrics", "Parental Involvement Gaps", "Household Stability Decline Rates", "Care Network Disruption Frequency"] },
								{ text: 'Breakdown', filterable: [], x: 825	, y: 1260, fontSize: 5, expandedX: 10, expandedY: -50, details: ["Support System Failure Patterns", "Family Connection Deficit Metrics", "Parental Involvement Gaps", "Household Stability Decline Rates", "Care Network Disruption Frequency"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Infrastructure', filterable: [], x: 795, y: 1190, fontSize: 7, expandedX: 0, expandedY: -50, details: ["Development Delay Patterns", "Construction Deficit Metrics", "Planning Failure Rates", "Implementation Gap Frequency", "Project Completion Barriers"] },
								{ text: 'Development', filterable: [], x: 795, y: 1197, fontSize: 7, expandedX: 0, expandedY: -45, details: ["Development Delay Patterns", "Construction Deficit Metrics", "Planning Failure Rates", "Implementation Gap Frequency", "Project Completion Barriers"] },
								{ text: 'Gaps', filterable: [], x: 795, y: 1204, fontSize: 7, expandedX: 0, expandedY: -40, details: ["Development Delay Patterns", "Construction Deficit Metrics", "Planning Failure Rates", "Implementation Gap Frequency", "Project Completion Barriers"] }
							],
							[
								{ text: 'Participation', filterable: [], x: 825, y: 1210, fontSize: 7, expandedX: 10, expandedY: -20, details: ["Engagement Obstacle Patterns", "Access Restriction Metrics", "Involvement Deficit Rates", "Entry Limitation Frequency", "Inclusion Barrier Indicators"] },
								{ text: 'Barriers', filterable: [], x: 825, y: 1217, fontSize: 7, expandedX: 10, expandedY: -15, details: ["Engagement Obstacle Patterns", "Access Restriction Metrics", "Involvement Deficit Rates", "Entry Limitation Frequency", "Inclusion Barrier Indicators"] }
							],
							[
								{ text: 'Collective', filterable: [], x: 855, y: 1220, fontSize: 7, expandedX: -60, expandedY: 15, details: ["Group Coordination Deficits", "Community Response Gaps", "Collaboration Breakdown Metrics", "Joint Initiative Failures", "Unity Action Barriers"] },
								{ text: 'Action', filterable: [], x: 855, y: 1227, fontSize: 7, expandedX: -60, expandedY: 20, details: ["Group Coordination Deficits", "Community Response Gaps", "Collaboration Breakdown Metrics", "Joint Initiative Failures", "Unity Action Barriers"] },
								{ text: 'Failure', filterable: [], x: 855, y: 1234, fontSize: 7, expandedX: -60, expandedY: 25, details: ["Group Coordination Deficits", "Community Response Gaps", "Collaboration Breakdown Metrics", "Joint Initiative Failures", "Unity Action Barriers"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Social', filterable: [], x: 795, y: 1134, fontSize: 6, expandedX: 0, expandedY: -20, details: ["Community Division Patterns", "Social Cohesion Gaps", "Unity Breakdown Metrics", "Connection Loss Frequency", "Integration Failure Rates"] },
								{ text: 'Fragmentation', filterable: [], x: 795, y: 1140, fontSize: 6, expandedX: 0, expandedY: -15, details: ["Community Division Patterns", "Social Cohesion Gaps", "Unity Breakdown Metrics", "Connection Loss Frequency", "Integration Failure Rates"] }
							],
							[
								{ text: 'Minority', filterable: [], x: 815, y: 1155, fontSize: 6, expandedX: 20, expandedY: 30, details: ["Protection Failure Patterns", "Rights Infringement Metrics", "Discrimination Frequency Rates" , "Equality Gap Indicators", "Justice Access Barriers"] },
								{ text: 'Rights', filterable: [], x: 815, y: 1161, fontSize: 6, expandedX: 20, expandedY: 35, details: ["Protection Failure Patterns", "Rights Infringement Metrics", "Discrimination Frequency Rates" , "Equality Gap Indicators", "Justice Access Barriers"] },
								{ text: 'Violations', filterable: [], x: 815, y: 1167, fontSize: 6, expandedX: 20, expandedY: 40, details: ["Protection Failure Patterns", "Rights Infringement Metrics", "Discrimination Frequency Rates" , "Equality Gap Indicators", "Justice Access Barriers"] }
							],
							[
								{ text: 'Public', filterable: [], x: 855, y: 1150, fontSize: 6, expandedX: -60, expandedY: 70, details: ["Institutional Trust Erosion Patterns", "Confidence Loss Metrics", "Credibility Gap Indicators", "Faith Decline Frequency", "Trust Breakdown Rates"] },
								{ text: 'Trust', filterable: [], x: 855, y: 1157, fontSize: 6, expandedX: -60, expandedY: 75, details: ["Institutional Trust Erosion Patterns", "Confidence Loss Metrics", "Credibility Gap Indicators", "Faith Decline Frequency", "Trust Breakdown Rates"] },
								{ text: 'Deficit', filterable: [], x: 855, y: 1164, fontSize: 6, expandedX: -60, expandedY: 80, details: ["Institutional Trust Erosion Patterns", "Confidence Loss Metrics", "Credibility Gap Indicators", "Faith Decline Frequency", "Trust Breakdown Rates"] }
							],
							[
								{ text: 'Civil', filterable: [], x: 880, y: 1175, fontSize: 6, expandedX: -70, expandedY: -30, details: ["Civic Participation Decline Patterns", "Community Involvement Gaps", "Public Initiative Failure Rates", "Social Activity Deficit Metrics", "Engagement Breakdown Frequency"] },
								{ text: 'Society', filterable: [], x: 880, y: 1181, fontSize: 6, expandedX: -70, expandedY: -25, details: ["Civic Participation Decline Patterns", "Community Involvement Gaps", "Public Initiative Failure Rates", "Social Activity Deficit Metrics", "Engagement Breakdown Frequency"] },
								{ text: 'Disengagement', filterable: [], x: 880, y: 1187, fontSize: 6, expandedX: -70, expandedY: -20, details: ["Civic Participation Decline Patterns", "Community Involvement Gaps", "Public Initiative Failure Rates", "Social Activity Deficit Metrics", "Engagement Breakdown Frequency"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Social', filterable: [], x: 800, y: 1095, fontSize: 7, expandedX: 0, expandedY: 110, details: ["Communication Failure Metrics", "Dialogue Platform Gaps", "Engagement Deficit Patterns", "Discussion Barrier Rates", "Consensus Building Failures"] },
								{ text: 'Dialogue', filterable: [], x: 800, y: 1102, fontSize: 7, expandedX: 0, expandedY: 115, details: ["Communication Failure Metrics", "Dialogue Platform Gaps", "Engagement Deficit Patterns", "Discussion Barrier Rates", "Consensus Building Failures"] },
								{ text: 'Breakdown', filterable: [], x: 800, y: 1109, fontSize: 7, expandedX: 0, expandedY: 120, details: ["Communication Failure Metrics", "Dialogue Platform Gaps", "Engagement Deficit Patterns", "Discussion Barrier Rates", "Consensus Building Failures"] }
							],
							[
								{ text: 'Exclusionary,', filterable: [], x: 845, y: 1100, fontSize: 7, expandedX: -50, expandedY: -5, details: ["Participation Barrier Patterns", "Representation Gap Metrics", "Voice Suppression Rates", "Inclusion Deficit Indicators", "Stakeholder Access Failures"] },
								{ text: 'Decision-', filterable: [], x: 845, y: 1107, fontSize: 7, expandedX: -50, expandedY: 0, details: ["Participation Barrier Patterns", "Representation Gap Metrics", "Voice Suppression Rates", "Inclusion Deficit Indicators", "Stakeholder Access Failures"] },
								{ text: 'Making', filterable: [], x: 845, y: 1114, fontSize: 7, expandedX: -50, expandedY: 5, details: ["Participation Barrier Patterns", "Representation Gap Metrics", "Voice Suppression Rates", "Inclusion Deficit Indicators", "Stakeholder Access Failures"] }
							],
							[
								{ text: 'Development', filterable: [], x: 880, y: 1120, fontSize: 7, expandedX: -84, expandedY: 30, details: ["Planning Inadequacy Patterns", "Framework Execution Gaps", "Development Strategy Deficits", "Implementation Error Rates", "Structure Breakdown Metrics"] },
								{ text: 'Framework', filterable: [], x: 880, y: 1127, fontSize: 7, expandedX: -84, expandedY: 35, details: ["Planning Inadequacy Patterns", "Framework Execution Gaps", "Development Strategy Deficits", "Implementation Error Rates", "Structure Breakdown Metrics"] },
								{ text: 'Failure', filterable: [], x: 880, y: 1134, fontSize: 7, expandedX: -84, expandedY: 40, details: ["Planning Inadequacy Patterns", "Framework Execution Gaps", "Development Strategy Deficits", "Implementation Error Rates", "Structure Breakdown Metrics"] }
							],
							[
								{ text: 'Integration', filterable: [], x: 910, y: 1140, fontSize: 7, expandedX: -30, expandedY: 0, details: ["Policy Implementation Deficits", "Integration Framework Failures", "Coordination Breakdown Metrics", "Harmonization Failure Rates"] },
								{ text: 'Policy', filterable: [], x: 910, y: 1147, fontSize: 7, expandedX: -30, expandedY: 5, details: ["Policy Implementation Deficits", "Integration Framework Failures", "Coordination Breakdown Metrics", "Harmonization Failure Rates"] },
								{ text: 'Gaps', filterable: [], x: 910, y: 1154, fontSize: 7, expandedX: -30, expandedY: 10, details: ["Policy Implementation Deficits", "Integration Framework Failures", "Coordination Breakdown Metrics", "Harmonization Failure Rates"] }
							]
						]
					],
				])
			]
		])
	],
	[
		Section.EXT,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Healthcare', filterable: [], x: 800, y: 795, fontSize: 4, expandedX: 20, expandedY: 10, details: ["Distance to nearest clinic", "Healthcare cost affordability", "Emergency service access", "Mobile clinic coverage"] },
								{ text: 'Accessibility', filterable: [], x: 800, y: 799, fontSize: 4, expandedX: 20, expandedY: 15, details: ["Distance to nearest clinic", "Healthcare cost affordability", "Emergency service access", "Mobile clinic coverage"] }
							],
							[
								{ text: 'Clean', filterable: ['Inflation'], x: 825, y: 795, fontSize: 4, props: 'Inflation', expandedX: 85, expandedY: 10, details: ["Water source type", "Water quality testing", "Water storage methods", "Purification system", "Supply reliability"] },
								{ text: 'Water', filterable: ['Inflation'], x: 825, y: 799, fontSize: 4, props: 'Inflation', expandedX: 85, expandedY: 15, details: ["Water source type", "Water quality testing", "Water storage methods", "Purification system", "Supply reliability"] },
								{ text: 'Access', filterable: ['Inflation'], x: 825, y: 803, fontSize: 4, props: 'Inflation', expandedX: 85, expandedY: 20, details: ["Water source type", "Water quality testing", "Water storage methods", "Purification system", "Supply reliability"] }
							],
							[
								{ text: 'Air Quality', filterable: ['Inflation'], x: 815, y: 808, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 40, details: ["Indoor air quality level", "Heating method type", "Ventilation adequacy", "Air purifier usage"] },
								{ text: 'Exposure', filterable: ['Inflation'], x: 815, y: 812, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 45, details: ["Indoor air quality level", "Heating method type", "Ventilation adequacy", "Air purifier usage"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Health emergency', filterable: [], x: 842, y: 796, fontSize: 5, expandedX: -20, expandedY: 5, details: ["Emergency contact system", "First aid kit availability", "Distance to emergency services", "Transport access time"] },
								{ text: 'support', filterable: [], x: 842, y: 801, fontSize: 5, expandedX: -20, expandedY: 9, details: ["Emergency contact system", "First aid kit availability", "Distance to emergency services", "Transport access time"] }
							],
							[
								{ text: 'Environmental', filterable: [], x: 842, y: 810, fontSize: 5, expandedX: 40, expandedY: 8, details: ["Natural disaster risk level", "Air pollution exposure", "Water quality safety", "Soil contamination level", "Weather hazard protection"] },
								{ text: 'Safety', filterable: [], x: 842, y: 815, fontSize: 5, expandedX: 40, expandedY: 13, details: ["Natural disaster risk level", "Air pollution exposure", "Water quality safety", "Soil contamination level", "Weather hazard protection"] }
							],
							[
								{ text: 'Local Air Quality', filterable: [], x: 835, y: 823, fontSize: 5, expandedX: 20, expandedY: 20, details: ["PM2.5/PM10 levels", "Seasonal variation", "Industrial pollution level", "Vehicle emission density", "Dust storm frequency"] },
							],
							[
								{ text: 'Healthcare', filterable: [], x: 840, y: 832, fontSize: 5, expandedX: 40, expandedY: 28, details: ["Hospital bed availability", "Doctor-patient ratio", "Specialist availability", "Emergency response time", "Traditional medicine access"] },
								{ text: 'Service Access', filterable: [], x: 840, y: 837, fontSize: 5, expandedX: 40, expandedY: 33, details: ["Hospital bed availability", "Doctor-patient ratio", "Specialist availability", "Emergency response time", "Traditional medicine access"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Local Healthcare', filterable: [], x: 895, y: 800, fontSize: 5, expandedX: -65, expandedY: 5, details: ["Mobile health service coverage", "Emergency response time", "Basic health service access"] },
								{ text: 'Access', filterable: [], x: 895, y: 805, fontSize: 5, expandedX: -65, expandedY: 10, details: ["Mobile health service coverage", "Emergency response time", "Basic health service access"] }
							],
							[
								{ text: 'Environmental', filterable: [], x: 892, y: 820, fontSize: 5, expandedX: 0, expandedY: 5, details: ["Air quality tracking", "Water quality monitoring", "Soil condition assessment", "Weather pattern tracking", "Pollution level measurement"] },
								{ text: 'Monitoring', filterable: [], x: 896, y: 825, fontSize: 5, expandedX: 0, expandedY: 10, details: ["Air quality tracking", "Water quality monitoring", "Soil condition assessment", "Weather pattern tracking", "Pollution level measurement"] },
							],
							[
								{ text: 'Waste Management', filterable: [], x: 882, y: 840, fontSize: 5, expandedX: -5, expandedY: 15, details: ["Processing capacity", "Recycling infrastructure", "Landfill management", "Hazardous waste handling"] },
								{ text: 'Systems', filterable: [], x: 895, y: 845, fontSize: 5, expandedX: 10, expandedY: 20, details: ["Processing capacity", "Recycling infrastructure", "Landfill management", "Hazardous waste handling"] }
							],
							[
								{ text: 'Public Health', filterable: [], x: 880, y: 858, fontSize: 5, expandedX: 20, expandedY: 30, details: ["Hospital bed capacity", "Facility distribution", "Service quality standards"] },
								{ text: 'Facilities', filterable: [], x: 884, y: 864, fontSize: 5, expandedX: 20, expandedY: 35, details: ["Hospital bed capacity", "Facility distribution", "Service quality standards"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Climate Change', filterable: [], x: 942, y: 800, fontSize: 6, expandedX: -10, expandedY: 5, details: ["Weather resilience measures", "Disaster response systems", "Agricultural adaptation", "Infrastructure adjustment", "Resource management"] },
								{ text: 'Adaptation', filterable: [], x: 945, y: 806, fontSize: 6, expandedX: 0, expandedY: 10, details: ["Weather resilience measures", "Disaster response systems", "Agricultural adaptation", "Infrastructure adjustment", "Resource management"] }
							],
							[
								{ text: 'Pasturelands', filterable: ['Inflation'], x: 943, y: 820, fontSize: 6, expandedX: -88, expandedY: -19, details: ["Grazing rotation systems", "Vegetation quality", "Soil protection measures", "Water point distribution", "Carrying capacity monitoring"] },
								{ text: 'care', filterable: ['Inflation'], x: 952, y: 826, fontSize: 6, expandedX: -90, expandedY: -15, details: ["Grazing rotation systems", "Vegetation quality", "Soil protection measures", "Water point distribution", "Carrying capacity monitoring"] }
							],
							[
								{ text: 'Environmental', filterable: [], x: 935, y: 838, fontSize: 6, expandedX: -5, expandedY: 0, details: ["Protected area coverage", "Species preservation", "Habitat conservation", "Pollution control measures", "Resource use regulation"] },
								{ text: 'Protection', filterable: [], x: 935, y: 844, fontSize: 6, expandedX: -5, expandedY: 5, details: ["Protected area coverage", "Species preservation", "Habitat conservation", "Pollution control measures", "Resource use regulation"] },
								{ text: 'Measures', filterable: [], x: 935, y: 850, fontSize: 6, expandedX: -5, expandedY: 10, details: ["Protected area coverage", "Species preservation", "Habitat conservation", "Pollution control measures", "Resource use regulation"] }
							],
							[
								{ text: 'Healthcare', filterable: [], x: 930, y: 864, fontSize: 6, expandedX: -80, expandedY: -35, details: ["Medical staff qualification rates", "Equipment modernization level", "Patient satisfaction scores", "Treatment success rates", "Service accessibility level"] },
								{ text: 'System Quality', filterable: [], x: 922, y: 870, fontSize: 6, expandedX: -80, expandedY: -31, details: ["Medical staff qualification rates", "Equipment modernization level", "Patient satisfaction scores", "Treatment success rates", "Service accessibility level"] }
							],
							[
								{ text: 'Public Health', filterable: [], x: 915, y: 882, fontSize: 6, expandedX: -30, expandedY: -10, details: ["Insurance enrollment rate", "Service inclusion scope", "Rural coverage extent", "Preventive care access", "Emergency service availability"] },
								{ text: 'Coverage', filterable: [], x: 915, y: 888, fontSize: 6, expandedX: -30, expandedY: -5, details: ["Insurance enrollment rate", "Service inclusion scope", "Rural coverage extent", "Preventive care access", "Emergency service availability"] }
							],
							[
								{ text: 'Road Condition', filterable: [], x: 910, y: 900, fontSize: 6, expandedX: -5, expandedY: 0, details: ["Surface quality assessment", "Winter maintenance level", "Rural road accessibility", "Bridge infrastructure status", "Safety feature presence"] },
								{ text: 'Monitoring', filterable: [], x: 915, y: 906, fontSize: 6, expandedX: 0, expandedY: 5, details: ["Surface quality assessment", "Winter maintenance level", "Rural road accessibility", "Bridge infrastructure status", "Safety feature presence"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Environmental', filterable: [], x: 995, y: 800, fontSize: 5, expandedX: -115, expandedY: 2, details: ["Policy implementation rate", "Traditional practice integration", "Modern technology adoption", "Community readiness level", "Resource allocation efficiency"] },
								{ text: 'Policy', filterable: [], x: 995, y: 805, fontSize: 5, expandedX: -115, expandedY: 6, details: ["Policy implementation rate", "Traditional practice integration", "Modern technology adoption", "Community readiness level", "Resource allocation efficiency"] },
								{ text: 'Framework', filterable: [], x: 995, y: 810, fontSize: 5, expandedX: -115, expandedY: 10, details: ["Policy implementation rate", "Traditional practice integration", "Modern technology adoption", "Community readiness level", "Resource allocation efficiency"] }
							],
							[
								{ text: 'Sustainable', filterable: [], x: 995, y: 825, fontSize: 5, expandedX: -60, expandedY: 75, details: ["Herd size management", "Pasture rotation systems", "Animal health monitoring", "Traditional herding practices", "Modern technology integration"] },
								{ text: 'livestock', filterable: [], x: 995, y: 830, fontSize: 5, expandedX: -60, expandedY: 80, details: ["Herd size management", "Pasture rotation systems", "Animal health monitoring", "Traditional herding practices", "Modern technology integration"] },
								{ text: 'management', filterable: [], x: 995, y: 835, fontSize: 5, expandedX: -60, expandedY: 85, details: ["Herd size management", "Pasture rotation systems", "Animal health monitoring", "Traditional herding practices", "Modern technology integration"] },
								{ text: 'policies', filterable: [], x: 995, y: 840, fontSize: 5, expandedX: -60, expandedY: 90, details: ["Herd size management", "Pasture rotation systems", "Animal health monitoring", "Traditional herding practices", "Modern technology integration"] }
							],
							[
								{ text: 'Climate change', filterable: [], x: 985, y: 860, fontSize: 5, expandedX: -95, expandedY: 10, details: ["Percentage of planned policies actually implemented", "Number of successful programs launched", "Resource allocation effectiveness", "Timeline adherence", "Coverage of vulnerable areas"] },
								{ text: 'adaptation policies', filterable: [], x: 980, y: 865, fontSize: 5, expandedX: -95, expandedY: 14, details: ["Percentage of planned policies actually implemented", "Number of successful programs launched", "Resource allocation effectiveness", "Timeline adherence", "Coverage of vulnerable areas"] }
							],
							[
								{ text: 'National Health', filterable: [], x: 975, y: 880, fontSize: 5, expandedX: -20, expandedY: -66, details: ["Healthcare Facility Coverage", "Medical Staff Distribution", "Emergency Response Network", "Reliable Equipment Availability", "Infrastructure Quality"] },
								{ text: 'Infrastructure', filterable: [], x: 975, y: 885, fontSize: 5, expandedX: -20, expandedY: -61, details: ["Healthcare Facility Coverage", "Medical Staff Distribution", "Emergency Response Network", "Reliable Equipment Availability", "Infrastructure Quality"] }
							],
							[
								{ text: 'Хүн амын', filterable: [], x: 965, y: 900, fontSize: 5, expandedX: 10, expandedY: -50, details: ["Urban density rates", "Rural distribution", "Migration patterns", "Settlement patterns", ""] },
								{ text: 'нягтрал', filterable: [], x: 965, y: 905, fontSize: 5, expandedX: 10, expandedY: -45, details: ["Urban density rates", "Rural distribution", "Migration patterns", "Settlement patterns", ""] }
							],
							[
								{ text: 'Safe and Sustainable', filterable: [], x: 942, y: 925, fontSize: 5, expandedX: -75, expandedY: -90, details: ["Road quality standards", "Maintenance frequency", "Safety feature presence", "Weather resistance", "Traffic capacity management"] },
								{ text: 'Road Infrastructure', filterable: [], x: 942, y: 930, fontSize: 5, expandedX: -75, expandedY: -85, details: ["Road quality standards", "Maintenance frequency", "Safety feature presence", "Weather resistance", "Traffic capacity management"] },
								{ text: 'Development', filterable: [], x: 942, y: 935, fontSize: 5, expandedX: -75, expandedY: -80, details: ["Road quality standards", "Maintenance frequency", "Safety feature presence", "Weather resistance", "Traffic capacity management"] }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Poor Air Quality', filterable: [], x: 1275, y: 796, fontSize: 5, expandedX: -90, expandedY: 15, details: ["Pollutant Concentration Levels", "Particulate Matter Exposure", "Air Toxicity Measurements", "Ventilation Deficiency Patterns", "Contaminant Accumulation Rates"] },
								{ text: 'Exposure', filterable: [], x: 1275, y: 801, fontSize: 5, expandedX: -90, expandedY: 20, details: ["Pollutant Concentration Levels", "Particulate Matter Exposure", "Air Toxicity Measurements", "Ventilation Deficiency Patterns", "Contaminant Accumulation Rates"] }
							],
							[
								{ text: 'Access', filterable: [], x: 1280, y: 808, fontSize: 5, expandedX: -90, expandedY: 40, details: ["Here are 5 negative indicator titles for each:", "For 'Access Difficulties':", "Transportation Barrier Frequency", "Service Availability Gaps", "Resource Accessibility Failures", "Infrastructure Limitation Patterns", "Navigation Challenge Metrics"] },
								{ text: 'Difficulties', filterable: [], x: 1278, y: 813, fontSize: 5, expandedX: -90, expandedY: 45, details: ["Here are 5 negative indicator titles for each:", "For 'Access Difficulties':", "Transportation Barrier Frequency", "Service Availability Gaps", "Resource Accessibility Failures", "Infrastructure Limitation Patterns", "Navigation Challenge Metrics"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Poor', filterable: [], x: 1235, y: 815, fontSize: 7, expandedX: -56, expandedY: 5, details: ["Infrastructure Deterioration Metrics", "Maintenance Deficiency Patterns", "Quality Degradation Levels", "System Failure Frequency", "Structural Decline Indicators"] },
								{ text: 'conditions', filterable: [], x: 1235, y: 822, fontSize: 7, expandedX: -56, expandedY: 9, details: ["Infrastructure Deterioration Metrics", "Maintenance Deficiency Patterns", "Quality Degradation Levels", "System Failure Frequency", "Structural Decline Indicators"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Access', filterable: [], x: 1180, y: 800, fontSize: 6, fontWeight: 600, expandedX: -50, expandedY: 10, details: ["Distribution Gap Metrics", "Service Disparity Levels", "Resource Barrier Patterns", "Accessibility Deficit Rates", "Coverage Exclusion Frequency"] },
								{ text: 'inequalities', filterable: [], x: 1180, y: 806, fontSize: 6, fontWeight: 600, expandedX: -50, expandedY: 15, details: ["Distribution Gap Metrics", "Service Disparity Levels", "Resource Barrier Patterns", "Accessibility Deficit Rates", "Coverage Exclusion Frequency"] }
							],
							[
								{ text: 'Monitoring', filterable: [], x: 1180, y: 820, fontSize: 6, fontWeight: 600, expandedX: 25, expandedY: 10, details: ["Surveillance Gap Patterns", "Detection Error Frequency", "Tracking System Breakdowns", "Oversight Deficiency Rates", "Assessment Failure Metrics"] },
								{ text: 'Failures', filterable: [], x: 1180, y: 827, fontSize: 6, fontWeight: 600, expandedX: 25, expandedY: 15, details: ["Surveillance Gap Patterns", "Detection Error Frequency", "Tracking System Breakdowns", "Oversight Deficiency Rates", "Assessment Failure Metrics"] }
							],
							[
								{ text: 'System', filterable: [], x: 1190, y: 840, fontSize: 6, fontWeight: 600, expandedX: -50, expandedY: 10, details: ["Operational Breakdown Frequency", "Performance Error Patterns", "Function Disruption Metrics", "System Malfunction Rates", "Technical Failure Intensity"] },
								{ text: 'Failures', filterable: [], x: 1190, y: 847, fontSize: 6, fontWeight: 600, expandedX: -50, expandedY: 15, details: ["Operational Breakdown Frequency", "Performance Error Patterns", "Function Disruption Metrics", "System Malfunction Rates", "Technical Failure Intensity"] }
							],
							[
								{ text: 'Facility', filterable: [], x: 1200, y: 860, fontSize: 6, fontWeight: 600, expandedX: -45, expandedY: 30, details: ["Resource Deficit Metrics", "Capacity Gap Patterns", "Infrastructure Scarcity Rates", "Service Limitation Frequency", "Supply Inadequacy Levels"] },
								{ text: 'Shortages', filterable: [], x: 1200, y: 867, fontSize: 6, fontWeight: 600, expandedX: -45, expandedY: 35, details: ["Resource Deficit Metrics", "Capacity Gap Patterns", "Infrastructure Scarcity Rates", "Service Limitation Frequency", "Supply Inadequacy Levels"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Adaptation', filterable: [], x: 1130, y: 800, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 5, details: ["Implementation Deficit Patterns", "Response Inadequacy Metrics", "Adjustment Breakdown Rates", "Flexibility Failure Frequency", "Change Resistance Levels"] },
								{ text: 'Failures', filterable: [], x: 1135, y: 806, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 10, details: ["Implementation Deficit Patterns", "Response Inadequacy Metrics", "Adjustment Breakdown Rates", "Flexibility Failure Frequency", "Change Resistance Levels"] }
							],
							[
								{ text: 'Pastureland', filterable: [], x: 1130, y: 820, fontSize: 6, fontWeight: 600, expandedX: 50, expandedY: -10, details: ["Soil Quality Decline Metrics", "Vegetation Loss Patterns", "Grazing Pressure Intensity", "Erosion Damage Frequency", "Biodiversity Reduction Rates"] },
								{ text: 'degradation', filterable: [], x: 1130, y: 826, fontSize: 6, fontWeight: 600, expandedX: 50, expandedY: -5, details: ["Soil Quality Decline Metrics", "Vegetation Loss Patterns", "Grazing Pressure Intensity", "Erosion Damage Frequency", "Biodiversity Reduction Rates"] },
								{ text: 'factors', filterable: [], x: 1135, y: 832, fontSize: 6, fontWeight: 600, expandedX: 50, expandedY: 0, details: ["Soil Quality Decline Metrics", "Vegetation Loss Patterns", "Grazing Pressure Intensity", "Erosion Damage Frequency", "Biodiversity Reduction Rates"] }
							],
							[
								{ text: 'Protection', filterable: [], x: 1135, y: 845, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 0, details: ["Security Breach Patterns", "Safety Compliance Deficits", "Prevention System Breakdowns", "Risk Exposure Frequency", "Safeguard Failure Metrics"] },
								{ text: 'Failures', filterable: [], x: 1140, y: 851, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 5, details: ["Security Breach Patterns", "Safety Compliance Deficits", "Prevention System Breakdowns", "Risk Exposure Frequency", "Safeguard Failure Metrics"] }
							],
							[
								{ text: 'System', filterable: [], x: 1150, y: 865, fontSize: 6, fontWeight: 600, expandedX: 30, expandedY: -10, details: ["Infrastructure Gap Patterns", "Capacity Deficit Metrics", "Performance Failure Rates", "Operational Deficiency Levels", "Resource Limitation Frequency"] },
								{ text: 'Inadequacies', filterable: [], x: 1145, y: 871, fontSize: 6, fontWeight: 600, expandedX: 30, expandedY: -5, details: ["Infrastructure Gap Patterns", "Capacity Deficit Metrics", "Performance Failure Rates", "Operational Deficiency Levels", "Resource Limitation Frequency"] }
							],
							[
								{ text: 'Regional', filterable: [], x: 1160, y: 895, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -5, details: ["Growth Disparity Metrics", "Investment Deficit Patterns", "Progress Inequality Rates", "Development Lag Frequency", "Resource Distribution Gaps"] },
								{ text: 'Development', filterable: [], x: 1160, y: 901, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 0, details: ["Growth Disparity Metrics", "Investment Deficit Patterns", "Progress Inequality Rates", "Development Lag Frequency", "Resource Distribution Gaps"] },
								{ text: 'Gaps', filterable: [], x: 1168, y: 907, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 5, details: ["Growth Disparity Metrics", "Investment Deficit Patterns", "Progress Inequality Rates", "Development Lag Frequency", "Resource Distribution Gaps"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: "Environmental", filterable: [], x: 1077, y: 810, "fontSize": 6, expandedX: 10, expandedY: -5, details: ["Ecosystem Damage Metrics", "Resource Depletion Patterns","Habitat Loss Frequency", "Pollution Impact Levels", "Biodiversity Decline Rates"] },
								{ text: "degradation", filterable: [], x: 1080, y: 816, "fontSize": 6, expandedX: 10, expandedY: 0, details: ["Ecosystem Damage Metrics", "Resource Depletion Patterns","Habitat Loss Frequency", "Pollution Impact Levels", "Biodiversity Decline Rates"] }
							],
							[
								{ text: "Environmental", filterable: [], x: 1080, y: 840, "fontSize": 6, expandedX: 10, expandedY: 0, details: ["Risk Exposure Frequency", "Contamination Level Patterns", "Threat Occurrence Metrics", "Hazard Intensity Measures", "Safety Violation Rates"] },
								{ text: "Hazards", filterable: [], x: 1090, y: 846, "fontSize": 6, expandedX: 10, expandedY: 5, details: ["Risk Exposure Frequency", "Contamination Level Patterns", "Threat Occurrence Metrics", "Hazard Intensity Measures", "Safety Violation Rates"] }
							],
							[
								{ text: "Infrastructure", filterable: [], x: 1090, y: 875, "fontSize": 6, expandedX: 10, expandedY: 0, details: ["Facility Inadequacy Patterns", "System Failure Frequency", "Maintenance Gap Metrics", "Structural Deficiency Rates", "Service Limitation Levels"] },
								{ text: "Deficits", filterable: [], x: 1095, y: 881, "fontSize": 6, expandedX: 10, expandedY: 5, details: ["Facility Inadequacy Patterns", "System Failure Frequency", "Maintenance Gap Metrics", "Structural Deficiency Rates", "Service Limitation Levels"] }
							],
							[
								{ text: "Accident", filterable: [], x: 1115, y: 910, "fontSize": 7, expandedX: 10, expandedY: 0, details: ["Incident Frequency Patterns", "Severity Assessment Metrics", "Risk Factor Occurrence", "Safety Breach Frequency", "Casualty Rate IndicatorsRetry"] },
								{ text: "Analysis", filterable: [], x: 1115, y: 917, "fontSize": 7, expandedX: 10, expandedY: 5, details: ["Incident Frequency Patterns", "Severity Assessment Metrics", "Risk Factor Occurrence", "Safety Breach Frequency", "Casualty Rate IndicatorsRetry"] }
							]
						]
					],
				])
			]
		])
	],
	[
		Section.INT,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: "Personal", filterable: [], x: 805, y: 782, "fontSize": 5, expandedX: 25, expandedY: -15, details: ["Physical activity frequency", "Traditional diet adherence", "Sleep pattern regularity", "Preventive health checkups", "Stress management practices"] },
								{ text: "Health Habits", filterable: [], x: 805, y: 787, "fontSize": 5, expandedX: 25, expandedY: -10, details: ["Physical activity frequency", "Traditional diet adherence", "Sleep pattern regularity", "Preventive health checkups", "Stress management practices"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: "Home", filterable: [], x: 842, y: 775, "fontSize": 5, expandedX: -10, expandedY: -10, details: ["Living space adequacy", "Home safety measures"] },
								{ text: "Environment", filterable: [], x: 842, y: 780, "fontSize": 5, expandedX: -10, expandedY: -5, details: ["Living space adequacy", "Home safety measures"] },
								{ text: "Quality", filterable: [], x: 842, y: 785, "fontSize": 5, expandedX: -10, expandedY: 0, details: ["Living space adequacy", "Home safety measures"] }
							],
							[
								{ text: "Sustainable", filterable: [], x: 835, y: 755, "fontSize": 5, expandedX: 50, expandedY: -50, details: ["Energy consumption", "Water usage efficiency", "Eco-friendly product use", "Traditional conservation practices"] },
								{ text: "Household", filterable: [], x: 835, y: 760, "fontSize": 5, expandedX: 50, expandedY: -45, details: ["Energy consumption", "Water usage efficiency", "Eco-friendly product use", "Traditional conservation practices"] },
								{ text: "Habits", filterable: [], x: 835, y: 765, "fontSize": 5, expandedX: 50, expandedY: -40, details: ["Energy consumption", "Water usage efficiency", "Eco-friendly product use", "Traditional conservation practices"] }
							],
							[
								{ text: "Family", filterable: ['Inflation'], x: 855, y: 735, "fontSize": 5, expandedX: 45, expandedY: 3, details: ["Vaccination rates", "Traditional medicine use", "Family exercise habits", "Health education level", "Preventive care participation"] },
								{ text: "health", filterable: ['Inflation'], x: 855, y: 740, "fontSize": 5, expandedX: 45, expandedY: 8, details: ["Vaccination rates", "Traditional medicine use", "Family exercise habits", "Health education level", "Preventive care participation"] },
								{ text: "practices", filterable: ['Inflation'], x: 855, y: 745, "fontSize": 5, expandedX: 45, expandedY: 13, details: ["Vaccination rates", "Traditional medicine use", "Family exercise habits", "Health education level", "Preventive care participation"] }
							],
							[
								{ text: "Domestic", filterable: ['Inflation'], x: 862, y: 768, "fontSize": 5, expandedX: 50, expandedY: 4, details: ["Heating system type (central/coal/electric)", "Electricity reliability", "Water supply stability", "Waste disposal access"] },
								{ text: "utilities", filterable: ['Inflation'], x: 865, y: 773, "fontSize": 5, expandedX: 50, expandedY: 9, details: ["Heating system type (central/coal/electric)", "Electricity reliability", "Water supply stability", "Waste disposal access"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: "Local", filterable: [], x: 890, y: 710, "fontSize": 6, expandedX: 10, expandedY: -10, details: ["Green space maintenance", "Community cleanup participation","Local recycling programs", "Environmental education", "Sustainable herding practices"] },
								{ text: "Environmental", filterable: [], x: 870, y: 716, "fontSize": 6, expandedX: 10, expandedY: -6, details: ["Green space maintenance", "Community cleanup participation","Local recycling programs", "Environmental education", "Sustainable herding practices"] },
								{ text: "Initiatives", filterable: [], x: 880, y: 722, "fontSize": 6, expandedX: 10, expandedY: -6, details: ["Green space maintenance", "Community cleanup participation","Local recycling programs", "Environmental education", "Sustainable herding practices"] }
							],
							[
								{ text: "Community", filterable: [], x: 885, y: 735, "fontSize": 6, expandedX: 0, expandedY: -10, details: ["Community health event frequency", "Participation rates in health campaigns", "Traditional medicine practices", "Local health education programs", "Seasonal health initiative coverage"] },
								{ text: "Health Activities", filterable: [], x: 882, y: 741, "fontSize": 6, expandedX: 0, expandedY: -6, details: ["Community health event frequency", "Participation rates in health campaigns", "Traditional medicine practices", "Local health education programs", "Seasonal health initiative coverage"] }
							],
							[
								{ text: "Household", filterable: [], x: 890, y: 755, "fontSize": 6, expandedX: 0, expandedY: -10, details: ["Basic waste separation rate", "Recycling participation", "Composting practices", "Hazardous waste handling" ,"Reuse activities"] },
								{ text: "Waste Sorting", filterable: [], x: 890, y: 761, "fontSize": 6, expandedX: 0, expandedY: -6, details: ["Basic waste separation rate", "Recycling participation", "Composting practices", "Hazardous waste handling" ,"Reuse activities"] }
							],
							[
								{ text: "Neighbourhood", filterable: [], x: 890, y: 775, "fontSize": 6, expandedX: 0, expandedY: -10, details: ["Community cleaning frequency", "Green space maintenance", "Local safety measures", "Community support systems", "Shared facility upkeep"] },
								{ text: "Care", filterable: [], x: 905, y: 781, "fontSize": 6, expandedX: 0, expandedY: -6, details: ["Community cleaning frequency", "Green space maintenance", "Local safety measures", "Community support systems", "Shared facility upkeep"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: "Community", filterable: [], x: 910, y: 680, "fontSize": 7, expandedX: 10, expandedY: 0, details: ["Program effectiveness", "Resource allocation", "Implementation success", "Population reach"] },
								{ text: "Health", filterable: [], x: 915, y: 687, "fontSize": 7, expandedX: 10, expandedY: 5, details: ["Program effectiveness", "Resource allocation", "Implementation success", "Population reach"] },
								{ text: "Programs", filterable: [], x: 915, y: 694, "fontSize": 7, expandedX: 10, expandedY: 10, details: ["Program effectiveness", "Resource allocation", "Implementation success", "Population reach"] }
							],
							[
								{ text: "Green Space", filterable: [], x: 925, y: 710, "fontSize": 7, expandedX: 5, expandedY: 15, details: ["Public space activity frequency", "Green area maintenance hours", "Recreational program attendance"] },
								{ text: "Utilisation", filterable: [], x: 932, y: 717, "fontSize": 7, expandedX: 5, expandedY: 19, details: ["Public space activity frequency", "Green area maintenance hours", "Recreational program attendance"] }
							],
							[
								{ text: "Recycling", filterable: [], x: 940, y: 740, "fontSize": 7, expandedX: 0, expandedY: 20, details: ["Recycling collection volume", "Household participation rates", "Sorting accuracy percentage", "Collection point usage data", "Material recovery rates"] },
								{ text: "initiatives", filterable: [], x: 945, y: 747, "fontSize": 7, expandedX: 0, expandedY: 25, details: ["Recycling collection volume", "Household participation rates", "Sorting accuracy percentage", "Collection point usage data", "Material recovery rates"] }
							],
							[
								{ text: "Sustainable", filterable: [], x: 945, y: 771, "fontSize": 7, expandedX: -90, expandedY: -20, details: ["Renewable energy adoption rates", "Water consumption reduction", "Waste reduction per household", "Eco-product purchase rates", "Sustainable transport usage"] },
								{ text: "Living", filterable: [], x: 945, y: 778, "fontSize": 7, expandedX: -90, expandedY: -15, details: ["Renewable energy adoption rates", "Water consumption reduction", "Waste reduction per household", "Eco-product purchase rates", "Sustainable transport usage"] },
								{ text: "Practices", filterable: [], x: 945, y: 785, "fontSize": 7, expandedX: -90, expandedY: -10, details: ["Renewable energy adoption rates", "Water consumption reduction", "Waste reduction per household", "Eco-product purchase rates", "Sustainable transport usage"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: "Public", filterable: [], x: 950, y: 645, "fontSize": 7, expandedX: -65, expandedY: 65, details: ["Health education reach", "Prevention knowledge level", "Traditional medicine awareness", "Vaccination understanding", "Hygiene practice knowledge"] },
								{ text: "Health", filterable: [], x: 950, y: 652, "fontSize": 7, expandedX: -65, expandedY: 69, details: ["Health education reach", "Prevention knowledge level", "Traditional medicine awareness", "Vaccination understanding", "Hygiene practice knowledge"] },
								{ text: "Awareness", filterable: [], x: 950, y: 659, "fontSize": 7, expandedX: -65, expandedY: 73, details: ["Health education reach", "Prevention knowledge level", "Traditional medicine awareness", "Vaccination understanding", "Hygiene practice knowledge"] }
							],
							[
								{ text: "Energy", filterable: [], x: 970, y: 680, "fontSize": 7, expandedX: -35, expandedY: -20, details: ["Energy-saving practices", "Efficient heating adoption", "Traditional conservation methods", "Renewable energy usage", "Resource efficiency awareness"] },
								{ text: "Conservation", filterable: [], x: 970, y: 687, "fontSize": 7, expandedX: -35, expandedY: -16, details: ["Energy-saving practices", "Efficient heating adoption", "Traditional conservation methods", "Renewable energy usage", "Resource efficiency awareness"] },
								{ text: "Culture", filterable: [], x: 970, y: 694, "fontSize": 7, expandedX: -35, expandedY: -12, details: ["Energy-saving practices", "Efficient heating adoption", "Traditional conservation methods", "Renewable energy usage", "Resource efficiency awareness"] }
							],
							[
								{ text: "Waste", filterable: [], x: 985, y: 725, "fontSize": 7, expandedX: -20, expandedY: 10, details: ["Waste sorting practices", "Recycling participation", "Reuse behavior patterns", "Proper disposal methods", "Waste reduction awareness"] },
								{ text: "Management", filterable: [], x: 985, y: 732, "fontSize": 7, expandedX: -20, expandedY: 14, details: ["Waste sorting practices", "Recycling participation", "Reuse behavior patterns", "Proper disposal methods", "Waste reduction awareness"] },
								{ text: "Habits", filterable: [], x: 990, y: 739, "fontSize": 7, expandedX: -20, expandedY: 18, details: ["Waste sorting practices", "Recycling participation", "Reuse behavior patterns", "Proper disposal methods", "Waste reduction awareness"] }
							],
							[
								{ text: "Environmental", filterable: [], x: 989, y: 768, "fontSize": 7, expandedX: -115, expandedY: 5, details: ["School program coverage", "Public awareness levels", "Traditional knowledge integration", "Practical skill development", "Community engagement"] },
								{ text: "Education", filterable: [], x: 995, y: 775, "fontSize": 7, expandedX: -115, expandedY: 9, details: ["School program coverage", "Public awareness levels", "Traditional knowledge integration", "Practical skill development", "Community engagement"] }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: "Poor", filterable: [], x: 1295, y: 782, "fontSize": 6, expandedX: -40, expandedY: -20, details: ["Digital Dependency Patterns", "Nutritional Neglect Metrics", "Environmental Impact Behaviors", "Physical Deterioration Indicators", "Mental Wellness Disruptions"] },
								{ text: "health", filterable: [], x: 1295, y: 788, "fontSize": 6, expandedX: -40, expandedY: -16, details: ["Digital Dependency Patterns", "Nutritional Neglect Metrics", "Environmental Impact Behaviors", "Physical Deterioration Indicators", "Mental Wellness Disruptions"] },
								{ text: "habits", filterable: [], x: 1295, y: 795, "fontSize": 6, expandedX: -40, expandedY: -12, details: ["Digital Dependency Patterns", "Nutritional Neglect Metrics", "Environmental Impact Behaviors", "Physical Deterioration Indicators", "Mental Wellness Disruptions"] }
							],
							[
								{ text: "High", filterable: [], x: 1278, y: 772, "fontSize": 5, expandedX: -80, expandedY: -40, details: ["Excessive Resource Consumption", "Waste Generation Patterns", "Carbon Footprint Intensity", "Ecosystem Disruption Metrics", "Pollution Emission Levels"] },
								{ text: "Environmental", filterable: [], x: 1278, y: 777, "fontSize": 5, expandedX: -80, expandedY: -36, details: ["Excessive Resource Consumption", "Waste Generation Patterns", "Carbon Footprint Intensity", "Ecosystem Disruption Metrics", "Pollution Emission Levels"] },
								{ text: "Impact", filterable: [], x: 1278, y: 782, "fontSize": 5, expandedX: -80, expandedY: -32, details: ["Excessive Resource Consumption", "Waste Generation Patterns", "Carbon Footprint Intensity", "Ecosystem Disruption Metrics", "Pollution Emission Levels"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: "Poor Living", filterable: [], x: 1240, y: 740, "fontSize": 5, expandedX: -70, expandedY: -20, details: ["Housing Deterioration Metrics", "Overcrowding Intensity Levels", "Facility Malfunction Patterns", "Structural Deficiency Reports", "Sanitation Inadequacy Measures"] },
								{ text: "Conditions", filterable: [], x: 1240, y: 745, "fontSize": 5, expandedX: -70, expandedY: -16, details: ["Housing Deterioration Metrics", "Overcrowding Intensity Levels", "Facility Malfunction Patterns", "Structural Deficiency Reports", "Sanitation Inadequacy Measures"] }
							],
							[
								{ text: "Poor Health", filterable: [], x: 1238, y: 760, "fontSize": 5, expandedX: -80, expandedY: 0, details: ["Lifestyle Negligence Patterns", "Wellness Avoidance Behaviors", "Risk Activity Frequency", "Prevention Neglect Metrics", "Self-Care Deficiency Rates"] },
								{ text: "Habits", filterable: [], x: 1238, y: 765, "fontSize": 5, expandedX: -80, expandedY: 5, details: ["Lifestyle Negligence Patterns", "Wellness Avoidance Behaviors", "Risk Activity Frequency", "Prevention Neglect Metrics", "Self-Care Deficiency Rates"] }
							],
							[
								{ text: "Resource", filterable: [], x: 1230, y: 780, "fontSize": 5, expandedX: 0, expandedY: -10, details: ["Wastage Occurrence Patterns", "Utilization Failure Metrics", "Management Deficit Levels", "Distribution Loss Rates", "Allocation Inefficiency Index"] },
								{ text: "Inefficiency", filterable: [], x: 1230, y: 785, "fontSize": 5, expandedX: 0, expandedY: -5, details: ["Wastage Occurrence Patterns", "Utilization Failure Metrics", "Management Deficit Levels", "Distribution Loss Rates", "Allocation Inefficiency Index"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: "Initiative", filterable: [], x: 1210, y: 710, "fontSize": 6, expandedX: -50, expandedY: -30, details: ["Implementation Breakdown Patterns", "Project Abandonment Metrics", "Participation Decline Rates", "Engagement Deficit Levels", "Commitment Failure Frequency"] },
								{ text: "Failures", filterable: [], x: 1210, y: 716, "fontSize": 6, expandedX: -50, expandedY: -25, details: ["Implementation Breakdown Patterns", "Project Abandonment Metrics", "Participation Decline Rates", "Engagement Deficit Levels", "Commitment Failure Frequency"] }
							],
							[
								{ text: "Activity Gaps", filterable: [], x: 1195, y: 730, "fontSize": 6, expandedX: -60, expandedY: -10, details: ["Program Discontinuity Patterns", "Participation Void Metrics", "Engagement Deficiency Rates", "Activity Disruption Frequency", "Implementation Gap Measures"] },
							],
							[
								{ text: "Waste Sorting", filterable: [], x: 1185, y: 745, "fontSize": 6, expandedX: 10, expandedY: 0, details: ["Contamination Occurrence Rates", "Separation Error Frequency", "Collection Compliance Failures", "Sorting Deviation Patterns", "Classification Error Metrics"] },
								{ text: "Failures", filterable: [], x: 1185, y: 751, "fontSize": 6, expandedX: 10, expandedY: 5, details: ["Contamination Occurrence Rates", "Separation Error Frequency", "Collection Compliance Failures", "Sorting Deviation Patterns", "Classification Error Metrics"] }
							],
							[
								{ text: "Area", filterable: [], x: 1180, y: 765, "fontSize": 6, expandedX: -60, expandedY: -15, details: ["Upkeep Negligence Patterns", "Facility Deterioration Metrics", "Service Deficiency Rates", "Maintenance Delay Frequency", "Repair Backlog Indicators"] },
								{ text: "Maintenance", filterable: [], x: 1180, y: 771, "fontSize": 6, expandedX: -60, expandedY: -10, details: ["Upkeep Negligence Patterns", "Facility Deterioration Metrics", "Service Deficiency Rates", "Maintenance Delay Frequency", "Repair Backlog Indicators"] },
								{ text: "Issues", filterable: [], x: 1180, y: 777, "fontSize": 6, expandedX: -60, expandedY: -5, details: ["Upkeep Negligence Patterns", "Facility Deterioration Metrics", "Service Deficiency Rates", "Maintenance Delay Frequency", "Repair Backlog Indicators"] }
							]

						]
					],
					[
						4,
						[
							[
								{ text: "Number of", filterable: [], x: 1175, y: 690, "fontSize": 7, "textAnchor": "middle", expandedX: -10, expandedY: 0, details: ["Vegetation Deficit Metrics", "Coverage Inadequacy Rates", "Greenery Scarcity Patterns", "Space Limitation Frequency", "Distribution Gap Measures"] },
								{ text: "green space", filterable: [], x: 1175, y: 697, "fontSize": 7, "textAnchor": "middle", expandedX: -10, expandedY: 5, details: ["Vegetation Deficit Metrics", "Coverage Inadequacy Rates", "Greenery Scarcity Patterns", "Space Limitation Frequency", "Distribution Gap Measures"] }
							],
							[
								{ text: "Recycling", filterable: [], x: 1152, y: 730, "fontSize": 7, "textAnchor": "middle", expandedX: 60, expandedY: 10, details: ["Material Recovery Failures", "Sorting Compliance Deficits", "Collection Avoidance Patterns", "Processing Error Frequency", "Waste Diversion Failures"] },
								{ text: "Negligence", filterable: [], x: 1152, y: 737, "fontSize": 7, "textAnchor": "middle", expandedX: 60, expandedY: 15, details: ["Material Recovery Failures", "Sorting Compliance Deficits", "Collection Avoidance Patterns", "Processing Error Frequency", "Waste Diversion Failures"] }
							],
							[
								{ text: "Unsustainable", filterable: [], x: 1147, y: 765, "fontSize": 7, "textAnchor": "middle", expandedX: -10, expandedY: -10, details: ["Resource Depletion Patterns", "Environmental Impact Intensity", "Conservation Failure Metrics", "Ecological Damage Frequency", "Consumption Excess Rates"] },
								{ text: "Practices", filterable: [], x: 1147, y: 772, "fontSize": 7, "textAnchor": "middle", expandedX: -10, expandedY: -6, details: ["Resource Depletion Patterns", "Environmental Impact Intensity", "Conservation Failure Metrics", "Ecological Damage Frequency", "Consumption Excess Rates"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: "Health", filterable: [], x: 1135, y: 640, "fontSize": 7, expandedX: -5, expandedY: 10, details: ["Knowledge Deficit Patterns", "Information Access Barriers", "Understanding Failure Rates", "Education Disparity Metrics", "Awareness Limitation Levels"] },
								{ text: "Awareness", filterable: [], x: 1135, y: 647, "fontSize": 7, expandedX: -5, expandedY: 15, details: ["Knowledge Deficit Patterns", "Information Access Barriers", "Understanding Failure Rates", "Education Disparity Metrics", "Awareness Limitation Levels"] },
								{ text: "Gaps", filterable: [], x: 1135, y: 654, "fontSize": 7, expandedX: -5, expandedY: 20, details: ["Knowledge Deficit Patterns", "Information Access Barriers", "Understanding Failure Rates", "Education Disparity Metrics", "Awareness Limitation Levels"] }
							],
							[
								{ text: "Energy", filterable: [], x: 1110, y: 680, "fontSize": 7, expandedX: 80, expandedY: 50, details: ["Consumption Excess Patterns", "Efficiency Failure Metrics", "Usage Negligence Rates", "Conservation Deficit Levels", "Resource Misuse Frequency"] },
								{ text: "Waste", filterable: [], x: 1110, y: 687, "fontSize": 7, expandedX: 80, expandedY: 55, details: ["Consumption Excess Patterns", "Efficiency Failure Metrics", "Usage Negligence Rates", "Conservation Deficit Levels", "Resource Misuse Frequency"] },
								{ text: "Habits", filterable: [], x: 1110, y: 694, "fontSize": 7, expandedX: 80, expandedY: 60, details: ["Consumption Excess Patterns", "Efficiency Failure Metrics", "Usage Negligence Rates", "Conservation Deficit Levels", "Resource Misuse Frequency"] }
							],
							[
								{ text: "Poor Waste", filterable: [], x: 1085, y: 730, "fontSize": 7, expandedX: 10, expandedY: -25, details: ["Disposal Error Patterns", "Management Failure Metrics", "Contamination Frequency Rates", "Collection Negligence Levels", "Sorting Compliance Failures"] },
								{ text: "Practices", filterable: [], x: 1085, y: 737, "fontSize": 7, expandedX: 10, expandedY: -20, details: ["Disposal Error Patterns", "Management Failure Metrics", "Contamination Frequency Rates", "Collection Negligence Levels", "Sorting Compliance Failures"] }
							],
							[
								{ text: "Environmental", filterable: [], x: 1072, y: 765, "fontSize": 7, expandedX: 10, expandedY: -20, details: ["Knowledge Deficit Metrics", "Understanding Failure Rates", "Awareness Limitation Patterns", "Education Access Barriers", "Comprehension Gap Frequency"] },
								{ text: "Literacy", filterable: [], x: 1085, y: 772, "fontSize": 7, expandedX: -3, expandedY: -15, details: ["Knowledge Deficit Metrics", "Understanding Failure Rates", "Awareness Limitation Patterns", "Education Access Barriers", "Comprehension Gap Frequency"] },
								{ text: "Gaps", filterable: [], x: 1085, y: 779, "fontSize": 7, expandedX: -3, expandedY: -10, details: ["Knowledge Deficit Metrics", "Understanding Failure Rates", "Awareness Limitation Patterns", "Education Access Barriers", "Comprehension Gap Frequency"] }
							]
						]
					],
				])
			]
		])
	],
	[
		Section.PRIVATE,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: "Financial", filterable: ['Inflation'], x: 792, y: 750, "fontSize": 5, expandedX: 25, expandedY: -90, details: ["Formal Education", "Income lvl", "Job Stability", "Economic environment", "Financial Confidence", "Spending and Saving Habits", "Debt Management", "Retirement Planning"] },
								{ text: "literacy", filterable: ['Inflation'], x: 792, y: 755, "fontSize": 5, expandedX: 25, expandedY: -86, details: ["Formal Education", "Income lvl", "Job Stability", "Economic environment", "Financial Confidence", "Spending and Saving Habits", "Debt Management", "Retirement Planning"] }
							],
							[
								{ text: "Income", filterable: ['Inflation'], x: 792, y: 767, "fontSize": 5, expandedX: 15, expandedY: -60, details: ["Salary", "Side Hustles", "State Support Benefts", "Investment and Passive Income"] },
								{ text: "level", filterable: ['Inflation'], x: 792, y: 772, "fontSize": 5, expandedX: 15, expandedY: -56, details: ["Salary", "Side Hustles", "State Support Benefts", "Investment and Passive Income"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: "Emergency", filterable: ['Inflation'], x: 793, y: 700, "fontSize": 6, expandedX: 5, expandedY: -75, details: ["Ratio of savings to monthly expenses", "Ease of Accessing Funds", "Personal Budgeting", "Job Security and Income Stability"] },
								{ text: "fund", filterable: ['Inflation'], x: 793, y: 706, "fontSize": 6, expandedX: 5, expandedY: -71, details: ["Ratio of savings to monthly expenses", "Ease of Accessing Funds", "Personal Budgeting", "Job Security and Income Stability"] },
								{ text: "status", filterable: ['Inflation'], x: 793, y: 712, "fontSize": 6, expandedX: 5, expandedY: -67, details: ["Ratio of savings to monthly expenses", "Ease of Accessing Funds", "Personal Budgeting", "Job Security and Income Stability"] }
							],
							[
								{ text: "Combined", filterable: ['Inflation'], x: 793, y: 725, "fontSize": 6, expandedX: 5, expandedY: -45, details: ["Salary Wage earnings", "Income household members", "Freelance", "Investment and Interest Dividends", "Government Aid or Subsidies", "Seasonal Bonus income"] },
								{ text: "income", filterable: ['Inflation'], x: 793, y: 731, "fontSize": 6, expandedX: 5, expandedY: -41, details: ["Salary Wage earnings", "Income household members", "Freelance", "Investment and Interest Dividends", "Government Aid or Subsidies", "Seasonal Bonus income"] }
							],
							[
								{ text: "Insurance", filterable: ['Inflation'], x: 818, y: 710, "fontSize": 6, expandedX: 35, expandedY: -55, details: ["Financial and Credit factors", "Insurance Policy factors", "Risk factors", "External Environment factors"] },
								{ text: "coverage", filterable: ['Inflation'], x: 818, y: 716, "fontSize": 6, expandedX: 35, expandedY: -51, details: ["Financial and Credit factors", "Insurance Policy factors", "Risk factors", "External Environment factors"] }
							],
							[
								{ text: "Household", filterable: ['Inflation'], x: 825, y: 723, "fontSize": 6, expandedX: -15, expandedY: -15, details: ["Home ownership", "Real Estate", "Income and Earnings", "Saving and Investment Behavior", "Debt and Liability Management", "Household Expenses", "Cost of Living"] },
								{ text: "wealth", filterable: ['Inflation'], x: 825, y: 729, "fontSize": 6, expandedX: -15, expandedY: -11, details: ["Home ownership", "Real Estate", "Income and Earnings", "Saving and Investment Behavior", "Debt and Liability Management", "Household Expenses", "Cost of Living"] }
							],
							[
								{ text: "Property", filterable: ['Inflation'], x: 817, y: 737, "fontSize": 6, expandedX: -20, expandedY: 0, details: ["Real estate investments", "Rental properties", "Commercial spaces", "Land"] },
								{ text: "assets", filterable: ['Inflation'], x: 817, y: 743, "fontSize": 6, expandedX: -20, expandedY: 4, details: ["Real estate investments", "Rental properties", "Commercial spaces", "Land"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: "Employment", filterable: ['Inflation'], x: 793, y: 655, "fontSize": 7, expandedX: 5, expandedY: -40, details: ["Labor Force Participation", "Industry Growth or decline", "Market Demand", "Economic Cycle", "Workforce Education levels"] },
								{ text: "rate", filterable: ['Inflation'], x: 793, y: 662, "fontSize": 7, expandedX: 5, expandedY: -36, details: ["Labor Force Participation", "Industry Growth or decline", "Market Demand", "Economic Cycle", "Workforce Education levels"] }
							],
							[
								{ text: "Local market", filterable: ['Inflation'], x: 793, y: 677, "fontSize": 7, expandedX: 5, expandedY: 0, details: ["Consumer Purchasing Power", "Infrastructure", "Local Supply Chain Stability", "Business Sentiment"] },
								{ text: "vitality", filterable: ['Inflation'], x: 793, y: 684, "fontSize": 7, expandedX: 5, expandedY: 4, details: ["Consumer Purchasing Power", "Infrastructure", "Local Supply Chain Stability", "Business Sentiment"] }
							],
							[
								{ text: "Insurance", filterable: ['Inflation'], x: 844, y: 675, "fontSize": 7, expandedX: 15, expandedY: -35, details: ["Types of policies (health, life, property etc)", "Premiums and Deductible levels", "Policy Coverage Limits", "Claims process and insurer reputation", "Risk Assessments"] },
								{ text: "coverage", filterable: ['Inflation'], x: 844, y: 682, "fontSize": 7, expandedX: 15, expandedY: -31, details: ["Types of policies (health, life, property etc)", "Premiums and Deductible levels", "Policy Coverage Limits", "Claims process and insurer reputation", "Risk Assessments"] }
							],
							[
								{ text: "Access to", filterable: ['Inflation'], x: 850, y: 697, "fontSize": 7, expandedX: -50, expandedY: 30, details: ["Personal or Business Credit Score", "Collateral Requirements", "Debt-to-Income Ratio", "Interest Rate", "Lending Institution Criteria"] },
								{ text: "loan", filterable: ['Inflation'], x: 850, y: 704, "fontSize": 7, expandedX: -50, expandedY: 34, details: ["Personal or Business Credit Score", "Collateral Requirements", "Debt-to-Income Ratio", "Interest Rate", "Lending Institution Criteria"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: "Economic", filterable: ['Inflation'], x: 793, y: 600, "fontSize": 6, expandedX: 0, expandedY: -20, details: ["Job availibility across demographics", "Entrepreneurship Incentives", "Access to education", "Income equality measures", "Inclusive hiring policies", "Regional desparities"] },
								{ text: "opportunity", filterable: ['Inflation'], x: 793, y: 606, "fontSize": 6, expandedX: 0, expandedY: -15, details: ["Job availibility across demographics", "Entrepreneurship Incentives", "Access to education", "Income equality measures", "Inclusive hiring policies", "Regional desparities"] },
								{ text: "distribution", filterable: ['Inflation'], x: 793, y: 612, "fontSize": 6, expandedX: 0, expandedY: -10, details: ["Job availibility across demographics", "Entrepreneurship Incentives", "Access to education", "Income equality measures", "Inclusive hiring policies", "Regional desparities"] }
							],
							[
								{ text: "Industry", filterable: ['Inflation'], x: 810, y: 625, "fontSize": 6, expandedX: 50, expandedY: -10, details: ["Innovation and R&D Capacity", "Geographic concentration of related businesses", "Skilled Labor Pool", "Supplier Networks", "Competitive Advantage", "Government or Industry support"] },
								{ text: "clusters", filterable: ['Inflation'], x: 810, y: 632, "fontSize": 6, expandedX: 50, expandedY: -6, details: ["Innovation and R&D Capacity", "Geographic concentration of related businesses", "Skilled Labor Pool", "Supplier Networks", "Competitive Advantage", "Government or Industry support"] }
							],
							[
								{ text: "Sectoral", filterable: ['Inflation'], x: 840, y: 610, "fontSize": 6, expandedX: -45, expandedY: 40, details: ["GDP by sector", "Workforce distribution by sector", "Productivity lvls", "Technological adoption", "export vs domestic orientation", "Policy incentives"] },
								{ text: "contribution", filterable: ['Inflation'], x: 840, y: 616, "fontSize": 6, expandedX: -45, expandedY: 44, details: ["GDP by sector", "Workforce distribution by sector", "Productivity lvls", "Technological adoption", "export vs domestic orientation", "Policy incentives"] }
							],
							[
								{ text: "Urban-rural", filterable: ['Inflation'], x: 855, y: 635, "fontSize": 6, expandedX: -55, expandedY: 60, details: ["Flow of Goods and Services between Regions", "Migration Patterns", "Infrastucture", "Market integration and pricing", "Rural development programs", "Resource Distribution"] },
								{ text: "economic", filterable: ['Inflation'], x: 855, y: 641, "fontSize": 6, expandedX: -55, expandedY: 65, details: ["Flow of Goods and Services between Regions", "Migration Patterns", "Infrastucture", "Market integration and pricing", "Rural development programs", "Resource Distribution"] },
								{ text: "linkages", filterable: ['Inflation'], x: 855, y: 647, "fontSize": 6, expandedX: -55, expandedY: 70, details: ["Flow of Goods and Services between Regions", "Migration Patterns", "Infrastucture", "Market integration and pricing", "Rural development programs", "Resource Distribution"] }
							],
							[
								{ text: "Labor", filterable: ['Inflation'], x: 890, y: 654, "fontSize": 6, expandedX: -20, expandedY: -10, details: ["Workforce size and kill sets", "Wage lvl and Benefits", "Labor laws", "Industry shifts", "Unionization rate", "Employment/Unemployment trends"] },
								{ text: "markets", filterable: ['Inflation'], x: 890, y: 660, "fontSize": 6, expandedX: -20, expandedY: -5, details: ["Workforce size and kill sets", "Wage lvl and Benefits", "Labor laws", "Industry shifts", "Unionization rate", "Employment/Unemployment trends"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: "Inflation", filterable: ['Inflation'], x: 795, y: 575, "fontSize": 6, expandedX: 0, expandedY: 25, details: ["Money Supply Growth", "Aggregate demand vs supply", "Wage price spiral", "Exchange rate movemenths", "Commodity Prices", "Central Bank monetary policy"] },
								{ text: "rate", filterable: ['Inflation'], x: 795, y: 581, "fontSize": 6, expandedX: 0, expandedY: 30, details: ["Money Supply Growth", "Aggregate demand vs supply", "Wage price spiral", "Exchange rate movemenths", "Commodity Prices", "Central Bank monetary policy"] }
							],
							[
								{ text: "Foreign", filterable: ['Inflation'], x: 795, y: 550, "fontSize": 6, expandedX: 0, expandedY: 5, details: ["Business Climate", "Political and Economic Stability", "Infastucture", "Tax incentive and trade agreements"] },
								{ text: "direct", filterable: ['Inflation'], x: 795, y: 556, "fontSize": 6, expandedX: 0, expandedY: 10, details: ["Business Climate", "Political and Economic Stability", "Infastucture", "Tax incentive and trade agreements"] },
								{ text: "investment", filterable: ['Inflation'], x: 795, y: 562, "fontSize": 6, expandedX: 0, expandedY: 15, details: ["Business Climate", "Political and Economic Stability", "Infastucture", "Tax incentive and trade agreements"] }
							],
							[
								{ text: "Capital market", filterable: ['Inflation'], x: 832, y: 565, "fontSize": 6, expandedX: 30, expandedY: 55, details: ["Regulatory framework and investor protection", "Market Infrastructure", "Foreign investment inflows", "Corporate Governance Standarts"] },
								{ text: "development", filterable: ['Inflation'], x: 832, y: 571, "fontSize": 6, expandedX: 30, expandedY: 60, details: ["Regulatory framework and investor protection", "Market Infrastructure", "Foreign investment inflows", "Corporate Governance Standarts"] }
							],
							[
								{ text: "Market", filterable: ['Inflation'], x: 850, y: 584, "fontSize": 6, expandedX: -55, expandedY: 50, details: ["Number and size of market players", "Barriers to entry", "Antitrust Policies", "Prduct/Service Differentation", "Consumer choice and switching costs", "Innovation Dynamics"] },
								{ text: "competition", filterable: ['Inflation'], x: 850, y: 590, "fontSize": 6, expandedX: -55, expandedY: 55, details: ["Number and size of market players", "Barriers to entry", "Antitrust Policies", "Prduct/Service Differentation", "Consumer choice and switching costs", "Innovation Dynamics"] }
							],
							[
								{ text: "Mortgage", filterable: ['Inflation'], x: 885, y: 580, "fontSize": 6, expandedX: -20, expandedY: 5, details: ["Central Bank policy rates", "Credit Risk Assessments", "Housing demand and supply", "Mortgage backed securities market", "Regulatory limitation on lending"] },
								{ text: "rate", filterable: ['Inflation'], x: 885, y: 586, "fontSize": 6, expandedX: -20, expandedY: 10, details: ["Central Bank policy rates", "Credit Risk Assessments", "Housing demand and supply", "Mortgage backed securities market", "Regulatory limitation on lending"] }
							],
							[
								{ text: "Export", filterable: ['Inflation'], x: 900, y: 597, "fontSize": 6, expandedX: -105, expandedY: 75, details: ["Trade deficits or surplises", "key export import commodities", "Currency exchange rates", "Global supply chain factors", "Demostic production vs consumption patterns"] },
								{ text: "Import", filterable: ['Inflation'], x: 900, y: 603, "fontSize": 6, expandedX: -105, expandedY: 80, details: ["Trade deficits or surplises", "key export import commodities", "Currency exchange rates", "Global supply chain factors", "Demostic production vs consumption patterns"] },
								{ text: "Balance", filterable: ['Inflation'], x: 900, y: 609, "fontSize": 6, expandedX: -105, expandedY: 85, details: ["Trade deficits or surplises", "key export import commodities", "Currency exchange rates", "Global supply chain factors", "Demostic production vs consumption patterns"] }
							],
							[
								{ text: "Export", filterable: ['Inflation'], x: 925, y: 620, "fontSize": 6, expandedX: -75, expandedY: 40, details: ["Breadth of Export products", "Reliance on a few commedities vs multiple markets", "Resilience against global demands shifts", "Competitive advantages"] },
								{ text: "diversity", filterable: ['Inflation'], x: 925, y: 626, "fontSize": 6, expandedX: -75, expandedY: 45, details: ["Breadth of Export products", "Reliance on a few commedities vs multiple markets", "Resilience against global demands shifts", "Competitive advantages"] },
								{ text: "index", filterable: ['Inflation'], x: 925, y: 632, "fontSize": 6, expandedX: -75, expandedY: 50, details: ["Breadth of Export products", "Reliance on a few commedities vs multiple markets", "Resilience against global demands shifts", "Competitive advantages"] }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: "Debt-to-", filterable: ['Inflation'], x: 792, y: 275, "fontSize": 4, expandedX: 5, expandedY: 50, details: ["High Interest Rates", "Low or Stagnant Wages", "Excessive Consumer Debt", "Underemployment/Job Insecurity", "Cost of Living"] },
								{ text: "Income", filterable: ['Inflation'], x: 792, y: 280, "fontSize": 4, expandedX: 5, expandedY: 55, details: ["High Interest Rates", "Low or Stagnant Wages", "Excessive Consumer Debt", "Underemployment/Job Insecurity", "Cost of Living"] },
								{ text: "Ratio", filterable: ['Inflation'], x: 792, y: 285, "fontSize": 4, expandedX: 5, expandedY: 60, details: ["High Interest Rates", "Low or Stagnant Wages", "Excessive Consumer Debt", "Underemployment/Job Insecurity", "Cost of Living"] }
							],
							[
								{ text: "Financial", filterable: ['Inflation'], x: 802, y: 288, "fontSize": 4, expandedX: 25, expandedY: 70, details: ["Lack of Basic Education", "Cultural/Family Norms", "Misleading Marketing", "Digital Finance Complexity"] },
								{ text: "illiteracy", filterable: ['Inflation'], x: 802, y: 292, "fontSize": 4, expandedX: 25, expandedY: 75, details: ["Lack of Basic Education", "Cultural/Family Norms", "Misleading Marketing", "Digital Finance Complexity"] }
							],
							[
								{ text: "Income", filterable: ['Inflation'], x: 792, y: 295, "fontSize": 4, expandedX: 15, expandedY: 90, details: ["Limited Access to Quality Education", "Geographic Constraints", "High Cost of Higher Education", "Systemic Inequality/Discrimination", "Networking & Social Capital"] },
								{ text: "mobility", filterable: ['Inflation'], x: 792, y: 300, "fontSize": 4, expandedX: 15, expandedY: 95, details: ["Limited Access to Quality Education", "Geographic Constraints", "High Cost of Higher Education", "Systemic Inequality/Discrimination", "Networking & Social Capital"] },
								{ text: "barriers", filterable: ['Inflation'], x: 792, y: 305, "fontSize": 4, expandedX: 15, expandedY: 100, details: ["Limited Access to Quality Education", "Geographic Constraints", "High Cost of Higher Education", "Systemic Inequality/Discrimination", "Networking & Social Capital"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: "Income", filterable: ['Inflation'], x: 794, y: 335, "fontSize": 5, expandedX: 5, expandedY: 70, details: ["Seasonal/Contract Work", "Commission-Based Role", "Macro-Economic Shocks", "Frequent Job Hopping"] },
								{ text: "instability", filterable: ['Inflation'], x: 794, y: 340, "fontSize": 5, expandedX: 5, expandedY: 74, details: ["Seasonal/Contract Work", "Commission-Based Role", "Macro-Economic Shocks", "Frequent Job Hopping"] }
							],
							[
								{ text: "Asset", filterable: [], x: 825, y: 330, "fontSize": 5, expandedX: -10, expandedY: 40, details: ["Market Volatility", "Technological Obsolescence", "Neglected Maintenance", "Regulatory Changes"] },
								{ text: "depreciation", filterable: ['Inflation'], x: 825, y: 335, "fontSize": 5, expandedX: -10, expandedY: 44, details: ["Market Volatility", "Technological Obsolescence", "Neglected Maintenance", "Regulatory Changes"] }
							],
							[
								{ text: "Wealth", filterable: ['Inflation'], x: 810, y: 315, "fontSize": 5, expandedX: -10, expandedY: 12, details: ["Asset Value Drops", "Unexpected Expenses", "High Debt Servicing", "Poor Investment Decisions"] },
								{ text: "deterioration", filterable: ['Inflation'], x: 810, y: 320, "fontSize": 5, expandedX: -10, expandedY: 17, details: ["Asset Value Drops", "Unexpected Expenses", "High Debt Servicing", "Poor Investment Decisions"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: "Business", filterable: ['Inflation'], x: 794, y: 380, "fontSize": 6, expandedX: 5, expandedY: 40, details: ["Cash Flow Instability", "Rising Operational Costs", "Regulatory Burdens", "Market Competition"] },
								{ text: "sustainability", filterable: ['Inflation'], x: 794, y: 386, "fontSize": 6, expandedX: 5, expandedY: 45, details: ["Cash Flow Instability", "Rising Operational Costs", "Regulatory Burdens", "Market Competition"] },
								{ text: "risks", filterable: ['Inflation'], x: 794, y: 392, "fontSize": 6, expandedX: 5, expandedY: 50, details: ["Cash Flow Instability", "Rising Operational Costs", "Regulatory Burdens", "Market Competition"] }
							],
							[
								{ text: "Market", filterable: ['Inflation'], x: 835, y: 380, "fontSize": 6, expandedX: -35, expandedY: -60, details: ["Low Consumer Confidenc", "High Unemployment", "Overregulation", "Underdeveloped Sectors"] },
								{ text: "stagnation", filterable: ['Inflation'], x: 835, y: 386, "fontSize": 6, expandedX: -35, expandedY: -55, details: ["Low Consumer Confidenc", "High Unemployment", "Overregulation", "Underdeveloped Sectors"] }
							],
							[
								{ text: "Employment", filterable: ['Inflation'], x: 840, y: 355, "fontSize": 6, expandedX: -25, expandedY: 10, details: ["Structural Unemployment", "Long-Term Unemployment", "Discrimination", "Geographic Mismatch"] },
								{ text: "issues", filterable: ['Inflation'], x: 840, y: 361, "fontSize": 6, expandedX: 5, expandedY: 15, details: ["Structural Unemployment", "Long-Term Unemployment", "Discrimination", "Geographic Mismatch"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: "Imbalanced", filterable: ['Inflation'], x: 795, y: 425, "fontSize": 6, expandedX: 0, expandedY: -80, details: ["Unequal Resource Allocation", "Limited Accessibility", "Cultural/Systemic Barriers", "Information Asymmetry"] },
								{ text: "opportunity", filterable: ['Inflation'], x: 795, y: 431, "fontSize": 6, expandedX: 0, expandedY: -75, details: ["Unequal Resource Allocation", "Limited Accessibility", "Cultural/Systemic Barriers", "Information Asymmetry"] },
								{ text: "gaps", filterable: ['Inflation'], x: 795, y: 437, "fontSize": 6, expandedX: 0, expandedY: -70, details: ["Unequal Resource Allocation", "Limited Accessibility", "Cultural/Systemic Barriers", "Information Asymmetry"] }
							],
							[
								{ text: "Industrial", filterable: ['Inflation'], x: 830, y: 410, "fontSize": 6, expandedX: -30, expandedY: 0, details: ["Obsolete Technology", "Global Competition", "Lack of Skilled Workforce", "Environmental Regulations"] },
								{ text: "decline", filterable: ['Inflation'], x: 830, y: 416, "fontSize": 6, expandedX: -30, expandedY: 5, details: ["Obsolete Technology", "Global Competition", "Lack of Skilled Workforce", "Environmental Regulations"] }
							],
							[
								{ text: "Sector", filterable: ['Inflation'], x: 835, y: 430, "fontSize": 6, expandedX: -30, expandedY: 20, details: ["Lack of Innovation", "Capital Drough", "Declining Competitiveness", "Government Neglect"] },
								{ text: "stagnation", filterable: ['Inflation'], x: 835, y: 437, "fontSize": 6, expandedX: -30, expandedY: 25, details: ["Lack of Innovation", "Capital Drough", "Declining Competitiveness", "Government Neglect"] }
							],
							[
								{ text: "Urban-rural", filterable: ['Inflation'], x: 880, y: 385, "fontSize": 6, expandedX: -40, expandedY: -5, details: ["Concentration of Services in Cities", "Outmigration", "Agricultural Reliance", "Infrastructure Lag"] },
								{ text: "divide", filterable: ['Inflation'], x: 880, y: 391, "fontSize": 6, expandedX: -40, expandedY: 0, details: ["Concentration of Services in Cities", "Outmigration", "Agricultural Reliance", "Infrastructure Lag"] }
							],
							[
								{ text: "Labor", filterable: ['Inflation'], x: 870, y: 410, "fontSize": 6, expandedX: 20, expandedY: 0, details: ["Skill Mismatch", "Low Labor Force Participation", "Rigid Wage/Employment Laws", "Informal Sector Growth"] },
								{ text: "market", filterable: ['Inflation'], x: 870, y: 416, "fontSize": 6, expandedX: 20, expandedY: 5, details: ["Skill Mismatch", "Low Labor Force Participation", "Rigid Wage/Employment Laws", "Informal Sector Growth"] },
								{ text: "dysfunction", filterable: ['Inflation'], x: 870, y: 422, "fontSize": 6, expandedX: 10, expandedY: 10, details: ["Skill Mismatch", "Low Labor Force Participation", "Rigid Wage/Employment Laws", "Informal Sector Growth"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: "Inflation", filterable: ['Inflation'], x: 795, y: 470, "fontSize": 6, expandedX: 0, expandedY: -110, details: ["Excessive Money Supply", "Supply Chain Disruption", "Commodity Price Shocks", "Lack of Monetary Policy Control"] },
								{ text: "instability", filterable: ['Inflation'], x: 795, y: 476, "fontSize": 6, expandedX: 0, expandedY: -105, details: ["Excessive Money Supply", "Supply Chain Disruption", "Commodity Price Shocks", "Lack of Monetary Policy Control"] }
							],
							[
								{ text: "Misuse of ", filterable: ['Inflation'], x: 795, y: 490, "fontSize": 6, expandedX: 0, expandedY: -10, details: ["Unproductive Projects", "Political Agendas", "Corruption/Kickbacks", "Inefficient Resource Allocation"] },
								{ text: "investment", filterable: ['Inflation'], x: 795, y: 496, "fontSize": 6, expandedX: 0, expandedY: -5, details: ["Unproductive Projects", "Political Agendas", "Corruption/Kickbacks", "Inefficient Resource Allocation"] }
							],
							[
								{ text: "Market under-", filterable: ['Inflation'], x: 835, y: 485, "fontSize": 6, expandedX: -35, expandedY: -60, details: ["Limited Capital Markets", "Weak Investor Confidence", "Informal Economy Dominance", "Lack of Infrastructure"] },
								{ text: "development", filterable: ['Inflation'], x: 835, y: 491, "fontSize": 6, expandedX: -35, expandedY: -55, details: ["Limited Capital Markets", "Weak Investor Confidence", "Informal Economy Dominance", "Lack of Infrastructure"] }
							],
							[
								{ text: "Export", filterable: ['Inflation'], x: 840, y: 460, "fontSize": 6, expandedX: 20, expandedY: -5, details: ["Reliance on Single Commodity/Industry", "Lack of Diversification Strategy", "Price Volatility", "Foreign Market Access"] },
								{ text: "concentration", filterable: ['Inflation'], x: 840, y: 466, "fontSize": 6, expandedX: 2, expandedY: 0, details: ["Reliance on Single Commodity/Industry", "Lack of Diversification Strategy", "Price Volatility", "Foreign Market Access"] },
							],
							[
								{ text: "Mortgage", filterable: ['Inflation'], x: 890, y: 450, "fontSize": 6, expandedX: -40, expandedY: -60, details: ["Subprime Lending", "Housing Price Bubble", "Foreclosure Surges", "Underwriting Lapses"] },
								{ text: "market", filterable: ['Inflation'], x: 890, y: 456, "fontSize": 6, expandedX: -40, expandedY: -55, details: ["Subprime Lending", "Housing Price Bubble", "Foreclosure Surges", "Underwriting Lapses"] },
								{ text: "failure", filterable: ['Inflation'], x: 890, y: 462, "fontSize": 6, expandedX: -40, expandedY: -50, details: ["Subprime Lending", "Housing Price Bubble", "Foreclosure Surges", "Underwriting Lapses"] }
							],
							[
								{ text: "Trade", filterable: ['Inflation'], x: 920, y: 430, "fontSize": 6, expandedX: -20, expandedY: -10, details: ["High Import Dependence", "Weak Export Competitiveness", "Currency Fluctuations", "Trade Barriers"] },
								{ text: "imbalance", filterable: ['Inflation'], x: 920, y: 436, "fontSize": 6, expandedX: -20, expandedY: -5, details: ["High Import Dependence", "Weak Export Competitiveness", "Currency Fluctuations", "Trade Barriers"] },
							]
						]
					],
				])
			]
		])
	]
])