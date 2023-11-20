import { c as create_ssr_component, v as validate_component, e as escape, m as missing_component, d as each } from './ssr-730644ad.js';

const Results_page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stats = {} } = $$props;
  let keys = [];
  if ($$props.stats === void 0 && $$bindings.stats && stats !== void 0)
    $$bindings.stats(stats);
  {
    {
      keys = [];
      Object.keys(stats).forEach(function(key) {
        keys.push(key);
      });
    }
  }
  return `<div>${each(keys, (key) => {
    return `<div>${escape(key)}: ${escape(stats[key])}</div>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let stats;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${!data.completed_tests.includes(data.params.test_name) ? `${validate_component(missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `<div><h2>${escape(data.params.test_name)} test results</h2></div> ${validate_component(Results_page, "ResultsPage").$$render($$result, { stats }, {}, {})}`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-c22645fe.js.map
