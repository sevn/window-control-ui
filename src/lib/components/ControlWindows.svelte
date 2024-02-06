<script>
	import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let darkmode = false;
</script>

<nav class="controls">
  <button class="btn minimize" class:darkmode on:click={() => dispatch('minimize')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="1" fill="none" class="icon"><path d="M0 0h10v1H0z"/></svg>
  </button>
  <button class="btn maximize" class:darkmode on:click={() => dispatch('maximize')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" class="icon"><path fill-rule="evenodd" d="M8 1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z" clip-rule="evenodd"/></svg>
  </button>
  <button class="btn close" class:darkmode on:click={() => dispatch('close')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" class="icon"><path d="m.7 0 9.55 9.54-.71.7L0 .72.7 0Z"/><path d="M10.25.7.7 10.26 0 9.54 9.54 0l.7.7Z"/></svg>
  </button>
</nav>

<style lang="scss">
  .controls {
    display: flex;

    .btn {
      width: 46px;
      height: 28px;
      position: relative;
      padding: 0;
      margin: 0;
      border: none;
      background: transparent;

      &:hover {
        background: rgba(#000, 0.04);
      }

      &:active {
        background: rgba(#000, 0.06);
      }

      &.darkmode { 
        &:hover {
          background: rgba(#fff, 0.04);
        }

        &:active {
          background: rgba(#fff, 0.06);
        }

        .icon {
          path {
            fill: #fff;
          }
        }
      }

      .icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);

        path {
          fill: #000;
        }
      }

      &.minimize {
      }

      &.maximize {
      }

      &.close {
        &:hover {
          background-color: #C42C1D;

          .icon {
            path {
              fill: #fff;
            }
          }
        }

        &:active {
          background-color: #AE2012;
        }
      }
    }
  }
</style>