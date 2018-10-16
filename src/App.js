import React, { Component } from 'react';
//import logo from './logo.svg';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

  state = { 
      counters: [
          { id: 1, value: 4, descr: 'John Smith' },
          { id: 2, value: 0, descr: 'Bill Doe' },
          { id: 3, value: 7, descr: 'Anna Marie' },
          { id: 4, value: 1, descr: 'Emilia Adams' }
      ]
  };

  handleIncrement = counter => {
      const counters = [...this.state.counters]; //clone state counters to a new counters array
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters]; //clone state counters to a new counters array
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value>0) {
      counters[index].value--;
      this.setState({ counters: counters });
    }
};

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });

      this.setState({ counters });
  };

  handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters: counters });
  }

  mainStyle = {
    backgroundColor: '#f2f2f22b',
    padding: '1%',
    boxShadow: '3px 3px 5px 1px lightgrey',
    borderRadius: 10,
    marginTop: '3%'
  };

  render() {
    return (
      <React.Fragment>
        <main className="container" style={this.mainStyle}>
          <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length} />
          <br/>
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onIncrement={this.handleIncrement} 
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
