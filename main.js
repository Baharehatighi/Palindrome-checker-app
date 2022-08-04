const $ = document;
let textInput = $.querySelector(".input");
const checkBtn = $.querySelector(".pal-btn");
let massage = $.querySelector(".pal-massage");

 let filterInput;
checkBtn.addEventListener("click", () => {
    textInput.value = "";
    checkBtn.classList.remove("active");

    let reverseInput = filterInput.split("").reverse().join("");
    if(reverseInput === filterInput){
        massage.classList.add("active");
        massage.innerHTML = `YES ${filterInput} IS PALINDROME.`;
    }else{
        massage.classList.add("active");
        massage.innerHTML = `NO ${filterInput} IS NOT PALINDROME.`;
        
    }
    // setTimeout(() =>{
    //     massage.style.display = "none";
    // }, 3000);
    
});

textInput.addEventListener("keyup", () =>{
    // Regex for removing spaces & some characters

    filterInput = textInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
   if(filterInput){
    return checkBtn.classList.add("active");
   }
   checkBtn.classList.remove("active");
//    console.log(filterInput);
})







