import { createApp } from 'vue'
// import './style.css'
import './styles/index.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)

createApp(App).mount('#app')
