import { Publisher, Subjects, TicketCreatedEvent } from '@dinotickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}