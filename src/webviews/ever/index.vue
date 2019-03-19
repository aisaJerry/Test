<template src="./index.html"></template>
<script>
	/*CREATE BY JERRY*/
	import api from 'src/common/util/api.js';
	import toast from 'src/components/toast/index.js';
	import Navigator from 'src/components/navigator/index.vue';
	import Model from 'src/components/Model/index.vue';
	export default {
		name: 'ever',
		components: {
			navigator: Navigator,
			model: Model,
		},
		methods: {
			testAPI: () => {
				api.get('https://www.baicu.com');
			},
			testToast: async ()=> {
				await toast({
					message: 'abc'
				})
				console.log('tosat 关闭')
			},
			testModel: () => {
				
			}
		},
	}
</script>
<style src="./index.scss" lang="scss"></style>