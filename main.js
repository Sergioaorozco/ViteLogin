
const handleCheck = document.getElementById('switchTheme')
const handleDiv = document.getElementById('switchSection')

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
