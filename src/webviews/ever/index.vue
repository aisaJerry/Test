<template src="./index.html"></template>
<script>
	/*CREATE BY JERRY*/
	import api from 'src/common/util/api.js';
	import toast from 'src/components/toast/index.js';
	export default {
		name: 'ever',
		methods: {
			testAPI: () => {
				api.get('https://www.baicu.com');
			},
			testToast: async ()=> {
				await toast({
					message: 'abc'
				})
				console.log('tosat 关闭')
			}
		},
	}
</script>
<style src="./index.scss" lang="scss"></style>