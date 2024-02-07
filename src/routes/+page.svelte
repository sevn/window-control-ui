<script lang="ts">
	import Control from "$lib/components/Control.svelte";

  // Using ES6 import syntax
  import hljs from 'highlight.js/lib/core';
  import xml from 'highlight.js/lib/languages/xml';

  /** @type {import('./$types').PageData} */
	export let data;

  // Then register the languages you need
  hljs.registerLanguage('xml', xml);

  const highlightedVanilla = hljs.highlight(
    data.snippetVanilla,
    { language: 'xml' }
  ).value;

  const highlightedSvelte = hljs.highlight(
    data.snippetSvelte,
    { language: 'xml' }
  ).value;

  let os: "macos" | "windows" = "macos";
  let event = "Click in the window controls to fire the events.";
  let darkmode = false;

  function switchOS() {
    if (os === "macos") {
      os = "windows";
    } else {
      os = "macos";
    }
  }

  function fireEvent(name: string) {
    event = `Event fired: ${new Date().toISOString()} - ${name}`
  }

  async function loadVanillaCode() {

  }
</script>

<svelte:head>
  <title>Window Control UI - Native-like window control UI for web desktop applications.</title>
  <meta name="description" content="Native-like window control UI for web desktop applications.">

  <meta property="og:title" content="Window Control UI - Native-like window control UI for web desktop applications.">
  <meta property="og:url" content="https://sevn.github.io/window-control-ui">
  <meta property="og:image" content="https://sevn.github.io/window-control-ui/og.png">
  <meta property="og:image:url" content="https://sevn.github.io/window-control-ui/og.png">
  <meta property="og:image:width" content="1440">
  <meta property="og:image:height" content="560">
  <meta property="og:image:type" content="image/png">
  <meta property="og:image:alt" content="Native-like window control UI for web desktop applications.">
  <meta property="og:description" content="Window Control UI - Native-like window control UI for web desktop applications.">
  <meta property="og:site_name" content="Window Control UI">

  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:description" content="Window Control UI - Native-like window control UI for web desktop applications."/>
  <meta name="twitter:image" content="https://medias.itatiaia.com.br/dims4/default/88b7ff0/2147483647/strip/true/crop/1000x563+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-radio-itatiaia.s3.us-east-1.amazonaws.com%2Fbrightspot%2F6a%2F88%2Fd1cc4bd1fe51ee34f8d3722c206e%2Fprefeitura-pretende-acec13f5-b864-4fb0-ac0c-aaf68f372e4f.jpg"/>
  <meta name="twitter:image:alt" content="Window Control UI - Native-like window control UI for web desktop applications."/>
  <meta name="twitter:site" content="@kazzkiq"/>
  <meta name="twitter:title" content="Window Control UI - Native-like window control UI for web desktop applications."/>
</svelte:head>

<main>
  <h1>Window Control UI</h1>
  <h2>Native-like window control UI for web desktop applications.</h2>
  <code class="npm">npm i @sevn/window-control-ui</code>

  <section>
    <div class="window-example" class:darkmode>
    <div class="controls-wrapper" class:windows={os === "windows"}>
      <Control
        {os}
        {darkmode}
        on:close={() => fireEvent("Closed")}
        on:minimize={() => fireEvent("Minimized")}
        on:maximize={() => fireEvent("Maximized")}
        />
    </div>
    <div class="action">
      <button on:click={switchOS}>
        Toggle Windows/macOS
      </button>
      <button on:click={() => darkmode = !darkmode}>
        Toggle darkmode
      </button>
    </div>
    <code class="event">{event}</code>
  </div>
  </section>

  <section class="docs">
    <h3>Usage</h3>
    <p>If you're a Svelte user, you're at home. Simply install this package and use it as follows:</p>
    <pre>
      <code>{@html highlightedSvelte}</code>
    </pre>

  <p>You can also use with vanilla HTML and JavaScript:</p>

  <pre>
    <code>{@html highlightedVanilla}</code>
  </pre>

  <h3>How do I use it with React?</h3>

  <p>If you're trying to use this project with any non-Svelte (or non-vanilla-or-plain-HTML), please help solve <a href="https://github.com/sevn/window-control-ui/issues/1">this issue</a>.</p>

  <h3>How do I position the controls in my Window?</h3>
  <p>This project focus only on creating the window controls and the events for you, feel free to use CSS to position them as needed in your application window.</p>
  <p>In this page, for example, we use a <code>div</code> called <code>.controls-wrapper</code> with Flexbox and padding to position the controls based on the OS.</p>
</section>

<section class="credits">
  <h3>Credits</h3>
  <p>Created by Claudio Holanda Jr. (<a href="https://twitter.com/kazzkiq">@kazzkiq</a>), made possible by <a href="https://sevn.technology">SEVN</a>.</p>
  <p>Made in 🇧🇷</p>
</section>
</main>

<style lang="scss">
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 100px 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    h1 {
      font-weight: 500;
      font-size: 20px;
      text-align: center;
      margin: 0;
    }

    h2 {
      font-size: 16px;
      font-weight: 300;
      text-align: center;
    }

    a {
      color: inherit;
    }

    .npm {
      width: fit-content;
      display: block;
      margin: 30px auto;
      background: #eee;
      padding: 10px 20px;
      border-radius: 3px;
    }

    .window-example {
      max-width: 600px;
      height: 200px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-direction: column;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 0 1px rgba(#000, 0.1), 0 8px 15px rgba(#000, 0.1);
      overflow: hidden;

      &.darkmode {
        background-color: #222;

        .action {
          button {
            color: #fff;
            border-color: rgba(#fff, 0.3);
          }
        }

        code {
          background: rgba(#fff, 0.2);
          color: #fff;
        }
      }

      .controls-wrapper {
        display: flex;
        align-items: center;
        padding: 15px;

        &.windows {
          padding: 0;
          padding-bottom: 14px;
          justify-content: flex-end;
        }
      }

      .action {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          border-radius: 3px;
          border: 1px solid #ccc;
          background: none;
          padding: 4px 6px;

          & + button {
            margin-left: 10px;
          }
        }
      }

      code {
        display: block;
        text-align: center;
        margin: 10px;
        padding: 10px;
        border-radius: 3px;
        border-radius: 3px;
      }
    }

    section {
      h3 {
        margin-top: 50px;
      }

      pre {
        padding: 0;
        
        code {
          overflow: auto;
          display: block;
          padding: 10px;
          background: #eee;
          color: #000000;
          border-radius: 3px;

          :global(.hljs-tag) {
            color: #bf1262;
          }

          :global(.hljs-attr) {
            color: #5412bf;
          }

          :global(.hljs-string) {
            color: #023271;
          }

          :global(.hljs-keyword) {
            color: #bf124f;
          }

          :global(.hljs-comment) {
            color: #888;
          }

          :global(.hljs-literal) {
            color: #cb6b0a;
          }
        }
      }

      code {
        padding: 2px 5px;
        background: #eee;
      }
    }
  }
</style>