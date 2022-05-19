// function funAbc(x: string): number {
//     return 100;
// }

// function funAbc(x: number): string {
//     return "abc";
// }
// funAbc(2);
function funAbc(x:string):number;
function funAbc(x:number):string;
function funAbc(x:any):any{
    if(x instanceof String){
        return 100;
    }else if(typeof x == "number"){
        return "abc";
    }
}
console.log(funAbc(12));