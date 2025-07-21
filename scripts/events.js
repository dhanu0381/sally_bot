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
  outputContainer.append(userOut("Output from AI".repeat(100), "AI"));
  inputBar.value = "";
}

function userOut(value, ref) {
  const inputBar = document.getElementById("inputBar"); // Get the submit button
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
      inputBar.disabled = true;
      function typeCharacter() {
        if (index < value.length) {
          texts.textContent += value[index++];
          setTimeout(typeCharacter, 5); // Adjust the speed of the typing effect
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        } else {
          inputBar.disabled = false;
          resolve(); // Resolve the promise when done
        }
      }
      typeCharacter(); // Start the typing effect
    }

    // Call the async function
    streamOut();
  } else {
    texts.innerText = value;
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
  userel.append(emoji);
  userel.append(texts);

  return userel;
}
