import { c as create_ssr_component, d as each, v as validate_component, e as escape, f as null_to_empty, h as add_attribute } from './ssr-730644ad.js';

const css$2 = {
  code: "button.svelte-1so6bga{border:0;cursor:pointer;border-radius:6px;padding:8px 12px;font-weight:bold;box-shadow:1px 2px 3px rgba(0, 0, 0, 0.2);margin:8px 8px}.submit.svelte-1so6bga{background:green;color:white}.cancel.svelte-1so6bga{background:red;color:white}.math-number.svelte-1so6bga{width:100px;height:100px;font-size:200%;margin:4px 4px}.reaction-test.svelte-1so6bga{width:100%;height:400px}.reaction-test-waiting.svelte-1so6bga{background:red;color:white}.reaction-test-active.svelte-1so6bga{background:green;color:white}.locked.svelte-1so6bga{cursor:not-allowed;background:#ccc;color:#888}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type = "submit" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$2);
  return `<button class="${escape(null_to_empty(type), true) + " svelte-1so6bga"}">${type == "locked" ? `🔒` : ``} ${slots.default ? slots.default({}) : ``} </button>`;
});
const css$1 = {
  code: ".card.svelte-txvp9v{background-color:white;border-radius:8px;margin:20px auto;padding:15px 15%;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);text-align:center;max-width:400px}",
  map: null
};
const Test_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { is_complete = false } = $$props;
  let { all_complete = false } = $$props;
  let { link = "" } = $$props;
  let { name = "" } = $$props;
  if ($$props.is_complete === void 0 && $$bindings.is_complete && is_complete !== void 0)
    $$bindings.is_complete(is_complete);
  if ($$props.all_complete === void 0 && $$bindings.all_complete && all_complete !== void 0)
    $$bindings.all_complete(all_complete);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty("card " + (is_complete ? "complete" : "incomplete")), true) + " svelte-txvp9v"}">${slots.default ? slots.default({}) : ``} <p>${escape(is_complete ? "Completed" : "Not yet completed")}</p> <p>${is_complete ? `<a${add_attribute("href", link, 0)}>${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `View Results`;
    }
  })}</a>` : `${name == "subjective_rating" && !all_complete ? `${validate_component(Button, "Button").$$render($$result, { type: "locked" }, {}, {
    default: () => {
      return `Complete Last`;
    }
  })}` : `<a${add_attribute("href", link, 0)}>${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `Begin Test`;
    }
  })}</a>`}`}</p></div>`;
});
const css = {
  code: ".card-container.svelte-r5eat3{display:flex;justify-content:center;flex-wrap:wrap\r\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let completed_tests = data.completed_tests != null ? JSON.parse(data.completed_tests) : [];
  let all_complete = true;
  const tests = [
    {
      name: "arithmetic_ability",
      title: "Arithmetic"
    },
    {
      name: "simple_attention",
      title: "Reaction Time"
    },
    {
      name: "episodic_memory",
      title: "Episodic memory"
    },
    // {name: "stroop", title: "Stroop"},
    {
      name: "working_memory",
      title: "Working Memory"
    },
    {
      name: "subjective_rating",
      title: "Subjective Rating"
    }
  ];
  console.log(tests);
  for (let test of tests) {
    console.log(test);
    if (!completed_tests.includes(test.name) && test.name != "subjective_rating") {
      all_complete = false;
      break;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="card-container svelte-r5eat3">${each(tests, (test) => {
    return `${validate_component(Test_card, "TestCard").$$render(
      $$result,
      {
        all_complete,
        name: test.name,
        link: "tests/" + test.name,
        is_complete: completed_tests.includes(test.name)
      },
      {},
      {
        default: () => {
          return `${escape(test.title)} `;
        }
      }
    )}`;
  })} </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-9a239b72.js.map
