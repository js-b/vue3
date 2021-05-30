const App = {
    
    data() {
        
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: ''
        }
    },
    methods:{
        inputChangeValue(event){
            this.inputValue =event.target.value
        }
    }
}


Vue.createApp(App).mount('#app')