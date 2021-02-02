<script lang="ts">
  import type Day from './models/Day';
  export let day: Day;
</script>

<div class="day" class:is-past={day.isPast} class:is-current={day.isCurrent}/>
