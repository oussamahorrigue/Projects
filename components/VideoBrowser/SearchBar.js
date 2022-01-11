import React from "react";
import {Search,Inputstyle,SerachImage} from './style-video-content';


class SearchBar extends React.Component{

    state={term : ''};
    onInputChange = event =>{
        this.setState({term : event.target.value});
    };

    onFormSubmit = event =>{
        event.preventDefault();
        this.props.TryApi(this.state.term);

    };

    render(){
        return (
        <Search>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <Inputstyle>
                    <label>Video Search</label>
                    <SerachImage><input type = 'text' placeholder="Search" onChange={this.onInputChange}/><img src="/search-icon.png" alt="Icon"/></SerachImage>
                </Inputstyle>
            </form>
        </Search>
        );
    }
}

export default SearchBar;


