import { Publisher, OrderCreatedEvent, Subjects } from "@danieltalx/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
