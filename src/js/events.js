export default function addEvents() {
  const app = document.querySelector('#app');
  app.addEventListener('click', (event) => {
    let element = event.target;
    const elementAtrubute = element.getAttribute('data-browse');
    if (elementAtrubute === 'browse-profile') {
      element.classList.toggle('navigation-panel__button-user_active');
      element.nextSibling.classList.toggle('dropdown-list_active');
    } else if (elementAtrubute === 'browse-item') {
      element.classList.toggle('button_secondary_active');
      element.nextSibling.classList.toggle('dropdown-list_active');
    } else {
      element = document.querySelector('.navigation-panel__button-user_active');
      if (element !== null) {
        element.classList.remove('navigation-panel__button-user_active');
        element.nextSibling.classList.remove('dropdown-list_active');
      }
    }
  });
}
