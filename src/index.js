module.exports = function reverse(n) {
    return +String(n)
        .split("")
        .filter((c) => c != "-")
        .reverse()
        .join("");
};
