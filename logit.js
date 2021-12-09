import { i18nWord, setLanguage } from "./i18n";

const log = (...x) => {
  console.log(...x);
};

const logHooksDataProps = function (hook) {
  log(
    i18nWord(hook),
    this.$options.name.padEnd(16, " "),
    "data:",
    this.$data,
    "   props:",
    this.$props
  );
};

export default {
  install: (app, options) => {
    // Plugin code goes here
    options.language && setLanguage(options.language);

    log("------------------------");
    log("|", i18nWord("install"), "   |");
    log("------------------------");

    log("\n\n\n", "---", i18nWord("info"), "-------", "\n\n\n");

    app.mixin({
      created() {
        logHooksDataProps.call(this, "created");
      },
      mounted() {
        logHooksDataProps.call(this, "mounted");
      },
      updated() {
        logHooksDataProps.call(this, "updated");
      },
      unmounted() {
        logHooksDataProps.call(this, "unmounted");
      },
    });
  },
};
