<script lang="ts">
  import store from 'store';
  import CalenderGrid from './CalenderGrid.svelte';
  import CalenderForm from './CalenderForm.svelte';
  import CalenderInfo from './CalenderInfo.svelte';
  import Header from './Header.svelte';

  let calender: any = store.get('life_calender');
</script>

{#if calender && calender.weekAmount > 0}
  <Header />
  <main class="main">
    <CalenderGrid {calender}/>
    <CalenderInfo/>
  </main>
{:else}
  <CalenderForm />
{/if}
