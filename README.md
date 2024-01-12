# SharpImage Web Component (WIP) [[demo](https://css-sharp-image.vercel.app/)]

This project includes a (framework agnostic) custom web component, `<sharp-image>`, which is defined in `src/sharp-image.js`. This component is used to display images with a "sharpening" effect using only css.

## Usage

To use the `<sharp-image>` component, you first need to import it in your JavaScript or JSX file:

```jsx
import './sharp-image.js'
```
Then, you can use the <sharp-image> tag in your JSX or HTML code:

```html
<sharp-image src="path/to/image.jpg"></sharp-image>
```
### Attributes
The <sharp-image> component supports the following attributes:

src: The source URL of the image.
alt: The alternative text for the image.
width: The width of the image.
height: The height of the image.
maxWidth: The maximum width of the image.
maxHeight: The maximum height of the image.
title: The title of the image.

For example:

```html
<sharp-image src="path/to/image.jpg" alt="An example image" width="500" height="300"></sharp-image>
```
### Default Values
If no values are provided for the attributes, the <sharp-image> component will use the following default values:

```
src: 'default-image.jpg'
alt: 'default alt text'
width: 'auto'
height: 'auto'
maxWidth: '100%'
maxHeight: '100%'
title: ''
```

### Styling
The <sharp-image> component uses Shadow DOM, which means styles defined outside the component will not affect the component's internal styling. However, you can still style the component by defining styles inside the component itself.

### Note
This component uses a "fake" sharpening effect achieved through CSS. It does not actually modify the image data.

