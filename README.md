# lizFramework

Liz is a beatiful flower, symbol of the north or the destiny of the sailors in the past.

## a little more...

Liz Framework is different from others css frameworks, why? Its ideia is totaly different! Here I do not want (yet) to do and new bootstrap or a new materialize, when I started I just wanted something colorful and a grid with more columns for a more detailed work, here we use a 16 columns grid based in flexbox, but also allow a grid system based in grid too!
We are a mobile first based framework!

## How to use this framework

In the moment you open the css folder, you will see more two folders, the generals, where are all the files separeted and not minified and the min, where thare is just one file minified, let have attention in the generals only, there is where we will find what is important to us.

### grid.css

The file grid.css is where you will find the grid system, as I said based in 16 columns, but how to use it?

1. Use the class _row-flex_ in the parent tag, this is the same of _row_ in others frameworks, but here we define what kind of row we want, if you want to use a grid based row, so use _row-grid_
2. Now define how many columns you want each tag use, for that, just use flex-1, flex-2, flex-3 ... flex-15, flex-16.
Our **breakpoints** are _sm_ starting in 508px, _md_ starting in 758px, _lg_ starting in 992px and _xlg_ starting in 1252px, and for diferents screens, you will just to add these letters before the number of coluns, ex: _flex-xlg-5 flex-md-8 flex-16_ easy, right?

#### What more in grid.css?

The offset class is also avaiable and works in the same way of the offset in bootstrap (with the difference of here are 16 columns and not 12), ex: _offset-5 offset-md-2 offset-xlg-1_

What else? Here go a list with the other classes avaiable


|   Class | Explanation             |
|---------|-------------------------|
|   .flex | use display flex propert|
|   .grid | use display grid propert|
|  .block |use display block propert|
|.direction-column| use display: flex and flex-direction: column |
|.direction-column-reverse| use display: flex and flex-direction: column-reverse|
|.direction-row | use display flex: and flex-direction: row|
|.direction-row-reverse|use display: flex and flex-direction: row-reverse|
|.flex-no-wrap| use display: flex and flex-wrap: no-wrap |
|.flex-wrap-reverse|use display: flex and flex-wrap: wrap-reverse|
|.row-grid | use display: grid (and grid-gap: 30px)|
|.justify-around | use justify: space-around|
|.justify-evenly | use justify: space-evenly|
|.justify-between| use justify: space-between|
|.justify-start | use justify: start |
|.justify-center| use justify: center|
|.justify-end | use justify: end |
|.align-around | use align: space-around|
|.align-evenly | use align: space-evenly|
|.align-between| use align: space-between|
|.align-start | use align: start |
|.align-center| use align: center|
|.align-end | use align: end |
|._around | use justify: space-around and align: space-around|
|._evenly | use justify: space-evenly and align: space-evenly|
|._between| use jsutify: space-between and align: space-between|
|._start | use justify: start  and align: start|
|._center| use justify: center and align: center|
|._end | use justify: end and align: end|

_What else?_

*_We also have more classes!_* the align and jusitfy classes doesn't have a display: ... propert, but if you want to use a display with tham, you will just need to write it after the entire name, this way, ex: _center-grid, _between-flex, (this only works with the classes beginning with a underscore _, if you want to display flex or grid in a tag with the class align-evenly, for exemple, you will need to use flex align-evenly, or grid justify-center) and so on! I hope you enjoy using these classes!

### colors.css and color-variables.css

Both files are about colors and there are the same colors in them, but each of them have a different use! 
I'll begin by the color-variables.css, it has, well as the same says variables for colors! Many people don't know that is possible to declare variables in pure css, but we can! And you will can use these variables in you own code, even if they are in different files, the only requirement is to link the liz framework before your stylesheet! Nice, right?

Now in the colors.css we have these same colors, but in classes for background and the color of the font, the sintax to use a color as bg is **bg-color-name**, the very same name is used for the variables, the background and the text color! The sintax for change the text color is just to write the color name, ex:
class="**fire**", it makes the text have the color with the class="fire", or class="bg-sky" make the background in the sky color.

For using a variable, in your stylesheet, you can use something like this: background-image: linear-gradient(**var(--fire)**, **var(--sky)**); (of course, this is just a example and you can use the colors in any property you want), now i'll display all the color names, but I won't be wrinting specific for bg, text color and variables, because they have the same same, just follow the sintax I said, here them go:

|color name | html code | color name | html code|
|-----------|------------------|-----|----------|
|blue| blue|sky| #81c8d8|
|summer-sky| #38b0de|indigo| #4b0082|
|azure| #0080ff|artic| #c6e6fb|
|lapis| #261b9c|admiral| #2c3863|
|saphire| #082567|green| green|
|shamrock| #009e60|lime| #bfff00|
|seafoam| rgb(113, 238)|forest| #0b6623|
|emerald| #019875|yellow| yellow|
|amber| #ffbf00|canary| #ffef00|
|gold| #f9a602|fire| #fda50f|
|honey| #eb9605|orange| orange|
|tangerine| #f28500|tiger| #fd6a02|
|carrot| #ed9121|sandstone| #d7902c|
|brown| brown|clay| #734222|
|spice| #793802|rust| #8b4000|
|ginger| #b06500|red| red|
|cherry| #790604|scarlet| #ff2400|
|ruby| #9b111e|pink| pink|
|fuchsia| #ff00ff|magenta| #ff0090|
|flamingo| #fca3b7|rose| #ff66cc|
|purple| purple|lilac| #AA7ED6|
|amethyst| #9966cc|biscay| #1b486b|
|eucalyptus| #28a352|conifer| #b2db34|
|fuel-yellow| #f2ac34|crusta| #fc7634|
|imperial-purple| #541d61|wild-aster| #8f3066|
|popstar| #c05166|roasted-sienna| #e88666|
|spiced-nectarine| #fcb76f|ebony-clay| #1f242e|
|royal-blue| #5269e0|picton-blue| #4799eb|
|eastern-blue| #14aab8|chardonnay| #ffc980|
|legion-blue| #1f4e5a|spectra-green| #029c8e|
|golden-nectar| #ffdb69|echinoida-torns| #ffa658|
|teri-gaki-persimmon| #ea5f40|bracing-blue| #004682|
|spanish-blue| #0370b7|tomb-blue| #0295ce|
|exquisite-turquoise| #07d1bf|thallium-flame| #60f4a0|

