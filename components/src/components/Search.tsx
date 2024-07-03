import React, {Component } from "react";
interface Props {
    onSearch:(query: string) => void
}
export default class Search extends Component<Props> {
    state = { value: '' };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
           value: e.target.value
        })
    }

    handleSearch = () => {
        const { onSearch } = this.props;
        const { value } = this.state;
        onSearch(value);
    }
    render() {
        return (
             <div>
               <input 
               type="search"
               value={this.state.value}
               onChange={this.handleChange}
               placeholder="type..."
               />
             <button onClick={this.handleSearch}>Search</button>
             </div>
        )
    }
}