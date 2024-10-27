export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    role: Role;
  }
  
  export enum Role {
    ORGANIZER = 'ORGANIZER',
    ATTENDEE = 'ATTENDEE'
  }
  
  export interface Event {
    id: number;
    name: string;
    dateTime: string;
    location: string;
    description: string;
    ticketPrice: number;
    ticketQuantity: number;
    organizerId: number;
    tickets: Ticket[];
    reviews: Review[];
  }
  
  export interface Ticket {
    id: number;
    eventId: number;
    userId: number;
    quantity: number;
    status: TicketStatus;
  }
  
  export enum TicketStatus {
    PURCHASED = 'PURCHASED',
    CANCELED = 'CANCELED'
  }
  
  export interface Review {
    id: number;
    eventId: number;
    userId: number;
    rating: number;
    comment: string;
    createdAt: string;
  }
  
  export interface Comment {
    id: number;
    reviewId: number;
    userId: number;
    content: string;
    createdAt: string;
  }

  export interface ApiError {
    message: string;
    status?: number; 
  }
  