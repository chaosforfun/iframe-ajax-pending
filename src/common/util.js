
/* 获取正常地址栏（无hash）所有参数 */
export const getNormalAllQueryString = (url) => {
    // var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const r = {};
    const _url = url || window.location.href;
    if (_url.split('?')[1]) {
        let str = _url.split('?')[1];
        str = str.split('&');
        str.forEach((item) => {
            const key = item.split('=')[0];
            const val = item.split('=')[1];
            r[key] = val;
        });
    }
    return r;
};
