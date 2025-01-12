

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.bqwku1HN.js","_app/immutable/chunks/disclose-version.DGRUOOCv.js","_app/immutable/chunks/runtime.LvuBCE7a.js","_app/immutable/chunks/legacy.DlGRRvja.js"];
export const stylesheets = ["_app/immutable/assets/2.DWc0gDCn.css"];
export const fonts = [];
