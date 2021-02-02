<script lang="ts">
  import Header from './Header.svelte';
  import Day from './Day.svelte';
  import Login from './CalenderInit.svelte';
  const items: number[] = Array.from(Array(36500).keys());
</script>

{#if true}
  <Login />
{:else}
  <Header />
  <main class="main">
    {#each items as item}
      <Day />
    {/each}
  </main>
{/if}
