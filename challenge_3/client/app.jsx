// import axios from 'axios';
import Form from 'Form.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      account: [],
      hood: [],
      creditCard: []
    }
  }


  // storeAccount() {
  //   axios.post('/account', {
  //     first_name: ,
  //     last_name: ,
  //     email: ,
  //     pass:
  //   })
  // }



  render() {
    console.log(this.state.list)
    console.log(this.getRequest)
    return (
      <div>
        <h2>Hello </h2>
        <Form account={account} />
      </div>

    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));