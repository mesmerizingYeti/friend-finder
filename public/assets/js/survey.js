document.addEventListener('click', e => {
  e.preventDefault()

  if (e.target.id === 'submit-btn') {
    const name = document.querySelector('#name')
    const photo = document.querySelector('#photo')
    const questions = [
      document.querySelector('#question1'),
      document.querySelector('#question2'),
      document.querySelector('#question3'),
      document.querySelector('#question4'),
      document.querySelector('#question5'),
      document.querySelector('#question6'),
      document.querySelector('#question7'),
      document.querySelector('#question8'),
      document.querySelector('#question9'),
      document.querySelector('#question10'),
    ]
    console.log(questions)
  }
})