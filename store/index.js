export const state = () => ({
    valuta: [
        {
            currency: '&#8371;',
            naam: 'AUD',
        },
        {
            currency: '&#8454;',
            naam: 'CAD',
        },
        {
            currency: '&#8355;',
            naam: 'CHF',
        },
        {
            currency: '&euro;',
            naam: 'EUR',
        },
        {
            currency: '&pound;',
            naam: 'GBP',
        },
        {
            currency: '&yen;',
            naam: 'JPY',
        },
        {
            currency: '&dollar;',
            naam: 'NZD',
        },
        {
            currency: '&dollar;',
            naam: 'USD',
        },
    ],

})

export const actions = {


    // sets the exchange rate between from_currency and to_currency in session storage
    getExchangeRate() {
        // set the current exchange rate
        var from_currency = 'EUR';

        // set the currency you want to change to
        var to_currency = 'USD';
        axios.get( "https://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D" + from_currency + to_currency + "%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json")
        .then(response => {
            console.log(response)
        })
        .catch(err => {

        })
    }
}