<script lang="ts">
    import type DayInfo from './models/DayInfo';

    export let info: DayInfo;
</script>

<span class={"day " + info.className}></span>
