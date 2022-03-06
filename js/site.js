// Get the string from the page. 
// CONTROLLER FUNCTION 
function getValue() { 

    document.querySelector("#alert").classList.add("invisible"); 

    let userString = document.querySelector("#userString").value; 
    let revString = reverseString(userString); 
    displayString(revString); 

}

// Reverse the string. 
// LOGIC FUNCTION 
function reverseString(userString) {

    let revString = ""; 

    // reverse a string using a for loop 
    for(let i = userString.length - 1; i >= 0; i--) {

        revString += userString[i];   

    } 

    return revString; 
    
}

// Display the reversed string to the user. 
// VIEW FUNCTION 
function displayString(revString) {

    // Write message to the page.
    document.querySelector("#msg").innerHTML = `Your string reversed is: ${revString}`; 
    
    // Show the alert box. 
    document.querySelector("#alert").classList.remove("invisible"); 

} 