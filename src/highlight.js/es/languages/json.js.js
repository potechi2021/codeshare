function emitWarning() {
    if (!emitWarning.warned) {
      emitWarning.warned = true;
      console.log(
        'Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/json" instead of "highlight.js/lib/languages/json.js"'
      );
    }
  }
  emitWarning();
    import lang from './json.js';
    export default lang;