class myComponent extends React.Component {
  componentDidMount() {
  }
  render() {
    return
    <>

    </>;
  }
}


class myComponent extends React.Component {
  componentDidMount(prevProps, prevState) {
    if (prevProps.someProp !== this.props.someProp) {
      // code to run then 'someProp' changes
    }
  }
  render() {
    return <></>;
  }
}


class MyComponent extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      console.log('Tick');
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Cleanup logic
  }

  render() {
    return <div>Timer is running</div>;
  }
}


// Mounting phase
// componentDidMount() {
//   console.log('Component mounted');
// }


// Updating Phase
// componentDidUpdate(prevProps, prevState, snapshot) {
//   if (snapshot !== null) {
//     window.scrollTo(0, snapshot);
//   }
// }

// Unmounting Phase
// componentWillUnmount() {
//   console.log('Component will unmount');
// }

// Error handling
// componentDidCatch(error, info) {
//   console.error('Error:', error, info);
// }

// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//     console.log('Constructor');
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log('getDerivedStateFromProps');
//     return null;
//   }

//   componentDidMount() {
//     console.log('ComponentDidMount');
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('ShouldComponentUpdate');
//     return nextState.counter !== this.state.counter;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('GetSnapshotBeforeUpdate');
//     return null;
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('ComponentDidUpdate');
//   }

//   componentWillUnmount() {
//     console.log('ComponentWillUnmount');
//   }

//   increment = () => {
//     this.setState((prevState) => ({ counter: prevState.counter + 1 }));
//   };

//   render() {
//     console.log('Render');
//     return (
//       <div>
//         <h1>Counter: {this.state.counter}</h1>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;

