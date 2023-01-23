<script setup>
import { usePersonStore } from '../stores/personStore.js';
import {ref} from 'vue';
import {useRouter} from 'vue-router'

const store = usePersonStore();
const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const birthYear = ref('');

async function addPerson(){
// let today = new Date().getFullYear();
let year = parseInt(birthYear.value.substring(0,4));

  let personObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    birthYear: year
    // birthYear: birthYear.value
  }
    console.log(personObj);

    store.addPerson(personObj.firstName, personObj.lastName, personObj.birthYear);
    
    await store.loadAllUsers();
    
    router.push('/');
}
</script>

  <template>
    <form @submit.prevent="addPerson" class="card bg-dark">
        <div style="color:green;" class="card-header">
            Stammdaten
        </div>
        <div class="card-body">
            <div class="input-group mb-2">
                <label class="input-group-text">Vorname</label>
                <input type="text" v-model="firstName" class="form-control" placeholder="Max">
            </div>
            <div class="input-group mb-2">
                <label class="input-group-text">Vorname</label>
                <input type="text" v-model="lastName" class="form-control" placeholder="Mustermann">
            </div>
            <div class="input-group mb-2">
                <label class="input-group-text">Geburtstag</label>
                <input type="date" v-model="birthYear" format="dd-MM-YYYY" class="form-control" >
            </div>
            <button type="submit" class="btn btn-success mb-2">Hinzufügen</button>
        </div>
    </form>
</template>

<style scoped>
  
</style>