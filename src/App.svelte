<script lang="ts">
  import { onMount } from 'svelte';
  import store from 'store';
  import Header from './Header.svelte';
  import Login from './ConfigForm.svelte';
  import CalenderGrid from './CalenderGrid.svelte';

  const calender = store.get('life_calender');
</script>

{#if calender && calender.config}
  <Header />
  <main class="main">
    <CalenderGrid />
  </main>
{:else}
  <Login />
{/if}
