let password = document.getElementById("pass");
let indicator = document.getElementById("indicator")
let c1 = document.getElementById("c1"); 
let c2 = document.getElementById("c2"); 
let c3 = document.getElementById("c3"); 
let c4 = document.getElementById("c4"); 

let small = "qwertyuiopasdfghjklzxcvbnm";
let capital = "QWERTYUIOP";
let nums = "1234567890";
let special_characters = "!@#$%^&*()/{}[];:?";

function generatePassword() {
    let total_pass = "";
    let pass = "";
    let no_of_selection=0;

    if (c1.checked){ 
        total_pass += capital;
        no_of_selection+=1;
    }
    if (c2.checked){
        total_pass += small;
        no_of_selection+=1;
    }
    if (c3.checked){
        total_pass += nums;
        no_of_selection+=1;
    }
    if (c4.checked){
        total_pass += special_characters;
        no_of_selection+=1;
    }

    if (total_pass === "") {
        alert("Please select at least one option!");
        return;
    }
    
    switch(no_of_selection){
        case 1:
            indicator.style.background="#f70505";
            indicator.style.boxShadow="0 0 10px #f70505 ";
            break;
        case 2:
            indicator.style.background="#fb9e24ff";
            indicator.style.boxShadow="0 0 10px #f78e05ff";
            break;
        case 3:
            indicator.style.background="#ece334ff";
            indicator.style.boxShadow="0 0 10px #f7eb05ff";
            break;
        case 4:
            indicator.style.background="#65f065";
            indicator.style.boxShadow="0 0 10px #65f065";
            break;
    }

    for (let i = 0; i < 12; i++) {
        pass += total_pass[Math.floor(Math.random() * total_pass.length)];
    }

    password.value = pass;
}
