import * as React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    console.log('생성자');
  }
  componentDidMount() {}
  componentWillUpdate() {
    console.log('Test');
  }
  render() {
    const a = this.props.test;
    return <div>{a}</div>;
  }
}
