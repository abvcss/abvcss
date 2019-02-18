<p align="center"><a href="https://abvcss.github.io/abvcss-website/" target="_blank" rel="nofollow noopener noreferrer"><img src="https://abvcss.github.io/abvcss-website/dist/img/abvCSS-logo-black.png" alt="abvCSS"></a></p>

# abvCSS

abvCSS is a **CSS-methodology** and **framework** for creating modern, dynamic and supported web interfaces. Thanks to the architecture and rules the development process is accelerated. This methodology makes it easy to re-use styles.

Framework abvCSS out of the box supports CSS preprocessors like Sass and Less, postprocessor PostCSS, normalize.css and UI libraries Bootstrap, Foundation and Bulma.

### [Visit our website](https://abvcss.github.io/abvcss-website/)

## CSS-methodology abvCSS            

### Project architecture      

According to abvCSS methodology, all styles are divided into 4 categories:

1. Base.
2. Layout.
3. Blocks.
4. Skins.

**Base** - base styles. In this category you should use tag selectors and attribute selectors like this: 
            
```css
body {
    font-family: Arial;
    background-color: #fff;  
    color: #0e0e0e;
}
    
a {
    color: #1894c4;
}

a:hover {
    color: #df2e30;
}
```

> You do not need to use **!important** modifier or other selectors in base styles.
>
> It is good to use popular library [normalize.css] in this category.

**Layout** - layout styles. This type of styles should be applied to the structural blocks that are used on the page once. It is header, footer, menu, sidebar etc.

