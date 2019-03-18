let paltform = {
    "isAndroid": /Android/i.test(navigator.userAgent),
    "isIOS": !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
export default {
    native: (method, par) => {
        if (paltform.isAndroid) {
            window.andriod[method](par)
        } else if (paltform.isIOS){
            try {
                window.webkit.messageHandlers.callSendSuc.postMessage(method, par);
            } catch(e) {
                console.log(e);
            }
        }
    }
}