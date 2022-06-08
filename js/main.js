//linear search
function linearSearch(arr, val) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] == val) {
            return i;

        }

    }
    return 'Not found';
}
//console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'm'));


//find out longest string and position from array
function longestString(names) {
    var longestWord = '';
    for (var name of names) {
        if (name.length > longestWord.length) {
            longestWord = name;
        }

    }
    return [longestWord, name.indexOf(longestWord)];

}
//console.log(longestString(['arif jarif', 'arif hossain', 'akash', 'sad']));

//find falsey value
const mixedArr = [
    'lws', undefined, 'Arif Hossain', false, '', 'apple', 40, true, 'Thanks', NaN
];
//const trueArray = mixedArray.filter(Boolean);
// console.log(trueArray);

const obj = {
    a: 'lws',
    b: undefined,
    c: 'Arif Hossain',
    d: false,
    e: '',
    f: 'apple',
    g: 40,
    h: true,
    i: 'Thanks',
    j: NaN
};
const truthObject = function(obj) {
    for (let i in obj) {
        if (!obj[i]) {
            delete obj[i];

        }
    }
    return obj;
}
console.log(truthObject(obj));