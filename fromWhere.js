function fromWhere(regNum) {
    switch (regNum) {
        case "CY":
            return "Bellville";
        case "CJ":
            return "Paarl";
        case "CA":
            return "Cape Town";
        default:
            return "Somewhere!";
    }
}