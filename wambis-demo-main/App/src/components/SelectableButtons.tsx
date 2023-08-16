import classNames from "classnames";
import React from "react";
import s from "./SelectableButtons.module.scss";

const SelectableButtons: React.FunctionComponent<any> = ({ activeItem, setActiveItem }) => {
    return (
        <div className={s.SelectableButtons}>
            <div
                onClick={() => setActiveItem(0)}
                className={classNames({
                    [s.SelectableButtons__Button]: true,
                    [s["SelectableButtons__Button--active"]]: activeItem === 0,
                })}
            >
                All Recognition
            </div>
            <div
                onClick={() => setActiveItem(1)}
                className={classNames({
                    [s.SelectableButtons__Button]: true,
                    [s["SelectableButtons__Button--active"]]: activeItem === 1,
                })}
            >
                Peer-to-Peer
            </div>
            <div
                onClick={() => setActiveItem(2)}
                className={classNames({
                    [s.SelectableButtons__Button]: true,
                    [s["SelectableButtons__Button--active"]]: activeItem === 2,
                })}
            >
                Patient Voice
            </div>
        </div>
    );
};

export default SelectableButtons;
