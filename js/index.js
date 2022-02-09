// 转化字符串
function resolveData(data) {
    var arr = []
    for (var i in data) {
        var str = i + '=' + data[i]
        arr.push(str)
    }
    return arr.join('&')
}
// var res = resolveData({ name: 'zs', age: 20 })
// console.log(res);
function itheima(options) {
    var xhr = new XMLHttpRequest()
        // 把外界传递过来的参数对象，转换为查询字符串
    var qs = resolveData(options.data)
        // options用户传的method.(toUpperCase转换为大写)的GET
    if (options.method.toUpperCase() === "GET") {
        // 发起GET请求
        // open()是指定请求的类型
        // qs是把外界传递过来的参数对象，转换为查询字符串
        xhr.open(options.method, options.url + '?' + qs)
            // send()发起请求
        xhr.send()
    } else if (options.method.toUpperCase() === "POST") {
        // 发起POST请求
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-url-urlencoded')
            // post请求要在send期间提供
        send(qs)
    }


    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}