import axios from 'axios';

const ZENDESK_DOMAIN = process.env.ZENDESK_DOMAIN;
const ZENDESK_AUTH = process.env.ZENDESK_AUTH;

export async function createTicket(payload) {
    return {
        success: true,
        message: 'Ticket created successfully'
    }
    //   return axios.post(
    //     `https://${ZENDESK_DOMAIN}/api/v2/tickets.json`,
    //     { ticket: payload },
    //     {
    //       headers: {
    //         Authorization: `Basic ${ZENDESK_AUTH}`,
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );
}