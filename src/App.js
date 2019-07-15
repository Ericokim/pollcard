import React, { Component } from "react";
import axios from "axios";
import Footerbtn from "./component/FooterLayout/FooterBtn";
import { Card } from "react-bootstrap";
import { FaCommentDots } from "react-icons/fa";
import "./App.css";
import CheckBox from "./component/Checkbox/Checkbox";
// import { TimeAgo } from "@n1ru4l/react-time-ago";
import LikeButton from "./component/Likebutton/LikeButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      polls: [],
      Color: ""
    };
  }

  handleAllChecked = event => {
    let polls = this.state.polls;
    polls.forEach(item => (item.isChecked = event.target.checked));
    this.setState({ polls: polls });
  };

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
    const { polls } = this.state;
    // const initialDate = new Date();
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
                {/* <ul className="checkall ">
                  <div>
                    <input
                      type="checkbox"
                      onClick={this.handleAllChecked}
                      name="checkedall"
                      id="checkbox"
                    />
                    Select All
                    <label htmlFor="checkbox" />
                  </div>
                </ul> */}
                {polls.map(item => (
                  <span key={item.id} className="">
                    <label
                      className={
                        item.isChecked === true
                          ? "round-checked"
                          : "round-unchecked"
                      }
                    >
                      <CheckBox
                        key={item.id}
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
                      {/* <FaThumbsUp /> {this.state.likes} */}
                    </div>
                    <div className="dark-comment">
                      <FaCommentDots />
                      <span style={{ marginLeft: 8 }}>25</span>
                    </div>
                    {/* <div className="time">
                      <TimeAgo date={new Date()}>
                        {({ value }) => <span>{value}</span>}
                      </TimeAgo>
                    </div> */}
                  </div>
                </div>
              </form>
            </Card.Body>

            <Card.Footer>
              <Footerbtn />
            </Card.Footer>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
