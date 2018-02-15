export class Product {
  id: number;
  name: string;
  categoryId: number;
  //img: string;
  price: number;
   get getImagePath(): string
   {
     console.log("/assets/productImagesSmall/" + 1 + ".jpg");
    return "/assets/productImagesSmall/" + 1 + ".jpg";
  }
}
