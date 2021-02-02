<script lang="ts">
  import { onMount } from 'svelte';
  import store from 'store';
  import Day from './Day.svelte';
  let dates = {};

  onMount(async () => {
    const calender = store.get('life_calender');
    dates = calender.dates;
  });
</script>

{#each Object.keys(dates) as key}
  <Day day={dates[key]}/>
{/each}
