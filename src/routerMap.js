import Home from './webviews/home/index.vue'

const routes = [
	{
	 path: '/', 
	 component: Home
	}
];

const views = ['foo','ever'];

views.forEach(item => {
	routes.push({
		path:`/${item}`,
		component: () => import(`./webviews/${item}/index.vue`)
	})

	// 不凑效, require里面的参数不能包含变量, 导致打出来只有一个chunk,但可以给chunk命名
	// routes.push({
	// 	path:`/${item}`,
	// 	component: r => require.ensure([], () => r(require(./webviews/${item}/index.vue)), `${item}`)
	// })

})

export default routes;