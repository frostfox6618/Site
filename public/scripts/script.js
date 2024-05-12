function serializeForm(formNode) {
  console.log(formNode.elements)
}

function handleFormSubmit(event) {
  event.preventDefault()
  serializeForm(applicantForm)
}
  const applicantForm = document.getElementById('form');
  applicantForm.addEventListener('submit', handleFormSubmit());

  