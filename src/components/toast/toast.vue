<template>
    <div class="toast">{{message}}</div>
</template>
<script>
export default {
    data() {
        return {
            message: '',
        }
    }
}
</script>
<style lang='scss' scoped>
    .toast {
        background: #000;
        opacity: 0.8;
        position: absolute;
        left:50%;
        overflow: hidden;
        max-width:80%;
        transform:translate(-50%,-50%) scale(1);
        padding: 5px 10px;
        border-radius: 5px;
        text-align: center;
        top: 300px;
        color: #fff;
    }
</style>


