export const setTutorialIndex = (input) => {
  ///console.log("setting tutorial action:" + input);
  return {
    type: 'tutorialIndex',
    value: input,
  };
};
export const tutorialSeen = () => {
  return {
    type: 'tutorialSeen',
    value: 1,
  };
};
