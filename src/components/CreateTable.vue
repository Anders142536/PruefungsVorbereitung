<script setup>
import { usePersonStore } from '../stores/personStore.js';
import FillInTable from '../components/FillInTable.vue';
import SinglePersonView from '../views/SinglePersonView.vue';
import { onMounted } from 'vue';
import {useRouter} from 'vue-router'

const store = usePersonStore();
const router = useRouter();

onMounted(async () => {
  await store.loadAllUsers();
});

function singleUser(person){
  // stopPropagation();
  router.push('/'+person.userId)
}

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
      <FillInTable v-for="person in store.persons" :person="person" @click.stop=singleUser(person)></FillInTable>
    </tbody>
  </table>
</template>

<style scoped>
  .table{
    table-layout: fixed;
  }
</style>