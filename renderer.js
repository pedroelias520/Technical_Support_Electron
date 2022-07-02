
const { ipcRenderer} = require('electron');
const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
const logOutButton = body.querySelector(".logout");
const openOcorrency = body.querySelector(".open");
const clearButton = body.querySelector(".clear");
const copyButton = body.querySelector(".confirm");
const textAreas = document.getElementsByClassName("text_input")
const soluctionsArea = document.getElementsByClassName("soluctions")
const pendencysArea = document.getElementsByClassName("pendency")
const problemsArea = document.getElementsByClassName("problems")


modeSwitch.addEventListener("click", ()=> {
    body.classList.toggle("dark") 
    
    if(body.classList.contains("dark")){
        modeText.innerHTML = "Light Mode"
    }else{
        modeText.innerHTML = "Dark Mode"
    }    
})

toggle.addEventListener("click", ()=> {
    sidebar.classList.toggle("close");           
})

openOcorrency.addEventListener("click", ()=>{
    console.log("Clicou em abrir ordem")
    ipcRenderer.send('createOrder')
})

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  startTime()