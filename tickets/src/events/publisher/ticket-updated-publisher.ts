import { Publisher, Subjects, TicketUpdatedEvent } from '@dinotickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}