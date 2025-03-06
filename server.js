const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/assistant/greet', (req, res) => {
    const { name } = req.query;

    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const daysMessages = {
        Monday: "Happy Monday! Start your week with energy!",
        Friday: "It's Friday! The weekend is near!"
    };

    const currentDay = new Date().toLocaleString('en-US', { weekday: 'long' });
    const dayMessage = daysMessages[currentDay] || "Have a wonderful day!";

    res.json({
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
