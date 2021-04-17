/*Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
дополнительных видео в материалах урока.*/

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    },
];

// фильтрация методом filter()
let products_after_filtering_v1 = products.filter(element =>  "photos" in element && element.photos.length > 0 )

//Фильтрация с циклом
let products_after_filtering_v2 = []
for (let counter = 1, array_index = 0; counter <= products.length; counter++) {
    if ("photos" in products[counter - 1]) {
        if (products[counter-1].photos.length > 0){
            products_after_filtering_v2[array_index++] = products[counter -1]
        }
    }
}

//Сортировка c методом filter()
let products_after_sorting_v1 = products.sort(function (element_1, element_2) {
    return element_1.price - element_2.price
})

// Сортировка с циклом
let products_after_sorting_v2 = products
  for (let counter = products.length - 1; counter > 0; counter--) {
    for (let array_index = 0; array_index < counter; array_index++) {
      if (products_after_sorting_v2[array_index].price > products_after_sorting_v2[array_index + 1].price) {
        let temp = products_after_sorting_v2[array_index];
        products_after_sorting_v2[array_index] = products_after_sorting_v2[array_index + 1];
        products_after_sorting_v2[array_index + 1] = temp;
      }
    }
  }
console.log(products_after_filtering_v1)
console.log(products_after_filtering_v2)
console.log(products_after_sorting_v1)
console.log(products_after_sorting_v2)
