<template>
  <h3>{{ reference }}</h3>
  <span>{{ text }}</span>
</template>
  
<script setup>
const text = ref(null);
const reference = ref(null)
const { translation = "kjv", book, numbers } = defineProps({ translation: String, book: String, numbers: String })

onMounted(async () => {
  try {
    const response = await fetch(`https://bible-api.com/${book}+${numbers}?translation=${translation}`);
    const responseParse = await response.json()
    text.value = responseParse.text;
    reference.value = responseParse.reference;
  } catch(error) {
    text.value = error;
    reference.value = "Not retrieved"
  }
})

</script>