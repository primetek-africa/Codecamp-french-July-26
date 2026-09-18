<script setup>
const emit = defineEmits(['select'])

function selectUser(){
    emit(
        'select',{
            id:10,
            name:'Jean',
            age:20
        }
    )
}
</script>

<template>
<button @click="selectUser">
    selectionner
</button>
</template>