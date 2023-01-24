<script setup>
import { storeToRefs } from 'pinia';
import {computed} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePersonStore } from '../stores/personStore';

const store = usePersonStore()
const router = useRouter()
const route = useRoute()

const userId = computed(() => parseInt(route.params.userID));
const userById = computed(() => store.persons.filter(element => element.userId === userId.value))

</script>

<template>

  <div>
    <p>ID: {{ userId }}</p>
    <p>Vorname: {{ userById[0].firstName }}</p>
    <p>Nachname: {{ userById[0].lastName }}</p>
    <p>Geburtsjahr: {{ userById[0].birthYear }}</p>
  </div>

</template>

<style >

</style>