<!-- <template>
  <div class="card">
      <h2>{{ data.activity }}</h2>
      <p>{{ data.type }}</p>
      <p> Participants for this activity is {{ data.participants }}</p>
    </div>
</template>

<script>
import getData from './api/Api-Request.vue'
import { ref, onMounted } from 'vue'

const data = ref({ activity: '', type: '', participants:''})

onMounted(async () => {
  const result = await getData();
  data.value.activity = result.activity;
  data.value.type = result.type;
  data.value.participants = result.participants;
})

export default {
  name: 'CardComponent',
  props: {
    template: data
  }
  
}
</script> -->