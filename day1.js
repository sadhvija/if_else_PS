num=prompt("enter any number")
s=""
for(n of num){
    if(n>1){
        c=0
        for(i=2;i<num;i++){
            if(n%i==0){
                c++
                break
            }
        }
        if(c==0){
            s=s+n
        }
    }
    console.log(s)
}