import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            joke: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 2,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 3,
            joke: "Why don't skeletons fight each other? They don't have the guts!"
        }
    ]
    res.send(jokes);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
