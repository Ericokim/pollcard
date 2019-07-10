import React, { Component } from "react";
import axios from "axios";
import Footerbtn from "./FooterBtn";
import { Card } from "react-bootstrap";
import { FaCommentDots, FaThumbsUp } from "react-icons/fa";
import "./App.css";
import CheckBox from "./component/Checkbox";
import LikeButton from "./component/LikeButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: [],
      likes: 124
    };
  }

  handleAllChecked = event => {
    let checkbox = this.state.checkbox;
    checkbox.forEach(item => (item.isChecked = event.target.checked));
    this.setState({ checkbox: checkbox });
  };

  handleCheckFieldElement = e => {
    let checkbox = this.state.checkbox;
    checkbox.forEach(item => {
      if (item.name === e.target.name) item.isChecked = e.target.checked;
    });
    this.setState({ checkbox: checkbox });
  };

  componentDidMount() {
    axios.get("http://localhost:3000/checkbox").then(res => {
      const checkbox = res.data;
      this.setState({ checkbox });
    });
  }

  // onSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  //   // const item = {
  //   //   checkedItems: this.state.checkedItems
  //   // };

  //   // axios.post(`http://localhost:3000/checkedpolls`, { item }).then(res => {
  //   //   console.log(res);
  //   //   console.log(res.data);
  //   // });
  // };

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
    //   .post("http://localhost:3002/checkedpolls", data)
    //   .then(res => console.log(res.data));
  };

  render() {
    const { checkbox } = this.state;

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
                {checkbox.map(item => (
                  <span>
                    <CheckBox
                      key={item.id}
                      handleCheckFieldElement={this.handleCheckFieldElement.bind(
                        this
                      )}
                      {...item}
                    />
                  </span>
                ))}
                <div className="form-group-container">
                  <div className="form-group">
                    <button className="confirm_button">Confirm</button>
                  </div>

                  <div className="form-group-icon">
                    <div className="dark-thumb">
                      {/* <LikeButton /> */}
                      <FaThumbsUp /> {this.state.likes}
                    </div>
                    <div className="dark-comment">
                      <FaCommentDots /> 25
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
      </div>
    );
  }
}

export default App;
