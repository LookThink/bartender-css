# bartender-css
PostCSS task for using Vanilla CSS (with future functionality) in Bartender.

**If you will be using SCSS and _not_ vanilla CSS, use [bartender-scss]() instead.**

---

## Plugins List

- [postcss](https://github.com/postcss/postcss)
- [cssnext](http://cssnext.io/) - Polyfills for future CSS syntax
- [postcss-assets](https://github.com/borodean/postcss-assets) - Semi-automated asset management
- [colorguard](https://github.com/SlexAxton/css-colorguard) - Check for colors that are too similar to eachother
- [cssnano](http://cssnano.co/) - CSS minification
- [path](https://www.npmjs.com/package/gulp-path)
- [sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)

---

## Per-Plugin Configuration Defaults

### cssnext
#### browsers
Browserlist for cssnext is set to "last 2 versions" and "IE 9". While IE9 is farther back than our default contractual obligations, it doesn't hurt to include polyfills for that far back.

#### features
The following features are disabled:
- `colorHwb`
- `colorGray`
- `colorHexAlpha`
The reason behind this is they introduce new syntax to include colors that could confuse developers. May be re-added later if required but the output of these three features isn't worth the potential confusion. Just use RGB/RGBA by default.

### postcss-assets
The following load paths are included by default:
- `fonts/`
- `images/`
The main structure of LookThink projects dictates that these folders exist and most media will be in these folders. This array should be updated if additional asset folders are required for the current build.

### colorguard
Features an increased threshold of `5` (default is `3`) to help quell too many of these occuring.

### cssnano
The following features are disabled:
- `colormin`
  - Attempts to change all values (hex, hsl, rgb, keywords) to hex values. Disabled to ensure element inspection is true to what the developer intended.
- `zindex`
  - Standardizes / reformats z-index values which could result in undesirable outcomes if vendor styles are included.
