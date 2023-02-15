//when a function doesnt have the return parameter, such function is called a null function
abc=20;boj=230;
function eva(abc){
   boj = abc *50;
    return console.log(boj);
}
console.log(boj);

var kos;
function goes(n){
    kos=n-1;
    console.log((kos));
    if((kos)>0){
        goes(kos)
    
    }
}
goes(20);

function puto(n){
kos = n+1;
console.log(kos);

if(kos<100)
{puto(kos);}
}
puto(30);
function traditional(n){
   if(n===0){
    return 1;
      }
    {
       return maj = n * traditional(n-1);
     //   console.log(maj);
    }   }
    (traditional(5));
    console.log(maj);


    const body={
      name:"mojeed",
      course:"telecomms",
      age:'54',
    };

    const person ={};
    person.firstname="majid";
    person.lastName="Doe";
    person.age=34;
    person.eyeColor="brown";
  
    for(x=0;x<person;x++){
      console.log(person[x]);
    }

    


    //we are gonna learn how to us getters and setters to make computed properties here..

    const aba={
      clothe:'30bg',
      shoe:'75mahoganay',
      amount:2500,
      bra:function(){
return "love "+ this.shoe;
      },
      get mix()
    {
      return this.clothe;
    }}
    console.log(aba.mix);
    console.log(aba.bra());//WHNE MAKING A CALL back to functions while forgetting the ()
Object.keys(aba).forEach(function(abd){
  console.log(abd);//tis uis used to dsplay only the keys or peorperties of an obnject
  console.log(aba[abd]);//while you can use an item hear, you acncan also use key here as the foreach or method paramete

});