<script setup>
import Enfant from './components/Enfant.vue';
import Compteur from './components/Compteur.vue';
import Form from './components/Form.vue';
import { ref,reactive,computed, watch } from 'vue'



// export default{
//   data(){
//     return{
//       count:0
//     }
//   }
// },
// methods{
//    increment(){
//     this.count++
//    }
// }
// [nom ,setNom]=useState({
//   name:'',
//   email:'',
//   password:''
// })


function handleSect(user){
  console.log(user)
}

const count = ref(0);

function handleIncrement(value){
  count.value += value
}
const name = ref('')
const form = reactive({
  name:'',
  email:'',
  password:''
})

const price = ref(100)
const quantity = ref(3)

const total = computed(()=>{
  return price.value* quantity.value
})
//watch
const search = ref('')

watch(search,(newValue)=>{
  console.log('Recherche:',newValue)
})





</script>

<template>
<router-link to="/">Home</router-link>
<router-link to="/about">About</router-link>
<router-link to="/users">users</router-link>

<input v-model="search"> 

 <h1>Total est {{ total }}</h1>

<Form v-model="name"
/>
<h1>{{ name }}</h1>

<Enfant @select ="handleSect"/>
<Compteur 
:count = "count"
@increment="handleIncrement"
/>
<h1>{{ count }}</h1>

<router-view/>

</template>

// alice ,jephte, jean-pierre

