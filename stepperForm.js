//select tabs
const allTabs = [...document.querySelectorAll(".tab")];
const totalTabs = 4;

const tabContent = [...document.querySelectorAll(".tab-content")];
const box = document.querySelector(".box");
const progressBar = document.querySelector("#progressBar");
const welcomeBox = document.querySelector("#welcomeBox");

//select progress bar dots
const dots = [...document.querySelectorAll(".dot")];

// let allSteps = [];
// let fullStep = {
//     "tab": "",
//     "dot": ""
// };

// function combineElements(){
//     for(let i = 0; i < allTabs.length; i++){
//         let currentTab = allTabs.indexOf(i);
//         for(let ii = 0; ii < dots.length; ii++){
//             let currentDot = dots.indexOf(ii);
//             if(currentTab === currentDot){
//                 fullStep[tab] = allTabs[i];
//                 fullStep[dot] = dots[ii];
    
//                 allSteps.push[fullStep];
//                 function combineElements(){
//                     for(let i = 0; i < allTabs.length; i++){
//                         let currentTab = allTabs.indexOf(i);
//                         for(let ii = 0; ii < dots.length; ii++){
//                             let currentDot = dots.indexOf(ii);
//                             if(currentTab === currentDot){
//                                 fullStep[tab] = allTabs[i];
//                                 fullStep[dot] = dots[ii];
                    
//                                 return fullStep;
                    
                    
//                             }
                
                            
                    
//                             allSteps.push[fullStep];
//                         }
                        
//                         return allSteps;
                    
//                     }
                    
                    
//                     console.log(allSteps);
//                 }
                
    
//             }

//             return fullStep;
    
    
//         }
        
//         return allSteps;
    
//     }
    
    
//     console.log(allSteps);
// }

// let name = document.getElementById("name").value;
// let age = document.querySelector("input[type='date']").value;
// let figcaption = document.querySelector("figcaption").innerHTML;






function nextTab(tab, nextTab, dot, nextDot){

    if(tab.classList.contains('active')){

            tab.classList.remove('active');
            tab.classList.add('complete');
            dot.classList.remove('active');
            nextTab.classList.add('active');
            nextTab.classList.remove('inactive');
            nextDot.classList.add('active');
            
    } 
}

function previousTab(tab, previousTab, dot, previousDot){

    if(tab.classList.contains('active')){
            tab.classList.remove('active');
            tab.classList.add('inactive');
            dot.classList.remove('active');
            previousTab.classList.remove('complete');
            previousTab.classList.remove('inactive');
            previousTab.classList.add('active');
            previousDot.classList.add('active');
            
    } 
}

function finish() {
    box.classList.add("finished");
    progressBar.classList.add("finished");
}


