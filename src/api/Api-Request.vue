<script>
import axios from "axios";

export default async function (selectedtype) {
  try {
    if (selectedtype) {
      const response = await axios.get(
        `https://www.boredapi.com/api/activity?type=${selectedtype}`
      );
      return response.data;
    } else {
      const response = await axios.get("https://www.boredapi.com/api/activity");
      return response.data;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
</script>
