export type TokpedItems = {
    name: string,
    price: {text_idr: string},
    product_url: string,
    primary_image: {original: string}
    flags:{
        isSold: boolean
    }
}

export type TokpedData = {
    result: TokpedItems[]
}