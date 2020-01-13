import request from "@/common/request"


export function getmarkCar(query) {
    return request({
        url: '../../../../static/map-json/carJson.json',
        method: 'get',
        params: query
    })
}