function handler() {
  const inputBar = document.getElementById("inputBar"); // Get the input field
  const submitButton = document.getElementById("submitButton"); // Get the submit button

  function updateSubmitButton() {
    const hasText = inputBar.value.trim().length > 0;
    submitButton.disabled = !hasText;
    if (!hasText) {
      submitButton.classList.add("disabled-state");
    } else {
      submitButton.classList.remove("disabled-state");
    }
  }

  updateSubmitButton();

  inputBar.addEventListener("input", updateSubmitButton);

  submitButton.addEventListener("click", () => {
    if (inputBar.value.trim()) {
      handleSubmit();
      updateSubmitButton();
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
  const submitButton = document.getElementById("submitButton"); // Get the submit button
  const userel = document.createElement("div");
  const emoji = document.createElement("div");
  const texts = document.createElement("div");
  userel.className = "user-box";

  const choice = ref === "USER" ? "sally-answer.png" : "th.jpg";
  emoji.innerHTML = `<img src = "media/${choice}" width="40px" style="margin: 0 10px 0 10px; border: border: 1px solid #007bff; /* Border color */
    border-radius: 5px; background-color: white; padding: 3px;/* Rounded corners */">`;

  texts.className = "output-text";
  if (ref === "AI") {
    userel.style.backgroundColor = "white";
    let index = 0;
    function streamOut() {
      return new Promise((resolve) => {
        submitButton.classList.add("disabled-state"); // Disable the submit button
        submitButton.disabled = true;
        function typeCharacter() {
          if (index < value.length) {
            texts.innerText += value[index++];
            setTimeout(typeCharacter, 5000); // Adjust the speed of the typing effect
          } else {
            submitButton.disabled = false;
            submitButton.classList.remove("disabled-state");
            resolve(); // Resolve the promise when done
          }
        }
        typeCharacter(); // Start the typing effect
      });
    }

    // Usage of async/await
    async function executeStreamOut() {
      await streamOut(); // Wait for the streamOut function to complete
      console.log("Typing effect completed."); // Code to execute after completion
    }

    // Call the async function
    executeStreamOut();
  } else {
    texts.innerText = value;
  }
  userel.append(emoji);
  userel.append(texts);

  return userel;
}
