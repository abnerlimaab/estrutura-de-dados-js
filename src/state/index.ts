const state: any = [];

export const createState = <T>(initialState: T) => {
  const index = state.length;
  state[index] = initialState;

  const setState = (newState: ((state: T) => T) | T) => {
    if (typeof newState === "function") {
      // @ts-ignore
      state[index] = newState(state[index] as T);
    } else {
      state[index] = newState;
    }
  }
  const getState = () => state[index];
  return [getState, setState] as const;
};
