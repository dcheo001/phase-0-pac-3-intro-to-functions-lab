function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
    const cantanswer = "I can\'t hear you!";
    const yesanswer = "YES INDEED!";
    const loveanswer = "I love you, too.";
    if (string.toLowerCase(string) === string) {
        return cantanswer;
    }
    else if (string.toUpperCase(string) === string) {
        return yesanswer;
    }
    else if ("I love you, Grandma." === string) {
        return loveanswer
    }
}
console.log(sayHiToGrandma("I love you, Grandma."));