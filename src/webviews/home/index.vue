<template src="./index.html"></template>
<script>
	export default {
	  name: 'home',
	  data () {
	    return {
	      msg: 'Welcome to Greenroot H5 application'
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