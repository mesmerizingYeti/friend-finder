document.addEventListener('click', e => {
  e.preventDefault()

  if (e.target.id === 'submit-btn') {
    const name = document.querySelector('#name')
    const photo = document.querySelector('#photo')
    const questions = [
      document.querySelector('input[name="question1"]:checked'),
      document.querySelector('input[name="question2"]:checked'),
      document.querySelector('input[name="question3"]:checked'),
      document.querySelector('input[name="question4"]:checked'),
      document.querySelector('input[name="question5"]:checked'),
      document.querySelector('input[name="question6"]:checked'),
      document.querySelector('input[name="question7"]:checked'),
      document.querySelector('input[name="question8"]:checked'),
      document.querySelector('input[name="question9"]:checked'),
      document.querySelector('input[name="question10"]:checked')
    ]
    if (questions.every(quest => quest) && name.value && photo.value) {
      console.log('Ready to work!')
    }
    console.log(value)
  }
})