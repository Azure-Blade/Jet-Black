<script lang="ts">
  import '$styles'

  import { page } from '$app/stores'
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'

  import { ThemeToggle } from 'ui'
  import { theme } from '$lib/stores/theme'

  import Fa from 'svelte-fa'
  import type { PageData } from './$types'
  import { navLinks } from '$data/NavLinks'
  export let data: PageData

  onMount(() => {
    theme.init(data.theme)
  })

  $: {
    if (browser) {
      document.documentElement.setAttribute('data-theme', $theme)
      document.documentElement.classList.value = $theme
    }
  }
</script>

<div class="h-screen flex flex-col bg-base-100">
  <div
    data-tauri-drag-region
    class="h-12 bg-base-200 shadow-lg items-center justify-between flex px-2"
  >
    <!-- TOOD: Find out why there is unused space without using `grid` -->
    <button on:click="{theme.toggleTheme}" class="grid">
      <ThemeToggle theme="{$theme}" />
    </button>

    <nav>
      <ul class="flex space-x-4">
        {#each navLinks as navLink, i (i)}
          <li>
            <a
              href="{navLink.target.href}"
              target="{navLink.target.newTab ? '_blank' : ''}"
              class="{'font-bold text-lg ' +
                ($page.url.pathname === navLink.target.href
                  ? 'border-b-2 border-primary text-primary'
                  : '')}"
            >
              {#if navLink.content.icon}
                <Fa icon="{navLink.content.icon}" />
              {/if}
              {navLink.content.text}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <div></div>
  </div>

  <main class="flex-1">
    <slot />
  </main>
  <footer>
    <!-- Empty for now -->
  </footer>
</div>
