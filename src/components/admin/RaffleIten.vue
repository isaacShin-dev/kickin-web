<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RaffleIten",
  props: {
    raffle: Object,
  },
  methods: {
    date_format(input) {
      const date = new Date(input);
      return date.toLocaleString();
    },
  },
});
</script>

<template>
  <v-container>
    <tr style="cursor: pointer">
      <td>{{ raffle.title }}</td>
      <td>{{ date_format(raffle.start_date) }}</td>
      <td>{{ date_format(raffle.end_date) }}</td>
    </tr>
  </v-container>
</template>

<style scoped></style>
