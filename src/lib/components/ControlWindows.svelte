<script>
	import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let darkmode = false;
</script>

<nav class="controls">
  <button class="btn minimize" class:darkmode on:click={() => dispatch('minimize')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="1" fill="none" class="icon"><path fill="#000" d="M0 0h10v1H0z"/></svg>
  </button>
  <button class="btn maximize" class:darkmode on:click={() => dispatch('maximize')}>
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" class="icon"><rect width="9" height="9" x=".5" y=".5" stroke="#000" rx="1.5"/></svg>
  </button>
  <button class="btn close" class:darkmode on:click={() => dispatch('close')}>
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
      <rect x="0.707123" y="1.52588e-05" width="13.4895" height="1" transform="rotate(45 0.707123 1.52588e-05)" fill="black"/>
      <rect x="10.2456" y="0.707108" width="13.4895" height="1" transform="rotate(135 10.2456 0.707108)" fill="black"/>
      </svg>      
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
        .icon {
          svg {
            path, line {
              fill: #fff;
            }
          }
        }
      }

      .icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
      }

      &.minimize {
      }

      &.maximize {
      }

      &.close {
        &:hover {
          background-color: #C42C1D;

          .icon {
            rect {
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