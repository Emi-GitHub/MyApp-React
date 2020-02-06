import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    onFormSubmit = event => {
        event.preventDefault();
        //poslati ono sto se unese u input kao props
        this.props.onSearchSubmit(this.state.term);
    }
    onInputChange = event => {
        this.setState({
            term: event.target.value
        })
    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <div className="ui input">
                            <input 
                                type="text" 
                                placeholder="Search..."
                                value={this.state.term} 
                                onChange={this.onInputChange}
                            />
                        </div> 
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;