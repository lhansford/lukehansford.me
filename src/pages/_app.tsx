import App from 'next/app';
import Router from 'next/router';

import '../css/main.css';
import '../css/font-awesome-4.2.0/css/font-awesome.min.css';

declare global {
  interface Window {
    goatcounter?: {
      count: (props: { path: string }) => void;
    };
  }
}

Router.events.on('routeChangeComplete', (url) => {
  if (window && window.goatcounter) {
    window.goatcounter.count({
      path: url,
    });
  }
});

export default App;
