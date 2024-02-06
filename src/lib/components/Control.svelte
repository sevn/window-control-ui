<script lang="ts">
	import ControlMacOs from "./ControlMacOS.svelte";
	import ControlWindows from "./ControlWindows.svelte";

  type os = "macos" | "windows";
  export let os: os = "macos";
</script>

{#if os === "macos"}
  <ControlMacOs on:close on:maximize on:minimize />
{:else}
  <ControlWindows on:close on:maximize on:minimize />
{/if}