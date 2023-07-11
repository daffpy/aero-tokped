const ITEMS_URL_ENDPOINT = "https://gql.tokopedia.com/graphql/ShopProducts"

const q = [
    {
      "operationName": "ShopProducts",
      "variables": {
        "sid": "6673471",
        "page": 1,
        "perPage": 4,
        "etalaseId": "33026471",
        "sort": 1,
        "user_districtId": "",
        "user_cityId": "",
        "user_lat": "",
        "user_long": ""
      },
      "query": "query ShopProducts($sid: String!, $page: Int, $perPage: Int, $keyword: String, $etalaseId: String, $sort: Int, $user_districtId: String, $user_cityId: String, $user_lat: String, $user_long: String) {\n  GetShopProduct(shopID: $sid, filter: {page: $page, perPage: $perPage, fkeyword: $keyword, fmenu: $etalaseId, sort: $sort, user_districtId: $user_districtId, user_cityId: $user_cityId, user_lat: $user_lat, user_long: $user_long}) {\n    status\n    errors\n   data {\n      name\n   price {\n        text_idr\n}   product_url\n primary_image{\n original\n} flags{\n isSold\n}}\n}\n}\n"
    }
]
export const getItems = async (sid:string,etalaseId:string) =>{
  q[0]["variables"]["sid"] = sid
  q[0]["variables"]["etalaseId"] = etalaseId
    return fetch(ITEMS_URL_ENDPOINT,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(q)
    })
}
