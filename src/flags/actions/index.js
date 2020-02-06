export const selectCountry = country => {
    return {
        type: 'COUNTRY_SELECTED',
        showload: country
    }
}