const firstInput = document.getElementById("first-answer");
const secondInput = document.getElementById("second-answer");
const thirdInput = document.getElementById("third-answer");
const fourthInput = document.getElementById("fourth-answer");
const fivthInput = document.getElementById("fivth-answer");
const sixthInput = document.getElementById("sixth-answer");
const seventhInput = document.getElementById("seventh-answer");
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
        };
            switch(secondInput.value.toLowerCase()){
                case "have not":
                    secondInput.style.border = "1px solid green";
                    secondInput.style.borderRadius = "10px";
                    break;
                    default:
                        secondInput.style.border = "1px solid red";
                        secondInput.setAttribute("placeholder", "have not");
                    secondInput.style.borderRadius = "10px";
                secondInput.value = "";
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
            }  
}
btnEl.addEventListener("click",  correctWrong );
