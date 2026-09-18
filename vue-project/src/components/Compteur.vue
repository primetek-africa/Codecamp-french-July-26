<script setup>
defineProps({
    count:Number
})

const emit = defineEmits(['increment'])
function increment(){
    emit('increment',1)
}
</script>
<template> 
<button @click="increment"> incrementer</button>
</template>