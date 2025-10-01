import { IBuyer, TPayment } from '../../types';

export class BuyerModel {
 private data: IBuyer = {
 payment: null,
 email: '',
 phone: '',
 address: ''
 };

 setPayment(payment: TPayment): void {
 this.data.payment = payment;
 }

 setEmail(email: string): void {
 this.data.email = email;
 }

 setPhone(phone: string): void {
 this.data.phone = phone;
 }
 

 setAddress(address: string): void {  
 this.data.address = address;
 }

 getData(): IBuyer {
 return this.data;
 }

 clearData(): void {
 this.data = {
 payment: null,
 email: '',
 phone: '',
 address: ''
 };
 }

 validateData(): { isValid: boolean, error?: string } {
 if (!this.data.payment) {
 return { isValid: false, error: 'Не выбран способ оплаты' };
 }
 
 if (!this.data.email.trim()) {
 return { isValid: false, error: 'Не указан email' };
 }
 
 if (!this.data.phone.trim()) {
 return { isValid: false, error: 'Не указан телефон' };
 }
 
 if (!this.data.address.trim()) {
 return { isValid: false, error: 'Не указан адрес' };
 }
 
 return { isValid: true };
 }
}