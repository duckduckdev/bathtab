// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import * as PIXI from 'pixi.js';

// ReactDOM.render(<App />, document.getElementById('root'));
let app = new PIXI.Application({
  width: 256,
  height: 256,
  transparent: true,
});

document.body.appendChild(app.view);

app.renderer.view.style.position = 'absolute';
app.renderer.view.style.display = 'block';
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);

// app.loader
//   .add('bunny', 'https://pixijs.io/examples/examples/assets/bunny.png')
//   .load(startup);

// function startup() {
//   var bunny = new PIXI.Sprite(app.loader.resources.bunny.texture);

//   // Center the sprite's anchor point
//   bunny.anchor.set(0.5);

//   // Move the sprite to the center of the screen
//   bunny.x = app.renderer.width / 2;
//   bunny.y = app.renderer.height / 2;

//   app.stage.addChild(bunny);

// Listen for animate update
//   app.ticker.add(function(delta) {
// Rotate mr rabbit clockwise
// bunny.rotation += 0.2 * delta;
//   });
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// create a texture from an image path
// const texture = PIXI.Texture.from(
//   'http://cors.io/?https://banner2.kisspng.com/20180528/cgq/kisspng-pikachu-pixel-art-5b0b99c86f75d2.1175415815274869204566.jpg'
// );

const texture = PIXI.Texture.from(
  'http://pixelartmaker.com/art/0fe4e7fd9d072e2.png'
);

// Scale mode for pixelation
texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

// for (let i = 0; i < 10; i++) {
//   createBunny(
//     Math.floor(Math.random() * app.screen.width),
//     Math.floor(Math.random() * app.screen.height)
//   );
// }

createBunny(
  Math.floor(Math.random() * app.screen.width),
  Math.floor(Math.random() * app.screen.height)
);

function createBunny(x, y) {
  // create our little bunny friend..
  const bunny = new PIXI.Sprite(texture);

  // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
  bunny.interactive = true;

  // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
  bunny.buttonMode = true;

  // center the bunny's anchor point
  bunny.anchor.set(0.5);

  // make it a bit bigger, so it's easier to grab
  bunny.scale.set(0.1);

  // setup events for mouse + touch using
  // the pointer events
  bunny
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove);

  // For mouse-only events
  // .on('mousedown', onDragStart)
  // .on('mouseup', onDragEnd)
  // .on('mouseupoutside', onDragEnd)
  // .on('mousemove', onDragMove);

  // For touch-only events
  // .on('touchstart', onDragStart)
  // .on('touchend', onDragEnd)
  // .on('touchendoutside', onDragEnd)
  // .on('touchmove', onDragMove);

  // move the sprite to its designated position
  bunny.x = x;
  bunny.y = y;

  // add it to the stage
  app.stage.addChild(bunny);
}

function onDragStart(event) {
  // store a reference to the data
  // the reason for this is because of multitouch
  // we want to track the movement of this particular touch
  this.data = event.data;
  this.alpha = 0.5;
  this.dragging = true;
}

function onDragEnd() {
  this.alpha = 1;
  this.dragging = false;
  // set the interaction data to null
  this.data = null;
}

function onDragMove() {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }
}

serviceWorker.unregister();
