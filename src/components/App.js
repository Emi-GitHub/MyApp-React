import React from 'react'
import CountryList from './CountryList'
import CountryDetail from './CountryDetail'

function App() {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <CountryList/>
                </div>
                <div className="column eight wide">
                    <CountryDetail />
                </div>
            </div>
        </div>
    )
}

export default App
