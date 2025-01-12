export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "<cv>/_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Os_X9YFC.js","app":"_app/immutable/entry/app.D29hZFoG.js","imports":["_app/immutable/entry/start.Os_X9YFC.js","_app/immutable/chunks/entry.CGbyOngC.js","_app/immutable/chunks/runtime.LvuBCE7a.js","_app/immutable/chunks/index-client.SwGtKhTe.js","_app/immutable/entry/app.D29hZFoG.js","_app/immutable/chunks/runtime.LvuBCE7a.js","_app/immutable/chunks/render.RI7lKNiu.js","_app/immutable/chunks/disclose-version.DGRUOOCv.js","_app/immutable/chunks/index-client.SwGtKhTe.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
