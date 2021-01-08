import { connect } from 'react-redux';
import { Component } from 'react';

class MFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: "msg"
        }

    }

    handleChange = (event) => {
        this.setState({ msg: event.target.value })
    }

    render() {
        return (<div>
            <input value={this.state.msg} onChange={this.handleChange}></input>
            <h2>{this.state.msg}</h2>
        </div>)
    }
}

export default connect()(MFooter);