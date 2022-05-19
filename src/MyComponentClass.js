import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponentClass extends Component {
  render() {
    const { name, age, children } = this.props; // 비구조화할당
    return (
      <div>
        my new component. my name is {name}, {age} years old.....
        <br />
        child value is {children}.
      </div>
    );
  }
}

MyComponentClass.defaultProps = {
  name: "default name",
  age: 100,
  children: "cc",
};

MyComponentClass.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default MyComponentClass;
