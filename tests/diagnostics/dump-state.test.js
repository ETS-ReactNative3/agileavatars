export default ({ test, compose }) => {

    test('gets state', t => {
        const { diagnostics } = compose().modules;
        const state = diagnostics.dumpState();
        t.equal(Object.keys(state), ['settings', 'roles', 'tags', 'tagInstances']);
    });

};
