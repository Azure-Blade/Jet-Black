<script lang="ts">
  import { fade } from 'svelte/transition'

  import BaseHeader from './BaseHeader.svelte'
  import BaseFooter from './BaseFooter.svelte'
</script>

<div
  class="font-sans bg-base-100 text-base-content h-screen flex flex-col overflow-y-auto overflow-x-hidden"
>
  <BaseHeader />
  <main class="flex-1" in:fade="{{ delay: 300, duration: 1000 }}">
    <slot />
  </main>
  <BaseFooter />
</div>
