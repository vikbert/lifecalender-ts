<script lang="ts">
  import Avatar from './Avatar.svelte';
  import { faqOpen } from './services/store';

  let open: Boolean;

  faqOpen.subscribe((value) => {
    open = value;
  });

  const closeDialog = () => {
    faqOpen.update(() => false);
  };
</script>

<div class="overlay" class:open>
  <div class="popup">
    <div class="content">
      <div class="row">
        <div class="column text-centered">
          <Avatar />
        </div>
      </div>
      <div class="row">
        <div class="column">
          <p>
            LifeCalender is inspired by <a
              target="_blank"
              href="https://www.youtube.com/watch?v=arj7oStGLkU&ab_channel=TED"
              >Tim Urban's TED talk</a
            >. In his humorous talk about the procrastination, he introduced the
            idea of life calender in his slide.
          </p>

          <p>
            I create the lifeCalender with both <code>svelte.js</code> and
            <code>react.js</code>
            to benchmark the performance difference between
            <code>virtual DOM</code>
            and <code>real DOM</code>.
          </p>

          <h5 class="opacity-75">Techniques used:</h5>
          <ul>
            <li>TypeScript</li>
            <li>Svelte.js</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="action">
      <button class="is-cleared" on:click={closeDialog}>close</button>
    </div>
  </div>
</div>

<style>
  .content {
    padding: 3.2rem !important;
  }
</style>
