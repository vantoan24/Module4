function useInfo(name, age) {
    return `My name is ${name}, ${age} year ole`;
}
console.log(useInfo("Toan", 19));
function useInfo2(name = "Toàn", age = 20) {
    return `My name is ${name}, ${age} year ole`;
}
console.log(useInfo2());
function useInfo3(name = "Toàn", age) {
    if (age == null) {
        return `My name is ${name}`;
    }
    return `My name is ${name}, ${age} year ole`;
}
console.log(useInfo3("Toan", 19));
