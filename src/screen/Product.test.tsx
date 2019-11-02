import renderer from 'react-test-renderer'
import ProductList from './ProductList'
import Product from './Product';
import * as React from 'react'
const mockProduct = {
  "id": "0001",
  "name": "Winter Coat from France",
  "image": "https://api.demo.nordiccoder.com/images/product_1.png",
  "thumbnail": "https://api.demo.nordiccoder.com/images/product_1.png",
  "shortDescription": "product 1",
  "category": "men",
  "salePrice": 520,
  "originalPrice": 590,
  "images": [
    "https://api.demo.nordiccoder.com/images/product_1_1.png",
    "https://api.demo.nordiccoder.com/images/product_1_2.png"
  ],
  "thumbnails": [
    "https://api.demo.nordiccoder.com/images/product_1_1.png",
    "https://api.demo.nordiccoder.com/images/product_1_2.png"
  ]
}

test('Product component', () => {
  const component = renderer.create(
    <Product product={mockProduct} handleAddToCart={() => { }} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})