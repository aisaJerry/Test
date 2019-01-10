<template src="./index.html"></template>
<script>
	export default {
	  name: 'home',
	  data () {
	    return {
	      msg: 'home page'
	    }
		},
		mounted(){
      this.$socket.emit('connect'); //在这里触发connect事件
  	},
		sockets: {
			conect() {
				console.log('connect');
			},
			login(value) {
				console.log(value);
			}
    },
	  methods: {
			sendMessage() {
				this.$socket.emit('compile', 'clientMessage');
			},
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