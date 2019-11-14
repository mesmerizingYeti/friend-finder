document.addEventListener('click', e => {
  
  if (e.target.id === 'submit-btn') {
    e.preventDefault()
    const nameInput = document.querySelector('#name')
    const photoInput = document.querySelector('#photo')
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
    if (questions.every(question => question.value !== 'Choose...') && nameInput.value && photoInput.value) {
      const newFriend = {
        name: nameInput.value,
        photo: photoInput.value,
        scores: questions.map(question => parseInt(question.value))
      }

      axios.post('/api/friends', newFriend)
        .then(({ data: { name, photo } }) => {
          document.querySelector('#bf-name').innerHTML = name
          document.querySelector('#bf-photo').setAttribute('src', photo)

          nameInput.value = ''
          photoInput.value = ''
          questions.forEach(question => {
            question.value = 'Choose...'
          })
        })
        .catch(e => console.error(e))
    }
  }
})