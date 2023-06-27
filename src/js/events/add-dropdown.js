import toggleBrowse from '@/js/events/toggle-browse';

export default function addDropdown(element) {
  const elementAtrubute = element.getAttribute('data-browse');
  let buttonDropdown = '';
  if (
    document.querySelector('.dropdown-list_active') !== null &&
    !element.closest('.dropdown-list')
  ) {
    buttonDropdown = document.querySelector('.dropdown-list_active').previousSibling;
    toggleBrowse(buttonDropdown);
  } else if (elementAtrubute !== null) {
    buttonDropdown = element;
    toggleBrowse(buttonDropdown);
  }
}
