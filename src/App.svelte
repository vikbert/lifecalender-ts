<script>
  let src = './logo.png';
  const items = Array.from(Array(36500).keys());
</script>

<header class="header">
  <nav class="topbar space-between">
    <div class="logo">
      <img {src} alt="logo" class="logo" />
    </div>
    <button class="is-cleared">Open dialog</button>
  </nav>
</header>
<main class="main">
  {#each items as item}
    <div class="day" />
  {/each}
</main>

<style>
  .topbar {
    background-color: white;
  }
  .logo {
    height: 40px;
    margin-left: 2px;
  }
  .main {
    padding: 8px;
  }
  .day {
    width: 5px;
    height: 5px;
    background: #ccc;
    margin: 1px;
    float: left;
  }
</style>
