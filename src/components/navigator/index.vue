<template>
    <div class="header">
        <p class="back" @click="goBack"></p>
        <p class="title">{{title}}</p>
        <div class="rightNav" v-if='rm' @click="rmHandler">{{rm}}</div>
    </div>
</template>
<script>
import store from 'src/store/store.js';
import NV from 'src/common/util/NV.js';
export default {
    name: 'navigator',
    props: {
        title: {
            type: String,
        },
        rm: {
            type: String,
        }
    },
    methods: {
        goBack() {
            let len = store.state.viewHistory.length;
            if (len == 1 || store.state.viewHistory[0] == store.state.viewHistory[len-1]) {
                NV.native('close');
            } else {
                window.history.go(-1);
                this.$emit('goBack');
            }
        },
        rmHandler() {
            this.$emit('rmHandler');
        }
    },
}
</script>
<style lang='scss'>
    .header {
        font-size: 14px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		border-bottom: 1px solid #eee;/*no*/
        margin-bottom: 5px;
        padding: 0 10px;
        display: flex;
        align-items: center;
        background: #f9f9f9;
        .title {
            margin: 0 auto;
        }
        .back {
            width: 8px;
            height: 8px;
            border: solid rgb(41, 141, 248);
            border-width: 0px 0px 1px 1px;
            transform: rotate(45deg);
        }
    }
</style>


