export default ({ test, compose, helpers }) => {

    test('welcome modal is visible by default', t => {
        const { components } = compose().modules;
        const $welcomeModal = components.modals.welcome();
        const assertVisible = helpers.assertBoolClass(t, $welcomeModal, 'visible');
        assertVisible(true);
    });

    test('welcome modal dismissed by continue button', t => {
        const { components } = compose().modules;
        const $welcomeModal = components.modals.welcome();
        const assertVisible = helpers.assertBoolClass(t, $welcomeModal, 'visible');
        const $dismiss = $welcomeModal.querySelector('button');
        helpers.dispatchEvent('click', $dismiss);
        assertVisible(false);
    });

};
