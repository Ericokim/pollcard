import React, { Component } from "react";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 124,
      updated: false,
      Color: "",
      className: ""
    };
  }

  // handles like state

  updateLikes() {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
          Color: "#DC2D08",
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false,
          Color: "",
          className: <FaThumbsUp className="heartOpen" />
        };
      });
    }
    
  }

  render() {
      
    return (
      <div>
        <span
          variant="light"
          className="icon_wrapper"
          style={{ color: this.state.Color }}
          onClick={this.updateLikes.bind(this)}
          //   className={this.state.className}
        >
          <FaRegThumbsUp className="icon" /> {this.state.likes}
        </span>
      </div>
    );
  }
}
