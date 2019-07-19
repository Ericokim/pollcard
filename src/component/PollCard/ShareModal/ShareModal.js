import React, { Component } from "react";
import {
  FaPinterest,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";
import { Modal } from "react-bootstrap";

import { ShareButtonIconOnly, ShareBlockStandard } from "react-custom-share";
// import TestShr from "./Testshare";
import "../style.scss";

const shareBlockProps = {
  Instagram: "https://www.instagram.com/accounts/login/",
  url: "https://github.com/greglobinski/react-custom-share",
  button: ShareButtonIconOnly,
  buttons: [
    { network: "Twitter", icon: FaTwitter },
    { network: "Facebook", icon: FaFacebook },
    { network: "Email", icon: FaEnvelope },
    { url: "https://www.instagram.com/accounts/login/", icon: FaInstagram },
    {
      network: "Pinterest",
      icon: FaPinterest,
      media:
        "https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif"
    },
    { network: "Linkedin", icon: FaLinkedin }
  ],
  text: "Give it a try - react-custom-share component",
  longtext:
    "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
};

export default class ShareModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h4>Share This Page on:</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Share This Page on:</h4> */}
          <div className="socialShareContainer">
            <div>
              <ShareBlockStandard {...shareBlockProps} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
