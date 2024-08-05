import express from 'express';
import axios from 'axios';

const app = express();
const baseURL = 'https://hp-api.onrender.com/api';

//Route to get characters
app.get('/characters', async (req, res)=> {
  try {
    const response = await axios.get(`${baseURL}/characters`);
    res.status(200).json(response.data);
  }
  catch(error) {
    res.status(500).json({message: 'Error fetching characters', error: error.message});
  }
});

//Route to get spells
app.get('/spells', async (req, res)=> {
  try {
    const response = await axios.get(`${baseURL}/spells`);
    res.status(200).json(response.data);
  }
  catch(error) {
    res.status(500).json({message: 'Error fetching spells', error: error.message});
  }
});

// Route to get Hogwarts staff
app.get('/hogwarts-staff', async (req, res)=> {
  try {
    const response = await axios.get(`${baseURL}/characters/staff`);
    res.status(200).json(response.data);
  }
  catch(error) {
    res.status(500).json({message: 'Error fetching Hogwarts staff', error: error.message});
  }
});

// Route to get Hogwarts students
app.get('/hogwarts-students', async (req, res) => {
  try {
    const response = await axios.get(`${baseURL}/characters/students`);
    res.status(200).json(response.data);
  }
  catch(error) {
    res.status(500).json({message: 'Error fetching Hogwarts students', error: error.message});
  }
});

//Route to get a character by ID
app.get('/characters/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const response = await axios.get(`${baseURL}/character/${id}`);
    res.status(200).json(response.data);
  }
  catch(error) {
    res.status(500).json({message: `Error fetching character with ID ${id}`, error: error.message});
  }
});

//Starting the server
app.listen(3000);