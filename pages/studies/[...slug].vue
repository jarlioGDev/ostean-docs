<template>
  <div style="margin: 10px;">
    <header>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
        </ul>
        <h3>Principles</h3>
        <ul>
          <li v-for="page in pages" :key="page._file">
            <NuxtLink :to="page._path">
              {{ page.title }}
            </NuxtLink>
          </li>
        </ul>
        <h3>Survival</h3>
        <ul>
          <li v-for="page in survivalPages" :key="page._file">
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
const survivalPages = await queryContent('/survival').find();
</script>