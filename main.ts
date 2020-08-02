namespace imagemorph {
  export function transferPixel(mySprite: Sprite, myImage: Image, pixel_array: number[]) {
      let random_pixel = pixel_array.removeAt(
        randint(0, pixel_array.length - 1)
      );
      let y = Math.floor(random_pixel / myImage.width);
      let x = random_pixel % myImage.width;
      mySprite.image.setPixel(x, y, myImage.getPixel(x, y));
    }

  
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
    
    
    while (pixels_to_change.length > 100) {
      let group_size = Math.floor(pixels_to_change.length/100)
      for (let index = 0; index < 2; index++) {
        transferPixel(mySprite, myImage, pixels_to_change);
      }
      pause(0.01);
    }

    while (pixels_to_change.length > 0) {
      let random_pixel2 = pixels_to_change.removeAt(
        randint(0, pixels_to_change.length - 1)
      );
      let y2 = Math.floor(random_pixel2 / myImage.width);
      let x2 = random_pixel2 % myImage.width;
      mySprite.image.setPixel(x2, y2, myImage.getPixel(x2, y2));
      pause(0.01);
    }
  }
}
