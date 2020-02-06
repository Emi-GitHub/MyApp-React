import React from 'react'
import { connect } from 'react-redux';


function CountryDetail(props) {
    if(!props.country) return <div>Select a country</div>
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                <b><i>Country:</i></b> {props.country.name} <br/>
                <b><i>Capital city:</i></b> {props.country.capitalCity}
            </p>
            <img src={props.country.name+'.jpg'} alt={props.country.flag} width="300px" style={{border:"1px solid black"}}></img>
        </div>
    )
}

const mapStateToProps = state => {
    return {country: state.selectedCountry}
}

export default connect(mapStateToProps)(CountryDetail)

