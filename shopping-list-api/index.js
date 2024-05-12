import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import the CORS package

const app = express();
const PORT = 3000;

// Configure CORS to allow requests from specific origins or all origins
const corsOptions = {
  origin: 'http://localhost:5173',  
  methods: 'GET,POST,PUT,DELETE', 
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); 
app.use(bodyParser.json()); 

// POST endpoint to receive shopping list data
app.post('/api/shopping-list', (req, res) => {
  const shoppingList = req.body;

  console.log('Received shopping list:', shoppingList);

  res.status(200).send({ message: 'Shopping list received', data: shoppingList });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
