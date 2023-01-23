import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

let url = 'https://wcpbojrgog.user-management.asw.rest/api/';

export const usePersonStore = defineStore('persons', () => {
  const persons = ref([]);
  const sonstiges = ref([]);

  async function loadAllUsers() {
    const response = await axios.get(url + "users");
    persons.value = response.data;
  }

  async function addPerson(firstname, lastname, birthyear) {
    const response = await axios.post(url + 'users', {
      firstName: firstname, lastName: lastname, birthYear: birthyear
    });
  }

  async function deletePerson(id) {
    const response = await axios.delete(url + 'users/' + id);
  }

  async function updatePerson(id, firstname, lastname, birthyear) {
    const response = await axios.put(url + 'users/' + id, {
      firstName: firstname, lastName: lastname, birthYear: birthyear
    });
  }


  function increment() {
    count.value++;
  }

  return { persons, sonstiges, loadAllUsers, addPerson, deletePerson, updatePerson, increment };
});
