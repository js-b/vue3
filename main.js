const App = {
    
    data() {
        
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes:['Дота','Контр']
        }
    },
    methods:{
        inputChangeValue(event){
            this.inputValue =event.target.value
        },
        addNewNote(){
            this.notes.push(this.inputValue)
        }
    }
}


Vue.createApp(App).mount('#app')