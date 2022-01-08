import React from "react";
import {Field,Content,Icon} from './Style_video'

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
        <div>
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <Field>
                    <label>Video Search</label>
                    <Content><input type = 'text' onChange={this.onInputChange}/><Icon src="/search-icon.png" alt="Icon"/></Content>
                </Field>
            </form>
        </div>
        );
    }
}

export default SearchBar;


