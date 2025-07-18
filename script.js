const models = ["CSS","ISS","MEG"];

function createButtons() {
    const buttonGroup = document.getElementById("buttonGroup");
    models.forEach((model,index) => {
        const button = document.createElement("div");
        button.className ='button';
        button.innerText = model;
        button.onclick = () => selectedModel(button);
        buttonGroup.appendChild(button);

        if(index===0){
            button.classList.add("selected");
            console.log(button.innerText,"selected")
        }
    });
}

function selectedModel(selectedButton) {
    return function() {
        const buttons = document.querySelectorAll(".button");
        buttons.forEach(btn => btn.classList.remove("selected"));
        selectedButton.classList.add("selected");
        console.log(selectedButton);
    };
}

createButtons();