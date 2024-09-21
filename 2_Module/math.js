function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

//module.exports = add; // here we exports the function named math

// if there is more than one function how to exports

module.exports = {add1:add,sub1:sub}; //here we export all functions in an object and then we can access them like this module.maths.add(2,3);

// we can even exports like this 

// exports.add1 =(a,b) =>a+b;
// exports.sub1=(a,b) =>a-b; but this return a anonymous function


