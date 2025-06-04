import express from 'express';
import leadHandler from './handlers/leadHandler.js';
import ticketHandler from './handlers/ticketHandler.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// app.post('/lead', async (req, res) => {
//   try {
//     const result = await leadHandler(req.body);
//     res.json(result);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

// app.post('/ticket', async (req, res) => {
//   try {
//     const result = await ticketHandler(req.body);
//     res.json(result);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

app.post('/webhook', async (req, res) => {
    try {
        console.log('Webhook Payload:', JSON.stringify(req.body, null, 2));

        const { eventType } = req.body;
        let result;

        if (eventType === 'lead') {
            result = await leadHandler(req.body);
        } else {
            result = await ticketHandler(req.body);
        }

        // res.json(result);
        res.sendStatus(200)
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});