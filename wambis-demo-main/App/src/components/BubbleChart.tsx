import React, { useEffect, useState } from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { Insights } from "../md/full";
import s from "./BubbleChart.module.scss";
import SelectableButtons from "./SelectableButtons";
import FirstBubbleChartVariation from "./FirstBubbleChartVariation";
import ThirdBubbleChartVariation from "./ThirdBubbleChartVariation";
import SecondBubbleChartVariation from "./SecondBubbleChartVariation";
import { LoadingComponent, useInsightDataView } from "@gooddata/sdk-ui";
import { idRef } from "@gooddata/sdk-model";

const BubbleChart: React.FunctionComponent = () => {
    const insight = idRef(Insights.ValuesSnapshot);

    const { result } = useInsightDataView({
        insight,
    });

    const [loading, setLoading] = useState(true);
    const [activeItem, _setActiveItem] = useState(0);

    const setActiveItem = (val: number) => {
        _setActiveItem(val);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const dataViewFacade = result;

    if (loading || dataViewFacade === undefined) {
        return (
            <div className={s.BubbleChart}>
                <div className={s.BubbleChart__Title}>Values Snapshot</div>
                <div className={s.BubbleChart__Paragraph}>
                    See how your team is living your organizational values based on recently shared
                    recognition from patients and peers.
                </div>
                <div style={{ height: "500px" }}>
                    <LoadingComponent />
                </div>
                <div className={s.BubbleChart__Footer}>
                    <SelectableButtons activeItem={activeItem} setActiveItem={setActiveItem} />
                    <div className={s.BubbleChart__Footer__Text}>
                        % of <mark>40,298 Wambis</mark>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={s.BubbleChart}>
            <div className={s.BubbleChart__Title}>Values Snapshot within GoodData.UI SDK</div>
            <div style={{ height: "500px" }}>
                <InsightView insight={insight} />
            </div>

            <div style={{ height: "40px" }} />

            <div className={s.BubbleChart__Title}>
                Values Snapshot within GoodData.UI SDK + Custom Implementation
            </div>
            <div className={s.BubbleChart__Paragraph}>
                See how your team is living your organizational values based on recently shared recognition
                from patients and peers.
            </div>
            {activeItem === 0 && <FirstBubbleChartVariation dataViewFacade={dataViewFacade!} />}
            {activeItem === 1 && <SecondBubbleChartVariation />}
            {activeItem === 2 && <ThirdBubbleChartVariation />}
            <div className={s.BubbleChart__Footer}>
                <SelectableButtons activeItem={activeItem} setActiveItem={setActiveItem} />
                <div className={s.BubbleChart__Footer__Text}>
                    % of <mark>40,298 Wambis</mark>
                </div>
            </div>
        </div>
    );
};

export default BubbleChart;
