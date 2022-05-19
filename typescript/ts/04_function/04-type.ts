function useInfo5(name:string, age:number): string{
    return `My name is ${name}, ${age} year ole`
}

let useInfo6 = function(name:string, age: number){
    return `My name is ${name}, ${age} year ole`

}

let useInfo7:(name:string, age:number) => string
    =function(name,age) {
     return `My name is ${name}, ${age} year ole`
    }

console.log(useInfo5("toan",5));
console.log(useInfo6("toan",5));
console.log(useInfo7("toan",19));
