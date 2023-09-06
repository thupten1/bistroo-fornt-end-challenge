<script>
export default async function getData() {
  try {
    const response = await fetch('https://www.boredapi.com/api/activity/');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
</script>