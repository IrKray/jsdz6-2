let fArr=[1,1];
let n=parseFloat(prompt('Enter n:'));
for (let i=2; i<=n;i++){
    fArr[i]=fArr[i-2]+fArr[i-1];
}
alert(fArr[fArr.length-2]);