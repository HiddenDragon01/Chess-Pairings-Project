class ErrorHandler {

    showError(errorElement, errorMessage) {
        document.querySelector("." + errorElement).classList.add("display-error");
        document.querySelector("."+errorElement).innerHTML = errorMessage;
    }

    clearError() {
        let errors = document.querySelectorAll(".error");
        for (let error of errors) {
            error.classList.remove("display-error");
        }
     }
    
    
}