import React, { Component } from 'react'
import {selectCountry} from '../actions'
import { connect } from 'react-redux';

class CountryList extends Component {
    renderList(){
        return this.props.countries.map((country) => {
            return(
                <div className="item" key={country.name}>
                    <div className="right floated content">
                        <button className="ui secondary button" onClick={()=>this.props.selectCountry(country)}>Select</button>
                    </div>
                    <div className="content">{country.name}</div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {countries: state.countries};
}

export default connect(mapStateToProps, {selectCountry})(CountryList)
