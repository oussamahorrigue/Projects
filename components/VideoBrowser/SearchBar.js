import React from "react";
import {Input,Field,Search_Bar} from './Style.video'

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
        <Search_Bar >
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <Field>
                    <label>Video Search</label>
                    <Input type = 'text' onChange={this.onInputChange}/>
                </Field>
            </form>

        </Search_Bar>
        );
    }
}

export default SearchBar;


