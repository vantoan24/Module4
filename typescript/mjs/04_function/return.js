function funcNoReturn() {
    console.log("funcNoReturn");
}
function funcNoReturnNumber() {
    return 6;
}
function funcNoReturnArray() {
    return ["a", "b"];
}
function funcNoReturnAny() {
    return [5, 4];
}
funcNoReturn();
console.log(funcNoReturnNumber());
console.log(funcNoReturnArray());
console.log(funcNoReturnAny());
