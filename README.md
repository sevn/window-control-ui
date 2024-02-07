
<p align="center"><b>Window Control UI</b></p>
<p align="center">Native-like window control UI for web desktop applications.</p>

<p align="center"><img width="445" alt="Screenshot 2024-02-07 at 19 52 05" src="https://github.com/sevn/window-control-ui/assets/1953194/bcffd4e7-1180-4013-b15a-04b4cabdc611"></p>


```
npm i @sevn/window-control-ui
```

### Usage

If you're a Svelte user, you're at home. Simply install this package and use it as follows:

```svelte
<script>
  import { Control } from "@sevn/window-control-ui";
</script>

<Control
  os="windows | macos"
  darkmode={true | false}
  on:minimize
  on:maximize
  on:close />
```

You can also use with vanilla HTML and JavaScript:

```html
<script src="https://unpkg.com/@sevn/window-control-ui@0.1.14/dist/umd/index.js"></script>
      
<script>
  const control = new WindowControlUI.Control({
    target: document.body, // target DOM element to render
    props: {
      os: "windows | macos",
      darkmode: true | false
    }
  })

  control.$on("minimize", () => console.log("mimimized!"));
  control.$on("maximize", () => console.log("maximized!"));
  control.$on("close", () => console.log("closed!"));
</script>
```

### How do I use it with React?

If you're trying to use this project with any non-Svelte (or non-vanilla-or-plain-HTML), please help solve <a href="https://github.com/sevn/window-control-ui/issues/1">this issue</a>.

### How do I position the controls in my Window?

This project focus only on creating the window controls and the events for you, feel free to use CSS to position them as needed in your application window.

In this page, for example, we use a `div` called `.controls-wrapper` with Flexbox and padding to position the controls based on the OS.

### Credits

Created by Claudio Holanda Jr. (<a href="https://twitter.com/kazzkiq">@kazzkiq</a>), made possible by <a href="https://sevn.technology">SEVN</a>.

Made in 🇧🇷
