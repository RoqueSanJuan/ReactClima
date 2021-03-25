import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
import TestLoader from './TestLoader';

class App extends React.Component {
  state = { lat: null, errorMassage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
        return <div> Error: {this.state.errorMessage} </div>;
      }
      if (!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>;
      }
      if (!this.state.errorMessage && !this.state.lat) {
        return <TestLoader message="Please accept location resquest"/>;
      }
  }

  render() {
    return(
        <div className="border red">
            {this.renderContent()}
        </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
