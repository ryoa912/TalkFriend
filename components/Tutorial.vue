<!-- Please remove this file from your project -->
<template>
<div>
  <span>はじめまして！</span>
  <div>
  <p v-if="env">Environment: {{ env }}</p>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Tutorial extends Vue {
  env: string = ''

  async mounted() {
    const response = await fetch('/api/env')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    this.env = data.env;
  }
}
</script>
