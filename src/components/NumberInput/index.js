import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

export default class NumberInput extends PureComponent {
  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
  }

  setValue(val) {
    let _val = Number(val);
    if (!isNaN(_val)) {
      this.props.onChange(_val.toString());
    } else {
      this.props.onChange(this.props.value);
    }
  }

  render() {
    let nextProps = this.props;
    delete nextProps.onChange;
    delete nextProps.isFloat;
    return <TextInput {...nextProps} onChangeText={this.setValue} />;
  }
}
