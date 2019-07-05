import React, { Component } from "react";
import { FaRegCommentDots, FaRegThumbsUp, FaShareAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Button, ButtonToolbar } from "react-bootstrap";
import Modal from "./ShareModal";
import Likebtn from "./Likebtn";
import "./style.scss";

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
    this.shareOpenToggle = this.shareOpenToggle.bind(this);
  }

  // handles like state

  updateLikes() {
    if (!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true,
          Color: "blue"
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
  // handles share state

  shareOpenToggle() {
    if (this.state.shareOpen === "closeShare") {
      this.setState({
        shareOpen: "openShare"
      });
    } else {
      this.setState({
        shareOpen: "closeShare",
        toggleButtonText: "  Share"
      });
    }
  }

  render() {
    //URL from current page
    const url = window.location.href;
    //URL patterns for Social media sites share functionalities
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/home?status=${url}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;

    // Modal for share button
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className="icon_card">
        <Button
          variant="light"
          className="icon_wrapper"
          style={{ color: this.state.Color }}
          onClick={this.updateLikes}
        >
          <FaRegThumbsUp className="icon" /> Like
          {/* {this.state.likes} */}
        </Button>
        <Button className="icon_wrapper" variant="light">
          <FaRegCommentDots className="icon" /> Comment
        </Button>

        <div className="socialShareContainer">
          {/* <div
            className="icon_wrapper"
            onClick={() => this.setState({ modalShow: true })}
          >
            <FaShareAlt className="icon" /> {this.state.toggleButtonText}
            <Modal show={this.state.modalShow} onHide={modalClose} />
          </div> */}

          <ButtonToolbar className="socialShareContainer">
            <Button
              className="icon_wrapper"
              variant="light"
              onClick={() => this.setState({ modalShow: true })}
            >
              <FaShareAlt className="icon" /> {this.state.toggleButtonText}
            </Button>

            <Modal show={this.state.modalShow} onHide={modalClose} />
          </ButtonToolbar>

          <div className={this.state.shareOpen}>
            <a href={facebookUrl} target="facebookUrl">
              <FaFacebookF />
            </a>
            <a href={linkedinUrl} target="twitterUrl">
              <FaLinkedinIn />
            </a>
            <a href={twitterUrl} target="linkedinUrl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default IconButtons;
