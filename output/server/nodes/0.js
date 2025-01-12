

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.B59bVUu0.js","_app/immutable/chunks/disclose-version.DGRUOOCv.js","_app/immutable/chunks/runtime.LvuBCE7a.js"];
export const stylesheets = [];
export const fonts = [];
