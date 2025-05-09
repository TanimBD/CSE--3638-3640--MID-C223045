document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "C") {
                currentInput = "";
            } else if (value === "=") {
                try {
                    currentInput = eval(currentInput);
                } catch {
                    currentInput = "Error";
                }
            } else {
                currentInput += value;
            }

            display.value = currentInput;
        });
    });
});