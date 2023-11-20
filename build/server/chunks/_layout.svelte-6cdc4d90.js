import { c as create_ssr_component, v as validate_component } from './ssr-730644ad.js';

const css = {
  code: "header.svelte-pqdzt1.svelte-pqdzt1{background-color:black;padding:16px}.navbar.svelte-pqdzt1.svelte-pqdzt1{display:flex;justify-content:flex-end}ul.nav.svelte-pqdzt1.svelte-pqdzt1{list-style-type:none;margin:0;padding:0}ul.nav.svelte-pqdzt1 li.svelte-pqdzt1{display:inline-block;margin-right:10px}ul.nav.svelte-pqdzt1 li a.svelte-pqdzt1{text-decoration:none;padding:5px 10px;border-radius:5px;color:default}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="svelte-pqdzt1" data-svelte-h="svelte-r0tocv"><div class="logo"><h1>sleepapp</h1></div> <div class="navbar svelte-pqdzt1"><ul class="nav svelte-pqdzt1"><li class="svelte-pqdzt1"><a href="/home" class="svelte-pqdzt1">home</a></li> <li class="svelte-pqdzt1"><a href="/tests" class="svelte-pqdzt1">tests</a></li> <li class="svelte-pqdzt1"><a href="/about" class="svelte-pqdzt1">about</a></li> <li class="svelte-pqdzt1"><a href="/login" class="svelte-pqdzt1">login</a></li></ul></div> </header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-6cdc4d90.js.map
