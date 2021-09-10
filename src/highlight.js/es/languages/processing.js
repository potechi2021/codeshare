/**
 * @param {string} value
 * @returns {RegExp}
 * */

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function source(re) {
  if (!re) return null;
  if (typeof re === "string") return re;

  return re.source;
}

/**
 * @param {RegExp | string } re
 * @returns {string}
 */
function lookahead(re) {
  return concat('(?=', re, ')');
}

/**
 * @param {...(RegExp | string) } args
 * @returns {string}
 */
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}

function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];

  if (typeof opts === 'object' && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}

/**
 * Any of the passed expresssions may match
 *
 * Creates a huge this | this | that | that match
 * @param {(RegExp | string)[] } args
 * @returns {string}
 */
function either(...args) {
  const opts = stripOptionsFromArgs(args);
  const joined = '(' +
    (opts.capture ? "" : "?:") +
    args.map((x) => source(x)).join("|") + ")";
  return joined;
}

/*
Language: Processing
Description: Processing is a flexible software sketchbook and a language for learning how to code within the context of the visual arts.
Author: Erik Paluka <erik.paluka@gmail.com>
Website: https://processing.org
Category: graphics
*/

function processing(hljs) {
  const BUILT_INS = [
    "displayHeight",
    "displayWidth",
    "mouseY",
    "mouseX",
    "mousePressed",
    "pmouseX",
    "pmouseY",
    "key",
    "keyCode",
    "pixels",
    "focused",
    "frameCount",
    "frameRate",
    "height",
    "width",
    "size",
    "createGraphics",
    "beginDraw",
    "createShape",
    "loadShape",
    "PShape",
    "arc",
    "ellipse",
    "line",
    "point",
    "quad",
    "rect",
    "triangle",
    "bezier",
    "bezierDetail",
    "bezierPoint",
    "bezierTangent",
    "curve",
    "curveDetail",
    "curvePoint",
    "curveTangent",
    "curveTightness",
    "shape",
    "shapeMode",
    "beginContour",
    "beginShape",
    "bezierVertex",
    "curveVertex",
    "endContour",
    "endShape",
    "quadraticVertex",
    "vertex",
    "ellipseMode",
    "noSmooth",
    "rectMode",
    "smooth",
    "strokeCap",
    "strokeJoin",
    "strokeWeight",
    "mouseClicked",
    "mouseDragged",
    "mouseMoved",
    "mousePressed",
    "mouseReleased",
    "mouseWheel",
    "keyPressed",
    "keyPressedkeyReleased",
    "keyTyped",
    "print",
    "println",
    "save",
    "saveFrame",
    "day",
    "hour",
    "millis",
    "minute",
    "month",
    "second",
    "year",
    "background",
    "clear",
    "colorMode",
    "fill",
    "noFill",
    "noStroke",
    "stroke",
    "alpha",
    "blue",
    "brightness",
    "color",
    "green",
    "hue",
    "lerpColor",
    "red",
    "saturation",
    "modelX",
    "modelY",
    "modelZ",
    "screenX",
    "screenY",
    "screenZ",
    "ambient",
    "emissive",
    "shininess",
    "specular",
    "add",
    "createImage",
    "beginCamera",
    "camera",
    "endCamera",
    "frustum",
    "ortho",
    "perspective",
    "printCamera",
    "printProjection",
    "cursor",
    "frameRate",
    "noCursor",
    "exit",
    "loop",
    "noLoop",
    "popStyle",
    "pushStyle",
    "redraw",
    "binary",
    "boolean",
    "byte",
    "char",
    "float",
    "hex",
    "int",
    "str",
    "unbinary",
    "unhex",
    "join",
    "match",
    "matchAll",
    "nf",
    "nfc",
    "nfp",
    "nfs",
    "split",
    "splitTokens",
    "trim",
    "append",
    "arrayCopy",
    "concat",
    "expand",
    "reverse",
    "shorten",
    "sort",
    "splice",
    "subset",
    "box",
    "sphere",
    "sphereDetail",
    "createInput",
    "createReader",
    "loadBytes",
    "loadJSONArray",
    "loadJSONObject",
    "loadStrings",
    "loadTable",
    "loadXML",
    "open",
    "parseXML",
    "saveTable",
    "selectFolder",
    "selectInput",
    "beginRaw",
    "beginRecord",
    "createOutput",
    "createWriter",
    "endRaw",
    "endRecord",
    "PrintWritersaveBytes",
    "saveJSONArray",
    "saveJSONObject",
    "saveStream",
    "saveStrings",
    "saveXML",
    "selectOutput",
    "popMatrix",
    "printMatrix",
    "pushMatrix",
    "resetMatrix",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "shearX",
    "shearY",
    "translate",
    "ambientLight",
    "directionalLight",
    "lightFalloff",
    "lights",
    "lightSpecular",
    "noLights",
    "normal",
    "pointLight",
    "spotLight",
    "image",
    "imageMode",
    "loadImage",
    "noTint",
    "requestImage",
    "tint",
    "texture",
    "textureMode",
    "textureWrap",
    "blend",
    "copy",
    "filter",
    "get",
    "loadPixels",
    "set",
    "updatePixels",
    "blendMode",
    "loadShader",
    "PShaderresetShader",
    "shader",
    "createFont",
    "loadFont",
    "text",
    "textFont",
    "textAlign",
    "textLeading",
    "textMode",
    "textSize",
    "textWidth",
    "textAscent",
    "textDescent",
    "abs",
    "ceil",
    "constrain",
    "dist",
    "exp",
    "floor",
    "lerp",
    "log",
    "mag",
    "map",
    "max",
    "min",
    "norm",
    "pow",
    "round",
    "sq",
    "sqrt",
    "acos",
    "asin",
    "atan",
    "atan2",
    "cos",
    "degrees",
    "radians",
    "sin",
    "tan",
    "noise",
    "noiseDetail",
    "noiseSeed",
    "random",
    "randomGaussian",
    "randomSeed"
  ];
  const IDENT = hljs.IDENT_RE;
  const FUNC_NAME = {
    variants: [
      {
        match: concat(either(...BUILT_INS), lookahead(/\s*\(/)),
        className: "built_in"
      },
      {
        relevance: 0,
        match: concat(
          /\b(?!for|if|while)/,
          IDENT, lookahead(/\s*\(/)),
        className: "title.function"
      }
    ]
  };
  const NEW_CLASS = {
    match: [
      /new\s+/,
      IDENT
    ],
    className: {
      1: "keyword",
      2: "class.title"
    }
  };
  const PROPERTY = {
    relevance: 0,
    match: [
      /\./,
      IDENT
    ],
    className: {
      2: "property"
    }
  };
  const CLASS = {
    variants: [
      {
        match: [
          /class/,
          /\s+/,
          IDENT,
          /\s+/,
          /extends/,
          /\s+/,
          IDENT
        ]
      },
      {
        match: [
          /class/,
          /\s+/,
          IDENT
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.class",
      5: "keyword",
      7: "title.class.inherited"
    }
  };

  const TYPES = [
    "boolean",
    "byte",
    "char",
    "color",
    "double",
    "float",
    "int",
    "long",
    "short",
  ];
  const CLASSES = [
    "BufferedReader",
    "PVector",
    "PFont",
    "PImage",
    "PGraphics",
    "HashMap",
    "String",
    "Array",
    "FloatDict",
    "ArrayList",
    "FloatList",
    "IntDict",
    "IntList",
    "JSONArray",
    "JSONObject",
    "Object",
    "StringDict",
    "StringList",
    "Table",
    "TableRow",
    "XML"
  ];
  const JAVA_KEYWORDS = [
    "abstract",
    "assert",
    "break",
    "case",
    "catch",
    "const",
    "continue",
    "default",
    "else",
    "enum",
    "final",
    "finally",
    "for",
    "if",
    "import",
    "instanceof",
    "long",
    "native",
    "new",
    "package",
    "private",
    "private",
    "protected",
    "protected",
    "public",
    "public",
    "return",
    "static",
    "strictfp",
    "switch",
    "synchronized",
    "throw",
    "throws",
    "transient",
    "try",
    "void",
    "volatile",
    "while"
  ];

  return {
    name: 'Processing',
    aliases: [ 'pde' ],
    keywords: {
      keyword: [
        ...JAVA_KEYWORDS
      ],
      literal: 'P2D P3D HALF_PI PI QUARTER_PI TAU TWO_PI null true false',
      title: 'setup draw',
      variable: "super this",
      built_in: [
        ...BUILT_INS,
        ...CLASSES
      ],
      type: TYPES
    },
    contains: [
      CLASS,
      NEW_CLASS,
      FUNC_NAME,
      PROPERTY,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
}

export default processing;
