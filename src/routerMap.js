import Foo from './webviews/foo/index.vue'
import Home from './webviews/home/index.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/foo', component: Foo },
]

export default routes;