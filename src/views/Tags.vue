<template>
  <div>
    <v-container>
      <v-card
          class="mx-auto"
          max-width="500"
      >
        <v-card-text>
          <div>Word of the Day</div>
          <p class="display-1 text--primary">
            be•nev•o•lent
          </p>


        </v-card-text>
        <v-data-table
            :headers="headers"
            :items="tags"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
      </v-card>
    </v-container>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Tag",
  created() {
    axios({
      url: 'http://localhost:9000/admin/type/get_all_types',
      method: 'get'
    }).then(resp => {
      console.log(resp);
      this.tags = resp.data;
    })
  },
  data () {
    return {
      headers: [
        {
          text: 'Id',
          sortable: false,
          value: 'id',
        },
        { text: 'Name', value: 'name' },
      ],
      tags: [],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>