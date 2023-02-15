var nus= new Array(5);
nus[0]='monday';
nus[1] = 'tuesday';
nus[2]='wednesday';
nus[3]= 'thursday';
nus[4]='friday';


console.log(nus[0]);
console.log(nus[1]);
console.log(nus[2]);
console.log(nus[3]);
console.log(nus[4]);
//thus we can use the for loop to print iterate through all the elements of an array as belows\
var i;
for(i=0;i<nus.length;i++){
    console.log(nus[i]);
}
var age=[2,33,44,34,23];
var sum=0;
for(i=0;i<age.length;i++){
    sum +=age[i];
   
}


console.log(sum);

//the opposite of the action of split(" ") is toString();ie it converts an array to string however with the aid of commas


//this is used to check the split() methods
 var be ="let there be light";
 var ball=be.split(" ");
 for(i=0;i<ball.length;i++){
    console.log(ball[i]);
 }



 var abc=["mango","apple","coke","rice"];
 var bcd=abc.join("--");//mango--apple--coke--rice
 var bcde=abc.join(",");//you can use join to and the put ur desired separator within the quotes
 var bcdf =abc.join("++");//mango,apple,coke,rice

 var bcdg =abc.toString();//mango,apple,coke,rice
 console.log(bcd);
 console.log(bcde);
 console.log(bcdf);
 console.log(bcdg);

//Popping and Pushing:-why popping is used to remove the last element value out of an array,pushing is used to add new element to an array


var mak=[34,223,12,33];
var ag= mak.pop()//when you display this, automatically, the last element has been popped out or removed from the array
console.log(ag);//[34,223,12]



// for push
var fruits = ["Banana", "Orange", "Apple", "Mango"];
 
console.log(fruits.push("Kiwi"));
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
console.log(fruit);//Orange,Apple,Mango   // so why pop removes the last elemnt, shift removes the first element

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
console.log(fruits.unshift("berrie"))//


//yhe length property provides an easy way to append a new element to an array
//The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);