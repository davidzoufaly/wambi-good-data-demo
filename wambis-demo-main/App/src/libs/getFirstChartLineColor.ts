const getFirstChartLineColor = (state: number) => {
    if (state === 0) {
        return "rgb(0, 0, 255)";
    }
    if (state === 1) {
        return "rgb(160,32,240)";
    }
    if (state === 2) {
        return "rgb(255, 16, 240)";
    }
    return "";
};

export default getFirstChartLineColor;
