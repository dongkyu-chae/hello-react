import React, { useState } from "react";
import PropTypes from "prop-types";

const EventPractice = ({ name, age, children }) => {
  EventPractice.defaultProps = {
    name: "def name",
    age: 100,
    children: "def children",
  };

  EventPractice.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  };

  const [userform, setUserform] = useState({
    username: name,
    userage: age,
    userchildren: children,
  });
  const [username, setUsername] = useState(name);
  const [userage, setUserage] = useState(age);
  const [userchildren, setUserchildren] = useState(children);

  const onChangeUserform = (e) => {
    const tempForm = {
      ...userform,
      [e.target.name]: e.target.value,
    };
    setUserform(tempForm);
  };

  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeUserage = (e) => setUserage(e.target.value);
  const onChangeUserchildren = (e) => setUserchildren(e.target.value);

  const onClickBtn = () => {
    alert(
      `name : ${userform.username}, age : ${userform.userage}, children : ${userform.userchildren}`
    );
  };

  const onKeyPressInput = (e) => {
    if (e.key === "Enter") {
      onClickBtn();
    }
  };

  return (
    <>
      <div>event practice</div>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={userform.username}
        onChange={onChangeUserform}
        onKeyPress={onKeyPressInput}
      />
      <input
        type="text"
        name="userage"
        placeholder="사용자나이"
        value={userform.userage}
        onChange={onChangeUserform}
        onKeyPress={onKeyPressInput}
      />
      <input
        type="text"
        name="userchildren"
        placeholder="사용자 children"
        value={userform.userchildren}
        onChange={onChangeUserform}
        onKeyPress={onKeyPressInput}
      />
      <button onClick={onClickBtn}>confirm</button>
    </>
  );
};

export default EventPractice;
