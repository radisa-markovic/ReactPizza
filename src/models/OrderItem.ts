export default interface OrderItem
{
    id: number | string,
    imageURL: string,
    ingredients: string[],
    name: string, //e.g. 'Kapricoza velika'
    pricePerItem: number,
    itemQuantity: number,
    size: string
}