export const LOCALES = ["uk"];

export const LAYOUTS = {
  mainLayout: "mainLayout",
  defaultLayout: "defaultLayout",
  mapLayout: "mapLayout",
};

export const ROLES = {
  user: "user",
  admin: "admin",
};

export const ROLES_REDIRECT = {
  [ROLES.user]: "home",
  [ROLES.admin]: "users",
};
