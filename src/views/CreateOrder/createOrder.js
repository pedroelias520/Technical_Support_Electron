
const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
const logOutButton = body.querySelector(".logout");
const openOcorrency = body.querySelector(".open");
const closeOcorrency = body.querySelector(".close");
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
