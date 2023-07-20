import { Subjects, Publisher, OrderCancelledEvent } from "@danieltalx/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
