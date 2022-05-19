function funAbc(x) {
    if (x instanceof String) {
        return 100;
    }
    else if (typeof x == "number") {
        return "abc";
    }
}
console.log(funAbc(12));
