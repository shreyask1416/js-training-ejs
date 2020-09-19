"use strict";
function power(x,n)
{
    if(n===0){
        return 1;
    }
    else
    {
        return x* power(x,n-1);
    }

}
console.log(power(6,5));
