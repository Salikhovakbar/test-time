const firstInput = document.getElementById("first-answer");
const secondInput = document.getElementById("second-answer");
const thirdInput = document.getElementById("third-answer");
const fourthInput = document.getElementById("fourth-answer");
const fivthInput = document.getElementById("fivth-answer");
const sixthInput = document.getElementById("sixth-answer");
const seventhInput = document.getElementById("seventh-answer");
const menuBtn = document.getElementById("btn-menu");
const closeBtn = document.getElementById("close-btn");
const boxMenu = document.querySelector(".cross-bar-box");
const boxResult = document.querySelector(".picture-strategy");
const boxEl = document.querySelector(".box-explaination");
const btnEl = document.getElementById("btn-check");

let correctWrong = () => {
    switch(firstInput.value.toLowerCase()){
        case "have broken":
            firstInput.style.border = "1px solid green";
            firstInput.style.borderRadius = "10px";
            break;
            default:
                firstInput.style.border = "1px solid red";
                firstInput.setAttribute("placeholder", "have broken");
            firstInput.style.borderRadius = "10px";
        firstInput.value = "";
        const pEl = document.createElement("p");
        boxEl.appendChild(pEl);
        pEl.innerHTML = "1)When we talk about an activity that has not finished, we use Present Perfect ";
        
        };
            switch(secondInput.value.toLowerCase()){
                case "have not":
                    case "haven't":
                    secondInput.style.border = "1px solid green";
                    secondInput.style.borderRadius = "10px";
                    break;
                    default:
                        secondInput.style.border = "1px solid red";
                        secondInput.setAttribute("placeholder", "have not");
                    secondInput.style.borderRadius = "10px";
                secondInput.value = "";
                const pEl = document.createElement("p");
                boxEl.appendChild(pEl);
                pEl.innerHTML = "2)The activity is planned to be carried out  in the future";
                };
                
        switch(thirdInput.value.toLowerCase()){
            case "has lived":
                thirdInput.style.border = "1px solid green";
                thirdInput.style.borderRadius = "10px";
                break;
                default:
                    thirdInput.style.border = "1px solid red";
                    thirdInput.setAttribute("placeholder", "has lived");
                thirdInput.style.borderRadius = "10px";
            thirdInput.value = "";
                    const pEl = document.createElement("p");
        boxEl.appendChild(pEl);
        pEl.innerHTML = "3)The expression relates to a person's experience ";
            }; 
        switch(fourthInput.value.toLowerCase()){
            case "did":
                fourthInput.style.border = "1px solid green";
                fourthInput.style.borderRadius = "10px";
                break;
                default:
                    fourthInput.style.border = "1px solid red";
                    fourthInput.setAttribute("placeholder", "did");
                fourthInput.style.borderRadius = "10px";
            fourthInput.value = "";
            const pEl = document.createElement("p");
            boxEl.appendChild(pEl);
            pEl.innerHTML = "4)The key word to identify the time is <strong>yesterday</strong> the precise time is given " ;
            };
        switch(fivthInput.value.toLowerCase()){
            case "had":
                fivthInput.style.border = "1px solid green";
                fivthInput.style.borderRadius = "10px";
                break;
                default:
                    fivthInput.style.border = "1px solid red";
                    fivthInput.setAttribute("placeholder", "had");
                fivthInput.style.borderRadius = "10px";
            fivthInput.value = "";
            const pEl = document.createElement("p");
            boxEl.appendChild(pEl);
            pEl.innerHTML = "5)The key word to identify the time is <strong>ago</strong>, the precise time is given " ;
            
            }    
            switch(sixthInput.value.toLowerCase()){
                case "has gone" :
                    case "'s come":
                        sixthInput.style.border = "1px solid green";
                        sixthInput.style.borderRadius = "10px";
                        break;
                        default:
                            sixthInput.value = "";
                            sixthInput.style.border = "1px solid red";
                            sixthInput.style.borderRadius = "10px";
                          sixthInput.setAttribute("placeholder", "has gone")
                          const pEl = document.createElement("p");
                          boxEl.appendChild(pEl);
                          pEl.innerHTML = "1. 6)Alex is still outside, so the activity is in progress  " ;

            }      
            switch(seventhInput.value.toLowerCase()){
                case "has not come"  :
                    case "hasn't come":
                    seventhInput.style.border = "1px solid green";
                    seventhInput.style.borderRadius = "10px";
                    break;
                    default:
                        seventhInput.value = "";
                        seventhInput.style.border = "1px solid red";
                        seventhInput.style.borderRadius = "10px";
                        seventhInput.setAttribute("placeholder", "has not come");
                        const pEl = document.createElement("p");
                        boxEl.appendChild(pEl);
                        pEl.innerHTML = "2. 6)Alex is still outside, so the activity is in progress  " ;
            }  
}
btnEl.addEventListener("click",  correctWrong );
let menuBox = () => {
    boxMenu.classList.toggle("secondstyle");
    if(closeBtn.style.display == "none"){
        closeBtn.style.display = "block"
    }
    else{
        closeBtn.style.display = "none"
    }
     if(menuBtn.style.display == "block"){
        menuBtn.style.display = "none"
    }
    else{
        menuBtn.style.display = "block"
    }
}
menuBtn.addEventListener("click", menuBox);
closeBtn.addEventListener("click", () => {
    boxMenu.classList.remove("secondstyle");
    if(menuBtn.style.display == "none"){
        menuBtn.style.display = "block"
    }
    else{
        menuBtn.style.display = "none"
    }
    if(closeBtn.style.display == "block"){
        closeBtn.style.display = "none"
    }
    else{
        closeBtn.style.display = "block"
    }
})
