

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