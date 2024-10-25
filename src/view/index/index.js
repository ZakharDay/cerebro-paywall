import jpg from '../../images/image.jpg'

document.addEventListener('DOMContentLoaded', () => {
  const image = new Image()
  image.src = jpg
  document.querySelector('.images').appendChild(image)
})
