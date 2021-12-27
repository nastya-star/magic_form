module.exports = function() {
    const date = new Date();
    
    let
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

    minute = (minute < 10) ? '0' + minute : minute;
    second = (second < 10) ? '0' + second : second;
    hour = (hour < 10) ? '0' + hour : hour;

    return (
        date.toLocaleDateString() +
        ' '+ 
        hour + 
        ':' + 
        minute + 
        ':' + 
        second
    );
}