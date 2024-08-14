// default operator

// function talk(msg="hi"){
//     console.log(msg);
// }

// talk(); 
/*this method is default operator it means that if the parameter has no value 
in its call time then we can call the parameters by in the initilization.*/

// rest operator

function sum(...args){
    let result= 0;
     for(i=0;i<args.length;i++){
        result += args[i];
     }
     console.log(result);
}

sum(4,5,9,7)
/*this method is rest operator it means that we can pass any number of parameters in the function call*/