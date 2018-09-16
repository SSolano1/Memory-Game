import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Container from "./components/Container";
import friends from "./friends.json";
import arrayShuffle from "array-shuffle";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  // shuffleImg = ()=> {
 
  //   const shuffled = arrayShuffle(friends);
  //   this.setState({friends: shuffled})

  // };

  imgClick = id => {
    console.log("click");
    if (this.state.clicked.indexOf(id) === -1) {
      console.log("increment");
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      console.log("failed-increment");
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    console.log("hello " + newScore);
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.shuffleImg();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "You Lose!",
      clicked: []
    });
    this.shuffleImg();
  };

  // shuffleImg = () => {
  //   let shuffledFriends = shuffleFriends(friends);
  //   this.setState({ friends: shuffledFriends });
  // };

  shuffleImg = ()=> {
    let shuffled = arrayShuffle(friends);
    this.setState({friends: shuffled})
  };


// Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav
          title="Women of Marvel"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
      <Header />  
      <Container>
        {/* <Title>Women of Marvel</Title> */}
        {this.state.friends.map(friend => (
          <FriendCard
            key={friend.id}
            imgClick = {this.imgClick}
          
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={friend.id}
            image={friend.image}

          />
        ))}
        </Container>
        </Wrapper>
      
    );
  }
}

export default App;

