export const createArray = (start:number,end:number,step:number) => {
    let arr:string[] = [];
    for(let i=start;i<=end;i+=step){
        arr.push(i < 10 ? ("0" + i.toString()) : i.toString());
    }
    return arr;
}