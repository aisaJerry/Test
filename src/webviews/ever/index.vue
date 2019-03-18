<template src="./index.html"></template>
<script>
	/*CREATE BY JERRY*/
	import api from 'src/common/util/api.js'
	export default {
		name: 'ever',
		methods: {
			testAPI: () => {
				api.get('https://www.baicu.com');
			}
		},
	}
</script>
<style src="./index.scss" lang="scss"></style>