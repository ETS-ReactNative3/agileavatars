import compose from './compose';
import config from './default-config';

const isLocalhost = (/localhost/).test(window.location.host);
config.gtag.enabled = config.sentry.enabled = !isLocalhost;

const { startup, components, composition } = compose({ config, window });
window.app = { config, ...composition };
window.document.title = config.app.name;

const { createRoot } = startup.start();
const container = document.getElementById('app');
const root = createRoot(container);
root.render(components.app());
