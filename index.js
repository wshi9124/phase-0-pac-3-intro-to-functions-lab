function shout(string) {
return string.toUpperCase()
} 

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    const noHear= "I can't hear you!"
    const loud= "YES INDEED!"
    const dinner= "I would love to!"

    if (string === string.toLowerCase(string)) {
        return noHear}
    else if(string === string.toUpperCase(string)) {
        return loud}
    else if(string === "Let's have dinner together!" ) {
        return dinner}
    
}


