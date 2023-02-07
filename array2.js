// changing negatives values to zero from given array

let a=[ 1,-1,-1,0,6];

for(let i=0; i<a.length; i++){
  if(a[i]<0){
    a[i]=0;
  }
}
console.log(a);
