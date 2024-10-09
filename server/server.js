const express = require('express');
const app = express();
app.use(express.json());

const contacts = []; // Temporary storage

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    contacts.push({ name, email, message });
    res.status(201).send('Message received');
});

app.get('/api/contact', (req, res) => {
    res.json(contacts); // Retrieve submitted messages
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));