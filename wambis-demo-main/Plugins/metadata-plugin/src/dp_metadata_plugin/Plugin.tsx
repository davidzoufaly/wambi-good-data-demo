// (C) 2021-2022 GoodData Corporation
import {
    CustomDashboardInsightComponent,
    DashboardContext,
    DashboardPluginV1,
    IDashboardCustomizer,
} from "@gooddata/sdk-ui-dashboard";

// this import will be renamed in plugin-toolkit
import entryPoint from "../dp_metadata_plugin_entry/index.js";

import React, { useEffect } from "react";

export class Plugin extends DashboardPluginV1 {
    public readonly author = entryPoint.author;
    public readonly displayName = entryPoint.displayName;
    public readonly version = entryPoint.version;
    public readonly minEngineVersion = entryPoint.minEngineVersion;
    public readonly maxEngineVersion = entryPoint.maxEngineVersion;

    public register(_ctx: DashboardContext, customize: IDashboardCustomizer): void {
        customize.insightWidgets().withCustomDecorator((provider) => (insight, widget) => {
            const InsightDecorator: CustomDashboardInsightComponent = (props) => {
                const Insight = provider(insight, widget);
                const description = insight.insight.summary;

                useEffect(() => {
                    // Hide default Widget Tooltips icons
                    const defaultTooltips = document.querySelectorAll(".dash-item-action-description");
                    defaultTooltips.forEach((item) => {
                        if (item instanceof HTMLElement) {
                            item.style.display = "none";
                        }
                    });

                    // Adjust CSS of Widget Titles
                    const widgetTitles = document.querySelectorAll(".item-headline");
                    widgetTitles.forEach((item) => {
                        if (item instanceof HTMLElement) {
                            item.style.fontWeight = "bold";
                            // TODO: Pass other style here
                        }
                    });
                }, []);

                if (description) {
                    return (
                        <>
                            {/* TODO: Style Description as you wish */}
                            <p>{description}</p>
                            <Insight {...props} />
                        </>
                    );
                }

                return <Insight {...props} />;
            };
            return InsightDecorator;
        });
    }
}
