<script>
	import Control from "$lib/components/Control.svelte";

</script>

<div style="padding: 200px">
  <Control
    os="windows"
    on:close={() => window.alert("Closed!")}
    on:minimize={() => window.alert("Minimized!")}
    on:maximize={() => window.alert("Maximized!")} />
</div>