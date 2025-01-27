function useMyMemo(fn, dependencies) {
    let result = fn();
    let prevDependencies = dependencies;
    
    if (!dependencies.every((val, i) => val === prevDependencies[i])) {
        result = fn();
        prevDependencies = dependencies;
    }
    return result;
}