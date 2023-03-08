const processRoot = '/';
export function pascalCase(original) {
    const rest = original.slice(1).toLowerCase().replaceAll(/(\s+[a-z])/g, (_, char)=>char.toUpperCase().trim());
    return original.slice(0, 1).toUpperCase() + rest;
}
export function upperFirst(original) {
    return original.slice(0, 1).toUpperCase() + original.slice(1);
}
export function lowerFirst(original) {
    return original.slice(0, 1).toLowerCase() + original.slice(1);
}
export function addAdditionalProperties(target, source) {
    for(const v in source){
        if (v in target) {
            continue;
        }
        target[v] = source[v];
    }
}
export function serializeError(error, omitStack = false) {
    const tag = error.code ?? error.name ?? 'Error';
    const serialized = {
        message: `[${tag}] ${error.message}`
    };
    if (!omitStack) {
        serialized.stack = (error.stack ?? '').split('\n').slice(1).map((s)=>s.trim().replace(/^at /, '').replace(processRoot, '$ROOT'));
    }
    addAdditionalProperties(serialized, error);
    return serialized;
}
