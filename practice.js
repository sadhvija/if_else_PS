//-1 to -10 without using >=
num=+prompt("enter a number")
for(i=-1;!(i<=num);i--)
    console.log(i)//input -11
//-num t0 -1 without using <=
num1=+prompt("enter a number")
for(j=num1;!(j>=0);j++)
    console.log(j)//input -10
//sum of even digits in a number
num=prompt("enter a number")//1287
sum=0
for(i=1;i<num.length;i++){
    if(num[i]%2==0){
        sum=sum+Number(num[i])
    }
}
console.log(sum)//10
//sum of odd digits in anumber
num=prompt("enter any number")//1811
sum=0
if(num>0){
    for(i=0;i<num.length;i++)
       if(num[i]%2!=0){
            sum=sum+Number(num[i])
        }       
}
console.log(sum)//3