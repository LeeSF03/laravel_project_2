// webpack.mix.js
const mix = require("laravel-mix");
require("dotenv").config();

mix.js('resources/js/welcome.js', 'public/js').react();
mix.js('resources/js/home.js', 'public/js').react();