import showget from './components/showget.vue';
import errorpage from './components/errorpage.vue';
import blog from './components/blog.vue'
import blogfull from './components/blogfull.vue'
import simpleform from './components/simpleform.vue';
import membersinfo from './components/membersinfo.vue';
import car from './components/car.vue';
export default [
  {path:'/', component: showget},
  {path:'/add', component:simpleform},
  {path: "/blog", component: blog},
  {path: "/blog/:id", component: blogfull},
  {path: "*", component: errorpage},
  {path:'/membersinfo', component:membersinfo},
  {path:'/car', component:car},
]
