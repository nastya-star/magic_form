module.exports = function (username) {
    const regExp = /^(\s{0,}\.{0,}[a-zA-Z]+\s{0,}\.{0,})+$/g;

    return Boolean(username.match(regExp));
}