### generals.css

In the generals file, we will find many classes, very very simple, but useful for who don't want to go to atylesheet for making a class for each simple thing, here go a list of classes in this file

| Class name | Explanation | 
|------------|-------------|
|.absolute   | position: absolute|
|.relative   | position: relative|
|.fixed      | position: fixed|
|.static     | position: static|
|.hide-none  | display:none visibility: hidden| 
|.show       | visibility: visible|
|.hide       | visibility: hidden|
|.show-block | visibility: visible display: block|
|.show-flex  | visibility: visible display: flex|
|.show-grid  | visibility: visible display: grid|
|.transition-02 | transition-duration: 0.2s |
|.transition-05 | transition-duration: 0.5s |
|.transition-07 | transition-duration: 0.7s |
|.transition-1  | transition-duration: 1s   |
|.transition-15 | transition-duration: 1.5s |
|.ease          | transition-timing-function: ease|
|.out           | transition-timing-function: out|
|.ease-out      | transition-timing-function: ease-out|
|.ease-in       | transition-timing-function: ease-in|
|.ease-in-out   | transition-timing-function: ease-in-out|
|.linear        | transition-timing-function: linear|
|.float-left | float: left|
|.float-right| float: right|
|.clear      | clear: both|
|.clear-left | clear: left|
|.clear-right| clear: right|
|.bold       | font-weight: bold|
|.font-w-100   | font-weight: 100|
|.font-w-200   | font-weight: 200|
|.font-w-300   | font-weight: 300|
|.font-w-400   | font-weight: 400|
|.font-w-500   | font-weight: 500|
|.font-w-600   | font-weight: 600|
|.font-w-700   | font-weight: 700|
|.font-w-800   | font-weight: 800|
|.font-w-900   | font-weight: 900|
|.font-w-1000  | font-weight:1000|
|.center       | text-align: center|
|.left         | text-align: left  |
|.justify      | text-align:justify|
|.right        | text-align: right |
|.font-normal   | font-size: 1em |
|.font-md       | font-size:1.5em|
|.font-lg       | font-size: 2em |
|.font-xlg      | font-size: 3em |
|.title-1       | font-size: 2em font-family: serif text-transform: capitalize |
|.title-2       | font-size: 1.5em font-family: serif text-transform: capitalize|
|.size-full     | width: 100% height: auto |
|.size-half     | width: 50% height: auto  |
|.rounded-border| border-radius: 5px       |
|.circle  | border-radius: 50%       |
|.link          | text-decoration: none &:hover transistion-duration: 0.2s &:click color: inherit &:visited color: inherit  |
|.button     | border-radius: 5px padding: 10px 20px transistion-duration: 0.2s |

That's it!

### margins.css

This file have some classes usefull when you do not want to make a margin and padding all the time in the tags
this files carries paddings and mangins classes, easy to use, ex: class="pad-top-10 margin-left-50" this will make a padding-top: 10px and a margin-left: 50px, you can use padding in all directions with the sintax: pad-top-... pad-left-...  pad-bottom-... pad-right-..., use margin in any direction with the sintax margin-top-... margin-left-... margin-right-... margin-bottom-..., all you need to do is change the "..." by a number, you can use 10, 20, 30, 40, 50, 60, 70, 80, 90 and 100, _attention_ using numbers not in the list like pad-top-55 or margin-bottom-22 will make nothing, because there aren't these classes!

_What else?_

We also have classes for all the directions, to do it, the sintax is pad-... and margin-... for example class="pad-50 margin-10" will make a padding: 50px and margin: 10px, that easy

##### Using breakpoints in margin and paddings

Yep! You are allowed to use breakpoins in these classes! How? Just as in grid system! Here, take a look
```
<div class="pad-top-lg-100 pad-top-md-50 pad-top-xlg-10"> ... </div>
```
with the sm, md, lg and xlg you will be able to specify in what screen size to use certain margin and padding, in all the directions, top, left, right and bottom, here, another example: class="pad-50 pad-md-10 margin-top-lg-20" this will make a padding: 50px, padding: 10px in medium sized devices (bigger than 758px), margin-top: 20px only in desktop (bigger than 992px)

See how liz framework make everything easier?

### forms.css

While in development, untill now there are two classes here

.form and .iTxt I intent to make a class for all the input types

form class have  width: 100%; height: auto; border-radius: 5px; this class is for making a group of forms

The iTxt class have the very same properties, and is used in <input type="text">

### other.css

Liz framework is not finish, neither close!
