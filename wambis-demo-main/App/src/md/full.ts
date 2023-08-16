/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2023-05-25T11:20:38.579Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import {
    newAttribute,
    newMeasure,
    IAttribute,
    IMeasure,
    IMeasureDefinition,
    idRef,
} from "@gooddata/sdk-model";

/**
 * Attribute Title: Category
 * Attribute ID: Wambis_ValuesSnapshot.category
 */
export const Category: IAttribute = newAttribute("Wambis_ValuesSnapshot.category");
/**
 * Attribute Title: Id
 * Attribute ID: Wambis_ValuesSnapshot.id
 */
export const Id: IAttribute = newAttribute("Wambis_ValuesSnapshot.id");
/**
 * Attribute Title: Category
 * Attribute ID: Wambis_Compassionate.category
 */
export const Category_1: IAttribute = newAttribute("Wambis_Compassionate.category");
/**
 * Attribute Title: Id
 * Attribute ID: Wambis_Compassionate.id
 */
export const Id_1: IAttribute = newAttribute("Wambis_Compassionate.id");
/**
 * Metric Title: % of Compassionate id
 * Metric ID: of_compassionate_id
 * Metric Type: MAQL Metric
 */
export const PercentOfCompassionateId: IMeasure<IMeasureDefinition> = newMeasure(
    idRef("of_compassionate_id", "measure"),
);
/**
 * Attribute Title: Time - Minute
 * Attribute ID: time.minute
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeMinute: IAttribute = newAttribute("time.minute");
/**
 * Attribute Title: Time - Hour
 * Attribute ID: time.hour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeHour: IAttribute = newAttribute("time.hour");
/**
 * Attribute Title: Time - Date
 * Attribute ID: time.day
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeDate: IAttribute = newAttribute("time.day");
/**
 * Attribute Title: Time - Week/Year
 * Attribute ID: time.week
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeWeekYear: IAttribute = newAttribute("time.week");
/**
 * Attribute Title: Time - Month/Year
 * Attribute ID: time.month
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeMonthYear: IAttribute = newAttribute("time.month");
/**
 * Attribute Title: Time - Quarter/Year
 * Attribute ID: time.quarter
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeQuarterYear: IAttribute = newAttribute("time.quarter");
/**
 * Attribute Title: Time - Year
 * Attribute ID: time.year
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeYear: IAttribute = newAttribute("time.year");
/**
 * Attribute Title: Time - Minute of Hour
 * Attribute ID: time.minuteOfHour
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeMinuteOfHour: IAttribute = newAttribute("time.minuteOfHour");
/**
 * Attribute Title: Time - Hour of Day
 * Attribute ID: time.hourOfDay
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeHourOfDay: IAttribute = newAttribute("time.hourOfDay");
/**
 * Attribute Title: Time - Day of Week
 * Attribute ID: time.dayOfWeek
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeDayOfWeek: IAttribute = newAttribute("time.dayOfWeek");
/**
 * Attribute Title: Time - Day of Month
 * Attribute ID: time.dayOfMonth
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeDayOfMonth: IAttribute = newAttribute("time.dayOfMonth");
/**
 * Attribute Title: Time - Day of Year
 * Attribute ID: time.dayOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeDayOfYear: IAttribute = newAttribute("time.dayOfYear");
/**
 * Attribute Title: Time - Week of Year
 * Attribute ID: time.weekOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeWeekOfYear: IAttribute = newAttribute("time.weekOfYear");
/**
 * Attribute Title: Time - Month of Year
 * Attribute ID: time.monthOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeMonthOfYear: IAttribute = newAttribute("time.monthOfYear");
/**
 * Attribute Title: Time - Quarter of Year
 * Attribute ID: time.quarterOfYear
 * @deprecated constants generated for date attributes are deprecated in favor of DateDatasets mapping
 */
