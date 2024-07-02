import { Component } from "react";

export default class Search extends Component {
    state = {
        value: ''
    }
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
           value: e.target.value
        })
    }
    render() {
        return (
             <div>
               <input 
               type="text"
               value={this.state.value}
               onChange={this.handleChange}
               />
             </div>
        )
    }
}