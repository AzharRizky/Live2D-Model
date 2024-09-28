<div align="center">
<h1>Live2D Model</h1>

<p>Make your waifu come alive!</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/AzharRizky/Live2D-Model/main/LICENSE)
[![Issue](https://img.shields.io/github/issues/AzharRizky/Live2D-Model)](https://img.shields.io/github/issues/AzharRizky/Live2D-Model)
[![Forks](https://img.shields.io/github/forks/AzharRizky/Live2D-Model)](https://img.shields.io/github/forks/AzharRizky/Live2D-Model)
[![Stars](https://img.shields.io/github/stars/AzharRizky/Live2D-Model)](https://img.shields.io/github/stars/AzharRizky/Live2D-Model)

📢 Demo: [Demo Website](https://zulma.id/)

📖 Preview: [Models Preview](https://model.zulma.id/)

</div>

# Description

This is a repository containing 2D anime character models that can be used on a website using JavaScript. The author has utilized several packages and libraries to facilitate the development process, ensuring that the models can be effectively used and function well on the website.

- Supports all versions of the live2d web rendering library  
- Supports mouse interaction  
- Added support for multiple models asynchronous loading + daily constant random model (changes to a random model from a custom list each day, does not refresh during the day)  
- Support for out-of-range model detection and automatic resizing within the given range
- Mouse penetration/anti-blocking + eye-tracking support + model scaling API
- Dragging feature

# What is Live2D?

Live2D is a technology that allows the creation of 2D models that can be animated interactively. This technology is commonly used in games, applications, and digital media to create lively characters.

# Structure of a Live2D Model

A Live2D model consists of several main components:
1. Model File (.moc3): Contains data for the model and animations.
2. Texture (.png): The 2D image of the character to be animated.
3. Parameter File (.json): Stores information about how the model interacts and animates.

# How to use this?

Required Packages & Libraries:
```html
<script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js"></script>
<script src="https://cdn.jsdelivr.net/combine/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js,npm/pixi.js@6.5.2/dist/browser/pixi.min.js,npm/pixi-live2d-display/dist/index.min.js,gh/Weidows-projects/Live2dLoader/dist/Live2dLoader.min.js"></script>
```

And you can custom your model and positioning the model with native JavaScript:
```html
<script>
    addEventListener("DOMContentLoaded",function(){
        new Live2dLoader([
            {
                width: 350,
                height: 475,
                left: "-75px",
                bottom: "0px",
                role: "https://model.zulma.id/assets/models/[Anime Title/Game Title]/[Character Name]/[model name].json",
                opacity: 1,
                scale: 0.2,
                draggable: false,
            },
        ]);
    });
</script>
```

# Example

This is example of using Live2D Model:
```html
<script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js"></script>
<script src="https://cdn.jsdelivr.net/combine/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js,npm/pixi.js@6.5.2/dist/browser/pixi.min.js,npm/pixi-live2d-display/dist/index.min.js,gh/Weidows-projects/Live2dLoader/dist/Live2dLoader.min.js"></script>
<script>
    addEventListener("DOMContentLoaded",function(){
        new Live2dLoader([
            {
                width: 350,
                height: 475,
                left: "-75px",
                bottom: "0px",
                role: "https://model.zulma.id/assets/models/Saekano/kato/01.json",
                opacity: 1,
                scale: 0.2,
                draggable: false,
            }, {
                width: 500,
                height: 600,
                left: "-75px",
                bottom: "0px",
                role: "https://model.zulma.id/assets/models/SAO/asuna/asuna_01/asuna_01.model.json",
                opacity: 1,
                scale: 0.2,
                draggable: false,
            },
        ]);
    });
</script>
```

There are several options you can use, and the options is:
| Parameter              | Type          | Default       | Description                                                                 |
| ---------------------- | ------------- | ------------- | --------------------------------------------------------------------------- |
| width                  | Optional[Number]  | 800           | Width, in px                                                               |
| height                 | Optional[Number]  | 600           | Height, in px                                                              |
| top, right, bottom, left | Optional[String]  | bottom: '0px' | Distance of the model from browser edges. Use two to position (e.g., left: '0px', bottom: '0px' to position in the bottom left corner) |
| role                   | Required[String]  | ""            | Character model xxx.model.json file URL </br> [model.zulma.id](https://github.com/AzharRizky/Live2D-Model) |
| background             | Optional[String]  | ""            | Background image, can provide an external image link                       |
| opacity                | Optional[Number]  | 1             | Model opacity, value between (0,1)                                         |
| mobile                 | Optional[boolean] | false         | Whether to display on mobile devices                                       |
| scale                  | Optional[Number]  | 0.1           | Model scale, value between (0,1)                                           |
| draggable              | Optional[boolean] | false         | Whether the model can be dragged                                           |
| pierceThrough          | Optional[boolean] | true          | Enable mouse penetration                                                   |

# Structure Call

```
Live2dLoader(config)  
  -> Live2dLoader.min.js  
    -> PIXI.min.js                (canvas-app)  
    -> index.min.js               (live2d-model, cubism2 + cubism3/4)  
      -> live2dcubismcore.min.js  (cubism3/4)  
      -> live2d.min.js            (cubism2, needed for older models)  
```

# Contribution

Want to make this project better? You can contribute this project, I am very open if there are contributions to this project. You can fork and add your models to this directories <code>/assets/models/[anime title/game title]/[here]</code>.

# Library & Packages

- [PIXIJS](https://github.com/pixijs/pixijs)
- [Live2D JS](https://www.live2d.com/en/sdk/about/)
- [Pixi Live2D Display](https://github.com/guansss/pixi-live2d-display)
- [Live2DLoader](https://github.com/Weidows-projects/Live2dLoader)

---

Powered by Github Pages.
