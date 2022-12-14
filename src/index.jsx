import { createRoot } from 'react-dom/client';

import App from './containers/App';

import './styles/index.scss';
import './styles/weather.scss';

// if the browser supports SW (all modern browsers do it)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // we will register it after the page complete the load
    navigator.serviceWorker.register('./serviceworker.js')
    .then((reg) => console.log('SW Register: Success', reg.scope))
    .catch((err) => console.log('SW Register: Failed', err));
  });
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);