import React, { Component } from "react";
import axios from "axios";
import Footerbtn from "../FooterLayout/FooterBtn";
import { Card } from "react-bootstrap";
import { FaCommentDots } from "react-icons/fa";
import "../style.scss";
import CheckBox from "./Checkbox";

import LikeButton from "../Likebutton/LikeButton";

class CheckList extends Component {
  polls = [];
  constructor(props) {
    super(props);
    this.state = {
      trivia: [],
      Color: "",
      isHidden: false
    };
  }

  handleCheckFieldElement = e => {
    let polls = this.state.trivia[0].polls;

    polls.forEach(item => {
      if (item.name === e.target.name) {
        item.isChecked = e.target.checked;
      } else {
        item.isChecked = false;
      }
    });
    const newT = this.state.trivia;
    newT[0].polls = polls
    this.setState({ trivia: newT });
    console.log(polls);
  };

  // displayQuestion = () => {
  //   this.setState({
  //     displayQuestions: !this.state.displayQuestions
  //   });
  // };

  componentDidMount() {
    axios.get("http://localhost:3000/trivia").then(res => {
      const trivia = res.data;
      this.polls = trivia[0].polls;
      this.setState({ trivia });
    });
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.setState({
      isHidden: !this.state.isHidden
    });

    // let arr = [];
    // for (var key in this.state) {
    //   if (this.state[key] === true) {
    //     arr.push(key);
    //   }
    // }
    // let data = {
    //   check: arr.toString()
    // };
    // axios
    //   .post("http://localhost:3000/Polls", data)
    //   .then(res => console.log(res.data));
  };

  render() {
    const { trivia } = this.state;
    // const {polls = []} = trivia[0]
    // console.log(polls[0]);

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
                {this.polls.map(item => (
                  <span key={item.id} className="">
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
                  </span>
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
        <div>
          {this.state.isHidden && (
            <div>
              {/* {polls.map(item => {
                if (item.isChecked === true)
                  return (
                    <div>
                      <br />
                      <br />
                      <br />
                      <br />
                      <div key={item.id} className="item-card">
                        <ul>
                          <h2 className="tagline">Answer</h2>
                          {item.name}
                        </ul>
                      </div>
                    </div>
                  );
              })} */}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CheckList;
