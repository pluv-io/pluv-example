module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["pluv-example"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
