import { IProduct } from '../../types';

export class CartModel {
 private items: IProduct[] = [];

 getItems(): IProduct[] {
 return this.items;
 }

 addItem(product: IProduct): void {
 this.items.push(product);
 }

 removeItem(product: IProduct): void {
 this.items = this.items.filter(item => item.id !== product.id);
 }

 clear(): void {
 this.items = [];
 }

 sumPrices(): number {
 return this.items.reduce((total, item) => {
 return total + (item.price ?? 0);
 }, 0);
 }

 totalProducts(): number {
 return this.items.length;
 }

 checkProduct(id: string): boolean {
 return this.items.some(item => item.id === id);
 }
}