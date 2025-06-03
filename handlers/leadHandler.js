import { createTicket } from '../zendesk.js';

export default async function leadHandler(data) {
  const payload = {
    subject: `Lead: ${data.name || 'Unknown'}`,
    comment: {
      body: `Lead info:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}`
    },
    requester: {
      name: data.name,
      email: data.email || `${data.phone}@noemail.com`
    },
    tags: ['lead', 'wati'],
    custom_fields: []
  };

  const response = await createTicket(payload);
  return response.data;
}