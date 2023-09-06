<script setup>
console.log("hi")
    
import axios from 'axios'

    axios
        .get('https://www.boredapi.com/api/activity/')
        .then((response) => {
            this.data = response.data
      })
    const data = Array(data)
    console.log(data)
</script>