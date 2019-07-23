import React, { Component } from "react";
import axios from "axios";
import Footerbtn from "../FooterLayout/FooterBtn";
import { FaCommentDots } from "react-icons/fa";
import CheckBox from "./Checkbox";
import LikeButton from "../Likebutton/LikeButton";
import "../style.scss";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      isHidden: false,
      isSubmitted: false
    };
  }

  handleCheckFieldElement = e => {
    /* let polls = this.state.trivia[0].polls;

    polls.forEach(item => {
      if (item.name === e.target.name) {
        item.isChecked = e.target.checked;
      } else {
        item.isChecked = false;
      }
    });
    const newT = this.state.trivia;
    newT[0].polls = polls;
    this.setState({ trivia: newT });
    // console.log(polls); */

    const { answer } = this.state;
    const id = e.target.id;
    console.log(answer);

    // if (answer) {
    //   this.setState({
    //     answer: null
    //   });
    // } else {
    //   this.setState({
    //     answer: id
    //   });
    // }

    this.setState({
      answer: id
    });
  };

  componentDidMount() {
    axios.get("http://localhost:3000/trivia").then(res => {
      const trivia = res.data;
      this.polls = trivia[0].polls;
      this.setState({ trivia });
    });
  }

  onSubmit = e => {
    e.preventDefault();

    this.setState({
      isSubmitted: true,
      isHidden: !this.state.isHidden
    });

    this.props.handleSubmit(this.state.answer);
  };

  render() {
    // const { trivia } = this.state;
    // const {polls = []} = trivia[0]
    // console.log(polls[0]);

    const { question, options, responses, type } = this.props.poll;
    console.log(this.props.poll);

    return (
      <div>
        <div className="poll-container">
          <div className="post_heading_wrapper">
            <h2 className="post_heading">{question}</h2>
          </div>
          <form onSubmit={this.onSubmit}>
            {options.map(({ id, count, text }) => (
              <span key={id}>
                <label
                  className={
                    this.state.answer == id
                      ? "round-checked"
                      : "round-unchecked"
                  }
                >
                  <CheckBox
                    id={id}
                    name={text}
                    isChecked={this.state.answer == id}
                    handleCheckFieldElement={this.handleCheckFieldElement}
                  />

                  {this.state.isSubmitted && (
                    <span className="poll-responses">{`${Math.round(
                      (count / responses) * 100
                    )}%`}</span>
                  )}
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
        </div>
        <Footerbtn />
      </div>
    );
  }
}

export default CheckList;
