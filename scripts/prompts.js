const promptOptions = ["I can't see my study on my dashboard.",
    "This study is supposed to be clinical. The investigator submitted non-clinical study.",
    "Can't update my timelines.",
    "How do I withdraw my trial?",
    "Who do I assign my review?",
    "How do I submit a change request for the investigator?",
]

function createCards(){
    const rootEl = document.getElementById("prompt-options");
    const inputBar = document.getElementById("inputBar");
    
    promptOptions.forEach((prompt) => {
        const el = document.createElement("div");
        el.className = "user-selection";
        el.innerText = prompt;
        el.onclick = () => {
            inputBar.value = prompt;
            inputBar.focus();
        }
        rootEl.append(el);
    })
}