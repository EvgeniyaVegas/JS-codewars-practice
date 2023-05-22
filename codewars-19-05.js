//Convert a string to an array
function stringToArray(string) {
    return string.split(" ");
}

//DNA to RNA Conversion
function DNAtoRNA(dna) {
    return dna.replace(/[T]/g, "U");
}

//Find Maximum and Minimum Values of a List
var min = function (list) {
    let temp = 0;
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] > list[j]) {
                temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    return list[0];
}

var max = function (list) {
    let temp = 0;
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] < list[j]) {
                temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }
    }
    return list[0];
}

//Smallest value of an array
function min(arr, toReturn) {
    let min = Math.min(...arr);
    if (toReturn === "index") {
        let index = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === min) {
                index = i;
                break;
            }
        }
        return index;
    }
    if (toReturn === "value") {
        return min;
    }
}