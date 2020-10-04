const composer = require('module-composer');
const src = require('./src');
const { storage, util } = src;

module.exports = ({ window, ...overrides }) => {

    const compose = composer(src, { overrides });

    // Configure
    const config = compose('config');
    const io = compose('io', { window });    
    const vendor = compose('vendor', { config, io, window });

    // Data
    const stores = compose('stores', { storage, config });
    const subscriptions = compose('subscriptions', { stores, util });

    // Domain
    const core = compose('core', { util, config });
    const services = compose('services', { subscriptions, stores, core, io, util, config });
        
    // Presentation
    const { el, ...ui } = compose('ui', { config, window });
    const styles = compose('styles', { el, subscriptions, config });
    const elements = compose('elements', { el, ui, window });
    compose('components', { el, elements, services, subscriptions, ui, util, config, vendor });
    
    // Startup    
    compose('diagnostics', { stores, util });
    compose('startup', { styles, subscriptions, services, stores, util, config, window });

    return compose.getModules();

};
