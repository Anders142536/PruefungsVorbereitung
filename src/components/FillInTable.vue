<script setup>
import { usePersonStore } from '../stores/personStore.js';
import { ref } from 'vue';

const store = usePersonStore();

let isVisible = ref(false);

const firstName = ref('');
const lastName = ref('');
const birthYear = ref('');

function toggle(){
  isVisible.value = !isVisible.value;
  console.log(isVisible);
}

const props = defineProps({
  person: Object,
})

async function deleteP(person){
  await store.deletePerson(person.userId)
  store.loadAllUsers();
}

async function personUpdate(person){
  await store.updatePerson(person.userId, firstName.value, lastName.value, parseInt(birthYear.value));
  isVisible.value = !isVisible.value;
  store.loadAllUsers();
}

</script>

<template>
  <tr v-if="!isVisible">
    <td>{{props.person.userId}}</td>
    <td>{{props.person.firstName}}</td>
    <td>{{props.person.lastName}}</td>
    <td>{{props.person.birthYear}}</td>
    <td><button class="btn btn-warning" @click="toggle">Bearbeiten</button></td>
    <td><button class="btn btn-danger" @click="deleteP(person)">Löschen</button></td>
  </tr>
  <tr v-else>
    <td>{{props.person.userId}}</td>
    <td><input type="text" v-model="firstName" :placeholder="person.firstName" /></td>
    <td><input type="text" v-model="lastName" :placeholder="person.lastName"/></td>
    <td><input type="text" v-model="birthYear" :placeholder="person.birthYear"/></td>
    <td><button class="btn btn-success" @click="personUpdate(person)">Speichern</button></td>
    <td><button class="btn btn-danger" @click="deleteP(person)">Löschen</button></td>
  </tr>
</template>
