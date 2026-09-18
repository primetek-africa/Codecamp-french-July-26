<script setup>
 defineProps({
   produit:Object
 })
</script>
<template>
   
    <div>
      <h2>{{ produit.nom }}</h2>
      <p>Prix est:{{ produit.prix }}$</p>
    </div>
</template>