// import axios from 'axios';
import Form from 'Form.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      account: [],
      hood: [],
      creditCard: []
    };
  } // storeAccount() {
  //   axios.post('/account', {
  //     first_name: ,
  //     last_name: ,
  //     email: ,
  //     pass:
  //   })
  // }


  render() {
    console.log(this.state.list);
    console.log(this.getRequest);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Hello "), /*#__PURE__*/React.createElement(Form, {
      account: account
    }));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));
// import React, { Component } from 'react';
class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("label", null, "First Name", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "first_name"
    })), /*#__PURE__*/React.createElement("label", null, "Last Name", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "last_name"
    })), /*#__PURE__*/React.createElement("label", null, "Email", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "email"
    })), /*#__PURE__*/React.createElement("label", null, "Password", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "pass"
    })), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      name: "submit"
    }));
  }

}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9hcHAuanN4IiwiLi4vY2xpZW50L2NvbXBvbmVudHMvRm9ybS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPLElBQVAsTUFBaUIsVUFBakI7O0FBRUEsTUFBTSxHQUFOLFNBQWtCLEtBQUssQ0FBQyxTQUF4QixDQUFrQztBQUNoQyxFQUFBLFdBQVcsR0FBRztBQUNaO0FBQ0EsU0FBSyxLQUFMLEdBQWE7QUFDWCxNQUFBLE9BQU8sRUFBRSxFQURFO0FBRVgsTUFBQSxJQUFJLEVBQUUsRUFGSztBQUdYLE1BQUEsVUFBVSxFQUFFO0FBSEQsS0FBYjtBQUtELEdBUitCLENBV2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlBLEVBQUEsTUFBTSxHQUFHO0FBQ1AsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQUssS0FBTCxDQUFXLElBQXZCO0FBQ0EsSUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLEtBQUssVUFBakI7QUFDQSx3QkFDRSw4Q0FDRSx5Q0FERixlQUVFLG9CQUFDLElBQUQ7QUFBTSxNQUFBLE9BQU8sRUFBRTtBQUFmLE1BRkYsQ0FERjtBQU9EOztBQWhDK0I7O0FBbUNsQyxRQUFRLENBQUMsTUFBVCxlQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXdCLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQXhCO0FDdENBO0FBRUEsTUFBTSxJQUFOLFNBQW1CLEtBQUssQ0FBQyxTQUF6QixDQUFtQztBQUNqQyxFQUFBLFdBQVcsR0FBRztBQUNaO0FBRUQ7O0FBRUQsRUFBQSxNQUFNLEdBQUc7QUFDUCx3QkFDRSwrQ0FDRSw4REFFRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUM7QUFBeEIsTUFGRixDQURGLGVBS0UsNkRBRUU7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDO0FBQXhCLE1BRkYsQ0FMRixlQVNFLHlEQUVFO0FBQU8sTUFBQSxJQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFBLElBQUksRUFBQztBQUF4QixNQUZGLENBVEYsZUFhRSw0REFFRTtBQUFPLE1BQUEsSUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBQSxJQUFJLEVBQUM7QUFBeEIsTUFGRixDQWJGLGVBaUJFO0FBQU8sTUFBQSxJQUFJLEVBQUMsUUFBWjtBQUFxQixNQUFBLElBQUksRUFBQztBQUExQixNQWpCRixDQURGO0FBcUJEOztBQTVCZ0MiLCJmaWxlIjoiY29tcGlsZWRfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBGb3JtIGZyb20gJ0Zvcm0uanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWNjb3VudDogW10sXG4gICAgICBob29kOiBbXSxcbiAgICAgIGNyZWRpdENhcmQ6IFtdXG4gICAgfVxuICB9XG5cblxuICAvLyBzdG9yZUFjY291bnQoKSB7XG4gIC8vICAgYXhpb3MucG9zdCgnL2FjY291bnQnLCB7XG4gIC8vICAgICBmaXJzdF9uYW1lOiAsXG4gIC8vICAgICBsYXN0X25hbWU6ICxcbiAgLy8gICAgIGVtYWlsOiAsXG4gIC8vICAgICBwYXNzOlxuICAvLyAgIH0pXG4gIC8vIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubGlzdClcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdldFJlcXVlc3QpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5IZWxsbyA8L2gyPlxuICAgICAgICA8Rm9ybSBhY2NvdW50PXthY2NvdW50fSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICApXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCIvLyBpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEZpcnN0IE5hbWVcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmlyc3RfbmFtZVwiIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBMYXN0IE5hbWVcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibGFzdF9uYW1lXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInBhc3NcIiAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJzdWJtaXRcIiAvPlxuICAgICAgPC9mb3JtPlxuICAgIClcbiAgfVxufSJdfQ==