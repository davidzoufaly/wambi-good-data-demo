import React from "react";

import Page from "../components/Page";

import s from "./Charts.module.scss";
import DemoLineChart from "../components/DemoLineChart";
import BubbleChart from "../components/BubbleChart";

const Charts: React.FC = () => {
    return (
        <Page className={s.Charts}>
            <DemoLineChart />
            <BubbleChart />
        </Page>
    );
};

export default Charts;
