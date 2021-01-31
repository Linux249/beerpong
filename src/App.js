import React, { Component } from 'react';

class App extends Component {
  state = {
    test1: false,
    test2: false,
  }

  toggleTest1 = () => this.setState({test1: true})
  toggleTest2 = () => this.setState({test2: true})

  render() {
    const {test1, test2} = this.state
    return (
      <div>
          <header> test</header>
        <div>
            {test1 && 'text2'}
            <button onClick={this.toggleTest1}/>
        </div>
        <div>
            {test2 && 'text2'}
            <button onClick={this.toggleTest2}/>
        </div>
      </div>
    );
  }
}

export default App;
