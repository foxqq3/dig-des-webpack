import '@/js/register.js';
import createElement from '@/js/helpers.js';
import addDropdownList from '@/js/components/additional-components/dropdown-list.js';

export default function addBrowseButton(browseList) {
  const buttonWrapper = createElement('div', {
    style: 'position: relative; display: inline-block;',
  });
  const button = createElement('button', {
    className: 'button button_secondary_default button_icon item__browse-button',
  });
  button.insertAdjacentHTML(
    'beforeend',
    `<div class="svg-icon__wrapper" style="pointer-events: none;">
    <svg class="svg-icon">
      <use xlink:href="#browse"/>
    </svg>
  </div>`
  );

  button.setAttribute('data-browse','browse-item');
  buttonWrapper.appendChild(button);
  buttonWrapper.appendChild(addDropdownList(browseList));

  return buttonWrapper;
}
