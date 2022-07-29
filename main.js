import { loginWithGithub, loginWithGoogle, loginWithEmail } from './firebase/client'

const handleCheck = document.getElementById('switchTheme')
const handleDiv = document.getElementById('switchSection')
const githubLogin = document.getElementById('githubLogin')
const googleLogin = document.getElementById('googleLogin')
const mailLogin = document.getElementById('mailLogin')

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
mailLogin.addEventListener('click', () => {
  loginWithEmail()
})
