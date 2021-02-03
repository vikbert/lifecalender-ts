<script lang="ts">
  export let weekAmount: number = 0;
  let weekIndexes = [];

  $: weekIndexes = Array.from(Array(weekAmount).keys());

</script>

<div class="calender">
  {#each weekIndexes as index}
      <span class={'day'} />
  {/each}
</div>
