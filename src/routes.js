import Home from './components/Home.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Test_Firebase from './components/Test_Firebase.vue'
import Friend from './components/Friend.vue'
import Sign_Up from './components/Sign_Up.vue'
import Sign_In from './components/Sign_In.vue'
import Landing from './components/Landing.vue'


export default[
    {path:'/',component:Home},
    {path:'/main',component:Main},
    {path:'/friend',component:Friend},
    {path:'/about',component:About},
    {path:'/test_firebase',component:Test_Firebase},
    {path:'/sign_up',component:Sign_Up},
    {path:'/sign_in',component:Sign_In},
    {path:'/landing',component:Landing},
]
