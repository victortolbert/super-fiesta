export default {
  methods: {
    parseLanguage (lang, vals) {
      for (let value in vals) {
        lang = lang.replace(new RegExp(`:${value}`, 'g'), vals[value]);
      }
      return lang;
    },
  },
};
