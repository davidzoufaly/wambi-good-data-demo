import React from "react";
import classNames from "classnames";

import s from "./BubbleChart.module.scss";
import { DataViewFacade } from "@gooddata/sdk-ui";

interface IFirstBubbleChartVariation {
    dataViewFacade: DataViewFacade;
}

const FirstBubbleChartVariation: React.FunctionComponent<IFirstBubbleChartVariation> = ({
    dataViewFacade,
}: IFirstBubbleChartVariation) => {
    const data: any = dataViewFacade.dataView.data[0]!;
    const count = data.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0);

    return (
        <div className={s.BubbleChart__Chart}>
            {dataViewFacade.dataView.headerItems[1][0].map((header: any, idx: number) => {
                const name = header.attributeHeaderItem.name;
                const value = data[idx];

                return (
                    <>
                        {value > 18 ? (
                            <div
                                className={classNames({
                                    [s.BubbleChart__Bubble]: true,
                                    [s[`BubbleChart__Bubble--pos-${idx + 1}`]]: true,
                                })}
                            >
                                <div
                                    style={{ width: `${value * 5}px`, height: `${value * 5}px` }}
                                    className={classNames({
                                        [s["BubbleChart__Bubble--big"]]: true,
                                        [s[`BubbleChart__Bubble--${idx + 1}`]]: true,
                                    })}
                                >
                                    <div className={s.BubbleChart__Bubble__Text}>{name}</div>
                                    <div className={s.BubbleChart__Bubble__Percentage}>
                                        {(value * 100) / count}%
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className={classNames({
                                    [s.BubbleChart__Bubble]: true,
                                    [s[`BubbleChart__Bubble--pos-${idx + 1}`]]: true,
                                })}
                            >
                                <div
                                    style={{ width: `${value * 5}px`, height: `${value * 5}px` }}
                                    className={s[`BubbleChart__Bubble--${idx + 1}`]}
                                />
                                <div className={s.BubbleChart__Bubble__Line} />
                                <div className={s.BubbleChart__Bubble__Text}>{name}</div>
                                <div className={s.BubbleChart__Bubble__Percentage}>
                                    {(value * 100) / count}%
                                </div>
                            </div>
                        )}
                    </>
                );
            })}
        </div>
    );
};

export default FirstBubbleChartVariation;
