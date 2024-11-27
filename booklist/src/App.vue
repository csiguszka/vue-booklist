<script setup lang="ts">
import { ref } from 'vue';
import Table from './components/Table.vue';
import books from './bookdata';
import Card from './components/Card.vue';

// Reaktív változó létrehozása
const isTableView = ref(false);
</script>

<template>
  <button @click="isTableView = !isTableView" class="btn">
    {{ isTableView ? 'Card' : 'Table' }}
  </button>
  <Table v-if="isTableView" :books="books" />
  <Card v-else :books="books" />
</template>

<style scoped>
  .btn{
    background-color: rgb(114, 114, 250);
    color: white;
    cursor: pointer;
    border: none;
    border-color: none;
    border-width: 0;
    padding: 20px;
    border-radius: 1rem;
  }
</style>
