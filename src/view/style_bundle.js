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

  openButton.addEventListener('click', () => {
    document.body.classList.add('menu')
  })

  closeButton.addEventListener('click', () => {
    document.body.classList.remove('menu')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  init_S_NoticeBar()
  init_S_SideBar_mobile()
})
