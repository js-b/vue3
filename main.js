Vue.createApp({
  data: () => ({
    myHtml: "<h1> Jaxa</h1>",
    title: "Главная",
    person: {
      firstName: "Jaxan",
      lastName: "Sabitov",
      age: 21,
    },
    items: [1, 2],
  }),
  methods: {
    addItem() {
        this.items.unshift(this.$refs.myInput.value)
        this.$refs.myInput.value = ''
    },
    remove(i){
        this.items.splice(i,1)
    },
    log(item){
        console.log('Log item:', item);
    }
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
}).mount("#app");
