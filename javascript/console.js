
/*for(let i=0;i<=10000;i++){
    console.log("aatmdeep vidyalaya");
}
*/

/*for(let i=0;i<=100;i++){
if(i%2===0){
    console.log(i);
   
}

}*/

/*let num=25;

let usernum=prompt("guess the number=");

while(usernum!=num){
  username=prompt("u have the wrong number.guess again"  );
}
console.log("congrats u guess the right num= :");
*/

/*let str="Nidhi";

console.log(str[0]);
*/

/*let obj={
    item:"pen",
    price:10,

}
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
*/

/* let marks=[97,82,75,64,36];
for(let mark of marks){
    console.log(mark);
} */
/*let fooditems=["potato","apple","litchi","tomato"];

console.log(fooditems);
fooditems.push("burger","chips","paneer");


console.log(fooditems);
fooditems.pop("tomato");
*/

/* function myfunction(){
    console.log("welcome to apna college");
    console.log("we are learning javascript");

}
myfunction();
*/

/* function myfunction(msg){
    //parameter->input
    console.log(msg);
}
myfunction("i love js"); //argument
*/
/*function sum(x,y){
    console.log(x+y);
}*/

//arrow function

/* const arrowSum=(a,b) => {
    console.log(a+b);
};
*/
/* function countvowels(str){
    //"apna college",count=5
    let count=0;
    for(const char of str){
        if(char=== "a"|| char === "e" || char==="i" ||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}
const countvow = (str) => {
//"apna college",count=5
let count=0;
for(const char of str){
    if(char=== "a"|| char === "e" || char==="i" ||char==="o"||char==="u"){
        count++;
    }
}
console.log(count);

}*/

//CALLBACK FUNCTION
//map method

let nums =[67,52,39];
let newarr = nums.map((val) => {
    return val*2;
});
console.log(newarr);

let calcsquare = (num) => {
console.log(num*num);
};
