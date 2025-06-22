import PaymentFluentAPI from "./paymentFluentAPI.js";

export default class ProcessorPaymentFacede {
  private paymentProcessorFluentAPI: PaymentFluentAPI;

  constructor(value: number) {
    this.paymentProcessorFluentAPI = new PaymentFluentAPI(value);
  }

  execute() {
    return this.paymentProcessorFluentAPI
      .verifyValue()
      .convertToReal()
      .executePayment()
      .build();
  }
}
