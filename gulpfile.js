const elixir = require('laravel-elixir');

require('laravel-elixir-webpack-react');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.styles([
       		'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css'
       	], './public/css/app.css')
    	.sass(['resources/assets/sass/*.scss',
    		  'resources/assets/sass/components/*.scss'])
       .webpack('index.js');
});
