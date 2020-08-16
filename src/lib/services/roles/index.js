module.exports = {
    __modulename: 'roles',
    buildRole: require('./build-role'),
    changeRoleColor: require('./change-role-color'),
    changeRoleName: require('./change-role-name'),
    findOrInsertRoleWithName: require('./find-or-insert-role-with-name'),
    getRole: require('./get-role'),
    insertNilRole: require('./insert-nil-role'),
    insertRole: require('./insert-role'),
    isNilRole: require('./is-nil-role'),
    randomColor: require('./random-color'),
    setupRolePropagation: require('./setup-role-propagation')
};
