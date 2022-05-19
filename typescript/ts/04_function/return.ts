function funcNoReturn(): void{
    console.log("funcNoReturn");
}

function funcNoReturnNumber(): number{
    return 6;
}

function funcNoReturnArray(): string[]{
    return ["a","b"];
}

function funcNoReturnAny(): any[]{
    return [5,4];
}


funcNoReturn();
console.log(funcNoReturnNumber());
console.log(funcNoReturnArray());
console.log(funcNoReturnAny());