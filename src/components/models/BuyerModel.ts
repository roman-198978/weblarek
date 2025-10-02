import { IBuyer, TPayment } from "../../types";

export class BuyerModel {
  private data: IBuyer = {
    payment: null,
    email: "",
    phone: "",
    address: "",
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
      email: "",
      phone: "",
      address: "",
    };
  }

  validateData(): { isValid: boolean; errors: Record<string, string> } {
    const errors: Record<string, string> = {};
    if (!this.data.payment) {
      errors.payment = "Не выбран способ оплаты";
    }

    if (!this.data.email.trim()) {
      errors.email = "Не указан email";
    }

    if (!this.data.phone.trim()) {
      errors.phone = "Не указан телефон";
    }

    if (!this.data.address.trim()) {
      errors.address = "Не указан адрес";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }
}
