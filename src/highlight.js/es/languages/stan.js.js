function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/stan" instead of "highlight.js/lib/languages/stan.js"'
      );
    }
  }
  emitWarning();
    import lang from './stan.js';
    export default lang;