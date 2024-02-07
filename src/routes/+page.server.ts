export async function load({ fetch }) {
	const snippetSvelte = await (await fetch("/code/snippet-svelte.txt")).text();
  const snippetVanilla = await (await fetch("/code/snippet-vanilla.txt")).text();

  return {
    snippetSvelte,
    snippetVanilla
  };
}