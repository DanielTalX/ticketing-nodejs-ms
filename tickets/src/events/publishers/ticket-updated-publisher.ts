import { Publisher, Subjects, TicketUpdatedEvent } from '@danieltalx/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
