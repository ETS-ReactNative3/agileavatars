export default ({ el, components }) => () => {

    const { roleShortcut, naming, images, laminating, multiples, badges } = components.tips;
    const sequence = [roleShortcut, naming, images, laminating, multiples, badges];

    const $tips = el('div', 'tips');

    sequence.forEach(render => {
        const $tip = render();
        $tip.className = 'tip';
        const $heading = el('div', 'heading', { textContent: $tip.title });
        $tip.prepend($heading);
        $tips.append($tip);
    });

    return components.modal({
        name: 'tips',
        content: $tips,
        title: 'Tips & tricks'
    });

};
