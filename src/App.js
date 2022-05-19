import logo from "./logo.svg";
import "./App.css";
import React, { Component, Fragment } from "react";
import MyComponent from "./MyComponent";
import MyComponentClass from "./MyComponentClass";
import CounterClass from "./CounterClass";
import Say from "./Say";
import EventPracticeClass from "./EventPracticeClass";
import EventPractice from "./EventPractice";
import IterationSample from "./IterationSample";

class App extends Component {
  render() {
    return (
      <div className="react">
        {/*<MyComponent name={111} children="aaa">
          cccccchildren
        </MyComponent>

        <MyComponentClass name={222} children="bbb">
          ddddddchildren
        </MyComponentClass>

    <CounterClass></CounterClass>*/}
        <Say></Say>
        <EventPractice name="dkchae" age={1234}>
          ... is my children
        </EventPractice>
        <IterationSample></IterationSample>
      </div>
    );
  }
}

export default App;
