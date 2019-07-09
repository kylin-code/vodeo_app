const BindComponentMethodThis = WrappedComponent => {
    const _lifecycleMethods = [
        'constructor',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount',
        'render'
    ];
    const _constructor = WrappedComponent.prototype;
    const _methodsArry = Object.getOwnPropertyNames(_constructor);
    const _this = new WrappedComponent();
    _methodsArry.forEach(item => {
        if (!_lifecycleMethods.includes(item)) {
            _constructor[item] = _constructor[item].bind(_this);
        }
    });
};

export default BindComponentMethodThis;
