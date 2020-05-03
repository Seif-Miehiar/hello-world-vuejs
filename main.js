var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue!",
    },
});
var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "You loaded this page on " + new Date().toLocaleString(),
    },
});
// app2.message = "some new message";
var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true,
    },
});
// app3.seen = false;

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos: [
            { text: "Learn JavaScript" },
            { text: "Learn Vue" },
            { text: "Build something awesome" },
        ],
    },
});

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Hello VueJs!",
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split("").reverse().join("");
        },
    },
});

var app6 = new Vue({
    el: "#app-6",
    data: {
        message: "Hello Vue!",
    },
});
Vue.component("todo-item", {
    props: ["todo"],
    template: "<li> {{todo.text}} </li>",
});
var app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList: [
            { id: 0, text: "vegies" },
            { id: 1, text: "cheese" },
            { id: 2, text: "whatever else humans eat!" },
        ],
    },
});