<script lang="ts">
  import Faq from './Faq.svelte';
  import Logo from './Logo.svelte';
</script>

<header class="header">
  <nav class="topbar space-between">
    <div />
    <div class="logo">
      <Logo width={120} />
    </div>
    <div class="faq">
      <Faq />
    </div>
  </nav>
</header>

<style>
  .topbar {
    background-color: white;
  }
  .logo {
    height: 40px;
    margin-left: 2px;
  }
  .faq {
    margin-right: 15px;
    font-size: 35px;
    cursor: pointer;
  }
</style>
