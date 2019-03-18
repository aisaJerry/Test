<template src="./index.html"></template>
<script>
	import Navigator from 'src/components/navigator/index.vue';
	export default {
		components: {
			navigator: Navigator,
		},
		name: 'home',
	  data () {
	    return {
	      msg: 'Welcome to H5 application'
	    }
	  },
	  methods: {
	  	goFoo() {
	  		this.$router.push('/foo');
	  	},
	  	goEver() {
	  		this.$router.push('/ever');
	  	}
		}
	}
</script>
<style src="./index.scss" lang="scss"></style>