<script lang="ts">
  import moment from 'moment';
  import type Calender from './models/Calender';
  import { countWeeks } from './services/Weeks';

  export let calender: Calender;

  let weekIndexes = [];
  let currentIndex = 0;

  $: {
    weekIndexes = Array.from(Array(calender.weekAmount).keys());
    currentIndex = countWeeks(moment(), moment(calender.config.birthday));
  }
</script>

<div class="calender">
  {#each weekIndexes as index}
    {#if index < currentIndex}
      <div class="week is-past centered-xy">✗</div>
    {:else if index === currentIndex}
      <span class="week is-current"></span>
    {:else}
      <span class="week" />
    {/if}
  {/each}
</div>
