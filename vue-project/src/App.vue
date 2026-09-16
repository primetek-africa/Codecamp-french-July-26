<script setup>
import { ref } from 'vue'

const compteur = ref(0)

function incrementer() {
  compteur.value++
}
</script>

<template>
  <h1>Compteur : {{ compteur }}</h1>

  <button @click="incrementer">
    Ajouter
  </button>
</template>


                 VUE.JS
                    │
          ┌─────────┴─────────┐
          │                   │
       Données             Template
          │                   │
        ref()             HTML
          │                   │
          └─────────┬─────────┘
                    │
              Réactivité
                    │
                    ↓
             Interface mise
              automatiquement
               à jour