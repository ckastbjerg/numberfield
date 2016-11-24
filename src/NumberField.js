import React, { Component, PropTypes } from 'react';

class NumberField extends Component {
  constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
      this.onBlur = this.onBlur.bind(this);
      this.state = {
        value: props.value,
      };
  }
  onBlur(e) {}
  onChange(e) {}
  render() {
    return (
      <input
        onChange={this.onChange}
        onBlur={this.onBlur}
        value={this.state.value}
      />
    );
  }
}

NumberField.propTypes = {
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    onValueChanged: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
};

export default NumberField;
