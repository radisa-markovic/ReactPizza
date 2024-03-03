export default interface Pizza
{
    id: number,
    name: string,
    ingredients: string[],
    imageURL: string,
    smallSizePrice: number,
    smallSizeCaption: string,
    mediumSizePrice: number,
    mediumSizeCaption: string,
    largeSizePrice: number,
    largeSizeCaption: string,
    itemQuantity: number,
    pizzaSize: string
}