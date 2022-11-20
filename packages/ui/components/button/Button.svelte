<script lang="ts">
  // This is an example components

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export let onClick = (e: MouseEvent) =>
    console.log('OnClick handler not bound!')

  export let text = ''
</script>

<button on:click="{onClick}">
  {text}
</button>
