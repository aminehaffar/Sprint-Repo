//Basic Requirements
//1.Fix the syntax & style issues with the three objects below:
{firstName: 'Yan', lastname: 'Fan' } 
 {a: 1, b: 2, c: 3, d: 4} 
 { 
       animal: 'dog',
       noise: 'bark', 
       age: 3, 
       type: 'Golden Retriever',
       color: 'Yellow'
 }

 //2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.
 var person={
    firstName: 'Amine',
    lastName: 'H',
    age: '30',
    hometown: 'Tunis'

 }

 //3.Access the favorite food property in the object using dot notation, and reassign it to a different food.
person.favoriteFood="Pizza";

//4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.

//5.Write a function called emptyObject that takes no parameters and returns an empty object.
function emptyObject(){
    var object={

    }   
    return object;
}

//6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
function addProperty(myObject, key){
    var myObject={animal:'cat',food:'turkey',age:3}
    myObject.key=true; 
    return myObject;
}

//7.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌deleteProperty‌‌ ‌that‌ ‌takes‌ ‌two parameters an‌ ‌object‌ ‌and‌ a key as a string. It then removes the property with that key from the object.
var myObject={animal:'cat',food:'turkey',age:3}
function deleteProperty(myObject, key){
delete myObject.age;
return myObject;
}

//8.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addObjectProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌, ‌and‌ ‌a second ‌object. It then adds a new property with the passed key and the second object as its value.
var person1={name:'Ahmad', role:'worker'};
var person2={name:'Fadi', role:'supervisor'};
function addObjectProperty(person1, key, person2){
person1[key]=person2;
return person1
}

//9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.
var person={firstName:'Leena',lastName:'Atia'}
function addFullNameProperty(object){
object.fullName=person['firstName']+" "+object['lastName']
console.log(object.fullName)
return object
}

//10.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addArrayProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌ ‌and‌ ‌an‌ ‌array.‌ ‌It then adds a new property to the object with the specified key and its value is the array.
function addAddArrayProperty(object, key, array){
object.key=array
return object;
}

//11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console the values of all the object’s properties.
var person={firstName:'Leena',lastName:'Atia'}
function printAllProperties(object){
return Object.values(object);
}

//More Practice
//1.Write a function called removeNumbersLargerThan that takes two parameters, a number and an object. It then removes all properties with values larger than the specified number.
var obj={a:8, b:2, c:'montana'}
function removeNumbersLargerThan(number, object){
for(var key in object){
 if (object[key]>number){
    delete object[key];
}
}    
return object
}

//2.Write a function called removeAllEvenValues that takes an object as a parameter. It then removes all properties with values that are an even number.
var obj={a:9, b:2, c:'montana'};
function removeAllEvenValues(object){
    for(var key in object){
        if (object[key]%2===0){
           delete object[key];
       }
       }    
       return object
       }

//3.Write a function called removePropertiesNotEqualTo10 that takes an object as a parameter. It then removes all properties that are not equal to 10.
var obj={a:10, b:2, c:'montana', d:10, e:'ohio', f:10};
function removePropertiesNotEqualTo10(object){
    for(var key in object){
        if (object[key]!==10){
           delete object[key];
       }
       }    
       return object
       }

