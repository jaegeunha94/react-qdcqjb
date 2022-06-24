import React from 'react';
import './style.css';
import Test from './Test';
import Test2 from './Test2';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: 0, test2: 0 };
  }

  handleIncrement = () => {
    // this.setState((prevState) => {
    //   prevState.test += 1;
    // });
    this.setState({
      test: this.state.test + 1,
    });
  };

  handleIncrement2 = () => {
    // this.setState((prevState) => {
    //   prevState.test2 += 1;
    // });
    this.setState({
      test2: this.state.test2 + 1,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleIncrement} />
        <button onClick={this.handleIncrement2} />
        <Test test={this.state.test} />
        <Test2 test2={this.state.test2} />
      </>
    );
  }
}
