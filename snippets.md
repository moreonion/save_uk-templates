# Snippets

For useful widgets and beautiful styling only some additional html does the trick. Below, there are custom snippets ready-to-use in your EN template. Just copy a snippet of your choice, select "HTML" in the EN editor and paste it there. Once you've pasted the snippet you may change back to "normal" to continue editing. Save and see the magic happen!

## a word about page building in EN

In the "design" editor, make sure there are no spaces between the elements of each column. Start placing elements at the top and leave no empty fields between them, as this would cause EN to insert extra space elements or even divide the columns into several columns which could produce some really weird effects.

Also, when copying text from a word processor (e.g. Word or Pages) to an EN copy box, be careful not to copy any formatting and styling as they would override the template. Always use the "Paste as plain text" button in the EN text editor or prepare your texts in plain text format before pasting them to EN. Still, if some styling has sneaked its way into a copy box, there is a "clear formatting" button to remove them.

To show validation messages on form fields, you'll need to enable error alerts for your forms in EN.

## videos

```html
<div class="video">
  Paste the embed code from youtube, vimeo, … here
</div>
```

This makes your videos responsive, so they will always fit on the screen (even on tiny mobile screens).

## background info

```html
<a href="#background-info" class="info-toggle">More info</a>

<div id="background-info" name="background-info">
  <a class="close" aria-label="Close">&#215;</a>
  your content
</div>
```

The `info-toggle` element enables the "show more info" logic. A click on the toggle shows the target element, which has the id referenced in the toggles `href`-attribute: in this example `background-info`.

## show/hide stuff depending on screen size

If you want some elements to show up on a certain screen size only, you may add any of the following classes: "mobile-only", "desktop-only", "hide-on-mobile", "hide-on-desktop".

Let's say you want to add a copy block to desktop size screens that would be too distracting on mobile devices, then you can wrap it in a container to display on desktop only (hide-on-mobile would have the same effect):

```html
<div class="desktop-only">
  copy block that's just too much for mobile
</div>
```

## mobile link to jump to the form

Mark the position of the form with an anchor name:

```html
<a name="action"></a>
```

Then put the link button into your content:

```html
<span id="fixed-waypoint-anchor" class="mobile-only"></span>
<div id="fixed-waypoint-container" class="sticky mobile-only">
  <a href="#action" class="button">Click</a>
</div>
```

If the button should be visible in the content when scrolling down, add the class `visible` to the container:

```html
<span id="fixed-waypoint-anchor" class="mobile-only"></span>
<div id="fixed-waypoint-container" class="sticky mobile-only visible">
  <a href="#action" class="button">Click</a>
</div>
```

## footer links

This adds some footer links. Past this snippet into the template footer if you'd like to have the same footer on every page.

```html
<div id="footer">
  <ul class="menu">
    <li><a href="{{link url}}">{{link text}}</a></li>
    <li><a href="{{link url}}">{{link text}}</a></li>
  </ul>
</div>
```

Replace the `{{placeholders}}` with the real links. Please do not add more than 2-4 items, or the menu will get to big for some screen sizes.

## progress bar (thermometer)

```html
<div class="pgbar-thermometer line-after" data-target="250" data-start="0">
  <div class="t_body">
    <div class="t_level"> </div>
  </div>
  <p><span class="t_current">0</span> people have taken action already</p>
</div>
```

Feel free to replace the default copy with a text of your own! The numbers for `.t_current` and `.t_target` will be updated automatically.

To set a new target, change the value for `data-target`. Change `data-start` to add an initial value, e.g. offline supporters. If the data-attributes are missing, the default values shown above will be used instead.

Unfortunately, this is a little tricky because the EN editor keeps deleting all data-tags. To save them, you'll have to disable the editor by clicking the top left x-button.

## form text

Include this for text snippets in your form.

```html
<div class="form-text">
  Some random text.
</div>
```

## copy boxes below the form fields

Everything that comes below the actual form fields needs the class `below-form`:

```html
<div class="below-form">
  your content
</div>
```

## privacy text

Include this at the bottom of your form for the (lighter) privacy text.

```html
<div class="privacy-text below-form">
  Privacy text.
</div>
```

## form steps

If you’d like to add an image at the top of the form that spans across the whole column, e.g. to indicate the progress through the form steps, use this snippet:

```html
<div class="steps">
  Paste your image here
</div>
```

## share links

These are social share buttons for Facebook, Twitter and email sharing:

```html
<ul class="share-links">

  <li class="facebook">
    <a class="button" href="https://www.facebook.com/sharer.php?u={{urlencoded url}}" title="Share this via Facebook!" target="_blank" data-share="facebook">
      <i></i><span>Facebook</span>
    </a>
  </li>

  <li class="twitter">
    <a class="button" href="http://twitter.com/share?text={{urlencoded share text}}&amp;url={{urlencoded url}}" title="Share this via Twitter!" target="_blank" data-share="twitter">
      <i></i><span>Twitter</span>
    </a>
  </li>

  <li class="email">
    <a class="button" href="{{EN email share url}}" title="Share this via E-Mail!" target="_blank" data-share="email">
      <i></i><span>E-Mail</span>
    </a>
  </li>

</ul>
```

Make sure to replace the `{{placeholder parts}}` with the real urls and share texts! The name between `<span>name</span>` is what's displayed on the button itself, the `title` pops up when hovering over the button. (`<i></i>` makes space for the icon, which will be inserted automatically.)

## submission tracking

Place this snippet on the thank you page to track submissions (it's hidden so it doesn't matter if it is inside a wrapper or not):

```html
<input type="hidden" name="track-submission" value="1">
