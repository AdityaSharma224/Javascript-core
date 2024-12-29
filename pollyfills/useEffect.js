class myComponent extends React.Component {
    componentDidMount(){
        // code to run after component mounts
    }
    render(){
        return <></>;
    }
}


class myComponent extends React.Component {
    componentDidMount(prevProps,prevState){
        if(prevProps.someProp !== this.props.someProp){
                    // code to run then 'someProp' changes
        }
    }
    render(){
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
  
