import React, { Component } from "react";
import axios from "axios";
import Footerbtn from "../FooterLayout/FooterBtn";
import { Card } from "react-bootstrap";
import { FaCommentDots } from "react-icons/fa";
import "../style.scss";
import CheckBox from "./Checkbox";
import Logs from "../Logs/logs";
import LikeButton from "../Likebutton/LikeButton";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      Color: "",
      isHidden: false
    };
  }

  handleCheckFieldElement = e => {
    let polls = this.state.polls;
    polls.forEach(item => {
      if (item.name === e.target.name) item.isChecked = e.target.checked;
    });
    this.setState({ polls: polls });
  };

  componentDidMount() {
    axios.get("http://localhost:3000/Polls").then(res => {
      const polls = res.data;
      this.setState({ polls });
    });
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    const { polls } = this.state;

    return (
      <div className="container">
        <div className="wrapper">
          <Card>
            <Card.Body>
              <Card.Title>
                <h2 className="post_heading">
                  Save the multiple checkbox values in React js
                </h2>
              </Card.Title>
              <form onSubmit={this.onSubmit}>
                {polls.map(item => (
                  <React.Fragment key={item.id} className="">
                    <label
                      className={
                        item.isChecked === true
                          ? "round-checked"
                          : "round-unchecked"
                      }
                    >
                      <CheckBox
                        handleCheckFieldElement={this.handleCheckFieldElement.bind(
                          this
                        )}
                        {...item}
                      />
                    </label>
                  </React.Fragment>
                ))}
                <div className="form-group-container">
                  <div className="form-group">
                    <button className="confirm_button">Confirm</button>
                  </div>

                  <div className="form-group-icon">
                    <div className="dark-thumb">
                      <LikeButton />
                    </div>
                    <div className="dark-comment">
                      <FaCommentDots />
                      <span style={{ marginLeft: 8 }}>25</span>
                    </div>
                  </div>
                </div>
              </form>
            </Card.Body>

            <Card.Footer>
              <Footerbtn />
            </Card.Footer>
          </Card>
        </div>
        <br />
        <br />

        {this.state.isHidden && (
          <div>
            {polls.map(item => {
              if (item.isChecked === true)
                return (
                  <div>
                    <div key={item.id} className="item-card">
                      <ul>
                        <h2 className="tagline">Answer</h2>
                        {item.name}
                      </ul>
                    </div>
                  </div>
                );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default CheckList;
