# Angular cheatsheet



## JavaScript things

## HTML things

## CSS things

### Selectors

- `element` - Selects elements of a specific type (e.g., `div`, `p`).
- `#id` - Selects an element with a specific ID (e.g., `#myElement`).
- `.class` - Selects elements with a specific class (e.g., `.myClass`).
- `selector1, selector2` - Selects multiple elements using comma-separated selectors.
- `selector1 selector2` - Selects elements that are descendants of another element.
- `selector1 > selector2` - Selects elements that are direct children of another element.
- `selector:hover` - Selects elements when the mouse pointer is over them.

### Box Model

- `width: value;` - Specifies the width of an element.
- `height: value;` - Specifies the height of an element.
- `margin: value;` - Sets the margin around an element.
- `padding: value;` - Sets the padding inside an element.
- `border: value;` - Sets the border of an element.

### Typography

- `font-family: value;` - Specifies the font family of text.
- `font-size: value;` - Sets the size of text.
- `font-weight: value;` - Sets the weight (boldness) of text.
- `color: value;` - Sets the color of text.
- `text-align: value;` - Aligns text horizontally.
- `text-decoration: value;` - Adds decorations to text (e.g., underline, strikethrough).

### Display and Positioning

- `display: value;` - Specifies how an element is displayed (e.g., `block`, `inline`, `flex`).
- `position: value;` - Sets the positioning method of an element (e.g., `static`, `relative`, `absolute`).
- `top: value;` - Sets the top position of an absolutely positioned element.
- `left: value;` - Sets the left position of an absolutely positioned element.
- `float: value;` - Specifies how an element should float within its container.
- `clear: value;` - Specifies which sides of an element should not be adjacent to floating elements.

### Backgrounds

- `background-color: value;` - Sets the background color of an element.
- `background-image: value;` - Sets an image as the background of an element.
- `background-position: value;` - Sets the starting position of a background image.
- `background-repeat: value;` - Specifies how a background image should repeat.

### Transitions and Animations

- `transition-property: value;` - Specifies the CSS properties to which transitions should be applied.
- `transition-duration: value;` - Sets the duration of a transition effect.
- `transition-timing-function: value;` - Specifies the speed curve of a transition.
- `animation-name: value;` - Specifies the name of an animation defined using `@keyframes`.
- `animation-duration: value;` - Sets the duration of an animation.
- `animation-delay: value;` - Sets a delay before an animation starts.
- `animation-iteration-count: value;` - Specifies the number of times an animation should be played.

### Box Shadows and Borders

- `box-shadow: value;` - Adds a shadow effect to an element.
- `border-radius: value;` - Sets the radius of the corners of an element.


### Grid Layout

#### Container Properties

- `display: grid;` - Defines the element as a grid container.
- `grid-template-columns: value;` - Specifies the width of each column in the grid.
- `grid-template-rows: value;` - Specifies the height of each row in the grid.
- `grid-gap: value;` - Specifies the size of the gap between grid cells.
- `justify-items: value;` - Aligns grid items along the horizontal axis.
- `align-items: value;` - Aligns grid items along the vertical axis.

#### Item Properties

- `grid-column-start: value;` - Specifies the start position of a grid item along the horizontal axis.
- `grid-column-end: value;` - Specifies the end position of a grid item along the horizontal axis.
- `grid-row-start: value;` - Specifies the start position of a grid item along the vertical axis.
- `grid-row-end: value;` - Specifies the end position of a grid item along the vertical axis.

### Flex Layout

#### Container Properties

- `display: flex;` - Defines the element as a flex container.
- `flex-direction: value;` - Specifies the direction of flex items.
- `flex-wrap: value;` - Controls whether flex items should wrap or not.
- `justify-content: value;` - Aligns flex items along the main axis.
- `align-items: value;` - Aligns flex items along the cross axis.
- `align-content: value;` - Aligns flex lines along the cross axis when there's extra space.

#### Item Properties

- `flex-grow: value;` - Specifies the ability of a flex item to grow.
- `flex-shrink: value;` - Specifies the ability of a flex item to shrink.
- `flex-basis: value;` - Specifies the initial size of a flex item.
- `flex: value;` - Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.
- `align-self: value;` - Overrides the alignment set by the container for a specific flex item.
- `order: value;` - Controls the order in which flex items appear.

#### Flexbox Alignment Values

- `flex-start` - Aligns flex items at the start of the container.
- `flex-end` - Aligns flex items at the end of the container.
- `center` - Aligns flex items at the center of the container.
- `space-between` - Distributes flex items evenly with the first item at the start and the last item at the end.
- `space-around` - Distributes flex items evenly with equal space around them.
- `space-evenly` - Distributes flex items evenly with equal space around and between them.

#### Flexbox Direction Values

- `row` - Displays flex items horizontally in a row.
- `row-reverse` - Displays flex items horizontally in a reverse order.
- `column` - Displays flex items vertically in a column.
- `column-reverse` - Displays flex items vertically in a reverse order.

## Git things

### To download and install git
- For Windows: https://git-scm.com/download/win
- For Mac: brew install git
- For Linux: sudo apt install git
- For Linux: sudo dnf install git
- For Linux: sudo yum install git

### If you get errors about permissions
It's probably problems with your ssh key. Try this first:
```bash
eval "$(ssh-agent -s)"
ssh-add -l -E sha256
```
Here's a link: https://help.github.com/articles/error-permission-denied-publickey

## Browser things

### To see something in the browser console
1. Hit F12 in Windows or cmd-opt-i in MacOS
2. Click the hamburger menu and choose *other tools-developer tools* then choose "Console" in the tab.
3. Right-click the page, choose *Inspect* and then choose "Console" in the tab.

## To view network traffic
Just like above, get the dev tools open but then hit the "Network" tab. You'll be able to see every request and response. Clicking on a request will show you its details.

## Angular things

