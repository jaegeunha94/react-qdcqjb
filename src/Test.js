import * as React from 'react';

export default class Test extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {}
  componentDidUpdate() {
    console.log('Test');
  }
  render() {
    const a = this.props.test;
    const b = this.props.test3;

    return (
      <div>
        {a} {b}
      </div>
    );
  }
}
