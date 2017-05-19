# bartender-css
CSS task for compiling SCSS and allowing future CSS syntax via PostCSS. Allows for Vanilla CSS as well.

---

## Plugins List

- [path](https://www.npmjs.com/package/gulp-path)
- [sass](https://www.npmjs.com/package/gulp-sass)
- [sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- [postcss](https://github.com/postcss/postcss)
- [cssnext](http://cssnext.io/) - Polyfills for future CSS syntax
- [postcss-assets](https://github.com/borodean/postcss-assets) - Semi-automated asset management
- [colorguard](https://github.com/SlexAxton/css-colorguard) - Check for colors that are too similar to eachother
- [cssnano](http://cssnano.co/) - CSS minification

---

## Per-Plugin Configuration Defaults

### cssnext
#### browsers
Browserlist for cssnext is set to "last 2 versions", ">= IE 9", and ">= iOS 7". This should accurately cover all supported legacy versions of popular browsers and devices.

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
