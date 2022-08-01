// // var main = document.querySelector('#name');
// // var temp = document.querySelector('.temp');
// // var desc = document.querySelector('.desc');
// // var clouds = document.querySelector('.clouds');


// async function showData() {
//   var url2 = "https://api.publicapis.org/entries"
// var url =  "https://platform.sensenuts-ei.com:4000/login" ;
// let fetchingdata = await fetch(url2 , {
//   method: 'GET', 
//   // body: 
//   //   {
//   //     "uname": "adfsd",
//   //     "password": "adfs"
//   // }
  
// })
// .then((res) => {
//   console.log(res.json())
// }).then(data => {
//   console.log(data)
// })
// // .then(data => {
// //   console.log(data)
// //   var tempValue = data['main']['temp'];
// //   var nameValue = data['name'];
// //   var descValue = data['weather'][0]['description'];

// //   main.innerHTML = "Current Temp \n" +nameValue;
// //   desc.innerHTML = "Description - "+descValue;
// //   temp.innerHTML = "Temp(&#8451) = "+tempValue;
// // })

// .catch(err => alert(err));
// }

// showData()


async function getUsers() {
  var url =  "https://platform.sensenuts-ei.com:4000/login" ;
  let url2= "https://api.publicapis.org/entries"
  console.log("wfg")
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Afs")
    console.log(data)
    
  })



}

getUsers()