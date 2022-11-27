<script lang="ts">
  import { Route } from 'tinro'

  import Index from '$lib/router/routes/Index.svelte'
  import Versions from '$router/routes/Versions.svelte'
</script>

<!-- Fix for linting errors: ->
   https://github.com/AlexxNB/tinro/pull/121/commits/d2251ffed630aac6e76e71856204ead5dd2f6661 -->
<Route path="/"><Index /></Route>
<Route path="/versions"><Versions /></Route>
