
// 感谢 blackmatrix7 提供的思路，但原js过于庞大，所以将此单独拿出来解析
// 原版地址 https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js

let body = $response.body
body = JSON.parse(body)
if (body.hasOwnProperty('content')) {
    if (body['content'].hasOwnProperty('adType')){
        body['content']['adType'] = 0
    }
    // if (body['content'].hasOwnProperty('show')){
    //     body['content']['show'] = false
    // }
}
body = JSON.stringify(body)
$done({ body })