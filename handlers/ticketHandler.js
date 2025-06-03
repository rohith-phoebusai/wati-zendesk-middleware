import { createTicket } from '../zendesk.js';

export default async function ticketHandler(data) {
    // console.log('Received ticket data:', data);
    if(data && data.eventType === 'message') {
        console.log('message from user')
        const { text, waId, ticketId, conversationId, created} = data
        console.log('message text:', text)
        console.log('waId:', waId)
        console.log('ticketId:', ticketId)
        console.log('conversationId:', conversationId)
        console.log('created:', created)
    }
    else if (data && data.eventType === 'sessionMessageSent') {
        console.log('session message sent')
        const { text, waId, ticketId, conversationId } = data
        console.log('message text:', text)
        console.log('waId:', waId)
        console.log('ticketId:', ticketId)
        console.log('conversationId:', conversationId)
    } else if (data && data.eventType === 'templateMessageSent') {
        console.log('template message received')
        const { text, waId, ticketId, conversationId } = data
        console.log('message text:', text)
        console.log('waId:', waId)
        console.log('ticketId:', ticketId)
        console.log('conversationId:', conversationId)
    }
  const payload = {
    subject: data.subject || 'New Ticket from WhatsApp',
    comment: {
      body: data.message || 'No message provided'
    },
    requester: {
      name: data.name || 'Unknown User',
      email: data.email || `${data.phone}@noemail.com`
    },
    tags: ['whatsapp', 'wati'],
    custom_fields: []
  };

  const response = await createTicket(payload);
  return response.data;
}