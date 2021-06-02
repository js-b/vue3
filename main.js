Vue.createApp({
    data: ()=> ({
        myHtml: '<h1> Vue3 App</h1>',
        title : 'Главная',
        person: {
            firstName: 'Jaxan',
            lastName:'Sabitov',
            age: 21
        }
    })
}).mount('#app')