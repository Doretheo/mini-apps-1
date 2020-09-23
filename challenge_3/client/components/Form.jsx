// import React, { Component } from 'react';

class Form extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <form>
        <label>
          First Name
          <input type="text" name="first_name" />
        </label>
        <label>
          Last Name
          <input type="text" name="last_name" />
        </label>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Password
          <input type="text" name="pass" />
        </label>
        <input type="submit" name="submit" />
      </form>
    )
  }
}