let buttons = document.getElementsByClassName("check-answer-button");
let buttonsCount = buttons.length;
for (let i = 0; i < buttonsCount; i ++) {
    buttons[i].onclick = function(e) {
        let clickedButton = buttons[i];
        let clickedButtonId = clickedButton.id.charAt(clickedButton.id.length-1);
        for (let index in data) {
            if (data[index].id.toString() === clickedButtonId) {
                let parentContainer = clickedButton.parentElement;
                let options = parentContainer.querySelectorAll(".option");
                let jsonData = data[index];
                for (let index in jsonData.options) {
                    if (jsonData.options[index].is_correct) {
                        let correctAnswer = jsonData.options[index].text;
                        for (let index in options) {
                            if (options[index].checked && options[index].value === correctAnswer) {
                                alert('acertou!');
                            }
                        }
                    }
                }
            }
        }
    };
}