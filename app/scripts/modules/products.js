/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import Product from 'product';

//   constructor (sku, title, price, image, description='') {

// Normally you would get these from a server
export const products = [
  new Product('KU1', 'Kue Cucur', 12000, 'cucur.jpg',
    'Tekstur luarnya basah dan menggembung, sedangkan dalamnya berserat empuk'),
  new Product('KU2', 'Kue Apem', 9000, 'apem.jpg',
    'kue apem yang memiliki tekstur empuk dan lembut di mulut ini merupakan kue yang khas dari daerah betawi '),
  new Product('KU3', 'Kue Putu Jawa', 13000, 'putu.jpg',
    'Kue yang berisi gula jawa dan parutan kelapa, tepung beras butiran kasar'),
  new Product('KU4', 'Kue Dongkal Gula Merah', 18000, 'dongkal.jpg',
    'Kue Dongkal ini merupakan makanan tradisional khas Betawi. Tampilan dan rasanya mirip dengan kue awug dari Jawa'),
  new Product('KU5', 'Bubur Grendul', 7500, 'grendul.jpg',
    'Rasanya yang manis dan gurih membuat makanan ini sangat dicari para pecinta kuliner'),
  new Product('KU6', 'Surabi Jawa', 9500, 'surabi.jpg',
    'Kini serabi telah hadir dalam berbagai varian, seperti tambahan topping sosis, mayones dan lain sebagainya di atasnya'),
  new Product('KU7', 'Kue Pancong', 11500, 'pancong.jpg',
    'Kue pancong yang terbuat dari santan, tepung beras, kelapa ini masih bisa ditemukan di beberapa penjaja kudapan di sudut ibu kota'),
  new Product('KU8', 'Kue Mayang Sari', 10000, 'mayang.jpg',
    'Kue tradisional ini tampil dengan aneka ragam warna dan biasa disajikan bersama dengan kuah gula merah'),
  new Product('KU9', 'Kue Cubit', 13000, 'cubit.jpg',
    'Banyak variasi dari kue cubit yang muncul seperti kue cubit laba-laba, kue cubit green tea, dan lainnya')
];

export function findProduct(sku, searchRange = products) {
  return searchRange.find(product => product.sku === sku);
}
