const containerRef = document.getElementById('container');
const btnRef = document.getElementById('btn');

let nameRef= document.getElementById('name');
let flagRef= document.getElementById('flag');
let capitalRef= document.getElementById('capital');
let populationRef= document.getElementById('population');
let nativeLanguageRef= document.getElementById('native-language');
let regionRef= document.getElementById('region');
let subRegionRef= document.getElementById('sub-region');


// const request = new XMLHttpRequest();

// request.open('GET',"https://icanhazdadjoke.com");

// request.send();

// // btn = document.getElementsByTagName('button')[0];

// request.addEventListener('load', function(){
//     console.log(this.responseText);

//     const[data] = JSON.parse(this.responseText);
//     console.log(data);
// })

// const generateJokes = ()=> {

//     const SetHeader = {
//         headers : {
//             Accept: "application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com",SetHeader)
//     .then((res)=>res.json())
//     .then((data)=> {
//         containerRef.innerHTML = data.joke;
//     })
//     .catch((err)=>{console.log(err)})
// }

// btnRef.addEventListener('click', generateJokes);


const countryData = ()=> {
    fetch("https://restcountries.com/v3.1/name/india")
    .then((res)=>res.json())
    .then((data)=>{
        //Converting JSON format into array format using Object.entries
        entries=Object.entries(data);  
        console.log(entries)})
    .then((data)=>{nameRef.innerHTML= entries[0][1].name.common})
    .catch((err)=>{console.log(err)})
}
btnRef.addEventListener('click', countryData);






