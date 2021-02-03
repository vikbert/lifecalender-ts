<script lang="ts">
    import store from 'store';
    import {onMount} from 'svelte';
    import Day from './Day.svelte';

    let dates = {};

    onMount(async () => {
        const calender = store.get('life_calender');
        ({dates} = calender);
    });

</script>

{#each Object.keys(dates) as key}
    <Day info={dates[key]} />
{/each}
