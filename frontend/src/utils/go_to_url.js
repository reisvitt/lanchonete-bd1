export const goToUrl = (history, url, state) => {
  history.push({
    pathname: url,
    search: history.location.search,
    state,
  });
};

export const replaceToUrl = (history, url, state) => {
  history.replace({
    pathname: url,
    search: history.location.search,
    state,
  });
};
