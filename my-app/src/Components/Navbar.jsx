import React from 'react';
import LoginControl from "./LoginControl";
import "./NavbarStyle.css";


class Navbar extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    const {title, login} = this.props;
    return (
      <div className="main_box">
        <div className="main_box--header">
          <h2>{title}</h2>
        </div>
        <div className="main_box--main">
        <div className="main_box--main--title">
            <h4>{login}</h4>
          </div>
          <LoginControl />
        </div>
      </div>
    )
  }
} 

export default Navbar;