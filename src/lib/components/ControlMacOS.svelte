<script>
	import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<nav class="controls">
  <button class="btn close" on:click={() => dispatch('close')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" fill="none" class="icon"><path fill="#000" fill-opacity=".5" fill-rule="evenodd" d="M6.8 1.16a.65.65 0 1 0-.92-.92L3.97 2.15 2.06.24a.65.65 0 0 0-.92.92l1.91 1.9-1.91 1.92a.65.65 0 1 0 .92.92l1.9-1.91 1.92 1.9a.65.65 0 1 0 .92-.91L4.89 3.07l1.9-1.91Z" clip-rule="evenodd" style="mix-blend-mode:multiply"/></svg>
  </button>
  <button class="btn minimize" on:click={() => dispatch('minimize')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="2" fill="none" class="icon"><rect width="8" height="1.4" y=".4" fill="#000" fill-opacity=".5" rx=".7" style="mix-blend-mode:multiply"/></svg>
  </button>
  <button class="btn maximize" on:click={() => dispatch('maximize')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="none" class="icon"><path fill="#000" fill-opacity=".45" fill-rule="evenodd" d="M1.15.27a1 1 0 0 0-1 1v3.56L4.7.27H1.15Zm3.7 5.6a1 1 0 0 0 1-1V1.33L1.29 5.88h3.56Z" clip-rule="evenodd" style="mix-blend-mode:multiply"/></svg>
  </button>
</nav>

<style lang="scss">
  .controls {
    display: flex;

    &:hover {
      .btn {
        .icon {
          display: block;
        }
      }
    }

    .btn {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #eee;
      position: relative;
      padding: 0;
      margin: 0;
      border: none;

      .icon {
        display: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
      }
      
      & + .btn {
        margin-left: 8px;
      }

      &.close {
        background-color: #FE6057;

        &:active {
          background-color: #FF8D85;
        }

        .icon {
          transform: translate3d(-3.89px, -2.92px, 0);
        }
      }

      &.minimize {
        background-color: #FEBC2E;

        &:active {
          background-color: #FFEA5C;
        }
      }

      &.maximize {
        background-color: #29C73F;

        &:active {
          background-color: #54F76E;
        }
      }
    }
  }
</style>