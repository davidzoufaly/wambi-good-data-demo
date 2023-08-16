const getFirstChartLineName = (state: number) => {
    if (state === 0) {
        return "HMH Health System";
    }
    if (state === 1) {
        return "HMH Culture";
    }
    if (state === 2) {
        return "HMH HR and Experience Administration";
    }
    return "";
};

export default getFirstChartLineName;
