export function showError(message) {
    const errorContainer = document.querySelector(".error-container");
    errorContainer.innerHTML = "";

    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");

    const errorMessage = document.createElement("h2");
    errorMessage.textContent = message;
    errorDiv.appendChild(errorMessage);

    errorContainer.appendChild(errorDiv);
}
