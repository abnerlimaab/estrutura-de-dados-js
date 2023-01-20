export const createState = <T>(initialState: T) => {
  let state = initialState;
  const setState = (newState: T) => (state = newState);
  const getState = () => state;
  return [getState, setState] as const;
};
