<script setup lang="ts">
import { Ibook } from '../models/book'

defineProps<{ books: Ibook[] }>()
</script>

<template>
  <div class="container">
    <table class="book-table">
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.title">
          <td>{{ book.author }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.description }}</td>
          <td>
            <img :src="book.img_url" :alt="book.title" class="book-image">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.book-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
}

.book-table th,
.book-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.book-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.book-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.book-table tr:hover {
  background-color: #f1f1f1;
}

.book-image {
  max-width: 100px;
  height: auto;
  display: block;
}
</style>
