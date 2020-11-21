import './style/index';
import App from './components/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

// add the icons we want to a library so we can easily use them throughout the rest of the project
// https://www.npmjs.com/package/@fortawesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently
library.add(faHome, faClock, faIdBadge);

export default App;
