let a="school";
let b="";
let d="";
  let c=a.length-1;
for(let i=(a.length/2)-1 ; i>=0; i--){
  b = b + a[i];

  if(c>=(a.length)/2){
    d+= a[c];
    c--;
    
  }

}
console.log(b+d);
//hcsloo
//a[2],a[1],a[0],a[5],a[4],a[3]
//for(let c=(a.length)-1; c>=(a.length/2); c--){
//  d+=a[c];