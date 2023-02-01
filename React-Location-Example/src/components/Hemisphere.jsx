import React from 'react';
import HemisphereDisplay from './HemisphereDisplay';
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//   (position) => console.log(position),
//   (error) => console.log(error)) ;
//   return(
//     <div>
//       Hello
//     </div>//   )
// }
class Hemisphere extends React.Component {
  constructor(props){
    super(props);
   this.state = {show: true,latitude: null, errorMessage: "", longitude: null };
  }
 
  
  delComponent = () => {
    this.setState({show: false});
    alert("component is unmounting");
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
        this.setState({ longitude: position.coords.longitude });
        this.setState({show: true});


        //this.state.latitude = position.coords.latitude
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <HemisphereDisplay latitude={this.state.latitude} longitude={this.state.longitude}/>;
    };
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div className="App"><button type="button" onClick={this.delComponent}>Delete Component</button> {myheader}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}
export default Hemisphere;