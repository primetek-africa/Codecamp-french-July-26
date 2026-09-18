<script setup>
import Enfant from './components/Enfant.vue';
import Compteur from './components/Compteur.vue';
import Form from './components/Form.vue';
import { ref } from 'vue'


function handleSect(user){
  console.log(user)
}

const count = ref(0)

function handleIncrement(value){
  count.value += value
}
const name = ref('')

</script>

<template>
<Form v-model="name"
/>
<h1>{{ name }}</h1>

<Enfant @select ="handleSect"/>
<Compteur 
:count = "count"
@increment="handleIncrement"
/>
<h1>{{ count }}</h1>

</template>

