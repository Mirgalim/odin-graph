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
								{ text: 'Self', filterable: [], x: 750, y: 767, fontSize: 4, expandedX: -90, expandedY: -50, details: ["test1", "test2"] },
								{ text: 'expression', filterable: [], x: 747, y: 771, fontSize: 4, expandedX: -90, expandedY: -46, details: ["test1", "test2"] }
							],
							[
								{ text: 'Free', filterable: [], x: 747, y: 782, fontSize: 4, expandedX: -100, expandedY: -25, details: ["test1", "test2"] },
								{ text: 'thinking', filterable: [], x: 745, y: 786, fontSize: 4, expandedX: -100, expandedY: -21, details: ["test1", "test2"] }
							],
							[
								{ text: 'EQ', filterable: [], x: 767, y: 786, fontSize: 7, expandedX: -30, expandedY: -10, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Digital', filterable: [], x: 715, y: 740, fontSize: 6, expandedX: -70, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'literacy', filterable: [], x: 715, y: 746, fontSize: 6, expandedX: -70, expandedY: -26, details: ["test1", "test2"] }
							],
							[
								{ text: 'Parental', filterable: [], x: 710, y: 760, fontSize: 6, expandedX: -15, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'engagement', filterable: [], x: 710, y: 766, fontSize: 6, expandedX: -15, expandedY: -1, details: ["test1", "test2"] }
							],
							[
								{ text: 'Family', filterable: [], x: 705, y: 779, fontSize: 6, expandedX: -80, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'traditions', filterable: [], x: 705, y: 785, fontSize: 6, expandedX: -80, expandedY: -16, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Social and', filterable: [], x: 670, y: 710, fontSize: 6, expandedX: -45, expandedY: -15, details: ["test1", "test2"] },
								{ text: 'Recreational', filterable: [], x: 670, y: 716, fontSize: 6, expandedX: -45, expandedY: -11, details: ["test1", "test2"] },
								{ text: 'opportunities', filterable: [], x: 670, y: 722, fontSize: 6, expandedX: -45, expandedY: -7, details: ["test1", "test2"] }
							],
							[
								{ text: 'Community', filterable: [], x: 658, y: 735, fontSize: 6, expandedX: 5, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'participation', filterable: [], x: 658, y: 741, fontSize: 6, expandedX: 5, expandedY: 9, details: ["test1", "test2"] }
							],
							[
								{ text: 'Community', filterable: [], x: 655, y: 755, fontSize: 6, expandedX: -55, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'forums', filterable: [], x: 655, y: 761, fontSize: 6, expandedX: -55, expandedY: 9, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 655, y: 775, fontSize: 6, expandedX: 25, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'Integration', filterable: [], x: 650, y: 781, fontSize: 6, expandedX: 25, expandedY: -1, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'General', filterable: [], x: 630, y: 690, fontSize: 6, expandedX: -25, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Connection', filterable: [], x: 630, y: 696, fontSize: 6, expandedX: -25, expandedY: -15, details: ["test1", "test2"] }
							],
							[
								{ text: 'Civil society', filterable: [], x: 620, y: 715, fontSize: 6, expandedX: 0, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'strength', filterable: [], x: 620, y: 721, fontSize: 6, expandedX: 0, expandedY: -5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Cultural heritage', filterable: [], x: 600, y: 740, fontSize: 6, expandedX: -20, expandedY: 15, details: ["test1", "test2"] },
								{ text: 'preservation', filterable: [], x: 600, y: 746, fontSize: 6, expandedX: -20, expandedY: 19, details: ["test1", "test2"] }
							],
							[
								{ text: 'Inclusive', filterable: [], x: 605, y: 765, fontSize: 6, expandedX: 70, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'culture', filterable: [], x: 605, y: 771, fontSize: 6, expandedX: 70, expandedY: -1, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Social', filterable: [], x: 555, y: 760, fontSize: 7, expandedX: 90, expandedY: -15, details: ["test1", "test2"] },
								{ text: 'Development', filterable: [], x: 545, y: 767, fontSize: 7, expandedX: 90, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'Balance', filterable: [], x: 553, y: 774, fontSize: 7, expandedX: 90, expandedY: -5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 565, y: 705, fontSize: 7, expandedX: 0, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'Cohesion', filterable: [], x: 560, y: 712, fontSize: 7, expandedX: 0, expandedY: 35, details: ["test1", "test2"] },
								{ text: 'Framework', filterable: [], x: 560, y: 719, fontSize: 7, expandedX: 0, expandedY: 40, details: ["test1", "test2"] }
							],
							[
								{ text: 'National', filterable: [], x: 595, y: 650, fontSize: 7, expandedX: -5, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'identity', filterable: [], x: 595, y: 657, fontSize: 7, expandedX: -5, expandedY: 35, details: ["test1", "test2"] },
								{ text: 'strength', filterable: [], x: 595, y: 664, fontSize: 7, expandedX: -5, expandedY: 40, details: ["test1", "test2"] }
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
								{ text: 'Lack of self', filterable: [], x: 273, y: 780, fontSize: 6, expandedX: 60, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'identity', filterable: [], x: 278, y: 786, fontSize: 6, expandedX: 60, expandedY: -26, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Lack of', filterable: [], x: 310, y: 745, fontSize: 7, expandedX: 40, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'parental', filterable: [], x: 310, y: 752, fontSize: 7, expandedX: 40, expandedY: -26, details: ["test1", "test2"] },
								{ text: 'participation', filterable: [], x: 310, y: 759, fontSize: 7, expandedX: 40, expandedY: -22, details: ["test1", "test2"] }
							],
							[
								{ text: 'Limited', filterable: [], x: 320, y: 778, fontSize: 7, expandedX: 40, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'access', filterable: [], x: 320, y: 785, fontSize: 7, expandedX: 40, expandedY: -16, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Social', filterable: [], x: 345, y: 710, fontSize: 7, expandedX: 20, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'participation', filterable: [], x: 345, y: 717, fontSize: 7, expandedX: 20, expandedY: -15, details: ["test1", "test2"] },
								{ text: 'decline', filterable: [], x: 345, y: 724, fontSize: 7, expandedX: 20, expandedY: -10, details: ["test1", "test2"] }
							],
							[
								{ text: 'Community', filterable: [], x: 356, y: 740, fontSize: 7, expandedX: -20, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'program', filterable: [], x: 360, y: 747, fontSize: 7, expandedX: -20, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'volume', filterable: [], x: 360, y: 754, fontSize: 7, expandedX: -20, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 365, y: 770, fontSize: 7, expandedX: 30, expandedY: -8, details: ["test1", "test2"] },
								{ text: 'integration', filterable: [], x: 365, y: 777, fontSize: 7, expandedX: 30, expandedY: -4, details: ["test1", "test2"] },
								{ text: 'barriers', filterable: [], x: 365, y: 784, fontSize: 7, expandedX: 30, expandedY: 0, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Generation', filterable: [], x: 385, y: 690, fontSize: 7, expandedX: 0, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'differences', filterable: [], x: 385, y: 697, fontSize: 7, expandedX: 0, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 410, y: 730, fontSize: 7, expandedX: -70, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'Mobility', filterable: [], x: 410, y: 737, fontSize: 7, expandedX: -70, expandedY: 15, details: ["test1", "test2"] },
								{ text: 'Systems', filterable: [], x: 410, y: 744, fontSize: 7, expandedX: -70, expandedY: 20, details: ["test1", "test2"] }
							],
							[
								{ text: 'Community', filterable: [], x: 415, y: 765, fontSize: 7, expandedX: -10, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'bond', filterable: [], x: 415, y: 772, fontSize: 7, expandedX: -10, expandedY: -15, details: ["test1", "test2"] },
								{ text: 'deterioration', filterable: [], x: 415, y: 779, fontSize: 7, expandedX: -10, expandedY: -10, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Cultural', filterable: [], x: 425, y: 650, fontSize: 7, expandedX: -20, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'identity', filterable: [], x: 425, y: 657, fontSize: 7, expandedX: -20, expandedY: 35, details: ["test1", "test2"] },
								{ text: 'erosion', filterable: [], x: 425, y: 664, fontSize: 7, expandedX: -20, expandedY: 40, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 458, y: 706, fontSize: 7, expandedX: -110, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'cohesion', filterable: [], x: 458, y: 713, fontSize: 7, expandedX: -110, expandedY: 35, details: ["test1", "test2"] },
								{ text: 'weakening', filterable: [], x: 458, y: 720, fontSize: 7, expandedX: -110, expandedY: 40, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 470, y: 756, fontSize: 7, expandedX: -37, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'development', filterable: [], x: 463, y: 763, fontSize: 7, expandedX: -40, expandedY: -7, details: ["test1", "test2"] },
								{ text: 'imbalance', filterable: [], x: 465, y: 770, fontSize: 7, expandedX: -40, expandedY: -4, details: ["test1", "test2"] },
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
								{ text: 'Learning', filterable: [], x: 743, y: 795, fontSize: 4, expandedX: -100, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'progress', filterable: [], x: 743, y: 799, fontSize: 4, expandedX: -100, expandedY: 14, details: ["test1", "test2"] }
							],
							[
								{ text: 'Hard vs Soft skills', filterable: [], x: 745, y: 805, fontSize: 4, expandedX: -105, expandedY: 40, details: ["test1", "test2"] },
								{ text: 'developments', filterable: [], x: 745, y: 809, fontSize: 4, expandedX: -105, expandedY: 44, details: ["test1", "test2"] }
							],
							[
								{ text: 'IQ', filterable: [], x: 770, y: 798, fontSize: 7, expandedX: -30, expandedY: 10, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Educational', filterable: ['Inflation'], x: 700, y: 800, fontSize: 6, expandedX: -75, expandedY: 15, details: ["test1", "test2"] },
								{ text: 'resources', filterable: ['Inflation'], x: 700, y: 806, fontSize: 6, expandedX: -75, expandedY: 19, details: ["test1", "test2"] }
							],
							[
								{ text: 'Home learning', filterable: [], x: 702, y: 817, fontSize: 6, expandedX: -75, expandedY: 40, details: ["test1", "test2"] },
								{ text: 'space', filterable: [], x: 702, y: 823, fontSize: 6, expandedX: -75, expandedY: 44, details: ["test1", "test2"] }
							],
							[
								{ text: 'Learning', filterable: [], x: 710, y: 833, fontSize: 6, expandedX: -5, expandedY: -25, details: ["test1", "test2"] },
								{ text: 'activities', filterable: [], x: 710, y: 839, fontSize: 6, expandedX: -5, expandedY: -21, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Education', filterable: [], x: 665, y: 800, fontSize: 6, textAnchor: 'middle', expandedX: -30, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'attainment levels', filterable: [], x: 665, y: 806, fontSize: 6, textAnchor: 'middle', expandedX: -30, expandedY: 14, details: ["test1", "test2"] }
							],
							[
								{ text: 'Access to', filterable: ['Inflation'], x: 675, y: 830, fontSize: 6, textAnchor: 'middle', expandedX: 35, expandedY: -15, details: ["test1", "test2"] },
								{ text: 'educational', filterable: ['Inflation'], x: 675, y: 836, fontSize: 6, textAnchor: 'middle', expandedX: 35, expandedY: -11, details: ["test1", "test2"] },
								{ text: 'facilities', filterable: ['Inflation'], x: 675, y: 842, fontSize: 6, textAnchor: 'middle', expandedX: 35, expandedY: -7, details: ["test1", "test2"] }
							],
							[
								{ text: 'Technology', filterable: [], x: 685, y: 865, fontSize: 6, textAnchor: 'middle', expandedX: -40, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Integration', filterable: [], x: 685, y: 871, fontSize: 6, textAnchor: 'middle', expandedX: -40, expandedY: 4, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Instructional', filterable: [], x: 595, y: 800, fontSize: 7, expandedX: -10, expandedY: 20, details: ["test1", "test2"] },
								{ text: 'quality', filterable: [], x: 595, y: 807, fontSize: 7, expandedX: -10, expandedY: 24, details: ["test1", "test2"] }
							],
							[
								{ text: 'Assessment', filterable: [], x: 600, y: 830, fontSize: 7, expandedX: 60, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Standards', filterable: [], x: 600, y: 837, fontSize: 7, expandedX: 60, expandedY: -16, details: ["test1", "test2"] }
							],
							[
								{ text: 'Curriculum', filterable: [], x: 610, y: 860, fontSize: 7, expandedX: 60, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Development', filterable: [], x: 610, y: 867, fontSize: 7, expandedX: 60, expandedY: -16, details: ["test1", "test2"] }
							],
							[
								{ text: 'Innovative', filterable: [], x: 630, y: 890, fontSize: 7, expandedX: -20, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'methods', filterable: [], x: 635, y: 897, fontSize: 7, expandedX: -20, expandedY: -6, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Educational', filterable: ['Inflation'], x: 547, y: 800, fontSize: 7, expandedX: 90, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'expense', filterable: ['Inflation'], x: 550, y: 807, fontSize: 7, expandedX: 90, expandedY: 9, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social norm', filterable: [], x: 550, y: 830, fontSize: 7, expandedX: 5, expandedY: -10, details: ["test1", "test2"] }
							],
							[
								{ text: 'Сургалтын', filterable: [], x: 555, y: 850, fontSize: 7, expandedX: 10, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'чанар', filterable: [], x: 555, y: 857, fontSize: 7, expandedX: 15, expandedY: 14, details: ["test1", "test2"] }
							],
							[
								{ text: 'Сургалтын', filterable: ['Inflation'], x: 565, y: 880, fontSize: 7, expandedX: 25, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'орчин', filterable: ['Inflation'], x: 565, y: 887, fontSize: 7, expandedX: 25, expandedY: 34, details: ["test1", "test2"] }
							],
							[
								{ text: 'Ерөнхий', filterable: [], x: 585, y: 910, fontSize: 7, expandedX: 60, expandedY: -65, details: ["test1", "test2"] },
								{ text: 'боловсролын', filterable: [], x: 580, y: 917, fontSize: 7, expandedX: 60, expandedY: -61, details: ["test1", "test2"] },
								{ text: 'сургуулийн', filterable: [], x: 585, y: 923, fontSize: 7, expandedX: 60, expandedY: -57, details: ["test1", "test2"] },
								{ text: 'тоо', filterable: [], x: 600, y: 930, fontSize: 7, expandedX: 60, expandedY: -53, details: ["test1", "test2"] }
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
								{ text: 'Old school', filterable: [], x: 273, y: 798, fontSize: 6, expandedX: 60, expandedY: 20, details: ["test1", "test2"] },
								{ text: 'environment', filterable: [], x: 273, y: 804, fontSize: 6, expandedX: 60, expandedY: 24, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Educational', filterable: [], x: 315, y: 800, fontSize: 6, expandedX: 35, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'resource', filterable: [], x: 315, y: 806, fontSize: 6, expandedX: 35, expandedY: 15, details: ["test1", "test2"] },
								{ text: 'scarcity', filterable: [], x: 315, y: 812, fontSize: 6, expandedX: 35, expandedY: 20, details: ["test1", "test2"] },
							],
							[

								{ text: 'Learning', filterable: [], x: 310, y: 830, fontSize: 6, expandedX: 40, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'support', filterable: [], x: 310, y: 836, fontSize: 6, expandedX: 40, expandedY: 35, details: ["test1", "test2"] },
								{ text: 'inadequacy', filterable: [], x: 310, y: 842, fontSize: 6, expandedX: 40, expandedY: 40, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Dropout rate', filterable: [], x: 362, y: 800, fontSize: 7, expandedX: -50, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Technology', filterable: [], x: 362, y: 815, fontSize: 7, expandedX: 30, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'integration', filterable: [], x: 362, y: 822, fontSize: 7, expandedX: 30, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'barriers', filterable: [], x: 362, y: 829, fontSize: 7, expandedX: 30, expandedY: 4, details: ["test1", "test2"] }
							],
							[
								{ text: 'Limited access', filterable: [], x: 345, y: 850, fontSize: 7, expandedX: -20, expandedY: -5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Educational', filterable: [], x: 340, y: 865, fontSize: 7, expandedX: 30, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'infrastructure', filterable: [], x: 340, y: 872, fontSize: 7, expandedX: 30, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'gaps', filterable: [], x: 350, y: 879, fontSize: 7, expandedX: 30, expandedY: 14, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Quality', filterable: [], x: 425, y: 810, fontSize: 7, expandedX: 0, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'gaps', filterable: [], x: 425, y: 817, fontSize: 7, expandedX: 0, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Assessment', filterable: [], x: 405, y: 850, fontSize: 7, expandedX: -70, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'system flaws', filterable: [], x: 400, y: 857, fontSize: 7, expandedX: -70, expandedY: -25, details: ["test1", "test2"] },
							],
							[
								{ text: 'Curriculum', filterable: [], x: 385, y: 890, fontSize: 7, expandedX: -10, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'outdatedness', filterable: [], x: 380, y: 897, fontSize: 7, expandedX: -10, expandedY: -16, details: ["test1", "test2"] },
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Digital', filterable: [], x: 470, y: 800, fontSize: 6, expandedX: -30, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'divide in', filterable: [], x: 470, y: 806, fontSize: 6, expandedX: -30, expandedY: 9, details: ["test1", "test2"] },
								{ text: 'learning', filterable: [], x: 470, y: 812, fontSize: 6, expandedX: -30, expandedY: 13, details: ["test1", "test2"] },
								{ text: 'access', filterable: [], x: 470, y: 818, fontSize: 6, expandedX: -30, expandedY: 17, details: ["test1", "test2"] }
							],
							[
								{ text: 'Traditional', filterable: [], x: 462, y: 838, fontSize: 6, expandedX: -30, expandedY: 20, details: ["test1", "test2"] },
								{ text: 'teaching', filterable: [], x: 462, y: 844, fontSize: 6, expandedX: -30, expandedY: 24, details: ["test1", "test2"] },
								{ text: 'methods', filterable: [], x: 462, y: 850, fontSize: 6, expandedX: -30, expandedY: 28, details: ["test1", "test2"] }
							],
							[
								{ text: 'Quality of public', filterable: [], x: 450, y: 865, fontSize: 6, expandedX: -110, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'kindergarten', filterable: [], x: 450, y: 871, fontSize: 6, expandedX: -110, expandedY: -6, details: ["test1", "test2"] }
							],
							[
								{ text: 'Public vs', filterable: [], x: 440, y: 890, fontSize: 6, expandedX: -90, expandedY: -80, details: ["test1", "test2"] },
								{ text: 'Private', filterable: [], x: 440, y: 896, fontSize: 6, expandedX: -90, expandedY: -76, details: ["test1", "test2"] },
								{ text: 'contrast', filterable: [], x: 440, y: 902, fontSize: 6, expandedX: -90, expandedY: -72, details: ["test1", "test2"] }
							],
							[
								{ text: 'Overcrowded', filterable: [], x: 420, y: 925, fontSize: 6, expandedX: -30, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'public', filterable: [], x: 420, y: 931, fontSize: 6, expandedX: -30, expandedY: -26, details: ["test1", "test2"] },
								{ text: 'establishment', filterable: [], x: 420, y: 937, fontSize: 6, expandedX: -30, expandedY: -22, details: ["test1", "test2"] }
							]
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
								{ text: 'Civil', filterable: [], x: 788, y: 810, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 60, details: ["test1", "test2"] },
								{ text: 'Rights', filterable: [], x: 788, y: 814, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 65, details: ["test1", "test2"] },
								{ text: 'Protection', filterable: [], x: 788, y: 818, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 70, details: ["test1", "test2"] }
							],
							[
								{ text: 'Public Service', filterable: [], x: 788, y: 829, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 85, details: ["test1", "test2"] },
								{ text: 'Access', filterable: [], x: 788, y: 833, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 90, details: ["test1", "test2"] },
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Administrative', filterable: [], x: 753, y: 844, fontSize: 5, expandedX: -45, expandedY: 100, details: ["test1", "test2"] },
								{ text: 'Support', filterable: [], x: 768, y: 848, fontSize: 5, expandedX: -25, expandedY: 105, details: ["test1", "test2"] }
							],
							[
								{ text: 'Legal', filterable: [], x: 760, y: 855, fontSize: 5, expandedX: -5, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'Protection', filterable: [], x: 760, y: 860, fontSize: 5, expandedX: -30, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'Systems', filterable: [], x: 760, y: 865, fontSize: 5, expandedX: -20, expandedY: 0, details: ["test1", "test2"] }
							],
							[
								{ text: 'Public', filterable: [], x: 732, y: 858, fontSize: 5, expandedX: -35, expandedY: 45, details: ["test1", "test2"] },
								{ text: 'Service', filterable: [], x: 732, y: 863, fontSize: 5, expandedX: -35, expandedY: 50, details: ["test1", "test2"] },
								{ text: 'Access', filterable: [], x: 732, y: 868, fontSize: 5, expandedX: -35, expandedY: 55, details: ["test1", "test2"] }
							],
							[
								{ text: 'Service', filterable: [], x: 760, y: 875, fontSize: 5, expandedX: -15, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'Integration', filterable: [], x: 760, y: 880, fontSize: 5, expandedX: -35, expandedY: 15, details: ["test1", "test2"] },
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Emergency', filterable: [], x: 705, y: 882, fontSize: 6, expandedX: -40, expandedY: 45, details: ["test1", "test2"] },
								{ text: 'Management', filterable: [], x: 705, y: 888, fontSize: 6, expandedX: -40, expandedY: 50, details: ["test1", "test2"] },
								{ text: 'Systems', filterable: [], x: 705, y: 894, fontSize: 6, expandedX: -40, expandedY: 55, details: ["test1", "test2"] }
							],
							[
								{ text: 'Local', filterable: [], x: 771, y: 895, fontSize: 6, expandedX: -15, expandedY: -40, details: ["test1", "test2"] },
								{ text: 'Governance', filterable: [], x: 752, y: 901, fontSize: 6, expandedX: -30, expandedY: -35, details: ["test1", "test2"] },
								{ text: 'Transparency', filterable: [], x: 748, y: 907, fontSize: 6, expandedX: -35, expandedY: -30, details: ["test1", "test2"] }
							],
							[
								{ text: 'Local', filterable: [], x: 715, y: 905, fontSize: 6, expandedX: 25, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'Resource', filterable: [], x: 715, y: 911, fontSize: 6, expandedX: 5, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'Management', filterable: [], x: 715, y: 917, fontSize: 6, expandedX: -13, expandedY: 0, details: ["test1", "test2"] }
							],
							[
								{ text: 'Public', filterable: [], x: 765, y: 920, fontSize: 6, expandedX: -15, expandedY: 40, details: ["test1", "test2"] },
								{ text: 'Service', filterable: [], x: 765, y: 926, fontSize: 6, expandedX: -22, expandedY: 45, details: ["test1", "test2"] },
								{ text: 'Delivery', filterable: [], x: 765, y: 932, fontSize: 6, expandedX: -25, expandedY: 50, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Policy', filterable: [], x: 670, y: 920, fontSize: 6, expandedX: 55, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'Implementation', filterable: [], x: 670, y: 926, fontSize: 6, expandedX: 30, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'Systems', filterable: [], x: 670, y: 932, fontSize: 6, expandedX: 45, expandedY: 0, details: ["test1", "test2"] }
							],
							[
								{ text: 'Anti-Corruption', filterable: [], x: 680, y: 945, fontSize: 6, expandedX: 25, expandedY: -60, details: ["test1", "test2"] },
								{ text: 'Measures', filterable: [], x: 680, y: 951, fontSize: 6, expandedX: 25, expandedY: -56, details: ["test1", "test2"] }
							],
							[
								{ text: 'Administrative', filterable: [], x: 710, y: 955, fontSize: 6, expandedX: -50, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'Efficiency', filterable: [], x: 710, y: 961, fontSize: 6, expandedX: -50, expandedY: -5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Decentralization', filterable: [], x: 740, y: 970, fontSize: 6, expandedX: -50, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'Effectiveness', filterable: [], x: 740, y: 976, fontSize: 6, expandedX: -30, expandedY: 14, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Quality of', filterable: [], x: 630, y: 963, fontSize: 7, expandedX: 100, expandedY: -80, details: ["test1", "test2"] },
								{ text: 'Legislative', filterable: [], x: 630, y: 970, fontSize: 7, expandedX: 100, expandedY: -75, details: ["test1", "test2"] },
								{ text: 'Oversight', filterable: [], x: 630, y: 977, fontSize: 7, expandedX: 100, expandedY: -70, details: ["test1", "test2"] }
							],
							[
								{ text: 'Judicial Independence', filterable: [], x: 650, y: 988, fontSize: 7, expandedX: 20, expandedY: -60, details: ["test1", "test2"] },
								{ text: 'and Rule of Law', filterable: [], x: 650, y: 995, fontSize: 7, expandedX: 20, expandedY: -55, details: ["test1", "test2"] }
							],
							[
								{ text: 'Fiscal Accountability', filterable: [], x: 715, y: 998, fontSize: 7, expandedX: -70, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'and Transparency', filterable: [], x: 715, y: 1005, fontSize: 7, expandedX: -70, expandedY: -25, details: ["test1", "test2"] }
							],
							[
								{ text: 'Long-Term', filterable: [], x: 725, y: 1020, fontSize: 7, expandedX: -20, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Strategic Planning', filterable: [], x: 725, y: 1027, fontSize: 7, expandedX: -40, expandedY: -16, details: ["test1", "test2"] }
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
								{ text: 'Rights', filterable: [], x: 767, y: 1297, fontSize: 5, expandedX: -40, expandedY: -65, details: ["test1", "test2"] },
								{ text: 'Violation', filterable: [], x: 767, y: 1302, fontSize: 5, expandedX: -40, expandedY: -60, details: ["test1", "test2"] }
							],
							[
								{ text: 'Civic Rights', filterable: [], x: 760, y: 1284, fontSize: 5, expandedX: -40, expandedY: -95, details: ["test1", "test2"] },
								{ text: 'Suppression', filterable: [], x: 760, y: 1289, fontSize: 5, expandedX: -40, expandedY: -90, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Service', filterable: [], x: 735, y: 1264, fontSize: 6, expandedX: 0, expandedY: -100, details: ["test1", "test2"] },
								{ text: 'Fragmentation', filterable: [], x: 735, y: 1270, fontSize: 6, expandedX: -30, expandedY: -95, details: ["test1", "test2"] },
							],
							[
								{ text: 'Legal', filterable: [], x: 737, y: 1242, fontSize: 6, expandedX: 15, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Protection', filterable: [], x: 737, y: 1248, fontSize: 6, expandedX: -10, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'Failures', filterable: [], x: 737, y: 1254, fontSize: 6, expandedX: 0, expandedY: 10, details: ["test1", "test2"] }
							],
							[
								{ text: 'Service', filterable: [], x: 766, y: 1230, fontSize: 6, expandedX: -70, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'Access', filterable: [], x: 766, y: 1236, fontSize: 6, expandedX: -70, expandedY: -25, details: ["test1", "test2"] },
								{ text: 'Barriers', filterable: [], x: 766, y: 1242, fontSize: 6, expandedX: -70, expandedY: -20, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Resource', filterable: [], x: 695, y: 1220, fontSize: 7, expandedX: -10, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Mismanagement', filterable: [], x: 695, y: 1227, fontSize: 7, expandedX: -10, expandedY: -17, details: ["test1", "test2"] }
							],
							[
								{ text: 'Emergency', filterable: [], x: 715, y: 1196, fontSize: 7, expandedX: 10, expandedY: 45, details: ["test1", "test2"] },
								{ text: 'Response', filterable: [], x: 715, y: 1203, fontSize: 7, expandedX: 17, expandedY: 48, details: ["test1", "test2"] },
								{ text: 'problems', filterable: [], x: 715, y: 1210, fontSize: 7, expandedX: 20, expandedY: 51, details: ["test1", "test2"] }
							],
							[
								{ text: 'Service', filterable: [], x: 757, y: 1185, fontSize: 7, expandedX: -40, expandedY: -40, details: ["test1", "test2"] },
								{ text: 'Delivery', filterable: [], x: 757, y: 1192, fontSize: 7, expandedX: -30, expandedY: -37, details: ["test1", "test2"] },
								{ text: 'Failures', filterable: [], x: 757, y: 1199, fontSize: 7, expandedX: -30, expandedY: -34, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Bureaucratic', filterable: [], x: 657, y: 1180, fontSize: 7, expandedX: 15, expandedY: 20, details: ["test1", "test2"] },
								{ text: 'Inefficiency', filterable: [], x: 657, y: 1187, fontSize: 7, expandedX: 30, expandedY: 24, details: ["test1", "test2"] }
							],
							[
								{ text: 'Implementation', filterable: [], x: 690, y: 1160, fontSize: 7, expandedX: -30, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Gaps', filterable: [], x: 690, y: 1167, fontSize: 7, expandedX: -30, expandedY: 4, details: ["test1", "test2"] }
							],
							[
								{ text: 'Power', filterable: [], x: 735, y: 1142, fontSize: 7, expandedX: -25, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Concentration', filterable: [], x: 735, y: 1149, fontSize: 7, expandedX: -40, expandedY: -16, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Injustice and', filterable: [], x: 735, y: 1100, fontSize: 7, expandedX: -40, expandedY: 20, details: ["test1", "test2"] },
								{ text: 'Corruption', filterable: [], x: 735, y: 1107, fontSize: 7, expandedX: -40, expandedY: 25, details: ["test1", "test2"] }
							],
							[
								{ text: 'Fiscal', filterable: [], x: 685, y: 1115, fontSize: 7, expandedX: 0, expandedY: 50, details: ["test1", "test2"] },
								{ text: 'Opacity', filterable: [], x: 685, y: 1122, fontSize: 7, expandedX: 0, expandedY: 54, details: ["test1", "test2"] }
							],
							[
								{ text: 'Short term', filterable: [], x: 640, y: 1145, fontSize: 7, expandedX: 70, expandedY: 70, details: ["test1", "test2"] },
								{ text: 'solutions', filterable: [], x: 640, y: 1152, fontSize: 7, expandedX: 70, expandedY: 74, details: ["test1", "test2"] }
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
								{ text: 'Voter', filterable: [], x: 792, y: 816, fontSize: 4, expandedX: 10, expandedY: 60, details: ["test1", "test2"] },
								{ text: 'Participation', filterable: [], x: 792, y: 820, fontSize: 4, expandedX: 10, expandedY: 65, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 792, y: 827, fontSize: 4, expandedX: 5, expandedY: 95, details: ["test1", "test2"] },
								{ text: 'responsibility', filterable: [], x: 792, y: 831, fontSize: 4, expandedX: 5, expandedY: 100, details: ["test1", "test2"] },
								{ text: 'awareness', filterable: [], x: 792, y: 835, fontSize: 4, expandedX: 5, expandedY: 105, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Family Support', filterable: [], x: 792, y: 850, fontSize: 5, expandedX: 0, expandedY: 40, details: ["test1", "test2"] },
								{ text: 'Systems', filterable: [], x: 792, y: 855, fontSize: 5, expandedX: 0, expandedY: 45, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 795, y: 870, fontSize: 5, expandedX: 5, expandedY: 65, details: ["test1", "test2"] },
								{ text: 'Welfare', filterable: [], x: 795, y: 875, fontSize: 5, expandedX: 5, expandedY: 70, details: ["test1", "test2"] },
								{ text: 'Access', filterable: [], x: 795, y: 880, fontSize: 5, expandedX: 5, expandedY: 75, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 825, y: 860, fontSize: 5, expandedX: 25, expandedY: 55, details: ["test1", "test2"] },
								{ text: 'Protection', filterable: [], x: 825, y: 865, fontSize: 5, expandedX: 25, expandedY: 60, details: ["test1", "test2"] },
								{ text: 'Coverage', filterable: [], x: 825, y: 870, fontSize: 5, expandedX: 25, expandedY: 65, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Community', filterable: [], x: 793, y: 922, fontSize: 5, expandedX: 5, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'Infrastructure', filterable: [], x: 793, y: 927, fontSize: 5, expandedX: 5, expandedY: -26, details: ["test1", "test2"] },
								{ text: 'Development', filterable: [], x: 793, y: 932, fontSize: 5, expandedX: 5, expandedY: -22, details: ["test1", "test2"] }
							],
							[
								{ text: 'Public Participation in', filterable: [], x: 792, y: 900, fontSize: 5, expandedX: 10, expandedY: 27, details: ["test1", "test2"] },
								{ text: 'Local Governance', filterable: [], x: 792, y: 905, fontSize: 5, expandedX: 10, expandedY: 32, details: ["test1", "test2"] }
							],
							[
								{ text: 'Collective', filterable: [], x: 850, y: 900, fontSize: 5, expandedX: 10, expandedY: 50, details: ["test1", "test2"] },
								{ text: 'action', filterable: [], x: 850, y: 905, fontSize: 5, expandedX: 10, expandedY: 55, details: ["test1", "test2"] },
								{ text: 'capacity', filterable: [], x: 850, y: 910, fontSize: 5, expandedX: 10, expandedY: 60, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 827, y: 913, fontSize: 5, expandedX: -30, expandedY: 50, details: ["test1", "test2"] },
								{ text: 'network', filterable: [], x: 827, y: 918, fontSize: 5, expandedX: -30, expandedY: 55, details: ["test1", "test2"] },
								{ text: 'engagement', filterable: [], x: 827, y: 923, fontSize: 5, expandedX: -30, expandedY: 60, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Social', filterable: [], x: 793, y: 960, fontSize: 6, expandedX: 5, expandedY: -90, details: ["test1", "test2"] },
								{ text: 'cohesion', filterable: [], x: 793, y: 966, fontSize: 6, expandedX: 5, expandedY: -85, details: ["test1", "test2"] },
								{ text: 'measures', filterable: [], x: 793, y: 972, fontSize: 6, expandedX: 5, expandedY: -80, details: ["test1", "test2"] }
							],
							[
								{ text: 'Minority', filterable: [], x: 826, y: 955, fontSize: 6, expandedX: -30, expandedY: 20, details: ["test1", "test2"] },
								{ text: 'rights', filterable: [], x: 826, y: 961, fontSize: 6, expandedX: -30, expandedY: 25, details: ["test1", "test2"] },
								{ text: 'protection', filterable: [], x: 826, y: 967, fontSize: 6, expandedX: -30, expandedY: 30, details: ["test1", "test2"] }
							],
							[
								{ text: 'Public', filterable: [], x: 854, y: 940, fontSize: 6, expandedX: -50, expandedY: -25, details: ["test1", "test2"] },
								{ text: 'Trust in', filterable: [], x: 854, y: 947, fontSize: 6, expandedX: -50, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Governance', filterable: [], x: 854, y: 954, fontSize: 6, expandedX: -50, expandedY: -15, details: ["test1", "test2"] }
							],
							[
								{ text: 'Civil', filterable: [], x: 883, y: 930, fontSize: 6, expandedX: -20, expandedY: 25, details: ["test1", "test2"] },
								{ text: 'society', filterable: [], x: 883, y: 936, fontSize: 6, expandedX: -20, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'engagement', filterable: [], x: 883, y: 942, fontSize: 6, expandedX: -25, expandedY: 35, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'National', filterable: [], x: 795, y: 1010, fontSize: 6, expandedX: 0, expandedY: -120, details: ["test1", "test2"] },
								{ text: 'social', filterable: [], x: 795, y: 1016, fontSize: 6, expandedX: 0, expandedY: -115, details: ["test1", "test2"] },
								{ text: 'dialogue', filterable: [], x: 795, y: 1022, fontSize: 6, expandedX: 0, expandedY: -110, details: ["test1", "test2"] }
							],
							[
								{ text: 'Inclusivity in', filterable: [], x: 830, y: 1005, fontSize: 6, expandedX: -30, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'National', filterable: [], x: 830, y: 1011, fontSize: 6, expandedX: -30, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'Decision-Making', filterable: [], x: 830, y: 1017, fontSize: 6, expandedX: -30, expandedY: 0, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 870, y: 990, fontSize: 6, expandedX: -70, expandedY: -50, details: ["test1", "test2"] },
								{ text: 'Development', filterable: [], x: 870, y: 997, fontSize: 6, expandedX: -70, expandedY: -45, details: ["test1", "test2"] },
								{ text: 'Framework', filterable: [], x: 870, y: 1004, fontSize: 6, expandedX: -70, expandedY: -40, details: ["test1", "test2"] }
							],
							[
								{ text: 'National', filterable: [], x: 910, y: 970, fontSize: 6, expandedX: -30, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'Integration', filterable: [], x: 910, y: 977, fontSize: 6, expandedX: -30, expandedY: -25, details: ["test1", "test2"] },
								{ text: 'Policy', filterable: [], x: 910, y: 984, fontSize: 6, expandedX: -30, expandedY: -20, details: ["test1", "test2"] }
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
								{ text: 'Voter', filterable: [], x: 792, y: 1278, fontSize: 5, expandedX: 10, expandedY: -90, details: ["test1", "test2"] },
								{ text: 'suppression', filterable: [], x: 792, y: 1283, fontSize: 5, expandedX: 10, expandedY: -85, details: ["test1", "test2"] }
							],
							[
								{ text: 'Social', filterable: [], x: 792, y: 1292, fontSize: 5, expandedX: 10, expandedY: -65, details: ["test1", "test2"] },
								{ text: 'Respon', filterable: [], x: 792, y: 1297, fontSize: 5, expandedX: 10, expandedY: -60, details: ["test1", "test2"] },
								{ text: 'sibility', filterable: [], x: 792, y: 1302, fontSize: 5, expandedX: 10, expandedY: -55, details: ["test1", "test2"] },
								{ text: 'Gaps', filterable: [], x: 792, y: 1307, fontSize: 5, expandedX: 10, expandedY: -50, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Welfare', filterable: [], x: 795, y: 1230, fontSize: 5, expandedX: 0, expandedY: -80, details: ["test1", "test2"] },
								{ text: 'Access', filterable: [], x: 795, y: 1235, fontSize: 5, expandedX: 0, expandedY: -75, details: ["test1", "test2"] },
								{ text: 'Barriers', filterable: [], x: 795, y: 1240, fontSize: 5, expandedX: 0, expandedY: -70, details: ["test1", "test2"] }
							],
							[
								{ text: 'Housing', filterable: [], x: 795, y: 1255, fontSize: 5, expandedX: 0, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Program', filterable: [], x: 795, y: 1260, fontSize: 5, expandedX: 0, expandedY: -15, details: ["test1", "test2"] },
								{ text: 'Failures', filterable: [], x: 795, y: 1265, fontSize: 5, expandedX: 0, expandedY: -10, details: ["test1", "test2"] }
							],
							[
								{ text: 'Family', filterable: [], x: 825, y: 1250, fontSize: 5, expandedX: 10, expandedY: -60, details: ["test1", "test2"] },
								{ text: 'Support', filterable: [], x: 825, y: 1255, fontSize: 5, expandedX: 10, expandedY: -55, details: ["test1", "test2"] },
								{ text: 'Breakdown', filterable: [], x: 825	, y: 1260, fontSize: 5, expandedX: 10, expandedY: -50, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Infrastructure', filterable: [], x: 795, y: 1190, fontSize: 7, expandedX: 0, expandedY: -50, details: ["test1", "test2"] },
								{ text: 'Development', filterable: [], x: 795, y: 1197, fontSize: 7, expandedX: 0, expandedY: -45, details: ["test1", "test2"] },
								{ text: 'Gaps', filterable: [], x: 795, y: 1204, fontSize: 7, expandedX: 0, expandedY: -40, details: ["test1", "test2"] }
							],
							[
								{ text: 'Participation', filterable: [], x: 825, y: 1210, fontSize: 7, expandedX: 10, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Barriers', filterable: [], x: 825, y: 1217, fontSize: 7, expandedX: 10, expandedY: -15, details: ["test1", "test2"] }
							],
							[
								{ text: 'Collective', filterable: [], x: 855, y: 1220, fontSize: 7, expandedX: -60, expandedY: 15, details: ["test1", "test2"] },
								{ text: 'Action', filterable: [], x: 855, y: 1227, fontSize: 7, expandedX: -60, expandedY: 20, details: ["test1", "test2"] },
								{ text: 'Failure', filterable: [], x: 855, y: 1234, fontSize: 7, expandedX: -60, expandedY: 25, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Social', filterable: [], x: 795, y: 1134, fontSize: 6, expandedX: 0, expandedY: -20, details: ["test1", "test2"] },
								{ text: 'Fragmentation', filterable: [], x: 795, y: 1140, fontSize: 6, expandedX: 0, expandedY: -15, details: ["test1", "test2"] }
							],
							[
								{ text: 'Minority', filterable: [], x: 815, y: 1155, fontSize: 6, expandedX: 20, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'Rights', filterable: [], x: 815, y: 1161, fontSize: 6, expandedX: 20, expandedY: 35, details: ["test1", "test2"] },
								{ text: 'Violations', filterable: [], x: 815, y: 1167, fontSize: 6, expandedX: 20, expandedY: 40, details: ["test1", "test2"] }
							],
							[
								{ text: 'Public', filterable: [], x: 855, y: 1150, fontSize: 6, expandedX: -60, expandedY: 70, details: ["test1", "test2"] },
								{ text: 'Trust', filterable: [], x: 855, y: 1157, fontSize: 6, expandedX: -60, expandedY: 75, details: ["test1", "test2"] },
								{ text: 'Deficit', filterable: [], x: 855, y: 1164, fontSize: 6, expandedX: -60, expandedY: 80, details: ["test1", "test2"] }
							],
							[
								{ text: 'Civil', filterable: [], x: 880, y: 1175, fontSize: 6, expandedX: -70, expandedY: -30, details: ["test1", "test2"] },
								{ text: 'Society', filterable: [], x: 880, y: 1181, fontSize: 6, expandedX: -70, expandedY: -25, details: ["test1", "test2"] },
								{ text: 'Disengagement', filterable: [], x: 880, y: 1187, fontSize: 6, expandedX: -70, expandedY: -20, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Social', filterable: [], x: 800, y: 1095, fontSize: 7, expandedX: 0, expandedY: 110, details: ["test1", "test2"] },
								{ text: 'Dialogue', filterable: [], x: 800, y: 1102, fontSize: 7, expandedX: 0, expandedY: 115, details: ["test1", "test2"] },
								{ text: 'Breakdown', filterable: [], x: 800, y: 1109, fontSize: 7, expandedX: 0, expandedY: 120, details: ["test1", "test2"] }
							],
							[
								{ text: 'Exclusionary,', filterable: [], x: 845, y: 1100, fontSize: 7, expandedX: -50, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'Decision-', filterable: [], x: 845, y: 1107, fontSize: 7, expandedX: -50, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Making', filterable: [], x: 845, y: 1114, fontSize: 7, expandedX: -50, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Development', filterable: [], x: 880, y: 1120, fontSize: 7, expandedX: -84, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'Framework', filterable: [], x: 880, y: 1127, fontSize: 7, expandedX: -84, expandedY: 35, details: ["test1", "test2"] },
								{ text: 'Failure', filterable: [], x: 880, y: 1134, fontSize: 7, expandedX: -84, expandedY: 40, details: ["test1", "test2"] }
							],
							[
								{ text: 'Integration', filterable: [], x: 910, y: 1140, fontSize: 7, expandedX: -30, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Policy', filterable: [], x: 910, y: 1147, fontSize: 7, expandedX: -30, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'Gaps', filterable: [], x: 910, y: 1154, fontSize: 7, expandedX: -30, expandedY: 10, details: ["test1", "test2"] }
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
								{ text: 'Healthcare', filterable: [], x: 800, y: 795, fontSize: 4, expandedX: 20, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'Accessibility', filterable: [], x: 800, y: 799, fontSize: 4, expandedX: 20, expandedY: 15, details: ["test1", "test2"] }
							],
							[
								{ text: 'Clean', filterable: ['Inflation'], x: 825, y: 795, fontSize: 4, props: 'Inflation', expandedX: 85, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'Water', filterable: ['Inflation'], x: 825, y: 799, fontSize: 4, props: 'Inflation', expandedX: 85, expandedY: 15, details: ["test1", "test2"] },
								{ text: 'Access', filterable: ['Inflation'], x: 825, y: 803, fontSize: 4, props: 'Inflation', expandedX: 85, expandedY: 20, details: ["test1", "test2"] }
							],
							[
								{ text: 'Air Quality', filterable: ['Inflation'], x: 815, y: 808, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 40, details: ["test1", "test2"] },
								{ text: 'Exposure', filterable: ['Inflation'], x: 815, y: 812, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 45, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Health emergency', filterable: [], x: 842, y: 796, fontSize: 5, expandedX: -20, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'support', filterable: [], x: 842, y: 801, fontSize: 5, expandedX: -20, expandedY: 9, details: ["test1", "test2"] }
							],
							[
								{ text: 'Environmental', filterable: [], x: 842, y: 810, fontSize: 5, expandedX: 40, expandedY: 8, details: ["test1", "test2"] },
								{ text: 'Safety', filterable: [], x: 842, y: 815, fontSize: 5, expandedX: 40, expandedY: 13, details: ["test1", "test2"] }
							],
							[
								{ text: 'Local Air Quality', filterable: [], x: 835, y: 823, fontSize: 5, expandedX: 20, expandedY: 20, details: ["test1", "test2"] },
							],
							[
								{ text: 'Healthcare', filterable: [], x: 840, y: 832, fontSize: 5, expandedX: 40, expandedY: 28, details: ["test1", "test2"] },
								{ text: 'Service Access', filterable: [], x: 840, y: 837, fontSize: 5, expandedX: 40, expandedY: 33, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Local Healthcare', filterable: [], x: 895, y: 800, fontSize: 5, expandedX: -65, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'Access', filterable: [], x: 895, y: 805, fontSize: 5, expandedX: -65, expandedY: 10, details: ["test1", "test2"] }
							],
							[
								{ text: 'Environmental', filterable: [], x: 892, y: 820, fontSize: 5, expandedX: 0, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'Monitoring', filterable: [], x: 896, y: 825, fontSize: 5, expandedX: 0, expandedY: 10, details: ["test1", "test2"] },
							],
							[
								{ text: 'Waste Management', filterable: [], x: 882, y: 840, fontSize: 5, expandedX: -5, expandedY: 15, details: ["test1", "test2"] },
								{ text: 'Systems', filterable: [], x: 895, y: 845, fontSize: 5, expandedX: 10, expandedY: 20, details: ["test1", "test2"] }
							],
							[
								{ text: 'Public Health', filterable: [], x: 880, y: 858, fontSize: 5, expandedX: 20, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'Facilities', filterable: [], x: 884, y: 864, fontSize: 5, expandedX: 20, expandedY: 35, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Climate Change', filterable: [], x: 942, y: 800, fontSize: 6, expandedX: -10, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'Adaptation', filterable: [], x: 945, y: 806, fontSize: 6, expandedX: 0, expandedY: 10, details: ["test1", "test2"] }
							],
							[
								{ text: 'Pasturelands', filterable: ['Inflation'], x: 943, y: 820, fontSize: 6, expandedX: -88, expandedY: -19, details: ["test1", "test2"] },
								{ text: 'care', filterable: ['Inflation'], x: 952, y: 826, fontSize: 6, expandedX: -90, expandedY: -15, details: ["test1", "test2"] }
							],
							[
								{ text: 'Environmental', filterable: [], x: 935, y: 838, fontSize: 6, expandedX: -5, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Protection', filterable: [], x: 935, y: 844, fontSize: 6, expandedX: -5, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'Measures', filterable: [], x: 935, y: 850, fontSize: 6, expandedX: -5, expandedY: 10, details: ["test1", "test2"] }
							],
							[
								{ text: 'Healthcare', filterable: [], x: 930, y: 864, fontSize: 6, expandedX: -80, expandedY: -35, details: ["test1", "test2"] },
								{ text: 'System Quality', filterable: [], x: 922, y: 870, fontSize: 6, expandedX: -80, expandedY: -31, details: ["test1", "test2"] }
							],
							[
								{ text: 'Public Health', filterable: [], x: 915, y: 882, fontSize: 6, expandedX: -30, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'Coverage', filterable: [], x: 915, y: 888, fontSize: 6, expandedX: -30, expandedY: -5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Road Condition', filterable: [], x: 910, y: 900, fontSize: 6, expandedX: -5, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Monitoring', filterable: [], x: 915, y: 906, fontSize: 6, expandedX: 0, expandedY: 5, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Environmental', filterable: [], x: 995, y: 800, fontSize: 5, expandedX: -115, expandedY: 2, details: ["test1", "test2"] },
								{ text: 'Policy', filterable: [], x: 995, y: 805, fontSize: 5, expandedX: -115, expandedY: 6, details: ["test1", "test2"] },
								{ text: 'Framework', filterable: [], x: 995, y: 810, fontSize: 5, expandedX: -115, expandedY: 10, details: ["test1", "test2"] }
							],
							[
								{ text: 'Sustainable', filterable: [], x: 995, y: 825, fontSize: 5, expandedX: -60, expandedY: 75, details: ["test1", "test2"] },
								{ text: 'livestock', filterable: [], x: 995, y: 830, fontSize: 5, expandedX: -60, expandedY: 80, details: ["test1", "test2"] },
								{ text: 'management', filterable: [], x: 995, y: 835, fontSize: 5, expandedX: -60, expandedY: 85, details: ["test1", "test2"] },
								{ text: 'policies', filterable: [], x: 995, y: 840, fontSize: 5, expandedX: -60, expandedY: 90, details: ["test1", "test2"] }
							],
							[
								{ text: 'Climate change', filterable: [], x: 985, y: 860, fontSize: 5, expandedX: -95, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'adaptation policies', filterable: [], x: 980, y: 865, fontSize: 5, expandedX: -95, expandedY: 14, details: ["test1", "test2"] }
							],
							[
								{ text: 'National Health', filterable: [], x: 975, y: 880, fontSize: 5, expandedX: -20, expandedY: -66, details: ["test1", "test2"] },
								{ text: 'Infrastructure', filterable: [], x: 975, y: 885, fontSize: 5, expandedX: -20, expandedY: -61, details: ["test1", "test2"] }
							],
							[
								{ text: 'Хүн амын', filterable: [], x: 965, y: 900, fontSize: 5, expandedX: 10, expandedY: -50, details: ["test1", "test2"] },
								{ text: 'нягтрал', filterable: [], x: 965, y: 905, fontSize: 5, expandedX: 10, expandedY: -45, details: ["test1", "test2"] }
							],
							[
								{ text: 'Safe and Sustainable', filterable: [], x: 942, y: 925, fontSize: 5, expandedX: -75, expandedY: -90, details: ["test1", "test2"] },
								{ text: 'Road Infrastructure', filterable: [], x: 942, y: 930, fontSize: 5, expandedX: -75, expandedY: -85, details: ["test1", "test2"] },
								{ text: 'Development', filterable: [], x: 942, y: 935, fontSize: 5, expandedX: -75, expandedY: -80, details: ["test1", "test2"] }
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
								{ text: 'Poor Air Quality', filterable: [], x: 1275, y: 796, fontSize: 5, expandedX: -90, expandedY: 15, details: ["test1", "test2"] },
								{ text: 'Exposure', filterable: [], x: 1275, y: 801, fontSize: 5, expandedX: -90, expandedY: 20, details: ["test1", "test2"] }
							],
							[
								{ text: 'Access', filterable: [], x: 1280, y: 808, fontSize: 5, expandedX: -90, expandedY: 40, details: ["test1", "test2"] },
								{ text: 'Difficulties', filterable: [], x: 1278, y: 813, fontSize: 5, expandedX: -90, expandedY: 45, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Poor', filterable: [], x: 1235, y: 815, fontSize: 7, expandedX: -56, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'conditions', filterable: [], x: 1235, y: 822, fontSize: 7, expandedX: -56, expandedY: 9, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Access', filterable: [], x: 1180, y: 800, fontSize: 6, fontWeight: 600, expandedX: -50, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'inequalities', filterable: [], x: 1180, y: 806, fontSize: 6, fontWeight: 600, expandedX: -50, expandedY: 15, details: ["test1", "test2"] }
							],
							[
								{ text: 'Monitoring', filterable: [], x: 1180, y: 820, fontSize: 6, fontWeight: 600, expandedX: 25, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'Failures', filterable: [], x: 1180, y: 827, fontSize: 6, fontWeight: 600, expandedX: 25, expandedY: 15, details: ["test1", "test2"] }
							],
							[
								{ text: 'System', filterable: [], x: 1190, y: 840, fontSize: 6, fontWeight: 600, expandedX: -50, expandedY: 10, details: ["test1", "test2"] },
								{ text: 'Failures', filterable: [], x: 1190, y: 847, fontSize: 6, fontWeight: 600, expandedX: -50, expandedY: 15, details: ["test1", "test2"] }
							],
							[
								{ text: 'Facility', filterable: [], x: 1200, y: 860, fontSize: 6, fontWeight: 600, expandedX: -45, expandedY: 30, details: ["test1", "test2"] },
								{ text: 'Shortages', filterable: [], x: 1200, y: 867, fontSize: 6, fontWeight: 600, expandedX: -45, expandedY: 35, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Adaptation', filterable: [], x: 1130, y: 800, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 5, details: ["test1", "test2"] },
								{ text: 'Failures', filterable: [], x: 1135, y: 806, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 10, details: ["test1", "test2"] }
							],
							[
								{ text: 'Pastureland', filterable: [], x: 1130, y: 820, fontSize: 6, fontWeight: 600, expandedX: 50, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'degradation', filterable: [], x: 1130, y: 826, fontSize: 6, fontWeight: 600, expandedX: 50, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'factors', filterable: [], x: 1135, y: 832, fontSize: 6, fontWeight: 600, expandedX: 50, expandedY: 0, details: ["test1", "test2"] }
							],
							[
								{ text: 'Protection', filterable: [], x: 1135, y: 845, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Failures', filterable: [], x: 1140, y: 851, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: 'System', filterable: [], x: 1150, y: 865, fontSize: 6, fontWeight: 600, expandedX: 30, expandedY: -10, details: ["test1", "test2"] },
								{ text: 'Inadequacies', filterable: [], x: 1145, y: 871, fontSize: 6, fontWeight: 600, expandedX: 30, expandedY: -5, details: ["test1", "test2"] }
							],
							[
								{ text: 'Regional', filterable: [], x: 1160, y: 895, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -5, details: ["test1", "test2"] },
								{ text: 'Development', filterable: [], x: 1160, y: 901, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 0, details: ["test1", "test2"] },
								{ text: 'Gaps', filterable: [], x: 1168, y: 907, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: 5, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: "Environmental", filterable: [], x: 1077, y: 810, "fontSize": 6, expandedX: 10, expandedY: -5, details: ["test1", "test2"] },
								{ text: "degradation", filterable: [], x: 1080, y: 816, "fontSize": 6, expandedX: 10, expandedY: 0, details: ["test1", "test2"] }
							],
							[
								{ text: "Environmental", filterable: [], x: 1080, y: 840, "fontSize": 6, expandedX: 10, expandedY: 0, details: ["test1", "test2"] },
								{ text: "Hazards", filterable: [], x: 1090, y: 846, "fontSize": 6, expandedX: 10, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: "Infrastructure", filterable: [], x: 1090, y: 875, "fontSize": 6, expandedX: 10, expandedY: 0, details: ["test1", "test2"] },
								{ text: "Deficits", filterable: [], x: 1095, y: 881, "fontSize": 6, expandedX: 10, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: "Accident", filterable: [], x: 1115, y: 910, "fontSize": 7, expandedX: 10, expandedY: 0, details: ["test1", "test2"] },
								{ text: "Analysis", filterable: [], x: 1115, y: 917, "fontSize": 7, expandedX: 10, expandedY: 5, details: ["test1", "test2"] }
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
								{ text: "Personal", filterable: [], x: 805, y: 782, "fontSize": 5, expandedX: 25, expandedY: -15, details: ["test1", "test2"] },
								{ text: "Health Habits", filterable: [], x: 805, y: 787, "fontSize": 5, expandedX: 25, expandedY: -10, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: "Home", filterable: [], x: 842, y: 775, "fontSize": 5, expandedX: -10, expandedY: -10, details: ["test1", "test2"] },
								{ text: "Environment", filterable: [], x: 842, y: 780, "fontSize": 5, expandedX: -10, expandedY: -5, details: ["test1", "test2"] },
								{ text: "Quality", filterable: [], x: 842, y: 785, "fontSize": 5, expandedX: -10, expandedY: 0, details: ["test1", "test2"] }
							],
							[
								{ text: "Sustainable", filterable: [], x: 835, y: 755, "fontSize": 5, expandedX: 50, expandedY: -50, details: ["test1", "test2"] },
								{ text: "Household", filterable: [], x: 835, y: 760, "fontSize": 5, expandedX: 50, expandedY: -45, details: ["test1", "test2"] },
								{ text: "Habits", filterable: [], x: 835, y: 765, "fontSize": 5, expandedX: 50, expandedY: -40, details: ["test1", "test2"] }
							],
							[
								{ text: "Family", filterable: ['Inflation'], x: 855, y: 735, "fontSize": 5, expandedX: 45, expandedY: 3, details: ["test1", "test2"] },
								{ text: "health", filterable: ['Inflation'], x: 855, y: 740, "fontSize": 5, expandedX: 45, expandedY: 8, details: ["test1", "test2"] },
								{ text: "practices", filterable: ['Inflation'], x: 855, y: 745, "fontSize": 5, expandedX: 45, expandedY: 13, details: ["test1", "test2"] }
							],
							[
								{ text: "Domestic", filterable: ['Inflation'], x: 862, y: 768, "fontSize": 5, expandedX: 50, expandedY: 4, details: ["test1", "test2"] },
								{ text: "utilities", filterable: ['Inflation'], x: 865, y: 773, "fontSize": 5, expandedX: 50, expandedY: 9, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: "Local", filterable: [], x: 890, y: 710, "fontSize": 6, expandedX: 10, expandedY: -10, details: ["test1", "test2"] },
								{ text: "Environmental", filterable: [], x: 870, y: 716, "fontSize": 6, expandedX: 10, expandedY: -6, details: ["test1", "test2"] },
								{ text: "Initiatives", filterable: [], x: 880, y: 722, "fontSize": 6, expandedX: 10, expandedY: -6, details: ["test1", "test2"] }
							],
							[
								{ text: "Community", filterable: [], x: 885, y: 735, "fontSize": 6, expandedX: 0, expandedY: -10, details: ["test1", "test2"] },
								{ text: "Health Activities", filterable: [], x: 882, y: 741, "fontSize": 6, expandedX: 0, expandedY: -6, details: ["test1", "test2"] }
							],
							[
								{ text: "Household", filterable: [], x: 890, y: 755, "fontSize": 6, expandedX: 0, expandedY: -10, details: ["test1", "test2"] },
								{ text: "Waste Sorting", filterable: [], x: 890, y: 761, "fontSize": 6, expandedX: 0, expandedY: -6, details: ["test1", "test2"] }
							],
							[
								{ text: "Neighbourhood", filterable: [], x: 890, y: 775, "fontSize": 6, expandedX: 0, expandedY: -10, details: ["test1", "test2"] },
								{ text: "Care", filterable: [], x: 905, y: 781, "fontSize": 6, expandedX: 0, expandedY: -6, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: "Community", filterable: [], x: 910, y: 680, "fontSize": 7, expandedX: 10, expandedY: 0, details: ["test1", "test2"] },
								{ text: "Health", filterable: [], x: 915, y: 687, "fontSize": 7, expandedX: 10, expandedY: 5, details: ["test1", "test2"] },
								{ text: "Programs", filterable: [], x: 915, y: 694, "fontSize": 7, expandedX: 10, expandedY: 10, details: ["test1", "test2"] }
							],
							[
								{ text: "Green Space", filterable: [], x: 925, y: 710, "fontSize": 7, expandedX: 5, expandedY: 15, details: ["test1", "test2"] },
								{ text: "Utilisation", filterable: [], x: 932, y: 717, "fontSize": 7, expandedX: 5, expandedY: 19, details: ["test1", "test2"] }
							],
							[
								{ text: "Recycling", filterable: [], x: 940, y: 740, "fontSize": 7, expandedX: 0, expandedY: 20, details: ["test1", "test2"] },
								{ text: "initiatives", filterable: [], x: 945, y: 747, "fontSize": 7, expandedX: 0, expandedY: 25, details: ["test1", "test2"] }
							],
							[
								{ text: "Sustainable", filterable: [], x: 945, y: 771, "fontSize": 7, expandedX: -90, expandedY: -20, details: ["test1", "test2"] },
								{ text: "Living", filterable: [], x: 945, y: 778, "fontSize": 7, expandedX: -90, expandedY: -15, details: ["test1", "test2"] },
								{ text: "Practices", filterable: [], x: 945, y: 785, "fontSize": 7, expandedX: -90, expandedY: -10, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: "Public", filterable: [], x: 950, y: 645, "fontSize": 7, expandedX: -65, expandedY: 65, details: ["test1", "test2"] },
								{ text: "Health", filterable: [], x: 950, y: 652, "fontSize": 7, expandedX: -65, expandedY: 69, details: ["test1", "test2"] },
								{ text: "Awareness", filterable: [], x: 950, y: 659, "fontSize": 7, expandedX: -65, expandedY: 73, details: ["test1", "test2"] }
							],
							[
								{ text: "Energy", filterable: [], x: 970, y: 680, "fontSize": 7, expandedX: -35, expandedY: -20, details: ["test1", "test2"] },
								{ text: "Conservation", filterable: [], x: 970, y: 687, "fontSize": 7, expandedX: -35, expandedY: -16, details: ["test1", "test2"] },
								{ text: "Culture", filterable: [], x: 970, y: 694, "fontSize": 7, expandedX: -35, expandedY: -12, details: ["test1", "test2"] }
							],
							[
								{ text: "Waste", filterable: [], x: 985, y: 725, "fontSize": 7, expandedX: -20, expandedY: 10, details: ["test1", "test2"] },
								{ text: "Management", filterable: [], x: 985, y: 732, "fontSize": 7, expandedX: -20, expandedY: 14, details: ["test1", "test2"] },
								{ text: "Habits", filterable: [], x: 990, y: 739, "fontSize": 7, expandedX: -20, expandedY: 18, details: ["test1", "test2"] }
							],
							[
								{ text: "Environmental", filterable: [], x: 989, y: 768, "fontSize": 7, expandedX: -115, expandedY: 5, details: ["test1", "test2"] },
								{ text: "Education", filterable: [], x: 995, y: 775, "fontSize": 7, expandedX: -115, expandedY: 9, details: ["test1", "test2"] }
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
								{ text: "Poor", filterable: [], x: 1295, y: 782, "fontSize": 6, expandedX: -40, expandedY: -20, details: ["test1", "test2"] },
								{ text: "health", filterable: [], x: 1295, y: 788, "fontSize": 6, expandedX: -40, expandedY: -16, details: ["test1", "test2"] },
								{ text: "habits", filterable: [], x: 1295, y: 795, "fontSize": 6, expandedX: -40, expandedY: -12, details: ["test1", "test2"] }
							],
							[
								{ text: "High", filterable: [], x: 1278, y: 772, "fontSize": 5, expandedX: -80, expandedY: -40, details: ["test1", "test2"] },
								{ text: "Environmental", filterable: [], x: 1278, y: 777, "fontSize": 5, expandedX: -80, expandedY: -36, details: ["test1", "test2"] },
								{ text: "Impact", filterable: [], x: 1278, y: 782, "fontSize": 5, expandedX: -80, expandedY: -32, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: "Poor Living", filterable: [], x: 1240, y: 740, "fontSize": 5, expandedX: -70, expandedY: -20, details: ["test1", "test2"] },
								{ text: "Conditions", filterable: [], x: 1240, y: 745, "fontSize": 5, expandedX: -70, expandedY: -16, details: ["test1", "test2"] }
							],
							[
								{ text: "Poor Health", filterable: [], x: 1238, y: 760, "fontSize": 5, expandedX: -80, expandedY: 0, details: ["test1", "test2"] },
								{ text: "Habits", filterable: [], x: 1238, y: 765, "fontSize": 5, expandedX: -80, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: "Resource", filterable: [], x: 1230, y: 780, "fontSize": 5, expandedX: 0, expandedY: -10, details: ["test1", "test2"] },
								{ text: "Inefficiency", filterable: [], x: 1230, y: 785, "fontSize": 5, expandedX: 0, expandedY: -5, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: "Initiative", filterable: [], x: 1210, y: 710, "fontSize": 6, expandedX: -50, expandedY: -30, details: ["test1", "test2"] },
								{ text: "Failures", filterable: [], x: 1210, y: 716, "fontSize": 6, expandedX: -50, expandedY: -25, details: ["test1", "test2"] }
							],
							[
								{ text: "Activity Gaps", filterable: [], x: 1195, y: 730, "fontSize": 6, expandedX: -60, expandedY: -10, details: ["test1", "test2"] },
							],
							[
								{ text: "Waste Sorting", filterable: [], x: 1185, y: 745, "fontSize": 6, expandedX: 10, expandedY: 0, details: ["test1", "test2"] },
								{ text: "Failures", filterable: [], x: 1185, y: 751, "fontSize": 6, expandedX: 10, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: "Area", filterable: [], x: 1180, y: 765, "fontSize": 6, expandedX: -60, expandedY: -15, details: ["test1", "test2"] },
								{ text: "Maintenance", filterable: [], x: 1180, y: 771, "fontSize": 6, expandedX: -60, expandedY: -10, details: ["test1", "test2"] },
								{ text: "Issues", filterable: [], x: 1180, y: 777, "fontSize": 6, expandedX: -60, expandedY: -5, details: ["test1", "test2"] }
							]

						]
					],
					[
						4,
						[
							[
								{ text: "Number of", filterable: [], x: 1175, y: 690, "fontSize": 7, "textAnchor": "middle", expandedX: -10, expandedY: 0, details: ["test1", "test2"] },
								{ text: "green space", filterable: [], x: 1175, y: 697, "fontSize": 7, "textAnchor": "middle", expandedX: -10, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: "Recycling", filterable: [], x: 1152, y: 730, "fontSize": 7, "textAnchor": "middle", expandedX: 60, expandedY: 10, details: ["test1", "test2"] },
								{ text: "Negligence", filterable: [], x: 1152, y: 737, "fontSize": 7, "textAnchor": "middle", expandedX: 60, expandedY: 15, details: ["test1", "test2"] }
							],
							[
								{ text: "Unsustainable", filterable: [], x: 1147, y: 765, "fontSize": 7, "textAnchor": "middle", expandedX: -10, expandedY: -10, details: ["test1", "test2"] },
								{ text: "Practices", filterable: [], x: 1147, y: 772, "fontSize": 7, "textAnchor": "middle", expandedX: -10, expandedY: -6, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: "Health", filterable: [], x: 1135, y: 640, "fontSize": 7, expandedX: -5, expandedY: 10, details: ["test1", "test2"] },
								{ text: "Awareness", filterable: [], x: 1135, y: 647, "fontSize": 7, expandedX: -5, expandedY: 15, details: ["test1", "test2"] },
								{ text: "Gaps", filterable: [], x: 1135, y: 654, "fontSize": 7, expandedX: -5, expandedY: 20, details: ["test1", "test2"] }
							],
							[
								{ text: "Energy", filterable: [], x: 1110, y: 680, "fontSize": 7, expandedX: 80, expandedY: 50, details: ["test1", "test2"] },
								{ text: "Waste", filterable: [], x: 1110, y: 687, "fontSize": 7, expandedX: 80, expandedY: 55, details: ["test1", "test2"] },
								{ text: "Habits", filterable: [], x: 1110, y: 694, "fontSize": 7, expandedX: 80, expandedY: 60, details: ["test1", "test2"] }
							],
							[
								{ text: "Poor Waste", filterable: [], x: 1085, y: 730, "fontSize": 7, expandedX: 10, expandedY: -25, details: ["test1", "test2"] },
								{ text: "Practices", filterable: [], x: 1085, y: 737, "fontSize": 7, expandedX: 10, expandedY: -20, details: ["test1", "test2"] }
							],
							[
								{ text: "Environmental", filterable: [], x: 1072, y: 765, "fontSize": 7, expandedX: 10, expandedY: -20, details: ["test1", "test2"] },
								{ text: "Literacy", filterable: [], x: 1085, y: 772, "fontSize": 7, expandedX: -3, expandedY: -15, details: ["test1", "test2"] },
								{ text: "Gaps", filterable: [], x: 1085, y: 779, "fontSize": 7, expandedX: -3, expandedY: -10, details: ["test1", "test2"] }
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
								{ text: "Inflation", filterable: ['Inflation'], x: 795, y: 575, "fontSize": 6, expandedX: 0, expandedY: 25, details: ["test1", "test2"] },
								{ text: "rate", filterable: ['Inflation'], x: 795, y: 581, "fontSize": 6, expandedX: 0, expandedY: 30, details: ["test1", "test2"] }
							],
							[
								{ text: "Foreign", filterable: ['Inflation'], x: 795, y: 550, "fontSize": 6, expandedX: 0, expandedY: 5, details: ["test1", "test2"] },
								{ text: "direct", filterable: ['Inflation'], x: 795, y: 556, "fontSize": 6, expandedX: 0, expandedY: 10, details: ["test1", "test2"] },
								{ text: "investment", filterable: ['Inflation'], x: 795, y: 562, "fontSize": 6, expandedX: 0, expandedY: 15, details: ["test1", "test2"] }
							],
							[
								{ text: "Capital market", filterable: ['Inflation'], x: 832, y: 565, "fontSize": 6, expandedX: 30, expandedY: 55, details: ["test1", "test2"] },
								{ text: "development", filterable: ['Inflation'], x: 832, y: 571, "fontSize": 6, expandedX: 30, expandedY: 60, details: ["test1", "test2"] }
							],
							[
								{ text: "Market", filterable: ['Inflation'], x: 850, y: 584, "fontSize": 6, expandedX: -55, expandedY: 50, details: ["test1", "test2"] },
								{ text: "competition", filterable: ['Inflation'], x: 850, y: 590, "fontSize": 6, expandedX: -55, expandedY: 55, details: ["test1", "test2"] }
							],
							[
								{ text: "Mortgage", filterable: ['Inflation'], x: 885, y: 580, "fontSize": 6, expandedX: -20, expandedY: 5, details: ["test1", "test2"] },
								{ text: "rate", filterable: ['Inflation'], x: 885, y: 586, "fontSize": 6, expandedX: -20, expandedY: 10, details: ["test1", "test2"] }
							],
							[
								{ text: "Export", filterable: ['Inflation'], x: 900, y: 597, "fontSize": 6, expandedX: -105, expandedY: 75, details: ["test1", "test2"] },
								{ text: "Import", filterable: ['Inflation'], x: 900, y: 603, "fontSize": 6, expandedX: -105, expandedY: 80, details: ["test1", "test2"] },
								{ text: "Balance", filterable: ['Inflation'], x: 900, y: 609, "fontSize": 6, expandedX: -105, expandedY: 85, details: ["test1", "test2"] }
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
								{ text: "Debt-to-", filterable: ['Inflation'], x: 792, y: 275, "fontSize": 4, expandedX: 5, expandedY: 50, details: ["test1", "test2"] },
								{ text: "Income", filterable: ['Inflation'], x: 792, y: 280, "fontSize": 4, expandedX: 5, expandedY: 55, details: ["test1", "test2"] },
								{ text: "Ratio", filterable: ['Inflation'], x: 792, y: 285, "fontSize": 4, expandedX: 5, expandedY: 60, details: ["test1", "test2"] }
							],
							[
								{ text: "Financial", filterable: ['Inflation'], x: 802, y: 288, "fontSize": 4, expandedX: 25, expandedY: 70, details: ["test123", "test234"] },
								{ text: "illiteracy", filterable: ['Inflation'], x: 802, y: 292, "fontSize": 4, expandedX: 25, expandedY: 75, details: ["test1", "test2"] }
							],
							[
								{ text: "Income", filterable: ['Inflation'], x: 792, y: 295, "fontSize": 4, expandedX: 15, expandedY: 90, details: ["test1", "test2"] },
								{ text: "mobility", filterable: ['Inflation'], x: 792, y: 300, "fontSize": 4, expandedX: 15, expandedY: 95, details: ["test1", "test2"] },
								{ text: "barriers", filterable: ['Inflation'], x: 792, y: 305, "fontSize": 4, expandedX: 15, expandedY: 100, details: ["test1", "test2"] }
							]
						]
					],
					[
						2,
						[
							[
								{ text: "Income", filterable: ['Inflation'], x: 794, y: 335, "fontSize": 5, expandedX: 5, expandedY: 70, details: ["test1", "test2"] },
								{ text: "instability", filterable: ['Inflation'], x: 794, y: 340, "fontSize": 5, expandedX: 5, expandedY: 74, details: ["test1", "test2"] }
							],
							[
								{ text: "Asset", filterable: [], x: 825, y: 330, "fontSize": 5, expandedX: -10, expandedY: 40, details: ["test1", "test2"] },
								{ text: "depreciation", filterable: ['Inflation'], x: 825, y: 335, "fontSize": 5, expandedX: -10, expandedY: 44, details: ["test1", "test2"] }
							],
							[
								{ text: "Wealth", filterable: ['Inflation'], x: 810, y: 315, "fontSize": 5, expandedX: -10, expandedY: 12, details: ["test1", "test2"] },
								{ text: "deterioration", filterable: ['Inflation'], x: 810, y: 320, "fontSize": 5, expandedX: -10, expandedY: 17, details: ["test1", "test2"] }
							]
						]
					],
					[
						3,
						[
							[
								{ text: "Business", filterable: ['Inflation'], x: 794, y: 380, "fontSize": 6, expandedX: 5, expandedY: 40, details: ["test1", "test2"] },
								{ text: "sustainability", filterable: ['Inflation'], x: 794, y: 386, "fontSize": 6, expandedX: 5, expandedY: 45, details: ["test1", "test2"] },
								{ text: "risks", filterable: ['Inflation'], x: 794, y: 392, "fontSize": 6, expandedX: 5, expandedY: 50, details: ["test1", "test2"] }
							],
							[
								{ text: "Market", filterable: ['Inflation'], x: 835, y: 380, "fontSize": 6, expandedX: -35, expandedY: -60, details: ["test1", "test2"] },
								{ text: "stagnation", filterable: ['Inflation'], x: 835, y: 386, "fontSize": 6, expandedX: -35, expandedY: -55, details: ["test1", "test2"] }
							],
							[
								{ text: "Employment", filterable: ['Inflation'], x: 840, y: 355, "fontSize": 6, expandedX: -25, expandedY: 10, details: ["test1", "test2"] },
								{ text: "issues", filterable: ['Inflation'], x: 840, y: 361, "fontSize": 6, expandedX: 5, expandedY: 15, details: ["test1", "test2"] }
							]
						]
					],
					[
						4,
						[
							[
								{ text: "Imbalanced", filterable: ['Inflation'], x: 795, y: 425, "fontSize": 6, expandedX: 0, expandedY: -80, details: ["test1", "test2"] },
								{ text: "opportunity", filterable: ['Inflation'], x: 795, y: 431, "fontSize": 6, expandedX: 0, expandedY: -75, details: ["test1", "test2"] },
								{ text: "gaps", filterable: ['Inflation'], x: 795, y: 437, "fontSize": 6, expandedX: 0, expandedY: -70, details: ["test1", "test2"] }
							],
							[
								{ text: "Industrial", filterable: ['Inflation'], x: 830, y: 410, "fontSize": 6, expandedX: -30, expandedY: 0, details: ["test1", "test2"] },
								{ text: "decline", filterable: ['Inflation'], x: 830, y: 416, "fontSize": 6, expandedX: -30, expandedY: 5, details: ["test1", "test2"] }
							],
							[
								{ text: "Sector", filterable: ['Inflation'], x: 835, y: 430, "fontSize": 6, expandedX: -30, expandedY: 20, details: ["test1", "test2"] },
								{ text: "stagnation", filterable: ['Inflation'], x: 835, y: 437, "fontSize": 6, expandedX: -30, expandedY: 25, details: ["test1", "test2"] }
							],
							[
								{ text: "Urban-rural", filterable: ['Inflation'], x: 880, y: 385, "fontSize": 6, expandedX: -40, expandedY: -5, details: ["test1", "test2"] },
								{ text: "divide", filterable: ['Inflation'], x: 880, y: 391, "fontSize": 6, expandedX: -40, expandedY: 0, details: ["test1", "test2"] }
							],
							[
								{ text: "Labor", filterable: ['Inflation'], x: 870, y: 410, "fontSize": 6, expandedX: 20, expandedY: 0, details: ["test1", "test2"] },
								{ text: "market", filterable: ['Inflation'], x: 870, y: 416, "fontSize": 6, expandedX: 20, expandedY: 5, details: ["test1", "test2"] },
								{ text: "dysfunction", filterable: ['Inflation'], x: 870, y: 422, "fontSize": 6, expandedX: 10, expandedY: 10, details: ["test1", "test2"] }
							]
						]
					],
					[
						5,
						[
							[
								{ text: "Inflation", filterable: ['Inflation'], x: 795, y: 470, "fontSize": 6, expandedX: 0, expandedY: -110, details: ["test1", "test2"] },
								{ text: "instability", filterable: ['Inflation'], x: 795, y: 476, "fontSize": 6, expandedX: 0, expandedY: -105, details: ["test1", "test2"] }
							],
							[
								{ text: "Misuse of ", filterable: ['Inflation'], x: 795, y: 490, "fontSize": 6, expandedX: 0, expandedY: -10, details: ["test1", "test2"] },
								{ text: "investment", filterable: ['Inflation'], x: 795, y: 496, "fontSize": 6, expandedX: 0, expandedY: -5, details: ["test1", "test2"] }
							],
							[
								{ text: "Market under-", filterable: ['Inflation'], x: 835, y: 485, "fontSize": 6, expandedX: -35, expandedY: -60, details: ["test1", "test2"] },
								{ text: "development", filterable: ['Inflation'], x: 835, y: 491, "fontSize": 6, expandedX: -35, expandedY: -55, details: ["test1", "test2"] }
							],
							[
								{ text: "Export", filterable: ['Inflation'], x: 840, y: 460, "fontSize": 6, expandedX: 20, expandedY: -5, details: ["test1", "test2"] },
								{ text: "concentration", filterable: ['Inflation'], x: 840, y: 466, "fontSize": 6, expandedX: 2, expandedY: 0, details: ["test1", "test2"] },
							],
							[
								{ text: "Mortgage", filterable: ['Inflation'], x: 890, y: 450, "fontSize": 6, expandedX: -40, expandedY: -60, details: ["test1", "test2"] },
								{ text: "market", filterable: ['Inflation'], x: 890, y: 456, "fontSize": 6, expandedX: -40, expandedY: -55, details: ["test1", "test2"] },
								{ text: "failure", filterable: ['Inflation'], x: 890, y: 462, "fontSize": 6, expandedX: -40, expandedY: -50, details: ["test1", "test2"] }
							],
							[
								{ text: "Trade", filterable: ['Inflation'], x: 920, y: 430, "fontSize": 6, expandedX: -20, expandedY: -10, details: ["test1", "test2"] },
								{ text: "imbalance", filterable: ['Inflation'], x: 920, y: 436, "fontSize": 6, expandedX: -20, expandedY: -5, details: ["test1", "test2"] },
							]
						]
					],
				])
			]
		])
	]
])