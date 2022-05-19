import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "SNOWMAN" },
    { id: 2, text: "ICE" },
    { id: 3, text: "SNOW" },
    { id: 4, text: "WIND" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const temp = names.concat({ id: nextId, text: inputText });
    /*const temp = [
      ...names,
      {
        id: nextId,
        text: inputText,
      },
    ];*/
    setNextId(nextId + 1);
    setNames(temp);
  };
  const onRemove = (id) => {
    const temp = names.filter((name) => name.id !== id);
    setNames(temp);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      ({name.id}){name.text}{" "}
      <button onClick={() => onRemove(name.id)}>delete</button>
    </li>
  ));
  return (
    <>
      <br />
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>ADD~!</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
