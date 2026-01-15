const sumAll = function(a,b) {
    var sum = 0;
    if(a < 0 || b<0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return ("ERROR");
    }else if(a > b){
        for(var i = b; i<=a;i++){
            sum+=i;
        }
    }else{
        for(var i = a; i<=b;i++){
            sum+=i;
        }
    }

    return sum;
};

console.log(sumAll(2,'tacos'));

// Do not edit below this line
module.exports = sumAll;
