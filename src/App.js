import React, { Component } from "react";
// import Checkbox from "./Checkbox";
import PropTypes from "prop-types";
import "./App.css";

const checkboxes = [
  {
    name: "box-1",
    key: "checkBox1",
    label: "Check Box 1"
  },
  {
    name: "box-2",
    key: "checkBox2",
    label: "Check Box 2"
  },
  {
    name: "box-3",
    key: "checkBox3",
    label: "Check Box 3"
  },
  {
    name: "box-4",
    key: "checkBox4",
    label: "Check Box 4"
  }
];

// const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => (
//   <input type={type} name={name} checked={checked} onChange={onChange} />
// );

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="poll_card">
          <form className="form-container">
            <div className="poll_container">
              {checkboxes.map(item => (
                <label key={item.key}>
                  <ul className="checkbox_list">
                    {/* <Checkbox
                name={item.name}
                checked={this.state.checkedItems.get(item.name)}
                onChange={this.handleChange}
              /> */}
                    <input
                      type="checkbox"
                      name={item.name}
                      checked={this.state.checkedItems.get(item.name)}
                      onChange={this.handleChange}
                      className="checkbox-round"
                    />
                    {item.name}
                  </ul>
                </label>
              ))}
            </div>
            <button className="confirm_button">Post Now</button>
          </form>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default App;
