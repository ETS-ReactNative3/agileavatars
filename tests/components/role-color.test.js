module.exports = ({ test, boot, window, helpers }) => {

    test('master role name reflects new color', t => {
        const { components, services } = boot();
        const $styles = components.styles.roleColor();
        window.document.body.append($styles); 
        
        const roleId = services.roles.insertRole({ roleName: 'foo' });        
        const $roleCustomiser = components.roleList.roleCustomiser(roleId);
        
        services.tags.insertTag({ roleId });

        const $colorPickerTrigger = $roleCustomiser.querySelector('.color-picker');
        helpers.dispatchEvent('click', $colorPickerTrigger);

        const $color = $colorPickerTrigger.querySelector('input');
        $color.value = '#ffffffff';
        helpers.dispatchEvent('input', $color);

        const role = helpers.getRole($roleCustomiser);
        t.equal(role.getRoleStyle().backgroundColor, 'rgba(255, 255, 255, 1)');

        
    });
    
    test('role color change propagates to tags', t => {
        const { components, services } = boot();

        const $styles = components.styles.roleColor();
        window.document.body.append($styles); 
        
        const roleId = services.roles.insertRole({ roleName: 'foo' });   
        const $roleCustomiser = components.roleList.roleCustomiser(roleId);
        
        const $tagList = components.tagList();
        services.tags.insertTag({ roleId });

        const $colorPickerTrigger = $roleCustomiser.querySelector('.color-picker');
        helpers.dispatchEvent('click', $colorPickerTrigger);

        const $color = $colorPickerTrigger.querySelector('input');
        $color.value = '#ffffffff';
        helpers.dispatchEvent('input', $color);

        const [tag1] = helpers.getTags($tagList);
        const imageStyle = tag1.getImageStyle();
        const roleStyle = tag1.getRoleStyle();
        t.equal(imageStyle.borderColor, '#ffffffff');
        t.equal(roleStyle.backgroundColor, 'rgba(255, 255, 255, 1)');
        
    });

};