export const TimeQuarterOfYear: IAttribute = newAttribute("time.quarterOfYear");
/** Available Date Data Sets */
export const DateDatasets = {
    /**
     * Date Data Set Title: Time
     * Date Data Set ID: time
     */
    Time: {
        ref: idRef("time", "dataSet"),
        identifier: "time",
        /**
         * Date Attribute: Time - Minute
         * Date Attribute ID: time.minute
         */ TimeMinute: {
            ref: idRef("time.minute", "attribute"),
            identifier: "time.minute",
            /**
             * Display Form Title: Time - Minute
             * Display Form ID: time.minute
             */ Default: newAttribute("time.minute"),
        },
        /**
         * Date Attribute: Time - Hour
         * Date Attribute ID: time.hour
         */ TimeHour: {
            ref: idRef("time.hour", "attribute"),
            identifier: "time.hour",
            /**
             * Display Form Title: Time - Hour
             * Display Form ID: time.hour
             */ Default: newAttribute("time.hour"),
        },
        /**
         * Date Attribute: Time - Date
         * Date Attribute ID: time.day
         */ TimeDate: {
            ref: idRef("time.day", "attribute"),
            identifier: "time.day",
            /**
             * Display Form Title: Time - Date
             * Display Form ID: time.day
             */ Default: newAttribute("time.day"),
        },
        /**
         * Date Attribute: Time - Week/Year
         * Date Attribute ID: time.week
         */ TimeWeekYear: {
            ref: idRef("time.week", "attribute"),
            identifier: "time.week",
            /**
             * Display Form Title: Time - Week/Year
             * Display Form ID: time.week
             */ Default: newAttribute("time.week"),
        },
        /**
         * Date Attribute: Time - Month/Year
         * Date Attribute ID: time.month
         */ TimeMonthYear: {
            ref: idRef("time.month", "attribute"),
            identifier: "time.month",
            /**
             * Display Form Title: Time - Month/Year
             * Display Form ID: time.month
             */ Default: newAttribute("time.month"),
        },
        /**
         * Date Attribute: Time - Quarter/Year
         * Date Attribute ID: time.quarter
         */ TimeQuarterYear: {
            ref: idRef("time.quarter", "attribute"),
            identifier: "time.quarter",
            /**
             * Display Form Title: Time - Quarter/Year
             * Display Form ID: time.quarter
             */ Default: newAttribute("time.quarter"),
        },
        /**
         * Date Attribute: Time - Year
         * Date Attribute ID: time.year
         */ TimeYear: {
            ref: idRef("time.year", "attribute"),
            identifier: "time.year",
            /**
             * Display Form Title: Time - Year
             * Display Form ID: time.year
             */ Default: newAttribute("time.year"),
        },
        /**
         * Date Attribute: Time - Minute of Hour
         * Date Attribute ID: time.minuteOfHour
         */ TimeMinuteOfHour: {
            ref: idRef("time.minuteOfHour", "attribute"),
            identifier: "time.minuteOfHour",
            /**
             * Display Form Title: Time - Minute of Hour
             * Display Form ID: time.minuteOfHour
             */ Default: newAttribute("time.minuteOfHour"),
        },
        /**
         * Date Attribute: Time - Hour of Day
         * Date Attribute ID: time.hourOfDay
         */ TimeHourOfDay: {
            ref: idRef("time.hourOfDay", "attribute"),
            identifier: "time.hourOfDay",
            /**
             * Display Form Title: Time - Hour of Day
             * Display Form ID: time.hourOfDay
             */ Default: newAttribute("time.hourOfDay"),
        },
        /**
         * Date Attribute: Time - Day of Week
         * Date Attribute ID: time.dayOfWeek
         */ TimeDayOfWeek: {
            ref: idRef("time.dayOfWeek", "attribute"),
            identifier: "time.dayOfWeek",
            /**
             * Display Form Title: Time - Day of Week
             * Display Form ID: time.dayOfWeek
             */ Default: newAttribute("time.dayOfWeek"),
        },
        /**
         * Date Attribute: Time - Day of Month
         * Date Attribute ID: time.dayOfMonth
         */ TimeDayOfMonth: {
            ref: idRef("time.dayOfMonth", "attribute"),
            identifier: "time.dayOfMonth",
            /**
             * Display Form Title: Time - Day of Month
             * Display Form ID: time.dayOfMonth
             */ Default: newAttribute("time.dayOfMonth"),
        },
        /**
         * Date Attribute: Time - Day of Year
         * Date Attribute ID: time.dayOfYear
         */ TimeDayOfYear: {
            ref: idRef("time.dayOfYear", "attribute"),
            identifier: "time.dayOfYear",
            /**
             * Display Form Title: Time - Day of Year
             * Display Form ID: time.dayOfYear
             */ Default: newAttribute("time.dayOfYear"),
        },
        /**
         * Date Attribute: Time - Week of Year
         * Date Attribute ID: time.weekOfYear
         */ TimeWeekOfYear: {
            ref: idRef("time.weekOfYear", "attribute"),
            identifier: "time.weekOfYear",
            /**
             * Display Form Title: Time - Week of Year
             * Display Form ID: time.weekOfYear
             */ Default: newAttribute("time.weekOfYear"),
        },
        /**
         * Date Attribute: Time - Month of Year
         * Date Attribute ID: time.monthOfYear
         */ TimeMonthOfYear: {
            ref: idRef("time.monthOfYear", "attribute"),
            identifier: "time.monthOfYear",
            /**
             * Display Form Title: Time - Month of Year
             * Display Form ID: time.monthOfYear
             */ Default: newAttribute("time.monthOfYear"),
        },
        /**
         * Date Attribute: Time - Quarter of Year
         * Date Attribute ID: time.quarterOfYear
         */ TimeQuarterOfYear: {
            ref: idRef("time.quarterOfYear", "attribute"),
            identifier: "time.quarterOfYear",
            /**
             * Display Form Title: Time - Quarter of Year
             * Display Form ID: time.quarterOfYear
             */ Default: newAttribute("time.quarterOfYear"),
        },
    },
};
export const Insights = {
    /**
     * Insight Title: ValuesSnapshot
     * Insight ID: d0ba50a8-959f-42c3-9848-de114afaf2ff
     */
    ValuesSnapshot: "d0ba50a8-959f-42c3-9848-de114afaf2ff",
    /**
     * Insight Title: Wambis_Compassionate
     * Insight ID: 0ece1ca0-0c27-4384-86a4-def43337850c
     */ WambisCompassionate: "0ece1ca0-0c27-4384-86a4-def43337850c",
};
export const Dashboards = {};
