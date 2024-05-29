String.prototype.sj = function(val, val2) {
    try {
        var reg = new RegExp(val + "(.*?)" + val2);
        var getval = String(this).match(reg)[1];
        if (typeof(JSON.parse(getval)) == "object") {
            return JSON.parse(getval)
        } else {
            return getval
        }
    } catch (err) {
        if (getval) {
            return getval;
        } else {
            return false
        }
    }
};


//var str = "我是一个字符串演示啊";
//alert(str.sj("是", "演")); //输出 “一个字符串”
