import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
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

  shuffleImg = ()=> {
    console.log("Hello World");
    const shuffled = arrayShuffle(friends);
    this.setState({friends: shuffled})
    // for (let i = array.length - 1; i > 0; i--) {
    //   let j = Math.floor(Math.random() * (i + 1));
    //   [array[i], array[j]] = [array[j], array[i]];

    // }
    // return array;
  };

  // handleClick = id => {
  //   if (this.state.clicked.indexOf(id) === -1) {
  //     this.handleIncrement();
  //     this.setState({ clicked: this.state.clicked.concat(id) });
  //   } else {
  //     this.handleReset();
  //   }
  // };

  // handleIncrement = () => {
  //   const newScore = this.state.currentScore + 1;
  //   this.setState({
  //     currentScore: newScore,
  //     rightWrong: ""
  //   });
  //   if (newScore >= this.state.topScore) {
  //     this.setState({ topScore: newScore });
  //   }
  //   else if (newScore === 12) {
  //     this.setState({ rightWrong: "You win!" });
  //   }
  //   this.handleShuffle();
  // };

  // handleReset = () => {
  //   this.setState({
  //     currentScore: 0,
  //     topScore: this.state.topScore,
  //     rightWrong: "Glaven!",
  //     clicked: []
  //   });
  //   this.handleShuffle();
  // };

  // handleShuffle = () => {
  //   let shuffledFriends = shuffleFriends(friends);
  //   this.setState({ friends: shuffledFriends });
  // };

removeFriend = id => {
  // Filter this.state.friends for friends with an id not equal to the id being removed
  const friends = this.state.friends.filter(friend => friend.id !== id);
  // Set this.state.friends equal to the new friends array
  this.setState({ friends });
};


// Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Women of Marvel</Title>
        {this.state.friends.map(friend => (
          <FriendCard
          imgClick = {this.shuffleImg}
            
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}

          />
        ))}
        </Wrapper>
      
    );
  }
}

export default App;

