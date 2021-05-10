const showWhenAnyOf = (routes) => (location) =>
  routes.some((route) => location.pathname === route);

const showWhenPrefix = (routes) => (location) =>
  routes.some((route) => location.pathname.startsWith(route));

const showExcept = (routes) => (location) =>
  routes.every((route) => location.pathname !== route);

export { showWhenAnyOf, showWhenPrefix, showExcept };
