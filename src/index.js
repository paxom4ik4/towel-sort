module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
        let value = [...matrix[i]];
        if (i % 2) {
            value.reverse();
        }
        else{
            arr.push(...value);
        }
    }
    return arr;
}
