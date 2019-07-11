import React, { Component } from "react";
import { FaRegCommentDots, FaShareAlt } from "react-icons/fa";
import { ButtonToolbar } from "react-bootstrap";
import Modal from "./ShareModal";

import "./style.scss";
import LikeButton from "./component/LikeButton";

class IconButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareOpen: "closeShare",
      toggleButtonText: "  Share",
      likes: 124,
      updated: false,
      Color: "",
      modalShow: false
    };

    this.updateLikes = this.updateLikes.bind(this);
  }

  // handles like state

  updateLikes() {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
          Color: "#DC2D08"
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false,
          Color: ""
        };
      });
    }
  }

  render() {
    // Modal for share button
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="icon_card">
        <span
          variant="light"
          className="icon_wrapper"
          style={{ color: this.state.Color }}
          onClick={this.updateLikes}
        >
          {/* <FaRegThumbsUp className="icon" /> {this.state.likes} */}
          <LikeButton />
        </span>
        <span className="icon_wrapper" variant="light">
          <FaRegCommentDots className="icon" /> Comment
        </span>

        <div className="socialShareContainer">
          <ButtonToolbar className="socialShareContainer">
            <span
              className="icon_wrapper"
              onClick={() => this.setState({ modalShow: true })}
            >
              <FaShareAlt className="icon" /> {this.state.toggleButtonText}
            </span>

            <Modal show={this.state.modalShow} onHide={modalClose} />
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default IconButtons;
