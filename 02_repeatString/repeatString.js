const repeatString = function(word, num) {
    if(num < 0) return "ERROR";
    let finalWord = "";
    for(let i = 0; i < num; i++){
        finalWord += word;
    }
    return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
