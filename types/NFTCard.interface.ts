declare interface NFTCardInterface {
    id: string,
    name: string,
    creator: string,
    price: number,
    description: string,
    image: HTMLImageElement,
    bids: IBid[]
}

declare interface IBid {
    id: string,
    name: string,
    price: number,
    image: HTMLImageElement,
    date: string
}