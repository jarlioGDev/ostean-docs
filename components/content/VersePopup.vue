<template>
    <Popup :title="numbers">
        <Verse :numbers="numbers" :book="book"></Verse>
    </Popup>
</template>

<script setup>
import Popup from './Popup.vue';
import Verse from './Verse.vue';

const { title, numbers, book } = defineProps({ title: String, numbers: String, book: String });
</script>