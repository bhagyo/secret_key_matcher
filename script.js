document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generate-btn");
    const generatedKeyDisplay = document.getElementById("generated-key");
    const pinInputDisplay = document.getElementById("pin-input");
    const keypadBtns = document.querySelectorAll(".keypad-btn");
    const backspaceBtn = document.getElementById("backspace-btn");
    const clearBtn = document.getElementById("clear-btn");
    const submitBtn = document.getElementById("submit-btn");
    const message = document.getElementById("message");

    let generatedKey = "";
    let pinInput = "";

    generateBtn.addEventListener("click", () => {
        generatedKey = generateRandomKey();
        generatedKeyDisplay.textContent = generatedKey;
        resetInput();
        showMessage("");
    });

    keypadBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (
                btn.id !== "backspace-btn" &&
                btn.id !== "clear-btn" &&
                btn.id !== "submit-btn"
            ) {
                if (pinInput.length < 6) {
                    pinInput += btn.textContent;
                    pinInputDisplay.textContent = pinInput;
                }
            }
        });
    });

    backspaceBtn.addEventListener("click", () => {
        pinInput = pinInput.slice(0, -1);
        pinInputDisplay.textContent = pinInput;
    });

    clearBtn.addEventListener("click", () => {
        resetInput();
    });

    submitBtn.addEventListener("click", () => {
        if (pinInput === generatedKey) {
            if (pinInput === "")
                showMessage(
                    "⚠️ Technically your answer is right but first generate a secret key",
                    "Ooopsss"
                );
            else showMessage("✅ Your Secret Key is matched!", "success");
        } else {
            showMessage("❌ Your Secret Key does not match!", "error");
        }
    });

    function generateRandomKey() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    function resetInput() {
        pinInput = "";
        pinInputDisplay.textContent = "";
    }

    function showMessage(msg, type = "") {
        message.textContent = msg;
        message.className = type;
    }
});
