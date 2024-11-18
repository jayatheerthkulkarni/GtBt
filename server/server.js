import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // Convert the module URL to a file path
const __dirname = path.dirname(__filename); // Get the directory name of the current module

const clientDirectory = path.join(__dirname, '../clean_frontend');

const port = 5000;
const app = express();

// Serve static files from the client directory
app.use(express.static(clientDirectory));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(clientDirectory, '/option/index.html'));
});

app.get('/boy', (req, res) => {
    res.sendFile(path.join(clientDirectory, '/touch/dist_boy/index.html'));
});

app.get('/girl', (req, res) => {
    res.sendFile(path.join(clientDirectory, '/touch/dist_girl/index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
