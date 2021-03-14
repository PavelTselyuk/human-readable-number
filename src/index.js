module.exports = function toReadable(number) {
    let returnedStr = '';
    if (number == 0) return 'zero';
    let dictionnary = {
        "3": {
            "1": "one hundred ",
            "2": "two hundred ",
            "3": "three hundred ",
            "4": "four hundred ",
            "5": "five hundred ",
            "6": "six hundred ",
            "7": "seven hundred ",
            "8": "eight hundred ",
            "9": "nine hundred ",
            "0": "",
        },
        "2": {
            "2": "twenty ",
            "3": "thirty ",
            "4": "forty ",
            "5": "fifty ",
            "6": "sixty ",
            "7": "seventy ",
            "8": "eighty ",
            "9": "ninety ",
            "0": "",
        },
        "1": {
            "0": "",
            "1": "one",
            "2": "two",
            "3": "three",
            "4": "four",
            "5": "five",
            "6": "six",
            "7": "seven",
            "8": "eight",
            "9": "nine",
            "10": "ten",
            "11": "eleven",
            "12": "twelve",
            "13": "thirteen",
            "14": "fourteen",
            "15": "fifteen",
            "16": "sixteen",
            "17": "seventeen",
            "18": "eighteen",
            "19": "nineteen",
        }
    }
    let arrFromNimber = String(number).split('');
    for (let i = arrFromNimber.length; i > 0; i--) {
        if (i == 2 && arrFromNimber[arrFromNimber.length-2] == 1) {
            --i;
            let num = arrFromNimber[arrFromNimber.length - 1]
            returnedStr += dictionnary[String("1")][+num + 10];
            console.log(returnedStr);
            break;
        }
        returnedStr += dictionnary[String(i)][arrFromNimber[arrFromNimber.length - i]];
    }
    // returnedStr = returnedStr.slice(0, (returnedStr.length - 1));
    console.log(returnedStr);
    if (returnedStr.endsWith(' ')) { returnedStr = returnedStr.slice(0, (returnedStr.length - 1)); }
    return returnedStr.endsWith(' ') ? returnedStr.slice(0, (returnedStr.length - 1)) : returnedStr;
}
