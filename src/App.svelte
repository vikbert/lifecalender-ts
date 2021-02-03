<script lang="ts">
    import store from 'store';
    import CalenderGrid from './CalenderGrid.svelte';
    import Login from './ConfigForm.svelte';
    import Header from './Header.svelte';

    const calender = store.get('life_calender');
</script>

{#if calender && calender.config}
    <Header/>
    <main class="main">
        <CalenderGrid/>
    </main>
{:else}
    <Login/>
{/if}
