<script setup>
 defineProps({
    nom: String,
    age:Number,
    profession: String,
 })

</script>
<template>
    <h1>Bonjour {{ nom }} depuis le composant</h1>
    <p>Age = {{ age }}</p>
    <p>Proffession :{{ profession }}</p>

</template>