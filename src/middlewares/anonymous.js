export default async function anonymous({ next }) {
  if (localStorage.getItem("token")) {
    return next({
      name: "home",
    });
  } else {
    return next();
  }
}
