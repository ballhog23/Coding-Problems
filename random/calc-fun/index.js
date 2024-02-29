const submitBtn = document.querySelector("button");
const maxExp = 13034431

submitBtn.addEventListener("click", (event) => {
  // event.preventDefault(); // Prevents the form from submitting

  const numberInput = document.querySelector("#number-input").value;
  const expActionInput = document.querySelector("#exp-action-input").value;
  const diff = maxExp - numberInput;
  const totalActions = Math.round(diff / expActionInput);
  const expDiffElement = document.querySelector('.exp-to-max-text')
  const totalActionsElement = document.querySelector('.total-actions-text')
  const totalJavelinHeadsElement = document.querySelector('.total-javelin-heads-text')

  expDiffElement.innerText = `exp to max : ${diff}`
  totalActionsElement.innerText = `total amount of actions : ${totalActions}`
  totalJavelinHeadsElement.innerText = `total number of javelin heads as a result : ${Math.round(totalActions * 5)}`
});