<script lang="ts">
  import Config from './models/Config';
  import store from 'store';
  import Calender from './models/Calender';

  let birthday: string = '1970-01-01';
  let age: number = 85;

  const configCalender = () => {
    const config = new Config(birthday, age);

    if (config.isValid()) {
      const calender = new Calender(config);
      calender.createDays();

      store.set('life_calender', calender);
    }
  };
</script>

<div class="overlay open">
  <div class="container">
    <div class="card">
      <div class="title text-centered">
        <img src={'./logo.png'} alt="logo" width="300" />
        <h6 class="opacity-50">Initialize the life calender</h6>
      </div>
      <div class="content">
        <form action="#" data-bitwarden-watching="1">
          <div class="row">
            <div class="column">
              <fieldset>
                <label for="birthday">Enter the Birthday </label>
                <input
                  type="date"
                  name="birthday"
                  bind:value={birthday}
                  min="1920-01-01"
                  max="2020-01-01"
                />
              </fieldset>
            </div>
            <div class="column">
              <fieldset>
                <label for="age">Enter the Age you might live </label>
                <input
                  type="number"
                  name="name"
                  bind:value={age}
                  min="50"
                  max="100"
                />
              </fieldset>
            </div>
          </div>
          <fieldset>
            <p class="small">
              The life calender will be initialized with given birthday and age
              number. The data you entered will be stored only in browser local
              storage. If the your clean up the browser local storage, the data
              will be lost.
            </p>
          </fieldset>
          <fieldset class="text-centered">
            <input
              type="submit"
              class="is-primary is-rounded"
              value="submit"
              on:click={configCalender}
            />
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
