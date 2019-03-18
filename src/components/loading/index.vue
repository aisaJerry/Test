<template>
    <div class="loadingBox">
        <div class="loading"></div>
    </div>
</template>
<script>
export default {
    name: 'loading',
}
</script>
<style lang='scss' scoped>
    .loadingBox {
        width: 50px;
        height: 50px;
        background: black;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        opacity: .6;
        position: absolute;
        left: 50%;
        margin-left: -25px;
        top: 40%;
        .loading {
            border: .2em solid transparent;
            border-top-color: #fff;
            border-radius: 50%;
            animation: 1s loader linear infinite;
            position: relative;
            display: inline-block;
            width: 1em;
            height: 1em;
            color: inherit;
            vertical-align: middle;
            pointer-events: none;
            &:before {
                content: '';
                display: block;
                width: inherit;
                height: inherit;
                position: absolute;
                top: -.2em;
                left: -.2em;
                border: .2em solid #fff;
                border-radius: 50%;
                opacity: .5;
            }
        }
    }
    @keyframes loader {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>

