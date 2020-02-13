/*

const vm = new Vue({
  el: '#myID',
  data: {
    h1: HalloumiBurger.info(),
    h2: Oumph_Burger.info(),
    h3: AvocadoAndBeanBurger.info(),
    h4: b1.info(),
    h5: b2.info()
  }
})
*/

var vm = new Vue({
    el: '#mainBody',
    data: {
    burgers: burgersJSON,
    name: "",
    email: "",
    street: "",
    house: "",
    payment: "Swish",
    gender: "",
    //answers: [name, email, house, payment]
    showAnswers: false,
    selectedburgers: []
},
methods: {
    mylog: mylog,
    getAnswers: getAnswers
}
})
