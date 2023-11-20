async function load({ cookies }) {
  const completed_tests = cookies.get("completed_tests");
  return {
    completed_tests
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-9a239b72.js')).default;
const server_id = "src/routes/tests/+page.server.js";
const imports = ["_app/immutable/nodes/6.d508d1d1.js","_app/immutable/chunks/scheduler.ca1ddca6.js","_app/immutable/chunks/index.4f779291.js","_app/immutable/chunks/each.e59479a4.js"];
const stylesheets = ["_app/immutable/assets/6.126c18ce.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-08faf0ba.js.map
