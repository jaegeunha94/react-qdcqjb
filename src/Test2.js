import * as React from 'react';

export default class Test2 extends React.Component {
  constructor(props) {
    super(props);
    console.log('생성자');
  }
  componentDidMount() {}
  componentWillUpdate() {
    console.log('Test2');
  }
  render() {
    const a = this.props.test2;
    return <div>{a}</div>;
  }
}