![layout](https://abvcss.github.io/abvcss-website/dist/img/layout.png)

In this way, you should use **id selectors**. Typical example of layout styles:

```css
#container {
  display: grid;
  grid-template-columns: auto 900px 99px auto;
  grid-template-rows: 200px auto auto 200px;
  grid-template-areas:
    "header header header header"
    " . menu menu . "
    " . content sidebar . "
    "footer footer footer footer";
}

#header {
  grid-area: header;
}

#content {
  grid-area: content
}
```

id selectors can be used as nested or child selectors like this:

```css
.tablet #content {
  display: block;
  padding: 10px 20px; 
}

@media screen and (max-width: 375px) {
  #content {
    display: block;
    padding: 5px 15px;
  }
}
```

**Blocks** - styles of reusable blocks. Usually they are buttons, paragraphs, titles, galleries etc. To design that elements you need to use **class** selectors.

**abvCSS** blocks are fully consistent with blocks of **[BEM methodology](https://en.bem.info/methodology/)**. To learn BEM blocks visit **[this page](https://en.bem.info/methodology/key-concepts/#block)**.

In this way, you should follow the next rules:

```block-name__elem-name_mod-name_mod-val```
            
1. Names are written in lowercase Latin letters.
2. Words are separated by a hyphen (-).
3. The block name defines the namespace for its elements and modifiers.
4. The element name is separated from the block name by a double underscore (__).
5. The modifier name is separated from the block or element name by a single underscore (_).
6. The modifier value is separated from the modifier name by a single underscore (_).
7. For boolean modifiers, the value is not included in the name.

> Elements of elements do not exist in the BEM and abvCSS methodologies. The naming rules do not allow creating elements of elements, but you can nest elements inside each other in the DOM tree.

```css
.header {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  max-width: 900px;
  margin: 0 auto;
}

.header__logo {
  display: inline-block;  
  height: 100px;
  width: 400px;
}

.header__github {  
  float: right;
  margin-top: 40px;
  margin-right: 15px;
  color: #fff;
}

.header__github_dark {
  color: #0e0e0e;
}
```

Unlike BEM, it is fine for abvCSS to separate appearance styles in other class.

**Skins** - skinning styles. Skins are styles that describe appearance of the elements. This styles include text color, background color, shadow, rounded corners, decoration style etc.

![skins](https://abvcss.github.io/abvcss-website/dist/img/skins.png)

For example, you can notice common decoration of blocks on the picture above: black text color, grey background, grey borders and shadow. It is effective to add that styles to Skin class.

To recognize Skin classes and Blocks classes, all Skin classes begin with a **capital letter**.

```css
.Grey-skin {
  color: #0e0e0e;
  background-color: #eee;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 3px #ddd;
  border-radius: 4px;
}

.Dark-skin {
  color: #fff;
  background-color: #0e0e0e;
  border: 1px solid #999;
  border-radius: 4px;
}
```

Due to Skin classes, CSS code is reduced, you can also dinamically change design theme of the page.

### DOM classes rules

According to abvCSS, DOM classes should match this formula:

```[Skin_class_1 [Skin_class_2 […]]] [block_class_1 [block_class_2]] [element_class] [modifier_class_1 [modifier_class_2 […]]]```
            
You need to follow the next rules:
                
1. There are Skin classes from the beginning (with a capital letter).
2. Then it is Block class (or two classes for the **[Mix](https://en.bem.info/methodology/key-concepts/#mix)**) or Element class.
3. Finally, there are some Modifier classes.

It is typical div block of abvCSS methodology:

```html
<div class="Adaptive Dark-skin list list_big">
  ...
</div>
```

## Framework abvCSS

While installing abvCSS framework it is creating directories and files for abvCSS methodology.

Additionally, you can choose your favorite css preprocessor - **[Sass](https://sass-scss.ru/guide/)** or **[Less](http://lesscss.org)**.

You will also be able to add **[normalize.css]**.

Framework abvCSS supports UI libraries like **[Bootstrap](https://getbootstrap.com/)**, **[Foundation](https://foundation.zurb.com)** or **[Bulma](https://bulma.io)**.

To transform styles we use **[PostCSS](https://github.com/postcss/postcss)** with plugins **[postcss-preset-env](https://github.com/jonathantneal/postcss-preset-env)**, **[rucksack-css](https://www.rucksackcss.org)**, **[cssnano](https://cssnano.co)** and **[css-mqpacker](https://github.com/hail2u/node-css-mqpacker)**.

**[Webpack](https://webpack.js.org)** bundles all this resources.

### Installing

For installing abvCSS framework you must have **[Node.js](https://nodejs.org/)** platform.

Install **[Yeoman](https://yeoman.io)**:

```
npm install -g yo
```

Install generator abvcss:

```
npm install -g generator-abvcss
```

In empty folder launch abvCSS installing:

```
yo abvcss
```

Then you should answer some questions about configuration.

After this, there will be a project with the following structure:

```
project
├── index.html
├── LICENSE
├── package.json
├── README.md
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── abvcss
    ├── 1-base
    ├── 2-layout
    ├── 3-blocks
    ├── 4-skins
    ├── _placeholder-classes.sass
    ├── _settings.sass
    └── style.sass
```

You can bundle the project in two modes.

Development mode:

```
npm run build:dev
```

Production mode:

```
npm run build:prod
```

After bundling visit **dist** folder and find **main.css** file. You can attach this file to a web page.
 
All sources are located in **1-base**, **2-layout**, **3-blocks**, **4-skins** directories. Module **settings** includes preprocessor variables and other settings.

## abvCSS + React

React - one of the most popular frameworks for creating dynamic user interfaces. It is fully compatible with the abvCSS framework.

This bundle allows you to use the most advanced frontend technologies for today.

If you use such a **cssinjs** framework as **[styled-components](https://www.styled-components.com)**, you probably will not need to write Blocks styles.

To install abvCSS + React starter, follow these steps:

Install **[Yeoman](https://yeoman.io)** (if you have not already done so):

```
npm install -g yo
```

Install generator abvcss+react:

```
npm install -g generator-abvcss-react
```

In empty folder launch abvcss+react installing:

```
yo abvcss-react
```

Then you should answer some questions about configuration.

After this, there will be a project with the following structure:

```
project
├── index.html
├── LICENSE
├── .babelrc
├── package.json
├── README.md
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
├── src
│   └── index.jsx
└── abvcss
    ├── 1-base
    ├── 2-layout
    ├── 3-blocks
    ├── 4-skins
    ├── _placeholder-classes.sass
    ├── _settings.sass
    └── style.sass
```

You can bundle the project in two modes.

Development mode:

```
npm run build:dev
```

Production mode:

```
npm run build:prod
```

After bundling visit **dist** folder and find **main.css** and **main.js** files. You can attach this files to a web page.

[normalize.css]: https://github.com/necolas/normalize.css