import Home from './webviews/home/index.vue'

//const Foo = resolve => require(['./webviews/foo/index.vue'],resolve)
//const Ever = resolve => require(['./webviews/ever/index.vue'],resolve)
//const getView = name => resolve => require([`./webviews/${name}/index.vue`],resolve) 不凑效

//const Foo = import('./webviews/foo/index.vue').then(webview);
//const Ever = import('./webviews/ever/index.vue').then(webview);

const getView = name => import(`./webviews/${name}/index.vue`)


const routes = [
	{ 
		path: '/', 
		name: 'home',
	    component: Home
    },
	{ 
		path: '/foo', 
		name: 'foo',
		component: getView('foo')
	},
	{ 
		path: '/ever', 
		name: 'ever',
		component: getView('ever')
	},
]

export default routes;