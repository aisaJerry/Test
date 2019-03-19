<template>
    <div class="modelBox">
        <div class="mask"></div>
        <div class="model">
            <div class="tit" v-if='title'>{{title}}</div>
            <div class="body">
                <slot></slot>
            </div>
            <div class="btns">
                <p v-if='modelType=="alert"' @click='confirm'>确定</p>
                <p v-if='modelType=="confirm"' @click="cancel">取消</p>
                <p v-if='modelType=="confirm"' @click="submit">提交</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String
        },
        modelType: { // alert | confirm
            require: true,
            type: String
        }
    },
    methods: {
        confirm: ()=>{
            this.$emit('confirm');
        },
        cancel: () => {
            this.$emit('cancel');
        },
        submit: () => {
            this.$emit('submit');
        }
    },
}
</script>
<style lang='scss' scoped>
    .modelBox {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 1;
        text-align: center;
        .mask {
            width: 100%;
            position: absolute;
            background: #000;
            opacity: 0.5;
            top: 0;
            bottom: 0;
            z-index: 2;
        }
        .model {
            position: absolute;
            z-index: 3;
            width: 60%;
            left: 20%;
            top: 30%;
            background: white;
            border: 1px solid #eee;
            border-radius: 5px;
            .tit {
                font-size: 16px;
                border-bottom: 1px solid #eee;
                height: 35px;
                line-height: 35px;
            }
            .body {
                padding: 10px;
            }
            .btns {
                display: flex;
                color: #298df8;
                border-top: 1px solid #eee;
                display: flex;
                justify-content: center;
                p {
                    width: 100%;
                    height: 35px;
                    line-height: 35px;
                    &:not(:first-child) {
                        position: relative;
                        &::after{
                            content: '';
                            position: absolute;
                            background: #eee;
                            width: 1px;/*no*/
                            height: 100%;
                            left: 0;
                            top: 0;
                        }
                    }
                }
            }
        }
    }
</style>


