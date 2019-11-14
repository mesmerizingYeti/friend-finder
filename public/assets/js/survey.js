document.addEventListener('click', e => {
  e.preventDefault()

  if (e.target.id === 'submit-btn') {
    const name = document.querySelector('#name')
    const photoURL = document.querySelector('#photo')
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
    if (questions.every(question => question.value !== 'Choose...') && name.value && photoURL.value) {
      const newFriend = {
        name: name.value,
        photo: photoURL.value,
        scores: questions.map(question => question.value)
      }

      axios.post('/api/friends', newFriend)
        .then(({ data: { name, photo } }) => {
          document.querySelector('#bf-name').innerHTML = name
          document.querySelector('#bf-photo').setAttribute('src', photo)
        })
        .catch(e => console.error(e))
    }
  }
})