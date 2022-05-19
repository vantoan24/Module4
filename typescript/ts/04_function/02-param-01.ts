//Đầy đủ các tham số
function useInfo(name:string, age:number): string{
    return `My name is ${name}, ${age} year ole`
}
console.log(useInfo("Toan",19));

//Gía trị các tham số mặ định
function useInfo2(name:string = "Toàn", age:number = 20): string{
    return `My name is ${name}, ${age} year ole`
}
console.log(useInfo2());

//Tham số khuyết
function useInfo3(name:string = "Toàn", age?:number): string{
    if(age == null){
        return `My name is ${name}`;
    }
        return `My name is ${name}, ${age} year ole`;

}
console.log(useInfo3("Toan",19));
