import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {answer: 42};
  }

  testFunc() {
    return Promise.resolve(37);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.testFunc()
    });
  }

  render() {
    return (
      <h2>Hello Class Components -- {this.state.answer}</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
