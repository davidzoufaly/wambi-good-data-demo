const getSecondChartLineName = (state: number) => {
    if (state === 0) {
        return "HMH Culture";
    }
    if (state === 1) {
        return "HMH HR and Experience Administration";
    }
    if (state === 2) {
        return "Tria Diebert's Group";
    }
    return "";
};

export default getSecondChartLineName;
