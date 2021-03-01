import axios from 'axios'
export const state = () => ({
    /**
     * TODOs
     * -check als eerste en tweede waarde niet gelijk zijn
     * - niet meer dan 2 waarde toegevoegd 
     * -b504969feab88deff82d096da3520d75
     * https://data.fixer.io/api/latest?access_key=API_KEY&base=USD
     */
    showmenu: 'closed',
    balancecurrency: 'EUR',
    gekozenvaluta: [],
    gekozenbalance: 0,
    gekozenrisk: 0,
    gekozenpips: 0,
    rate: 0,
    valuta: [
        {
            currency: '&#8371;',
            naam: 'AUD',
            selected: false,
        },
        {
            currency: '&#8454;',
            naam: 'CAD',
            selected: false,
        },
        {
            currency: '&#8355;',
            naam: 'CHF',
            selected: false
        },
        {
            currency: '&euro;',
            naam: 'EUR',
            selected: false
        },
        {
            currency: '&pound;',
            naam: 'GBP',
            selected: false
        },
        {
            currency: '&yen;',
            naam: 'JPY',
            selected: false
        },
        {
            currency: '&dollar;',
            naam: 'NZD',
            selected: false
        },
        {
            currency: '&dollar;',
            naam: 'USD',
            selected: false
        },
    ],

})



export const actions = {
    sendinvite({ state }, input) {
        console.log(input)
        let data = {
            "name": input.name,
            "email": input.email
        }

        // let data = {
        //     "name": 'input.instanaam',
        //     "email":' input.instaemail'
        // }
        axios.post('http://localhost:5050/api/emails/', data,
            {
                headers: {
                    'Content-Type': 'application/json',

                },
            }
        )
            .then(response => {
                console.log(response.data)
                return alert('gelukt! we sturen je spoedig een mailtje')
            })
    },
    getcurrencies({ state }, input) {
        axios.get(`http://data.fixer.io/api/latest?access_key=b504969feab88deff82d096da3520d75&symbols=${input}`)
            .then(response => {
                if (response.data.rates[input] > 80) {
                    state.rate = response.data.rates[input] / 100
                    console.log(state.rate)

                } else {
                    state.rate = response.data.rates[input]
                    console.log('asdasdasds')
                    console.log(state.rate)
                }
            })
    }
}

//     // sets the exchange rate between from_currency and to_currency in session storage
//     getExchangeRate() {
//         // set the current exchange rate
//         var from_currency = 'EUR';

//         // set the currency you want to change to
//         var to_currency = 'USD';
//         axios.get( "https://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D" + from_currency + to_currency + "%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json")
//         .then(response => {
//             console.log(response)
//         })
//         .catch(err => {

//         })
//     }
// }

// "https://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3Dusdeur%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json"