export default ({ el, elements, services, subscriptions, config }) => () => {

    const $$options = Object.entries(config.options.sort).map(([value, textContent]) => {
        return el('option', { value, textContent });
    });

    const $keepSorted = el('select')
        .append(...$$options)
        .addEventListener('change', () => {
            services.settings.changeOption('sort', $keepSorted.value);
        });

    subscriptions.settings.onChange('options', 'sort', sort => {
        $keepSorted.value = sort;
    });

    return elements.label('Keep sorted by', $keepSorted);

};
