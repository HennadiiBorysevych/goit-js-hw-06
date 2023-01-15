const inputText = document.querySelector("#validation-input")
console.log(inputText.textContent.length);
inputText.addEventListener("blur", () => {
    if (inputText.value.length === 6) {
        inputText.classList.add("valid")
        inputText.classList.remove("invalid")
    } else {
        inputText.classList.add("invalid")
        inputText.classList.remove("valid")
    }
})