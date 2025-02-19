export default ({ el, services, subscriptions, ui }) => () => {

    const $import = el('button', 'import', { textContent: 'Import' })
        .addEventListener('click', () => {
            const { emails, fallback } = services.settings.getGravatar();
            services.tags.insertGravatarBatchAsync(emails, fallback);
        });

    subscriptions.settings.onChange('gravatar', 'status', () => {
        ui.toggleBoolClass($import, 'visible', services.gravatar.status.is.ready());
    });

    subscriptions.settings.onChange('gravatar', 'freetext', freetext => {
        $import.disabled = !freetext.trim();
    });

    return $import;

};
