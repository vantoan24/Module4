function totalLength(x:(string |any []), y:(string[] | string)) : number {
    return x.length + y.length;
}

console.log(totalLength("abc", ['132']));
console.log(totalLength([1, "abc", "def"], ['132']));