import ProcessorPaymentFacede from "./processorPaymentFace.ts";

const handlePayment = () => {
  const paymentFacede = new ProcessorPaymentFacede(900);
  console.log(paymentFacede.execute());
};

handlePayment();
