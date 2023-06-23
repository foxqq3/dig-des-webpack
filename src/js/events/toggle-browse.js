export default function toggleBrowse (buttonDropdown) {
  const dataBrowse = buttonDropdown.getAttribute('data-browse');

  if (dataBrowse === 'browse-profile') {
    buttonDropdown.classList.toggle('profile-button_default');
    buttonDropdown.classList.toggle('profile-button_active');
  } else if (dataBrowse === 'browse-item') {
    buttonDropdown.classList.toggle('button_secondary_active');
    buttonDropdown.classList.toggle('button_secondary_default');
    buttonDropdown.classList.toggle('item__browse-button');
  }
  
  buttonDropdown.nextSibling.classList.toggle('dropdown-list_active');
}

