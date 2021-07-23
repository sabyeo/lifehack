import Home from './components/Home.vue'
import About from './components/About.vue'
import Test_Firebase from './components/Test_Firebase.vue'
import Groups from './components/Groups.vue'
import RecommendedGroups from './components/RecommendedGroups.vue'
import GroupAllocation from './components/GroupAllocation.vue'

export default[
    {path:'/',component:Home},
    {path:'/about',component:About},
    {path:'/test_firebase',component:Test_Firebase},
    {path:'/groups',component:Groups},
    {path:'/recommended-groups/:id',component:RecommendedGroups},
    {path:'/group-allocations/',component:GroupAllocation}
]
