<script setup>
import { usePersonStore } from '../stores/personStore.js';
import FillInTable from '../components/FillInTable.vue'
import { onMounted } from 'vue';

const store = usePersonStore();

onMounted(async () => {
  await store.loadAllUsers();
});

</script>

<template>
  <table class="table table-striped">
    <thead>
      <td>ID</td>
      <td>Vorname</td>
      <td>Nachname</td>
      <td>Geburtstag</td>
      <td>Button</td>
      <td>Button</td>
    </thead>
    <tbody>
      <FillInTable v-for="person in store.persons" :person="person"></FillInTable>
    </tbody>
  </table>
</template>

<style scoped>
  .table{
    table-layout: fixed;
  }
</style>