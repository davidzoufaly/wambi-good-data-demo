const getFourthChartLineName = (state: number) => {
    if (state === 0) {
        return "Tria Diebert's Group";
    }
    if (state === 1) {
        return "HMH Health System";
    }
    if (state === 2) {
        return "HMH Culture";
    }
    return "";
};

export default getFourthChartLineName;
