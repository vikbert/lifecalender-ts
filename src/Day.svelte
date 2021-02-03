<script lang="ts">
    import type DayInfo from './models/DayInfo';

    export let info: DayInfo;
    export let tooltip = false;
</script>

<span class="day" class:is-past={info.isPast} class:is-current={info.isCurrent} data-tooltip={false}></span>
