import React from "react";
import Page from "../components/Page";

import styles from "./Welcome.module.scss";

import successUri from "../media/success.svg";

const Welcome: React.FC = () => {
    return (
        <Page>
            <div className={styles.Lead}>
                <h1>
                    <img src={successUri} alt="" />
                    <br />
                    Wambis Demos
                </h1>
            </div>
        </Page>
    );
};

export default Welcome;
