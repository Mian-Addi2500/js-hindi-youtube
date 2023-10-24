for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);
}

for (let i = 0; i <= 10; i++) {
   // console.log(`Outter Value is : ${i}`);
    for (let j = 0; j <=10 ; j++) {
       // console.log(`Inner loop : ${j} and Outter Loop Valte is : ${i}`);
        
    }
    
}
for (let i = 0; i <= 10; i++) {
   // console.log(`Outter Value is : ${i}`);
    for (let j = 0; j <=10 ; j++) {
       // console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}
 
let myFav = ['egg' , 'fish' , 'babar' , 1 , 'a']
for (let index = 0; index < myFav.length; index++) {
    const element = myFav[index];
   // console.log(element);
}
/* for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Dectected ${i}`);
        break
    }
    console.log(`Value is : ${i} `);
    
} */
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
       // console.log(`Dectected ${i}`);
       continue
    }
   // console.log(`Value is : ${i} `);
    
}

//************** For of loop *********** */

const arr = [1,2,3,4]
for (const value of arr) {
    //console.log(value);
}
const myMap = new Map()
myMap.set ('pak' , 'pakistan')
myMap.set ('ind' , 'India')
myMap.set ('Uk' , 'United Kindowm')

 for (const [key , value] of myMap) {
   // console.log(key , value);
 }
 for (const [key] of myMap) {
   // console.log(key );
 }

 const strr = "Hellow Word"
 for (const i of strr) {
    if(i == " "){
        //console.log(i);
        break 
    }
   // console.log(i);
 }


 /******** For In Loop ********* */
 const array = [2,4,6,8]
 for (const key in array) {
  // console.log(array[key]);
 }

 const srtt = 'pakistan'
 for (const key in srtt) {
    //console.log(srtt[key]);
 }
 const obj = {
    'js' : "javascript",
    'cpp' : "c++",
    'py' : "python",
 }
for (const  i in obj) {
   // console.log(i , obj[i]);
}


/******* for Each Loop ******** */

const fruits = ['Apple' , 'Banana' , 'Graps']
fruits.forEach((item)=>{
//console.log(item);
})
const student= [
    {
    "Name" : "Addi",
    "Age" : 26,
    "Gender" : "Male"
},
    {
    "Name" : "kami",
    "Age" : 36,
    "Gender" : "Male"
},
    {
    "Name" : "themmi",
    "Age" : 25,
    "Gender" : "female"
}
]
student.forEach((item )=>{
//console.log(item.Name );
})



/********  filter ************ */

const gag = [ 1 , 2 , 3 , 4]
 const value = gag.filter( (num) => (num > 2) )
 //console.log(value);

 //Example:

 const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBook = books.filter( (bk) =>bk.genre === "History" )
       userBook = books.filter( (bk) =>
       {
         return bk.genre === "History" && bk.publish >= 1996
    }
         )
  //console.log(userBook);


  /********* Maps ********** */

  const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let mapResult = myNumers
                         .map( (num) => num*10)
                         .map( (num) => num + 10)
                         .filter( (num) => num >= 60)
                         
 // console.log(mapResult);


 /********** Reduce ******** */

 const x = [1 , 2 , 3]
 let reduceResult = x.reduce ( (acc , acval) =>{
   return acc + acval
 },0)
 //console.log(reduceResult); 

 //Example:
 const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const toPay = shoppingCart.reduce( (acc , pr)=>(acc+pr.price),0)
//console.log(toPay);













