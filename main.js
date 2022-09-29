let form = document.querySelector("form")
let inpt = document.querySelector("input")
let city = document.querySelector("h1")
let p1 = document.getElementById("p1")
let p2 = document.querySelector("#p2")
let p3 = document.querySelector("#p3")
let x = document.querySelector("img")
let head = document.querySelector("h2")
let div =  document.getElementsByClassName("report")

form.addEventListener("submit",vicky)
async function vicky(e){
    e.preventDefault()
 
    let res   = await fetch(`http://api.weatherapi.com/v1/current.json?key=51751ea1ef844c02bbe110349222609 &q=${inpt.value}`)
    let d = await res.json()
    let error = d.error
if(error){
    window.alert("Please Enter right city name")
}
else{
    let vinay = "Temperature : " + " " + d.current.temp_c + "C"
    p1.innerText = vinay
  let t = "Local Time is " + " " + d.location.localtime
   p2.innerText = t
    head.innertext = d.location.name
    head.textContent = "City :" + " " +  d.location.name
  
  
  let y = d.current.condition.icon  
  let a = x.setAttribute("src" , `http:${y}`)
}
form.reset
}
