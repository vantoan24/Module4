// enum TaskState{ Created =100, Active, Inactive, Proccess,   Finish}
// interface Task{
//     id: number;
//     name: string;
//     state?: string;
// }
// class TaskService{
//     tasks: Task[];

//     constructor(tasks:Task[]){
//         this.tasks = tasks;
//     }
//     getItems(){
//         return this.tasks;
//     }
// }
// let tasks:Task[] = [
//     {id:1, name: "toan"},
//     {id:2, name: "aasd"}
//     {id:3, name: "aasd" ,state:TaskState.Finish}
// ] ;
// let TaskServiceObj = new TaskService(tasks);
// console.log(TaskServiceObj.getItems());