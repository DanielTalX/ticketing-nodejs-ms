import { Subjects, Publisher, PaymentCreatedEvent } from '@danieltalx/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
