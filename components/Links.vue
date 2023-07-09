<template>
    <li v-for="{ link, name, icon } in links" :key="name">
        <NuxtLink :to="link" :title="name">
            <Icon size="3em" :name="icon" color="white" />
        </NuxtLink>
    </li>
</template>

<script setup>
const { links } = defineProps({ links: Array })
</script>

<style scoped>
li {
    margin: 20px;
}

ul {
    color: white;
    list-style-type: none;
}
</style>