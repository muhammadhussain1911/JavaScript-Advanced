// const promise1 = new Promise(function (resolve, reject) { // Method 1. First hold Promise in a variable and then apply "then".
//     setTimeout(function() {
//         console.log('1 second passed. Program executed successfully.');
//         resolve()
//     }, 1000)
// })

// promise1.then(function() {
//     console.log("Promise1 consumed.");
    
// })

// new Promise(function(resolve, reject) { // Method 2. We have not hold Promise in a variable and directly apply "then".
//     setTimeout(function(){
//         console.log('2 second passed. Program2 executed successfully.');
//         resolve()
//     }, 2000)
// }).then(function(){
//     console.log("Promise2 consumed.");
    
// })

// const promise3 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Promise 3 is executing");
//         resolve({username: "muhammadhussain1911", email: "hussain@gmail.com"})
//     }, 1000)
// })
// promise3.then(function(data) { // This consuming is true with chaining syntax.
//     console.log(data);
//     return data.username;
// }).then(function(user) {
//     console.log(user);
// })                       // This is Promise chaining using .then(). The first .then() returns data.username, which is passed to the second .then() as its input. You cannot store the result directly using const like: const aaa = promise3.then(...).then(...), because Promises are asynchronous and return another Promise, not the final resolved value.

// <============This consuming is not true============>
// const aaa = promise3.then(function(data) { // This consuming is not true. You can't do like this: "Storing returning data inside a variable and then printing it. This will not print. In this case 'aaa = muhammadhussain1911' will not print"
//     console.log(data);
//     return data.username;
// })
// console.log(aaa);

// <============ Promise with error condtion handling ============>
// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(()=> { // We can also use arrow function.
//         let value = true;
//         if (!value) {
//             resolve({username: "muhammadhussain1911", email: "hussain@gmail.com"})
//         } else {
//             reject("Error: Something went wrong");
//         }
//     }, 1000)
// })

// promise4.then(function(data){
//     console.log(data);
//     return data.email
// }).then(function(userEmail){
//     console.log(userEmail);
// }).catch(function(error) {
//     console.log(error);
// })

// <============ Promise with finally keyword============>
// const promise5 = new Promise(function(resolve, reject){
//     setTimeout(()=> { // We can also use arrow function.
//         let value = false;
//         if (!value) {
//             resolve({username: "muhammadhussain1911", email: "hussain@gmail.com"})
//         } else {
//             reject("Error: Something went wrong");
//         }
//     }, 1000)
// })

// promise5.then(function(data){
//     console.log(data);
//     return data.email
// }).then(function(userEmail){
//     console.log(userEmail);
    
// }).catch(function(error) {
//     console.log(error);
// }).finally(()=> console.log("The promise is either successful or failed"))

// <============ Promise with try and catch keyword============>
// const promise6 = new Promise(function(resolve, reject){
//     setTimeout(()=> { // We can also use arrow function.
//         let value = true;
//         if (!value) {
//             resolve({username: "muhammadhussain1911", email: "hussain@gmail.com"})
//         } else {
//             reject("Error: Something went wrong");
//         }
//     }, 1000)
// })

// async function handlePromise6() {
//     try {
//         const response = await promise6
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// handlePromise6()

// <============ async function with network call ============>

// async function handleNetworkData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json(); // await keyword is necessaary, because .json() method needs time to convert data from string to json. if not write 'await', nothing will be converted to json and be printed.
//         console.log(data);
        
//         // console.log(typeof data) // object , because everything that’s not a primitive (except null) is an object, including arrays, functions, etc.
//         // console.log(Array.isArray(data)); // true
//         // data.forEach(user => {
//         //     console.log(user.name);
//         // })
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// handleNetworkData()

// <============same above function but handling network call with then() and catch() keyword ============>

// fetch('https://jsonplaceholder.typicode.com/users').then(function(allUsers){
//     const parsedData = allUsers.json() // data will not be printed because you are immediately printing parsed data, but data need time to convert in json from string. // handled in below code.
//     console.log(parsedData);
// }).catch(function(error){
//     console.log(error);
    
// })
// Properly Handled Situation
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(function(allUsers){
//     const convertedData = allUsers.json()
//     return convertedData;
// }).then(function(parsedData){
//     console.log(parsedData); // Data will print because firstly firt then() executed, then second then() executed.
    
// }).catch(function(error){
//     console.log(error);
// })

// <============ Promise.all ============>
// Promise.all with async and await
// async function getAllPromises() {
//     try {
//         const promise1 = fetch('https://jsonplaceholder.typicode.com/users/1')
//         const promise2 = fetch('https://jsonplaceholder.typicode.com/users/2')
//         const promise3 = fetch('https://jsonplaceholder.typicode.com/users/3')

//     const responses = await Promise.all([promise1, promise2, promise3]);
//     // console.log(`Response: ${responses}`);
//     // console.log(typeof responses);
//     // console.log(Array.isArray(responses))
    
//     const dataPromises = responses.map(res => res.json());
//     // console.log(Array.isArray(dataPromises));
    
//     const users = await Promise.all(dataPromises);
//     // console.log(Array.isArray(users));
    

//     users.forEach((user, index) => {
//       console.log(`User ${index + 1}:`, user.name);
//     });

//     } catch (error) {
//         console.log("Error occurred in one of the requests:", error.message);
//     } 
    
// }
// getAllPromises()

// Promise.all with catch() and then()

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
];

const fetchAllData = () => {
    const promises = urls.map(url => fetch(url)
    .then(response => response.json()));

    Promise.all(promises)
        .then(dataArray => {
            // dataArray is an array: [usersData, postsData, commentsData]
            const users = dataArray[0];
            const posts = dataArray[1];
            const comments = dataArray[2];

            console.log("Users:", users);
            console.log("Posts:", posts);
            console.log("Comments:", comments);
        })
        .catch(error => {
            console.log("One of the fetch calls failed:", error);
        });
};

fetchAllData();
