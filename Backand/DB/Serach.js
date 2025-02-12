const express = require('express');
const app = new express();
require('./Config');
const doctors = require('./DoctrsData.json'); 

app.use(express.json());

app.get('/ConsultDoctar', (req, resp) => {
    // You can modify this search logic as per your requirements
    const query = req.query.query;  // Assuming you're passing a query parameter for search

    // Search the doctors array based on some criteria (e.g., name, specialization, etc.)
    const results = doctors.filter(doc => {
        return doc.name.toLowerCase().includes(query.toLowerCase()) || 
               doc.specialization.toLowerCase().includes(query.toLowerCase());
    });

    resp.send(results);
    console.log(results);
});

app.listen(2000, () => {
    console.log('Server running on port 2000');
});
