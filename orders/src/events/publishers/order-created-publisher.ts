import { Publisher, OrderCreatedEvent, Subjects } from '@dinotickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}