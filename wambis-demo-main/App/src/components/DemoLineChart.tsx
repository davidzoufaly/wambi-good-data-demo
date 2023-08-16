import React, { useState } from "react";

import s from "./LineChart.module.scss";
import SelectGroups from "./SelectGroups";
import { LineChart } from "@gooddata/sdk-ui-charts";
import { idRef, newMeasure, newPositiveAttributeFilter } from "@gooddata/sdk-model";
import { Category_1, DateDatasets, Insights } from "../md/full";
import SelectableButtons from "./SelectableButtons";
import getFirstChartLineName from "../libs/getFirstChartLineName";
import getSecondChartLineName from "../libs/getSecondChartLineName";
import getThirdChartLineName from "../libs/getThirdChartLineName";
import getFourthChartLineName from "../libs/getFourthChartLineName";
import getSecondChartLineColor from "../libs/getSecondChartLineColor";
import getFirstChartLineColor from "../libs/getFirstChartLineColor";
import getFourthChartLineColor from "../libs/getFourthChartLineColor";
import getThirdChartLineColor from "../libs/getThirdChartLineColor";
import { InsightView } from "@gooddata/sdk-ui-ext";

const DemoLineChart: React.FunctionComponent<any> = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [selectedValues, setSelectedValues]: any = useState(["Health", "Culture", "Experience", "Diebert"]);

    const measures = [newMeasure(idRef("of_compassionate_id", "measure"), (m) => m.format("#,##0%"))];

    const colors = [];
    const includesCulture = !!selectedValues.includes("Culture");
    const includesExperience = !!selectedValues.includes("Experience");
    const includesHealth = !!selectedValues.includes("Health");
    const includesDiebert = !!selectedValues.includes("Diebert");
    const attributeInValues: string[] = [];
    if (includesCulture) {
        attributeInValues.push("HMH Culture");
        colors.push(getSecondChartLineColor(activeItem));
    }
    if (includesExperience) {
        attributeInValues.push("HMH HR and Experience Administration");
        colors.push(getThirdChartLineColor(activeItem));
    }
    if (includesHealth) {
        attributeInValues.push("HMH Health System");
        colors.push(getFirstChartLineColor(activeItem));
    }
    if (includesDiebert) {
        attributeInValues.push("Tria Diebert's Group");
        colors.push(getFourthChartLineColor(activeItem));
    }
    const attributeFilter = newPositiveAttributeFilter(Category_1, attributeInValues);

    const firstLineTitle = getFirstChartLineName(activeItem);
    const secondLineTitle = getSecondChartLineName(activeItem);
    const thirdLineTitle = getThirdChartLineName(activeItem);
    const fourthLineTitle = getFourthChartLineName(activeItem);

    return (
        <div className={s.LineChart}>
            <div className={s.LineChart__Title}>Recognition this year within GoodData.UI SDK</div>
            <div style={{ width: "100%", marginTop: "32px" }} className={s.LineChart__Row}>
                <div className={s.LineChart__Title}>Group Trends</div>
                <div className={s.LineChart__Row}>
                    <SelectableButtons activeItem={activeItem} setActiveItem={setActiveItem} />
                </div>
            </div>
            <div className={s.LineChart__Paragraph}>
                See how your team has recognized <mark>Compassionate</mark> moments in the past 12 months.
            </div>
            <div style={{ width: "100%", marginTop: "12px" }} className={s.LineChart__Row}>
                <div className={s.LineChart__Row}>
                    {includesHealth && (
                        <div className={s.LineChart__Row}>
                            <div
                                style={{
                                    background: "rgb(0, 0, 255)",
                                    borderRadius: "50%",
                                    width: "12px",
                                    height: "12px",
                                    marginRight: "8px",
                                }}
                            />
                            <div className={s.LineChart__LineName}>{firstLineTitle}</div>
                        </div>
                    )}
                    {includesCulture && (
                        <div className={s.LineChart__Row}>
                            <div
                                style={{
                                    background: "rgb(0,255,0)",
                                    borderRadius: "32px",
                                    width: "20px",
                                    height: "4px",
                                    marginRight: "8px",
                                }}
                            />
                            <div className={s.LineChart__LineName}>{secondLineTitle}</div>
                        </div>
                    )}
                    {includesExperience && (
                        <div className={s.LineChart__Row}>
                            <div
                                style={{
                                    background: "rgb(255, 16, 240)",
                                    borderRadius: "32px",
                                    width: "20px",
                                    height: "4px",
                                    marginRight: "8px",
                                }}
                            />
                            <div className={s.LineChart__LineName}>{thirdLineTitle}</div>
                        </div>
                    )}
                    {includesDiebert && (
                        <div className={s.LineChart__Row}>
                            <div
                                style={{
                                    background: "rgb(160,32,240)",
                                    borderRadius: "32px",
                                    width: "20px",
                                    height: "4px",
                                    marginRight: "8px",
                                }}
                            />
                            <div>{fourthLineTitle}</div>
                        </div>
                    )}
                </div>

                {activeItem === 0 && <SelectGroups setSelectedValues={setSelectedValues} />}
            </div>
            <div className={s.LineChart__Chart}>
                <LineChart
                    measures={measures}
                    segmentBy={Category_1}
                    trendBy={DateDatasets.Time.TimeMonthYear.Default}
                    config={{
                        legend: { enabled: false },
                        yaxis: { visible: true, name: { visible: false } },
                        xaxis: { visible: true, name: { visible: false } },
                        colors,
                        dataPoints: {
                            visible: false,
                        },
                    }}
                    filters={[attributeFilter]}
                />
            </div>

            <div className={s.LineChart__Title_2}>
                Recognition this year within GoodData.UI SDK using InsightView Component.
            </div>
            <div style={{ height: "500px" }}>
                <InsightView insight={Insights.WambisCompassionate} />
            </div>
        </div>
    );
};

export default DemoLineChart;
