const getThirdChartLineName = (state: number) => {
    if (state === 0) {
        return "HMH HR and Experience Administration";
    }
    if (state === 1) {
        return "Tria Diebert's Group";
    }
    if (state === 2) {
        return "HMH Health System";
    }
    return "";
};

export default getThirdChartLineName;
