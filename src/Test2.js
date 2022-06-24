import * as React from 'react';

export default class Test2 extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {}
  componentDidUpdate() {
    console.log('Test2');
  }
  render() {
    const a = this.props.test2;
    const b = this.props.test3;

    return (
      <div>
        {a} {b}{' '}
      </div>
    );
  }
}
