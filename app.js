const getElement = (element) => element = document.querySelector(element)
const getElemnts = (elements) => elements = document.querySelectorAll(elements)

const 
    form = getElement("#signup-form"),
    userFirstName = getElement("#first-name"),
    userLastName = getElement("#last-name"),
    userEamil = getElement("#email"),
    userPassword = getElement("#password"),

    inputContainers = getElemnts(".input-container"),
    errorMsgs = getElemnts(".error"),
    errorIcons = getElemnts(".error-icon")
    

const styleState = {
    errorBorder: "2px solid hsl(0, 100%, 74%)",
    errorIconOpacity: "1",
    errorMargin: "2rem",
    succesBorder: "2px solid hsl(154, 59%, 51%)",
    succesIconOpacity: "0",
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checkInput(userFirstName, 0, "First Name cannot be empty");
    checkInput(userLastName, 1, "Last Name cannot be empty");
    checkInput(userEamil, 2, "Looks like this is not an email");
    checkInput(userPassword, 3, "Password cannot be empty");
})

const checkEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email)
}

const renderErrorMsg = (input, index, message) => {
    errorMsgs[index].innerHTML = message;
    errorIcons[index].style.opacity = styleState.errorIconOpacity;
    inputContainers[index].style.marginBottom = styleState.errorMargin;
    input.style.border = styleState.errorBorder;
}

const checkInput= (input, index, message) => {

    if(input.value.trim() === "") {
        renderErrorMsg(input, index, message)
    } else if(input.id ==="email" && !checkEmail(input.value)) {
        renderErrorMsg(input, index, message)
    } else {
        errorMsgs[index].innerHTML ="",
        errorIcons[index].style.opacity = styleState.succesIconOpacity;
        inputContainers[index].style.marginBottom = "0";
        input.style.border = styleState.succesBorder;
    }
     
}

