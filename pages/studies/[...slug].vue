<template>
  <div style="margin: 10px;">
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
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
  </div>
</template>

<script setup>
const pages = await queryContent('/studies').find();
</script>