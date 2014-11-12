<h2>Dependencies</h2>

<p>Themes are written using Sass to keep things modular and reduce the need for repeated selectors across files. Make sure that you have the reveal.js development environment including the Grunt dependencies installed before proceding: https://github.com/hakimel/reveal.js#full-setup</p>

<p>You also need to install Ruby and then Sass (with <code>gem install sass</code>).</p>

<h2>Creating a Theme</h2>

<p>To create your own theme, start by duplicating any <code>.scss</code> file in <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/source">/css/theme/source</a> and adding it to the compilation list in the <a href="https://github.com/hakimel/reveal.js/blob/master/Gruntfile.js">Gruntfile</a>.</p>

<p>Each theme file does four things in the following order:</p>

<ol>
<li><p><strong>Include <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/template/mixins.scss">/css/theme/template/mixins.scss</a></strong>
Shared utility functions.</p></li>
<li><p><strong>Include <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/template/settings.scss">/css/theme/template/settings.scss</a></strong>
Declares a set of custom variables that the template file (step 4) expects. Can be overridden in step 3.</p></li>
<li><p><strong>Override</strong>
This is where you override the default theme. Either by specifying variables (see <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/template/settings.scss">settings.scss</a> for reference) or by adding full selectors with hardcoded styles.</p></li>
<li><p><strong>Include <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/template/theme.scss">/css/theme/template/theme.scss</a></strong>
The template theme file which will generate final CSS output based on the currently defined variables.</p></li>
</ol>

<p>When you are done, run <code>grunt themes</code> to compile the Sass file to CSS and you are ready to use your new theme.</p>
