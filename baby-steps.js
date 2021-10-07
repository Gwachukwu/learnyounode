const addSumOfArgv = ()=>{

const arr = [...process.argv];

let sum = 0;

arr.forEach(num=>{
    if(arr.indexOf(num) !== 0 && arr.indexOf(num) !== 1){
        sum += +num;
    }
})
console.log(sum);
}

addSumOfArgv();