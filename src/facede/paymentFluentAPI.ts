export default class PaymentFluentAPI {
  private content;
  constructor(content) {
    this.content = content;
  }

  verifyValue() {
    console.log(`Total value: ${this.content}`);
    return this;
  }

  convertToReal() {
    this.content = this.content * 6.05;
    console.log(`Value in Real: ${this.content}`);
    return this;
  }

  executePayment() {
    this.content -= 300;
    console.log("Payment executed");
    return this;
  }

  build() {
    return `change ${this.content}`;
  }
}
