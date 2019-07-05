import React, { Component } from "react";
import axios from "axios";
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
      likes: 124,
      // time: new Date().toLocaleString()
    };
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
    // const item = {
    //   checkedItems: this.state.checkedItems
    // };

    // axios.post(`http://localhost:3000/checkbox`, { item }).then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // });
  };

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
              <div className="form-check">
                {checkbox.map(item => (
                  <ul class="red customcb">
                    <input
                      type="checkbox"
                      name={item.name}
                      checked={this.state.isChecked}
                      onChange={this.handleChange.bind(this)}
                      className="form-check-input"
                    />
                    <label key={item.id} className="form-check-label">
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
