function load({ params, cookies }) {
  return {
    params,
    completed_tests: cookies.get("completed_tests") == null ? [] : JSON.parse(cookies.get("completed_tests"))
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-c22645fe.js')).default;
const server_id = "src/routes/tests/[test_name]/+page.server.js";
const imports = ["_app/immutable/nodes/7.0afcbb9f.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.ca1ddca6.js","_app/immutable/chunks/index.4f779291.js","_app/immutable/chunks/each.e59479a4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-b629f618.js.map
