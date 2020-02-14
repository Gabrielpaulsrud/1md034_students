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
        //name: "",
        //email: "",
        //payment: "Swish",
        //gender: "",
        //answers: [name, email, house, payment]
        showAnswers: false,
        //selectedburgers: [],
        orders: {},
        order: order,
        ordernumber: 0,
    },
    created: function() {
        /* When the page is loaded, get the current orders stored on the server.
        * (the server's code is in app.js) */
        /*socket.on('initialize', function(data) {
            this.orders = data.orders;
        }.bind(this));*/

        /* Whenever an addOrder is emitted by a client (every open map.html is
        * a client), the server responds with a currentQueue message (this is
        * defined in app.js). The message's data payload is the entire updated
        * order object. Here we define what the client should do with it.
        * Spoiler: We replace the current local order object with the new one. */
        /*socket.on('currentQueue', function(data) {
            this.orders = data.orders;
        }.bind(this));*/
    },
    methods: {
        mylog: mylog,
        getNext: function() {
            /* This function returns the next available key (order number) in
            * the orders object, it works under the assumptions that all keys
            * are integers. */
            //let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
            //    return Math.max(last, next);
            //}, 0);
            this.ordernumber += 1;
            return this.ordernumber + 1;
        },
        /**addOrder: function(event) {
            When you click in the map, a click event object is sent as parameter
            * to the function designated in v-on:click (i.e. this one).
            * The click event object contains among other things different
            * coordinates that we need when calculating where in the map the click
            * actually happened.
            console.log(order),
            socket.emit('addOrder', {
                orderId: this.getNext(),
                order: order
            });*/


            addOrder: function(event) {
            /* When you click in the map, a click event object is sent as parameter
            * to the function designated in v-on:click (i.e. this one).
            * The click event object contains among other things different
            * coordinates that we need when calculating where in the map the click
            * actually happened. */
            console.log(order),
            socket.emit('addOrder', {
            orderId: this.getNext(),
            details: order.details,
            orderItems: order.selectedburgers,
            });
            },



        displayOrder: function(event) {
            this.showAnswers = true;
            let burgers = this.burgers;
            this.order.selectedburgers = [];
            for(let i = 0; i < burgers.length; i++){
                var burgerbutton = document.getElementById(burgers[i].name);
                if (burgerbutton.checked) {
                    this.order.selectedburgers.push(burgers[i].name);
                    mylog(burgers[i].name);
                    }
                }
            let offset = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top,
            };
            order.details = {
                x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y,
            }
        }
    }
})


/*
const vm = new Vue({
el: '#dots',
data: {
orders: {},
},
created: function() {
/* When the page is loaded, get the current orders stored on the server.
* (the server's code is in app.js) *//*
socket.on('initialize', function(data) {
this.orders = data.orders;
}.bind(this));*/

/* Whenever an addOrder is emitted by a client (every open map.html is
* a client), the server responds with a currentQueue message (this is
* defined in app.js). The message's data payload is the entire updated
* order object. Here we define what the client should do with it.
* Spoiler: We replace the current local order object with the new one. */
/*socket.on('currentQueue', function(data) {
this.orders = data.orders;
}.bind(this));
},
methods: {
getNext: function() {*/
/* This function returns the next available key (order number) in
* the orders object, it works under the assumptions that all keys
* are integers. *//*
let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
return Math.max(last, next);
}, 0);
return lastOrder + 1;
},
addOrder: function(event) {*/
/* When you click in the map, a click event object is sent as parameter
* to the function designated in v-on:click (i.e. this one).
* The click event object contains among other things different
* coordinates that we need when calculating where in the map the click
* actually happened. *//*
let offset = {
x: event.currentTarget.getBoundingClientRect().left,
y: event.currentTarget.getBoundingClientRect().top,
};
socket.emit('addOrder', {
orderId: this.getNext(),
details: {
x: event.clientX - 10 - offset.x,
y: event.clientY - 10 - offset.y,
},
orderItems: ['Beans', 'Curry'],
});
},
},
});
*/
