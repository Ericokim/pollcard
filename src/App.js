import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import {
  FaRegCommentDots,
  FaRegThumbsUp,
  FaShareAlt,
  FaCommentDots,
  FaThumbsUp
} from "react-icons/fa";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

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
  };

  render() {
    const { checkbox } = this.state;
    return (
      <div className="container">
        <Card>
          <Card.Body>
            <Card.Title>
              <h2>Save the multiple checkbox values in React js</h2>
            </Card.Title>
            <form onSubmit={this.onSubmit}>
              <div className="form-check">
                {checkbox.map(item => (
                  <ul>
                    <label key={item.id} className="form-check-label">
                      <input
                        type="checkbox"
                        name={item.name}
                        checked={this.state.isChecked}
                        onChange={this.handleChange}
                        className="form-check-input"
                      />
                      {item.name}
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
                    <FaThumbsUp /> 150
                  </div>
                  <div className="dark-comment">
                    <FaCommentDots /> 25
                  </div>
                </div>
              </div>
            </form>
          </Card.Body>

          <Card.Footer>
            <div className="icon_card">
              <div
                className="icon"
                onClick={() => this.handleViewBtnClick(this)}
              >
                <FaRegThumbsUp /> Like
              </div>
              <div
                className="icon"
                onClick={() => this.handleViewBtnClick(this)}
              >
                <FaRegCommentDots />
                Comment
              </div>
              <div
                className="icon"
                onClick={() => this.handleViewBtnClick(this)}
              >
                <FaShareAlt />
                Share
              </div>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default App;
