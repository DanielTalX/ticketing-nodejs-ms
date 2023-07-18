import { Publisher, Subjects, TicketCreatedEvent } from '@danieltalx/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
