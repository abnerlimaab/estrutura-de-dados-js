export const stateCreator = (callback?: (state: Array<any>) => void) => {
  const _state: Array<any> = [];
  const executeCallback = () => callback && callback(_state);

  const createState = <T>(initialState: T) => {
    const index = _state.length;
    _state[index] = initialState;

    
    const setState = (newState: ((state: T) => T) | T) => {
      executeCallback();
      
      if (typeof newState === "function") {
        // @ts-ignore
        _state[index] = newState(_state[index] as T);
      } else {
        _state[index] = newState;
      }
    };
    const getState = () => _state[index];

    executeCallback();
    
    return [getState, setState] as const;
  };

  return createState;
};
