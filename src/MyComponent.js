import PropTypes from "prop-types";

const MyComponent = ({ name, age, children }) => {
  return (
    <div>
      my new component. my name is {name}, {age} years old.....
      <br />
      child value is {children}.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default name",
  age: 100,
  children: "cc",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default MyComponent;
