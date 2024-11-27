<script setup lang="ts">
import { Ibook } from '../models/book'

defineProps<{ books: Ibook[] }>()
</script>

<template>
  <div class="container">
    <div v-for="book in books" :key="book.title" class="card">
      <img :src="book.img_url" :alt="book.title" class="card-image">
      <h1 class="card-title">{{ book.title }}</h1>
      <p class="card-author">{{ book.author }}</p>
      <p class="card-description">{{ book.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; 
  justify-content: center;
  padding: 16px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: calc(50% - 20px);
  max-width: 300px;
  padding: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.card-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 8px;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
  margin: 8px 0;
}

.card-author {
  font-size: 1em;
  color: #555;
  margin-bottom: 8px;
}

.card-description {
  font-size: 0.9em;
  color: #777;
}
</style>
