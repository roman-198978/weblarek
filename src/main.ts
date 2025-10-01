import './scss/styles.scss';
import { apiProducts } from './utils/data';
import { BuyerModel } from './components/models/BuyerModel';
import { CartModel } from './components/models/CartModel';
import { ProductModel } from './components/models/ProductModel';
import { Api } from './components/base/Api';
import { ApiService } from './components/models/ApiService';
import { API_URL } from './utils/constants';



// Создание экземпляров моделей
const productModel = new ProductModel();
const cartModel = new CartModel();
const buyerModel = new BuyerModel();

// Проверка ProductModel
console.log('--- Проверка ProductModel ---');

// Заполняем данными из apiProducts
productModel.setProducts(apiProducts.items);
console.log('Список всех товаров:', productModel.getProducts());

// Проверяем поиск товара по ID
const firstProduct = productModel.getProductById(apiProducts.items[0].id);
console.log('Найденный товар:', firstProduct);

// Проверяем установку выбранного товара
productModel.setSelectedProduct(firstProduct!);
console.log('Выбранный товар:', productModel.getSelectedProduct());

// Проверка CartModel
console.log('\n--- Проверка CartModel ---');

// Добавляем товар в корзину
cartModel.addItem(firstProduct!);
console.log('Содержимое корзины:', cartModel.getItems());

// Проверяем общую стоимость
console.log('Общая стоимость:', cartModel.sumPrices());

// Проверяем количество товаров
console.log('Количество товаров:', cartModel.totalProducts());

// Проверяем наличие товара
console.log('Есть ли товар в корзине:', cartModel.checkProduct(firstProduct!.id));

// Удаляем товар
cartModel.removeItem(firstProduct!);
console.log('Корзина после удаления:', cartModel.getItems());

// Проверка BuyerModel
console.log('\n--- Проверка BuyerModel ---');

// Заполняем данные покупателя
buyerModel.setPayment('card');
buyerModel.setEmail('user@example.com');
buyerModel.setPhone('+79991234567');
buyerModel.setAddress('г. Москва, ул. Примерная');

console.log('Данные покупателя:', buyerModel.getData());

// Проверяем валидацию
const validationResult = buyerModel.validateData();
console.log('Результат валидации:', validationResult);

// Очищаем данные покупателя
buyerModel.clearData();
console.log('Данные покупателя после очистки:', buyerModel.getData());

// Проверяем валидацию после очистки
const validationAfterClear = buyerModel.validateData();
console.log('Результат валидации после очистки:', validationAfterClear);

// Работа с API
try {
    const api = new Api(API_URL);
    const apiService = new ApiService(api);
    console.log('Запрашиваем список товаров с сервера...');
    const products = await apiService.getProductList();
    console.log('Сохраняем товары в модель каталога...');
    productModel.setProducts(products);
    console.log('Проверяем сохраненные данные: ');
    const savedProducts = productModel.getProducts();
    console.log('Количество товаров в каталоге:', savedProducts.length);
    console.log('Товары в каталоге:', savedProducts);
} catch (error: unknown) {
    if (error instanceof Error) {
        console.error('Произошла ошибка:', error.message);
    } else {
        console.error('Произошла неизвестная ошибка');
    }
}