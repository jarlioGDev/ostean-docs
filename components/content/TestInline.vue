<template>
    <span>{{ text }}</span>
</template>

<script setup>
const { text } = defineProps({ text: String })
</script>