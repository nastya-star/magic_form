module.exports = function (username) {
    const regExp = /^([a-zA-Z]|([a-zA-Z]+\.+\s+[a-zA-Z])|([a-zA-Z]+\s+[a-zA-Z])|([a-zA-Z]+\.+[a-zA-Z]))+$/g;

    return Boolean(username.match(regExp));
}