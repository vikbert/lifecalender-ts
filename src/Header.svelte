<script lang="ts">
  let src = './logo.png';
</script>

<header class="header">
  <nav class="topbar space-between">
    <div />
    <div class="logo">
      <img {src} alt="logo" class="logo" />
    </div>
    <div class="faq">
      <span
      class="iconify"
      data-icon="fluent:chat-bubbles-question-20-filled"
      data-inline="false"
    />
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
