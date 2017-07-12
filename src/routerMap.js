import Home from './webviews/home/index.vue'


//const getAsycCom = name => resolve => require.ensure([],resolve(require(`./webviews/${name}/index.vue`)));
const Foo = resolve => require(['./webviews/foo/index.vue'],resolve)
const Ever = resolve => require(['./webviews/ever/index.vue'],resolve)


const routes = [
	{ 
		path: '/', 
		name: 'home',
	    component: Home
    },
	{ 
		path: '/foo', 
		name: 'foo',
		component: Foo
	},
	{ 
		path: '/ever', 
		name: 'ever',
		component: Ever
	},
]

export default routes;