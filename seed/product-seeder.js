var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true } );

var products = [
    new Product({
        imagePath: 'https://i2.rozetka.ua/goods/14935338/nike_884776231314_images_14935338097.jpg',
        title: 'Nike M2K Tekno',
        category: 'Sporting goods',
        description: 'Stylish and reliable sneakers for all seasons.',
        price: 75
    }),
    new Product({
        imagePath: 'https://i2.rozetka.ua/goods/12996210/105097122_images_12996210072.jpg',
        title: 'CHRISTIAN DIOR DIOR HOMME SPORT',
        category: 'Accessories',
        description: 'For strong, athletic men. Refers to the "aromatic, citrus" family.',
        price: 70
    }),
    new Product({
        imagePath: 'https://lac-ua.akinoncdn.com/products/2019/08/27/71074/8cc57c26-2726-4428-8318-33b7840db36d_size2000x2000_cropCenter.jpg',
        title: 'Lacoste T-shirt',
        category: 'Clothes',
        description: 'Stylish and comfortable t-shirt in good condition.',
        price: 50
    }),
    new Product({
        imagePath: 'https://i1.rozetka.ua/goods/3789302/36317200_images_3789302312.jpg',
        title: 'Casio G-SHOCK GA-120BB-1AER',
        category: 'Accessories',
        description: 'G-Shock sports watches have proven to be simple and reliable assistants over the years.',
        price: 220
    }),
    new Product({
        imagePath: 'https://i2.rozetka.ua/goods/1851293/copy_xiaomi_mi_scooter_m365_black_589c68bee2ba5_images_1851293738.jpg',
        title: 'Xiaomi Mi Electric Scooter M365 White',
        category: 'Accessories',
        description: 'Smart Electric Motor Scooter is an individual viewer that runs on electricity.',
        price: 450
    }),
    
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}