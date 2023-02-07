// avg of even no's from array

let array=[1,2,3,4,5,6];
let sum=0;
let count=0;
for(let a=0; a<array.length;a++){
  if(array[a]%2==0){
    sum+=array[a];
    count++;
  }
}
console.log(sum/count);