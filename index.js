let myLeads = [];
let oldLeads = []
const inputEl = document.getElementById("input-el") ; 
const inputbtn= document.getElementById("input-btn");
const leadsout= document.getElementById("leads"); 
const ulEl = document.getElementById("myList"); 
const deleteBtn = document.getElementById("delete-btn");

const leadsFromStorage= JSON.parse(localStorage.getItem("myLeads")); 
let tabBtn = document.getElementById("save-btn");

//const tabs = [{url: "https://www.linkedin.com/in/ayeshaqaisar/" }]

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads); 

    });
    console.log(tabs[0].url)
    

})

if(leadsFromStorage !== null){
    myLeads = leadsFromStorage; 
    render(myLeads); 
}


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
    
})

//accessing and using the browsers local storage to keep our data saved even with page refreshes
//localStorage.setItem("myLeads", )

//localStorage.setItem(key,value)
//localStorage.getItem(key)
//localStorage.clear() removes all data but persists with refresh
//both key and value need to be strings here 


inputbtn.addEventListener("click", function(){
    let theLink = inputEl.value; 
    myLeads.push(theLink);

    theLink = ""; 
    localStorage.setItem("myLeads", JSON.stringify(myLeads));


    render(myLeads); 
    
}); 

function render(leads){
    let listItems = ""

    for(items of leads){

    listItems += "<li><a target= '_blank' href= ' " + items + "'>" + items + "</a></li>" + " " ; 
    } //you could use backticks and curly quotes as well 

ulEl.innerHTML = listItems; //best to do DOM manipulation once rather than many times in the loop
   
}




