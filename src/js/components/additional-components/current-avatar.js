import createElement from '@/js/helpers.js';
import travolta from '@/assets/images/travolta.jpg';

export default function addCurrentAvatar() {
  const avatarWrapper = createElement('div', { className: 'avatar' });
  const avatarImage = createElement('img', {
    src: travolta,
    className: 'avatar__image',
    alt: 'Аватар пользователя',
  });

  avatarWrapper.appendChild(avatarImage);

  return avatarWrapper;
}
