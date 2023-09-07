<script>
import axios from 'axios';

export default async function getData() { // async toegevoegd voor het omgaan met Promise van Axios
  try {
    const response = await axios.get('https://www.boredapi.com/api/activity'); // Wacht op het antwoord van Axios
    const data = response.data; // Haal de data op uit de response
    console.log(data); // Toon de data in de console
    return data; // Geef de data terug
  } 
  catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
</script>