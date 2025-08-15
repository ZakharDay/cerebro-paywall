import './bundle.css'

function init_S_NoticeBar() {
  const bar = document.querySelector('.S_NoticeBar')

  if (bar) {
    const closeButton = bar.querySelector('.S_NoticeBar .A_IconButton')

    closeButton.addEventListener('click', () => {
      bar.remove()
      document.body.classList.remove('notice')
    })
  }
}

function init_S_SideBar_mobile() {
  const openButton = document.querySelector('.O_MenuBar .A_IconButton')
  const closeButton = document.querySelector('.O_SideBarHome .A_IconButton')

  if (openButton) {
    openButton.addEventListener('click', () => {
      document.body.classList.add('menu')
    })
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      document.body.classList.remove('menu')
    })
  }
}

function init_O_EntityBar() {
  const entityBars = document.getElementsByClassName('O_EntityBar')

  for (let index = 0; index < entityBars.length; index++) {
    const entityBar = entityBars[index]
    const toggleOpenButton = entityBar.querySelector('.A_ToggleOpenBarButton')

    if (toggleOpenButton) {
      toggleOpenButton.addEventListener('click', () => {
        entityBar.classList.toggle('opened')
      })
    }
  }
}

function init_v2_O_EntityBar() {
  const entityBars = document.getElementsByClassName('v2_O_EntityBar')

  for (let index = 0; index < entityBars.length; index++) {
    const entityBar = entityBars[index]

    const toggleOpenButton = entityBar.querySelector(
      '.v2_A_ToggleOpenBarButton'
    )

    if (toggleOpenButton) {
      toggleOpenButton.addEventListener('click', () => {
        entityBar.classList.toggle('opened')
      })
    }
  }
}

function init_v2_A_EntityFavButton() {
  const buttons = document.querySelectorAll('.v2_A_EntityFavButton')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active')
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  init_S_NoticeBar()
  init_S_SideBar_mobile()
  init_O_EntityBar()
  init_v2_O_EntityBar()
  init_v2_A_EntityFavButton()
})
