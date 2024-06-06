// var arr = [23, 32 , 45, 100, -1, 2, 5, 34, 89];

// var res_arr = arr.filter((val,index,arr)=>{
//     return val > 50;
// })

// console.log(res_arr);

const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((item) => item * 2);
// console.log(doubled); 



const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); 

