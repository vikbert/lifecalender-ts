<script lang="ts">
  import store from 'store';
  import Calender from './models/Calender';
  import CalenderConfig from './models/CalenderConfig';
  import Logo from './Logo.svelte';

  let birthday: string = '1970-01-01';
  let age: number = 85;
  let open = true;

  const configCalender = (event) => {
    event.preventDefault();
    const calender = new Calender(new CalenderConfig(birthday, 90));
    calender.initWeekAmount();

    store.set('life_calender', calender);
    location.reload();
  };
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="overlay" class:open>
  <div class="card">
    <div class="title text-centered">
      <Logo width={200} />
    </div>

    <iframe
      width="425"
      height="315"
      src="https://www.youtube.com/embed/arj7oStGLkU?start=782"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <form>
      <div class="container">
        <h6 class="opacity-50 text-centered">
          inspired by
          <a href="https://www.youtube.com/watch?v=arj7oStGLkU&ab_channel=TED"
            >Tim Urban</a
          >'s nice TED talk about <strong>procrastination　
          </strong>
        </h6>
      </div>
      <div class="container">
        <fieldset>
          <label
            >Enter Your Birthday
            <input
              type="date"
              name="birthday"
              bind:value={birthday}
              min="1920-01-01"
              max="2020-01-01"
            />
          </label>
        </fieldset>
      </div>
      <div class="container">
        <fieldset class="text-centered">
          <button
            type="submit"
            class="submit is-secondary is-rounded shadow-lg"
            on:click={configCalender}>GO</button
          >
        </fieldset>
      </div>
    </form>
  </div>
</div>

<style>
  h6 {
    padding: 20px 0;
  }
  .card {
    width: 425px;
  }
  button.submit {
    color: white;
    border-radius: 40px !important;
    height: 40px;
    margin-bottom: 20px;
  }
</style>
