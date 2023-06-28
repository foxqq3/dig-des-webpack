import addPage from '@/js/components/pages/add-page.js';
import '@/scss/index.scss';

import addToken from '@/js/data-requests/add-token.js';

addPage();

localStorage.clear();

addToken();

