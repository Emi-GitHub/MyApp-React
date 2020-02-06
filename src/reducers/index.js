import {combineReducers} from 'redux';

const countriesReducer = () => {
    return [
        {name: 'Albanija', capitalCity: 'Tirana', flag: "alb.jpg"},
        {name: 'Andora', capitalCity: 'Andora la Velja', flag: "alt.jpeg"},
        {name: 'Austrija', capitalCity: 'Beč', flag: "alt.jpeg"},
        {name: 'Belgija', capitalCity: 'Brisel', flag: "alt.jpeg"},
        {name: 'Bjelorusija', capitalCity: 'Minsk', flag: "alt.jpeg"},
        {name: 'Bosna i Hercegovina', capitalCity: 'Sarajevo', flag: "alt.jpeg"},
        {name: 'Bugarska', capitalCity: 'Sofija', flag: "alt.jpeg"},
        {name: 'Crna Gora', capitalCity: 'Podgorica', flag: "alt.jpeg"},
        {name: 'Češka', capitalCity: 'Prag', flag: "alt.jpeg"},
        {name: 'Danska', capitalCity: 'Kopenhagen', flag: "alt.jpeg"},
        {name: 'Estonija', capitalCity: 'Talin', flag: "alt.jpeg"},
        {name: 'Finska', capitalCity: 'Helsinki', flag: "alt.jpeg"},
        {name: 'Francuska', capitalCity: 'Pariz', flag: "alt.jpeg"},
        {name: 'Grčka', capitalCity: 'Atina', flag: "alt.jpeg"},
        {name: 'Gruzija', capitalCity: 'Tbilsi', flag: "alt.jpeg"},
        {name: 'Holandija', capitalCity: 'Amsterdam', flag: "alt.jpeg"},
        {name: 'Hrvatska', capitalCity: 'Zagreb', flag: "alt.jpeg"},
        {name: 'Irska, Republika', capitalCity: 'Dablin', flag: "alt.jpeg"},
        {name: 'Island', capitalCity: 'Rejkjavik', flag: "alt.jpeg"},
        {name: 'Italija', capitalCity: 'Rim', flag: "alt.jpeg"},
        {name: 'Jermenija', capitalCity: 'Jerevan', flag: "alt.jpeg"},
        {name: 'Letonija', capitalCity: 'Riga', flag: "alt.jpeg"},
        {name: 'Lihtenštajn', capitalCity: 'Vaduc', flag: "alt.jpeg"},
        {name: 'Litvanija', capitalCity: 'Vilnjus', flag: "alt.jpeg"},
        {name: 'Luksembzrg', capitalCity: 'Luksemburg', flag: "alt.jpeg"},
        {name: 'Mađarska', capitalCity: 'Budimpešta', flag: "alt.jpeg"},
        {name: 'Makedonija, BJR', capitalCity: 'Skoplje', flag: "alt.jpeg"},
        {name: 'Malta', capitalCity: 'La Valeta', flag: "alt.jpeg"},
        {name: 'Moldavija', capitalCity: 'Kišinjev', flag: "alt.jpeg"},
        {name: 'Monako', capitalCity: 'Monako', flag: "alt.jpeg"},
        {name: 'Njemačka', capitalCity: 'Berlin', flag: "alt.jpeg"},
        {name: 'Norveška', capitalCity: 'Oslo', flag: "alt.jpeg"},
        {name: 'Poljska', capitalCity: 'Varšava', flag: "alt.jpeg"},
        {name: 'Portugal', capitalCity: 'Lisabon', flag: "alt.jpeg"},
        {name: 'Rumunija', capitalCity: 'Bukurešt', flag: "alt.jpeg"},
        {name: 'San Marino', capitalCity: 'San Marino', flag: "alt.jpeg"},
        {name: 'Slovačka', capitalCity: 'Bratislava', flag: "alt.jpeg"},
        {name: 'Slovenija', capitalCity: 'Ljubljana', flag: "alt.jpeg"},
        {name: 'Srbija', capitalCity: 'Beograd', flag: "alt.jpeg"},
        {name: 'Španija', capitalCity: 'Madrid', flag: "alt.jpeg"},
        {name: 'Švajcarska', capitalCity: 'Bern', flag: "alt.jpeg"},
        {name: 'Švedska', capitalCity: 'Stokholn', flag: "alt.jpeg"},
        {name: 'Ujedinjeno Kraljevstvo', capitalCity: 'London', flag: "alt.jpeg"},
        {name: 'Ukrajina', capitalCity: 'Kijev', flag: "alt.jpeg"},
        {name: 'Vatikan', capitalCity: 'Vatikan', flag: "alt.jpeg"}
    ]
}

const selectedCountryReducer = (selectedCountry=null, action) => {
    if(action.type === 'COUNTRY_SELECTED'){
        return action.showload;
    }
    return selectedCountry;
}

export default combineReducers({ //object
    countries: countriesReducer,
    selectedCountry: selectedCountryReducer
})