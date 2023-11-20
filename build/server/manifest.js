const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.4cd0f21f.js","app":"_app/immutable/entry/app.60d31bf1.js","imports":["_app/immutable/entry/start.4cd0f21f.js","_app/immutable/chunks/scheduler.ca1ddca6.js","_app/immutable/chunks/singletons.69ae75f6.js","_app/immutable/entry/app.60d31bf1.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.ca1ddca6.js","_app/immutable/chunks/index.4f779291.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-2216f03e.js')),
			__memo(() => import('./chunks/1-b5c886fa.js')),
			__memo(() => import('./chunks/2-8c860d8d.js')),
			__memo(() => import('./chunks/3-a877d739.js')),
			__memo(() => import('./chunks/4-e23be31c.js')),
			__memo(() => import('./chunks/5-dfc64986.js')),
			__memo(() => import('./chunks/6-08faf0ba.js')),
			__memo(() => import('./chunks/7-b629f618.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/cookies",
				pattern: /^\/cookies\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-8f9b657b.js'))
			},
			{
				id: "/home",
				pattern: /^\/home\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/sql",
				pattern: /^\/sql\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-0e7f27df.js'))
			},
			{
				id: "/tests",
				pattern: /^\/tests\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/tests/[test_name]",
				pattern: /^\/tests\/([^/]+?)\/?$/,
				params: [{"name":"test_name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/wordlist",
				pattern: /^\/wordlist\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-d699ec10.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
