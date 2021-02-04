<script lang="ts">
  import { faqOpen } from './services/store';

  const openDialog = () => {
    faqOpen.update(() => true);
  };
</script>

<div on:click={openDialog}>
  <span
    class="iconify"
    data-icon="fluent:chat-bubbles-question-20-filled"
    data-inline="false"
  />
</div>
