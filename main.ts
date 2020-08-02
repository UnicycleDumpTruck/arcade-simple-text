//% blockNamespace=sprites color="#3B6FEA" blockGap=8
namespace imagemorph {
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
      let random_pixel = pixels_to_change.removeAt(
        randint(0, pixels_to_change.length - 1)
      );
      let y = Math.floor(random_pixel / myImage.width);
      let x = random_pixel % myImage.width;
      mySprite.image.setPixel(x, y, myImage.getPixel(x, y));
      pause(0.01);
    }
  }
}
