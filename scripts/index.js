const saveButton = document.getElementById('btn__btn--save');
const cancelButton = document.getElementById('btn__btn--cancel');
const inputs = document.querySelectorAll('input');

const eventType = document.getElementById('input__input--choices');
const eventTitle = document.getElementById('input__input--title');
const eventDates = document.getElementById('input__input--dates');
const eventPostingDate1 = document.getElementById('input__input--postingdate');
const eventPostingDate2 = document.getElementById('input__input--postingdate2');

const resetFields = () => {
    for(const userInput of inputs)
    {
        userInput.value = '';
    }
}

const formConfirmation = () => {
    if (
      eventType.value === "" ||
      eventTitle.value === "" ||
      eventDates.value === "" ||
      eventPostingDate1 === "" ||
      eventPostingDate2 === "" 
    ) {
      alert("Please answer the missing areas");
    } else {
      alert("Submission sent!");
      resetFields();
    }
}

const formCancellation = () => {
    resetFields();
}

saveButton.addEventListener('click', formConfirmation);
cancelButton.addEventListener('click', formCancellation);