const text = document.getElementById("text");
        const colorPicker = document.getElementById("colorPicker");
        const fontSize = document.getElementById("fontSize");
        const fontFamily = document.getElementById("fontFamily");

        function updateText() {
            text.style.color = colorPicker.value;
            text.style.fontSize = fontSize.value + "px";
            text.style.fontFamily = fontFamily.value;
        }

        colorPicker.addEventListener("input", updateText);
        fontSize.addEventListener("input", updateText);
        fontFamily.addEventListener("change", updateText);