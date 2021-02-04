<script lang="ts">
  import Logo from './Logo.svelte';
  import store from 'store'

  let infoClosed: boolean = false;

  const infoClosedStorekey = 'life_calender_closed';
  const closeInfo = () => {
    infoClosed = true;
    store.set(infoClosedStorekey, infoClosed);
  };

  $: {
    infoClosed = store.get(infoClosedStorekey);
  }
</script>

<div class="overlay" class:open= {infoClosed !== true}>
  <div class="popup">
    <div class="title opacity-75 text-centered">
      <Logo width={160}/>
    </div>
    <div class="content">
      <p>
        That's one box for every week of a 90-year life. That's not that many
        boxes, especially since we've already used a bunch of those. So I think
        we need to all take a long hard look at that calender. We need to stay
        aware of the instant Gratification monkey. That's a job for all of us.
      </p>
      <p class="text-centered">⎯⎯⎯⎯ Tim Urban ⎯⎯⎯⎯</p>

      <div class="row row-center">
        <div class="week is-past centered-xy">✗</div>
        <span class="description">the weeks that have past away </span>
      </div>
      <div class="row row-center">
        <div class="week" />
        <span class="description"
          >the weeks that are still availabe for you</span
        >
      </div>
      <div class="row row-center">
        <div class="week is-current" />
        <span class="description">the current week</span>
      </div>
    </div>
    <div class="action">
      <button class="is-cleared" on:click={closeInfo}>
        close
      </button>
    </div>
  </div>
</div>

<style>
  p {
  }
  .week {
    width: 20px;
    height: 20px;
    font-size: 20px;
    line-height: 20px;
  }
  .row {
    padding: 0 10px;
  }
  .description {
    padding-left: 20px;
  }
</style>
