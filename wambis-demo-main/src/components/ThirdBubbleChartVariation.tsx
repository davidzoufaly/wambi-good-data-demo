import React from "react";
import classNames from "classnames";

import s from "./BubbleChart.module.scss";

const ThirdBubbleChartVariation: React.FunctionComponent = () => (
    <div className={s.BubbleChart__Chart}>
        <div
            className={classNames({
                [s.BubbleChart__Bubble]: true,
                [s["BubbleChart__Bubble--small"]]: true,
                [s["BubbleChart__Bubble--pos-1"]]: true,
            })}
        >
            <div
                className={classNames({
                    [s["BubbleChart__Bubble--big"]]: true,
                    [s["BubbleChart__Bubble--5"]]: true,
                })}
            >
                <div className={s.BubbleChart__Bubble__Text}>Connected</div>
                <div className={s.BubbleChart__Bubble__Percentage}>19%</div>
            </div>
        </div>

        <div
            className={classNames({
                [s.BubbleChart__Bubble]: true,
                [s["BubbleChart__Bubble--small"]]: true,
                [s["BubbleChart__Bubble--pos-2"]]: true,
            })}
        >
            <div
                className={classNames({
                    [s["BubbleChart__Bubble--big"]]: true,
                    [s["BubbleChart__Bubble--3"]]: true,
                })}
            >
                <div className={s.BubbleChart__Bubble__Text}>Compassionate</div>
                <div className={s.BubbleChart__Bubble__Percentage}>36%</div>
            </div>
        </div>

        <div
            className={classNames({
                [s.BubbleChart__Bubble]: true,
                [s["BubbleChart__Bubble--small"]]: true,
                [s["BubbleChart__Bubble--pos-3"]]: true,
            })}
        >
            <div className={s["BubbleChart__Bubble--4"]} />
            <div className={s.BubbleChart__Bubble__Line} />
            <div className={s.BubbleChart__Bubble__Text}>Creative</div>
            <div className={s.BubbleChart__Bubble__Percentage}>10%</div>
        </div>

        <div
            className={classNames({
                [s.BubbleChart__Bubble]: true,
                [s["BubbleChart__Bubble--small"]]: true,
                [s["BubbleChart__Bubble--pos-4"]]: true,
            })}
        >
            <div className={s["BubbleChart__Bubble--2"]} />
            <div className={s.BubbleChart__Bubble__Line} />
            <div className={s.BubbleChart__Bubble__Text}>Collaborative</div>
            <div className={s.BubbleChart__Bubble__Percentage}>16%</div>
        </div>

        <div
            className={classNames({
                [s.BubbleChart__Bubble]: true,
                [s["BubbleChart__Bubble--small"]]: true,
                [s["BubbleChart__Bubble--pos-5"]]: true,
            })}
        >
            <div className={s["BubbleChart__Bubble--1"]} />
            <div className={s.BubbleChart__Bubble__Line} />
            <div className={s.BubbleChart__Bubble__Text}>Courageous</div>
            <div className={s.BubbleChart__Bubble__Percentage}>13%</div>
        </div>
    </div>
);

export default ThirdBubbleChartVariation;
