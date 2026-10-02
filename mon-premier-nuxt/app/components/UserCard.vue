<script setup lang="ts">
defineProps<{
    name: string,
    job: string
}>()

</script>

<template>

    <div class="bg-white rounded-lg shadow p-6">
    <h2>
        {{name}}
    </h2>
    <p class="text-gray-600 mt-2">{{ job }}</p>

    <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">voir le profil</button>
    </div>

</template>
