import Home from './components/Home.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Test_Firebase from './components/Test_Firebase.vue'
import Friend from './components/Friend.vue'

export default[
    {path:'/',component:Home},
    {path:'/main',component:Main},
    {path:'/friend',component:Friend},
    {path:'/about',component:About},
    {path:'/test_firebase',component:Test_Firebase}
]
