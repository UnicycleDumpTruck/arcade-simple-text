namespace imagemorph {
  function transferPixel(destinationImage: Image, originImage: Image, pixel_array: number[]) {
      let random_pixel = pixel_array.removeAt(
        randint(0, pixel_array.length - 1)
      );
      let y = Math.floor(random_pixel / originImage.width);
      let x = random_pixel % originImage.width;
      destinationImage.setPixel(x, y, originImage.getPixel(x, y));
    }

  
  //% group="Sprites"
  //% blockId="spritemorphimage"
  //% blockId=spritemorphimage block="morph %sprite(mySprite) image to %img=screen_image_picker"
  //% weight=7 help=sprites/sprite/set-image
  //% sprite.shadow="variables_get"
  //% sprite.defl="mySprite"
  export function morph(mySprite: Sprite, myImage: Image) {
    let pixels_to_change = [];
    let num_pixels = myImage.width * myImage.height;
    for (let index = 0; index < num_pixels; index++) {
      pixels_to_change.push(index);
    }
    
    while (pixels_to_change.length > 0) {
      let group_size = Math.floor(pixels_to_change.length/100) + 1
      for (let index = 0; index < group_size; index++) {
        transferPixel(mySprite.image, myImage, pixels_to_change);
      }
      pause(0.01);
    }
  }

  //% group="Screen"
  //% blockId="backgroundmorphimage"
  //% blockId=backgroundmorphimage block="morph background image to %img=background_image_picker"
  //% weight=7
  export function morphBackground(myImage: Image) {
    const scene = game.currentScene();
    let pixels_to_change = [];
    let num_pixels = myImage.width * myImage.height;
    for (let index = 0; index < num_pixels; index++) {
      pixels_to_change.push(index);
    }
    
    while (pixels_to_change.length > 0) {
      let group_size = Math.floor(pixels_to_change.length/100) + 1
      for (let index = 0; index < group_size; index++) {
        transferPixel(scene.background.image, myImage, pixels_to_change);
      }
      pause(0.01);
    }
  }

}
