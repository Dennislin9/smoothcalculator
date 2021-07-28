import axios from 'axios'
export const state = () => ({
    /**
     * TODOs
     * -check als eerste en tweede waarde niet gelijk zijn
     * - niet meer dan 2 waarde toegevoegd 
     * -b504969feab88deff82d096da3520d75
     * https://data.fixer.io/api/latest?access_key=API_KEY&base=USD
     */
    //TIME
    currency1: 'EUR',
    currency2: 'USD',


    // risk management
    balancecurrency: 'EUR',
    prevbalance: 0,
    prevrisk: 0,
    prevpips: 0,
    instagramnaam: 0,
    days: 0,
    rate: [],
    gekozenbalance: 0,
    gekozenvaluta: [],
    // compounding
    dailyinterestrate: 0,
    drr: {
        value: 1,
        display: '100%'
    },
    days: 0,
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

export const mutations = {
    setField(state, payload) {
        state[payload[0]] = payload[1]
    },
    setvaluta(state, payload) {
        state.gekozenvaluta = payload
    },
    addvaluta(state, payload) {
        state.gekozenvaluta.push(payload)
    },
    selectvaluta(state, payload) {
        state.gekozenvaluta.push(payload)
    },
    setcurrencies(state, payload) {
        state.rate = payload
    },
    //wat dennis gedaan heeft 

    balancecurrency(state, payload) {
        state.balancecurrency = payload
    },
    chosenvaluta(state, nieuwevaluta) {
        state.valuta((e) => e.naam == nieuwevaluta).selected = true;
    },
    compound(state, payload) {
        state.days = payload
    },
    rate(state, payload) {
        state.dailyinterestrate = payload
    },

    // moet reloaden om te werken 
    balance(state, payload) {
        state.prevbalance = payload
    },
    prevrisk(state, payload) {
        state.prevrisk = payload
    },
    prevpips(state, payload) {
        state.prevpips = payload
    },
    //time 
    balancecurrency1(state, payload) {
        state.currency1 = payload
    },
    balancecurrency2(state, payload) {
        state.currency2 = payload
    },




}


export const actions = {
    sendinvite({ state }, input) {
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
                return alert('gelukt! we sturen je spoedig een mailtje')
            })
    },
    getcurrencies({ commit, state }, input) {
        commit('setcurrencies', [])
        axios.get(`https://data.fixer.io/api/latest?access_key=1e626f1512140e71aa9da68fff877517&symbols=${input}`)
            .then(response => {
                if (response.data.rates[input] > 80) {

                    commit('setcurrencies', response.data.rates[input] / 100)
                } else {

                    commit('setcurrencies', response.data.rates[input])

                }
            })
    },
    fetchData() {
        fetch(
            `https://data.fixer.io/api/latest?access_key=1e626f1512140e71aa9da68fff877517&symbols=`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.data = data;
                this.rates = data.rates[this.balancecurrency2];
                this.amountTwo = this.amountOne * this.rates.toFixed(2);
            });
    },
}

// 