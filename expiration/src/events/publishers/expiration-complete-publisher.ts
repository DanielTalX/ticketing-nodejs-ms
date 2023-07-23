import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@danieltalx/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
