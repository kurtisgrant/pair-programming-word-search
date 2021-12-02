const transpose = require('./transpose2D');

const wordSearch = (letters2D, word) => {
    const rowsJoined = letters2D.map(ls => ls.join(''));
    const colsJoined = transpose(letters2D).map(ls => ls.join(''));
    for (l of rowsJoined) {
        if (l.includes(word)) return true;
    }
    for (l of colsJoined) {
        if (l.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch;