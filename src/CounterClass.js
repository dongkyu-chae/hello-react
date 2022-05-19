import React, { Component } from "react";

class CounterClass extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("setState Called before!");
                console.log(this.state);
              }
            );

            this.setState((prevState, props) => {
              return {
                // to do update
              };
            });
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default CounterClass;
