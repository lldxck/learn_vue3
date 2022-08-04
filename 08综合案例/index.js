const App = {
  template: "#demo",
  data() {
    return {
      books: [
        {
          id: 1,
          name: "《JavaScript》",
          date: "2008-06",
          count: 1,
          price: 112,
        },
        {
          id: 2,
          name: "《python》",
          date: "2018-03",
          count: 1,
          price: 88,
        },
        {
          id: 3,
          name: "《C#》",
          date: "2002-11",
          count: 1,
          price: 108,
        },
        {
          id: 4,
          name: "《Vue.js权威指南》",
          date: "2016-10",
          count: 1,
          price: 89,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      let price = 0;
      this.books.map((item) => {
        price += item.price * item.count;
      });
      return price;
    },
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    del(index) {
      this.books.splice(index, 1);
    },
    handlePrice(price) {
      return "¥" + price;
    },
  },
};
Vue.createApp(App).mount("#app");
