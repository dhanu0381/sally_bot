const models = ["CSS", "ISS", "MEG"];

function createButtons() {
    const buttonGroup = document.getElementById("buttonGroup");
    models.forEach((model, index) => {
        const button = document.createElement("div");
        button.className = 'button';
        button.innerText = model;
        button.onclick = () => selectModel(button); // Add onclick event
        buttonGroup.appendChild(button);

        // Add default selection to the first button
        if (index === 0) {
            button.classList.add("selected"); // Add 'selected' class to the first button
        }
    });
}

function selectModel(selectedButton) {
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(btn => btn.classList.remove("selected")); // Remove 'selected' class from all buttons
    selectedButton.classList.add("selected"); // Add 'selected' class to the clicked button
    console.log(selectedButton.innerText + " selected"); // Log the selected button's text
}

// Initialize the button creation
createButtons();