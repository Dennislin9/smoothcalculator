import Cookie from 'js-cookie'
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

// Hide the splash (you should do this on app launch)

// Show the splash for an indefinite amount of time:
// SplashScreen.show({
//     autoHide: false,
// });

// // Show the splash for two seconds and then auto hide:
// SplashScreen.show({
//     showDuration: 2000,
//     autoHide: true,
// });
export default (context) => {


    // Hide the splash (you should do this on app launch)
    SplashScreen.hide();


    // Show the splash for an indefinite amount of time:
    SplashScreen.show({
        autoHide: false
    });

    // Show the splash for two seconds and then automatically hide it:
    SplashScreen.show({
        showDuration: 2000,
        autoHide: true
    });

    let list = [
        // 'balancecurrency',
        'prevbalance',
        'prevrisk',
        'prevpips',
        'previnstanaam',
        'days'
    ]

    for (let index in list) {
        let field = list[index]

        if (typeof Cookie.get(field) != "undefined") {
            // context.store.state[field] = Cookie.get(field);
            context.store.commit('setField', [field, Cookie.get(field)])

        } else {
            if (field == 'balancecurrency') {
                Cookie.set(field, "EUR");

            } else {
                context.store.state[field] = 0;
            }
        }
    }




    // if (typeof Cookie.get("balancecurrency") != "undefined") {
    //     this.$store.state.balancecurrency = Cookie.get("balancecurrency");
    // } else {
    //     Cookie.set("balancecurrency", "EUR");
    // }
    // if (typeof Cookie.get("prevbalance") != "undefined") {
    //     //#region 
    //     // this.$store.commit('setGekozenbalance', Cookie.get("prevbalance"))

    //     //#endregion
    //     this.$store.state.prevbalance = Cookie.get("prevbalance");
    // } else {
    //     this.$store.state.prevbalance = 0;
    // }
    // if (typeof Cookie.get("prevrisk") != "undefined") {
    //     this.$store.state.gekozenrisk = Cookie.get("prevrisk");
    // } else {
    //     // this.$store.state.gekozenrisk = 0
    //     Cookie.set("prevrisk", 0);
    // }
    // if (typeof Cookie.get("prevpips") != "undefined") {
    //     this.$store.state.gekozenpips = Cookie.get("prevpips");
    // } else {
    //     this.$store.state.gekozenpips = 0;
    // }
    // if (typeof Cookie.get("previnstanaam") != "undefined") {
    //     this.$store.state.instagramnaam = Cookie.get("previnstanaam");
    // } else {
    //     this.$store.state.instagramnaam = 0;
    // }
    // // compounding
    // if (typeof Cookie.get("days") != "undefined") {
    //     this.$store.state.days = Cookie.get("days");
    // } else {
    //     this.$store.state.days = 0;
    // }
    // // if (typeof Cookie.get("dailyinterestrate") != "undefined") {
    // //   alert('asdsad')

    // // //  this.$store.state.dailyinterestrate = Cookie.get("dailyinterestrate");
    // // } else {
    // //   this.$store.state.dailyinterestrate = 0;
    // // }
    // if (typeof Cookie.get("drr") != "undefined") {
    //     this.$store.state.drr = Cookie.get("drr");
    // } else {

    //     // this.$store.state.drr = 0;
    // }
    // // this.$store.state.gekozenbalance = Cookie.get("prevbalance"),
    // // this.$store.state.gekozenrisk = Cookie.get("prevrisk"))

}