import React from "react";
import axios from "axios";
import "./App.css";
import GitHubList from "./components/GithubList";
import GitHubFollowers from "./components/GitHubFollowers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: "",
      userFollowers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/denmercs")
      .then(response => {
        this.setState({
          userInfo: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("https://api.github.com/users/denmercs/followers")
      .then(response => {
        this.setState({
          userFollowers: response.data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Welcome to Github Users Card </h1>
          <GitHubList user={this.state.userInfo} />
          {this.state.userFollowers.map(users => {
            return <GitHubFollowers followers={users} />;
          })}
        </header>
      </div>
    );
  }
}

export default App;
