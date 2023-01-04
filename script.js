const pxField = document.querySelector('#px')
const remField = document.querySelector('#rem')
const togglePositionBtn = document.querySelector('#toggle-position-btn')

let flexDirection = 'column'

pxField.addEventListener('click', () => pxField.select())

pxField.addEventListener('change', () => {
  const remValue = pxField.value / 16

  remField.value = remValue
})

remField.addEventListener('click', () => remField.select())

remField.addEventListener('change', () => {
  const pxValue = remField.value * 16

  pxField.value = pxValue
})

togglePositionBtn.addEventListener('click', () => {
  if (flexDirection === 'column') {
    document.body.style.flexDirection = 'column-reverse'
    flexDirection = 'column-reverse'
    remField.focus()
  } else {
    document.body.style.flexDirection = 'column'
    flexDirection = 'column'
    pxField.focus()
  }
})