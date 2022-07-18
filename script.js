const pxField = document.querySelector('#px')
const remField = document.querySelector('#rem')

const togglePositionBtn = document.querySelector('#toggle-position-btn')

let flexDirection = 'column'

pxField.addEventListener('change', () => {
  const result = pxField.value / 16

  remField.value = result
})

remField.addEventListener('change', () => {
  const result = remField.value * 16

  pxField.value = result
})

togglePositionBtn.addEventListener('click', () => {
  if (flexDirection === 'column') {
    document.body.style.flexDirection = 'column-reverse'
    flexDirection = 'column-reverse'
  } else {
    document.body.style.flexDirection = 'column'
    flexDirection = 'column'
  }
})