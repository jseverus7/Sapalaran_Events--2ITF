const saveButton = document.getElementById('btn__btn--save');
const cancelButton = document.getElementById('btn__btn--cancel');
const inputs = document.querySelectorAll('input');

const eventType = document.getElementById('input__input--choices');
const eventTitle = document.getElementById('input__input--title');
const eventPostingDate = document.getElementById('input__input--posting--date');
const eventDate1 = document.getElementById('input__input--event--date');
const eventDate2 = document.getElementById('input__input--event--date2');

const resetFields = () => {
    for(const userInput of inputs)
    {
        userInput.value = '';
    }
}

const formConfirmation = () => {
    const startEventDate = new Date(eventDate1.value);
    const endEventDate = new Date(eventDate2.value);
    const postingDate = new Date(eventPostingDate.value)

    if (
      eventType.value === "" ||
      eventTitle.value === "" ||
      eventPostingDate.value === "" ||
      eventDate1.value === "" ||
      eventDate2.value === "" 
    ) {
      alert("Please answer the missing areas");
    }
    else if (startEventDate > endEventDate) 
    {
        alert("Invalid dates");
    }
    else if (postingDate > startEventDate)
    {
        alert("Check posting date");
    } 
    else {
      alert("Submission sent!");
      resetFields();
    }
}

const formCancellation = () => {
    resetFields();
}


saveButton.addEventListener('click', formConfirmation);
cancelButton.addEventListener('click', formCancellation);