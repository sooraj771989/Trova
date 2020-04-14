import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="py-8 text-center font-bold text-xl">Trova</div>
        <div className="header bg-blue-700 px-4 py-8 flex justify-center">
          <NavLink
            exact
            to="/request"
            className="bg-blue-700 font-bold text-white py-4 px-8"
          >
            Requests
          </NavLink>
          <NavLink
            exact
            to="/services"
            className="bg-blue-700 font-bold text-white py-4 px-8"
          >
            Services
          </NavLink>
          <NavLink
            exact
            to="/payment"
            className="bg-blue-700 font-bold text-white py-4 px-8"
          >
            Payment
          </NavLink>
        </div>
      </div>
    );
  }
}

export default connect()(Header);
