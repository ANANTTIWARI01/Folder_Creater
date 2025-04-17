// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Endpoint to create folders
// app.post('/create-folders', (req, res) => {
//     const folderNames = req.body.folders; // expecting an array of folder names

//     if (!Array.isArray(folderNames)) {
//         return res.status(400).json({ message: 'Invalid folder list' });
//     }

//     folderNames.forEach(name => {
//         const folderPath = path.join(__dirname, 'generated', name);
//         if (!fs.existsSync(folderPath)) {
//             fs.mkdirSync(folderPath, { recursive: true });
//         }
//     });

//     res.status(200).json({ message: 'Folders created successfully!' });
// });

// app.listen(PORT, () => {
//     console.log(Server running on http://localhost:${PORT});
// });
