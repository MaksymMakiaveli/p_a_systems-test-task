<script setup lang="ts">
  import { definePageMeta, navigateTo } from '#imports';
  import { ROUTER_BOOK } from '~/kernel/routes/router-book';

  definePageMeta({
    middleware: [
      () => {
        return navigateTo({ path: ROUTER_BOOK.note.root() });
      },
    ],
  });
</script>

<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>
