import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const OMDB_API_KEY = process.env.OMDB_API_KEY; // This name should match the one in Vercel

export default async (request, response) => {
  if (!OMDB_API_KEY) {
    return response.status(500).json({ error: 'API key not configured.' });
  }

  const { title } = request.query;

  try {
    const omdbResponse = await fetch(`http://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${title}`);
    const data = await omdbResponse.json();

    response.status(200).json(data);
  } catch (error) {
    response.status(500).json({ error: 'Failed to fetch movies from OMDB.' });
  }
};









// // api/fetch-data.js
// import { VercelRequest, VercelResponse } from '@vercel/node';

// export default async (request, response) => {
//   const apiKey = process.env.API_KEY; // This variable is now accessible

//   if (!apiKey) {
//     return response.status(500).send('API key not configured.');
//   }

//   try {
//     const apiResponse = await fetch(`http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`);
//     const data = await apiResponse.json();
//     response.status(200).json(data);
//   } catch (error) {
//     response.status(500).send('Failed to fetch data from the API.');
//   }
// };
