function handler() {
  const inputBar = document.getElementById("inputBar"); // Get the input field
  const submitButton = document.getElementById("submitButton"); // Get the submit button

  submitButton.disabled = !inputBar.value.trim();

  inputBar.addEventListener("input", () => {
    submitButton.disabled = !inputBar.value.trim();
  });

  submitButton.addEventListener("click", () => {
    if (inputBar.value.trim()) {
      handleSubmit();
    }
  });

  // Add event listener for the Enter key press
  inputBar.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && inputBar.value.trim()) {
      handleSubmit();
    }
  });
}

function handleSubmit() {
  const inputBar = document.getElementById("inputBar");
  const outputContainer = document.getElementById("output-contaier");
  outputContainer.append(userOut(inputBar.value, "USER"));
  outputContainer.append(userOut("Output from AI", "AI"));
  inputBar.value = "";
}

function userOut(value, ref) {
  const userel = document.createElement("div");
  const emoji = document.createElement("div");
  const texts = document.createElement("div");
  userel.className = "user-box";

  const choice = ref === "USER" ? "sally-answer.png" : "th.jpg";
  emoji.innerHTML = `<img src = "media/${choice}" width="40px" style="margin: 0 10px 0 10px; border: border: 1px solid #007bff; /* Border color */
    border-radius: 5px; background-color: white; padding: 3px;/* Rounded corners */">`;

  texts.className = "output-text";
  texts.innerText = value;
  if (ref === "AI") {
    userel.style.backgroundColor = "white";
  }

  userel.append(emoji);
  userel.append(texts);

  return userel;
}
