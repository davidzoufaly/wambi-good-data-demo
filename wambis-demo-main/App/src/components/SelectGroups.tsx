import React, { useState } from "react";

import Pencil from "../media/pencil.svg";

import s from "./SelectGroups.module.scss";

const demoValues = [
    { id: "Health", value: "HMH Health System", checked: false },
    { id: "Culture", value: "HMH Culture", checked: false },
    { id: "Experience", value: "HMH HR and Experience Administration", checked: false },
    { id: "Diebert", value: "Tria Diebert's Group", checked: false },
];

const SelectGroups: React.FunctionComponent<any> = ({ setSelectedValues }: any) => {
    const [modal, setModal] = useState(false);
    const [all, setAll] = useState(false);

    let isApplyActive = true;

    const [values, setValues] = useState(demoValues);

    if (values) {
        const unchecked = values.filter(({ checked }: any) => checked === false).length;

        if (unchecked === values.length) {
            isApplyActive = false;
        }
    }

    return (
        <div className={s.SelectGroups}>
            <div onClick={() => setModal(true)} className={s.SelectGroups__GroupFilter}>
                <img className={s.SelectGroups__GroupFilter__Pencil} src={Pencil} alt="pencil" />
                <div className={s.SelectGroups__GroupFilter__PurpleText}>Select groups</div>
            </div>
            {modal && (
                <div className={s.SelectGroups__Modal}>
                    <div className={s.SelectGroups__Modal__FilterColumn}>
                        <div className={s.SelectGroups__Modal__FilterRow}>
                            <input
                                type="checkbox"
                                id="all"
                                name="all"
                                checked={all}
                                onChange={() => {
                                    setValues((values: any) =>
                                        (values || []).map(({ id, value }: any) => ({
                                            id,
                                            value,
                                            checked: !all,
                                        })),
                                    );
                                    setAll((prev: any) => !prev);
                                }}
                            />
                            <label htmlFor="all">All</label>
                        </div>
                        <div className={s.SelectGroups__Line} />
                        {(values || []).map(({ value, checked }: any) => (
                            <div className={s.SelectGroups__Modal__FilterRow}>
                                <input
                                    type="checkbox"
                                    id={value}
                                    name={value}
                                    checked={checked}
                                    onChange={() => {
                                        const inputVal = value;
                                        setValues((values: any) =>
                                            (values || []).map(({ id, value, checked }: any) => ({
                                                id,
                                                value,
                                                checked: inputVal === value ? !checked : checked,
                                            })),
                                        );
                                    }}
                                />
                                <label htmlFor={value}>{value}</label>
                            </div>
                        ))}
                    </div>
                    <div className={s.SelectGroups__ButtonRow}>
                        <button
                            onClick={() => {
                                setValues(demoValues);
                                setModal(false);
                                setAll(false);
                            }}
                            className={s.SelectGroups__ButtonRow__First}
                        >
                            Cancel
                        </button>
                        <button
                            className={
                                isApplyActive
                                    ? `${s.SelectGroups__ButtonRow__Second} ${s["SelectGroups__ButtonRow__Second--active"]}`
                                    : s.SelectGroups__ButtonRow__Second
                            }
                            disabled={!isApplyActive}
                            onClick={() => {
                                const valueIds: any = [];

                                for (let i = 0; i < values.length; i++) {
                                    if (values[i].checked) {
                                        valueIds.push(values[i].id);
                                    }
                                }

                                setSelectedValues(valueIds);
                                setModal(false);
                            }}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectGroups;
