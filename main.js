const app = {
    data() {
        return {
        photos:[
            {url: 'images/photo1.jfif', alt:'grow tower under grey sky'},
            {url: 'images/photo2.jfif', alt:'Green grass field during daytime'},
            {url: 'images/photo3.jfif', alt:'gray concrete castle on green grass field'}
        ],
        
        }
    },
    methods: {
        toggleheart(index){
            this.photos[index].done = !this.photos[index].done
        }
    },
    computed: {
        countphoto(){
            return this.photos.filter( t => !t.done ).length
        }
    }
}
Vue.createApp(app).mount('#container')