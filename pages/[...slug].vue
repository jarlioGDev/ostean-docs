<template>
  <header>
    <nav>
      <ul>
        <li v-for="page in pages" :key="page._file">
          <NuxtLink :to="page._path">
            {{ page.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <ContentDoc />
  </main>
</template>

<script setup>
const pages = await queryContent().find();
console.log(pages)
</script>