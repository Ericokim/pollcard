import React, { Component } from "react";
import axios from "axios";
import Checkbox from "./component/Checkbox";
import Footerbtn from "./FooterBtn";
import { Card } from "react-bootstrap";
import { FaCommentDots, FaThumbsUp } from "react-icons/fa";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: [],
      likes: 124
      // time: new Date().toLocaleString()
    };
  }

  // handleCheckboxChange = event => {
  //   this.setState({ checked: event.target.checked });
  // };

  handleChange(e) {
    let checkbox = this.state.checkbox;
    checkbox.forEach(item => {
      if (item.name === e.target.name) item.isChecked = e.target.checked;
    });
    this.setState({ checkbox: checkbox });
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/checkbox")
      .then(res => {
        const checkbox = res.data;
        this.setState({ checkbox });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // const item = {
    //   checkedItems: this.state.checkedItems
    // };

    // axios.post(`http://localhost:3000/checkbox`, { item }).then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // });
  };

  state = { checked: false };

  render() {
    const { checkbox } = this.state;

    return (
      <div className="container">
        <Card>
          <Card.Body>
            <Card.Title>
              <h2 className="post_heading">
                Save the multiple checkbox values in React js
              </h2>
            </Card.Title>
            <form onSubmit={this.onSubmit}>
              <div>
                {checkbox.map(item => (
                  <ul className="custom-control custom-checkbox">
                    <label>
                      <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                      />
                      <span style={{ marginLeft: 8 }}>{item.name}</span>
                    </label>
                  </ul>
                ))}
              </div>

              <div className="form-group-container">
                <div className="form-group">
                  <button className="confirm_button">Confirm</button>
                </div>

                <div className="form-group-icon">
                  <div className="dark-thumb">
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
    );
  }
}

export default App;
