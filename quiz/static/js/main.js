const buttons = [...document.getElementsByClassName("check-answer-button")];

function getButtonId(button) {
    return button.id;
}

function getSelectedOption(questionOptions) {
    for (let i = 0; i < questionOptions.length; i ++) {
        if (questionOptions[i].checked) {
            return questionOptions[i]
        }
    }
}

function getCorrectOption(dataQuestionOptions) {
    for (let i = 0; i < dataQuestionOptions.length; i ++) {
        if (dataQuestionOptions[i].is_correct) {
            let correctAnswer = dataQuestionOptions[i];
            return correctAnswer;
        }
    }
}

function checkAnswer(data, button) {
    
    let buttonId = getButtonId(button);

    let buttonIdNumber = buttonId.charAt(buttonId.length-1);

    data.forEach((dataQuestion) => {
        if (dataQuestion.id.toString() === buttonIdNumber) {            
            let parentContainer = button.parentElement;
            let options = [...parentContainer.querySelectorAll('.option')];
            let selectedOption = getSelectedOption(options);
            let parentInput = selectedOption.parentElement;
            let questionLiItems = parentContainer.querySelectorAll('li');
            let correctOption = getCorrectOption(dataQuestion.options);
            if (selectedOption.value === correctOption.text) {
                questionLiItems.forEach((li) => {
                    li.classList.remove('red-bg');
                    li.classList.remove('normal-bg');
                });
                parentInput.classList.add('green-bg');
            } else {
                questionLiItems.forEach((li) => {
                    li.classList.remove('green-bg');
                    li.classList.remove('normal-bg');
                });
                parentInput.classList.add('red-bg');
                setTimeout(() => {
                    parentInput.classList.add('normal-bg');
                    parentInput.classList.remove('red-bg');
                    parentInput.classList.remove('green-bg');
                }, 500)
            }
        }
    });
}

function main() {
    $(".check-answer-button").click(function() {
        checkAnswer(data, this);
    }); 
}

main();