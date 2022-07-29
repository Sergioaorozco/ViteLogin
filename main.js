import { loginWithGithub, loginWithGoogle } from './firebase/client'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const handleCheck = document.getElementById('switchTheme')
const handleDiv = document.getElementById('switchSection')
const githubLogin = document.getElementById('githubLogin')
const googleLogin = document.getElementById('googleLogin')
const mailLogin = document.getElementById('mailLogin')
const email = document.getElementById('clientEmail').value
const password = document.getElementById('clientPass').value

handleDiv.addEventListener('click', function () {
  handleCheck.checked = !handleCheck.checked
  const bodyElement = document.querySelector('body')
  const colorMode = document.getElementById('textValue')
  if (handleCheck.checked) {
    colorMode.innerHTML = 'Light Color'
    bodyElement.classList.remove('isLightColor')
    bodyElement.classList.add('isDarkColor')
  } else {
    colorMode.innerHTML = 'Dark Color'
    bodyElement.classList.remove('isDarkColor')
    bodyElement.classList.add('isLightColor')
  }
})

githubLogin.addEventListener('click', () => {
  loginWithGithub()
})

googleLogin.addEventListener('click', () => {
  loginWithGoogle()
})
const loginWithEmail = () => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user
      console.log(user)
    }).catch((error) => {
      console.log(error)
    })
}
mailLogin.addEventListener('click', (e) => {
  e.preventDefault()
  loginWithEmail()
})
