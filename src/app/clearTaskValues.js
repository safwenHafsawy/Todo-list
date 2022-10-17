const clearVariables = ({ currentTitle, currentDisc }) => {
  currentTitle = "";
  currentDisc = "";

  return { currentTitle, currentDisc };
};

export default clearVariables;
