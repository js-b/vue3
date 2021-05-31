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
            this.inputValue = event.target.value
        },
        addNewNote(){
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item){
            return item.toUpperCase()
        },
        // tripleNotes(){
        //     return this.notes.length * 3
        // },
        removeNote(index){
            this.notes.splice(index, 1)
        }
    },
    computed: {
        tripleNotesComputed(){
            console.log('tripleNotesComputed');
            return this.notes.length * 3
        },
    }
}


Vue.createApp(App).mount('#app')