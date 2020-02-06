import React from 'react'
import CountryList from './CountryList'
import CountryDetail from './CountryDetail'

function FlagsApp() {
    return (
        <div>
            <div className="ui segment" style={{height:"270px"}}>
            <i className="flag icon"></i>
            Search for country and flag will appear on the screen! <br/> <br/>
            <b>STEP 1:</b> Click on select button of country you want to see flag <br/>
            <b>STEP 2:</b> Flag will show on the screen <br/> <br/>
            This application will show bellow, so check bellow!
        </div>
            <div className="ui container grid" style={{height:"1350px", marginTop:"150px"}}>
                <div className="ui row">
                    <div className="column eight wide">
                        <CountryList/>
                    </div>
                    <div className="column eight wide ">
                        <CountryDetail />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FlagsApp
