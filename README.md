# {{button-spark}}

A replacement for \<button\>

<http://www.ember-sparks.com/>

----

## Installation and usage

Install the Ember Sparks addon (this component is part of the standard library):
```bash
ember install ember-sparks
```

Now restart your Ember app and drop the component in there!
```handlebars
{{button-spark "Hello!"}}
```

## Properties

| Name        | Type      | Default | Description                                                      |
|-------------|-----------|---------|------------------------------------------------------------------|
| `label`     | `string`  | `null`  | The text inside the button. This can also be set as a positional param (`{{button-spark "Hello!"}}`) |
| `loading`   | `boolean` | `false` | Set this to `true` when performing an async action to show that it's waiting.  |
| `disabled`  | `boolean` | `false` | Set this to `true` to prevent the user from being able to click the button. |
| `loadingComponent` | `string` | `button-spark/loading-indicator` | The name of the component to use for the loading indicator. |


## Actions

| Name        | Description                                                                         |
|-------------|-------------------------------------------------------------------------------------|
| `onClick`   | Triggers when the user clicks the button                                             | 


## Block version

You can set an icon for your button using the block version.

```handlebars
{{#button-spark}}
  <svg></svg>
{{/button-spark}}
```


## Theming

To see these examples in action, check out the interactive documentation.

<em>**Important!** All classes are local in order to avoid naming collisions and unintended CSS side effects. To understand how to style them, check out the Ember Sparks documentation.</em>

- `.button`

  Styles the button element. 
  When it's loading, the `.loading`-class is appended to it.
  If you've set a label, the `.has-label`-class is appended to it (to distinguish it from icon-only buttons.

  **Example:**
  ```css
  .button {
    background-color: red;
  }
  ```

- `.label`

  Styles the text inside the button.

  **Example:**
  ```css
  .label {
    color: yellow;
  }
  ```
  

## Contributing

Check out the guidelines at http://ember-sparks.com/docs#contribute

