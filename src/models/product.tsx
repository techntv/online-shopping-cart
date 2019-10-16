export interface IProductDetail {
  id: string,
  name: string,
  image: string,
  thumbnail: string,
  shortDescription: string,
  category: string,
  salePrice: number,
  originalPrice: number,
  images: string[],
  thumbnails: string[]
}