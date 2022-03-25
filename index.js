// CREATING OBJECTS

// const user = {
//     name: "Keli Muthengi",
//     age:23,
//     assets:["car","woman","laptop"],
//     height: 2.3,
//     weight: 70,
//     female: false,
//     myInfo: function() {
//         console.log(this.assets);
//     }
// }

// user.myInfo();
// console.log(this.name)
// toUpper(user.name)

// FUCNTIONS

// let myName = "keli";
// let mySchool = "The University of Nairobi"

// function toUpper(text){

//     let upperred = text.toUpperCase();
//     console.log(upperred)
// }

// toUpper(myName);
// toUpper(mySchool)

// DESTRUCTURING

// var myProfile = {
//     nam:"Keli",
//     age: 25,
//     favoriteMeal:"pussy",
// }

// const {nam,age} = myProfile

// console.log(nam,age)


// var myName ="hefe";

// myName = "keli"
// var a = 5

// var b = 10

// var result = a + b
// console.log(result)


// let textMessage = document.getElementById("message").value;

// document.getElementById("send").onclick = function(){

//     alert("clicked")
//     fetch("https://api.sandbox.africastalking.com/version1/messaging", {
//     headers: {
//         method: "POST",
//         Accept: "application/json",
//         Apikey: "19e593f1358a3eb4afa145c87e783690b73377572e16298087387df4feb13c6a",
//         "Content-Type": "application/x-www-form-urlencoded"
//     },
//     body:"username=sandbox&to=%2B254704354951&message=Hello%20World!&from=4040"
// })
// }
// https://cors-anywhere.herokuapp.com/

// document.getElementById("send").onclick = function(){

//     alert("Clicked!")

//   fetch("https://api.sandbox.africastalking.com/version1/messaging", {
  // body: "username=sandbox&to=%2B254704354951&message=Hello%20World!&from=selluh",
//   headers: {
//     Accept: "application/json",
//     mode:"no-cors",
//     Content_Type:"application/json",
    // Apikey: "19e593f1358a3eb4afa145c87e783690b73377572e16298087387df4feb13c6a",
    // "Content-Type": "application/x-www-form-urlencoded"
//   },
//   method: "POST"
// })
// }



// $.getJSON("https://cors-anywhere.herokuapp.com/https://api.sandbox.africastalking.com/version1/messaging", options)
// .then( data => {
//     console.log(data);
// })


// USE OF AXIOS
// document.getElementById("send").onclick = function(){
// axios.post("https://api.sandbox.africastalking.com/version1/messaging/", {
//   body: "message=Hello%20World!&from=selluh",
//   headers: {
//     Accept: "application.json",
//     username:"sandbox",
//     to:"+254704354951",
//     from:"selluh",
//     Apikey: "19e593f1358a3eb4afa145c87e783690b73377572e16298087387df4feb13c6a",
//     'Content-Type': 'application/x-www-form-urlencoded' 
//   }
// }).then(response => {
//   console.log(response);
// })
// }

// $.ajax({
//   url: "https://api.sandbox.africastalking.com/version1/messaging/",
//   headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   type: "POST", /* or type:"GET" or type:"PUT" */
//   dataType: "json",
//   data: {
//   },
//   success: function (result) {
//       console.log(result);
//   },
//   error: function () {
//       console.log("error");
//   }
// });


const params = new URLSearchParams();
params.append( "username","sandbox");
params.append("to", "+254704354951");
params.append("from","selluh");
params.append("message","Hello");

const config = {
    headers:{
        "Access-Control-Allow-Origin": "*",
	Accept:"application.json",
	Apikey:"19e593f1358a3eb4afa145c87e783690b73377572e16298087387df4feb13c6a",
	"Content-Type": "application/x-www-form-urlencoded"
    }
};
const {response} = axios.post(`https://cors-anywhere.herokuapp.com//https://api.sandbox.africastalking.com/version1/messaging,`, params,config).then(function (response) {
    console.log(response);
  })


