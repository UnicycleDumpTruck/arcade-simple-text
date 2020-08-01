//% blockNamespace=sprites color="#3B6FEA" blockGap=8
namespace imagemorph {
  //% blockId="spritemorphimage"
  //% blockId=spritemorphimage block="morph %sprite(mySprite) image to %img=screen_image_picker"
  //% weight=7 help=sprites/sprite/set-image
  export function morph(mySprite: Sprite, myImage: Image) {
    let pixels_to_change = [];
    let num_pixels = myImage.width * myImage.height
    for (let index = 0; index < num_pixels; index++) {
      pixels_to_change.push(index);
    }
    while (pixels_to_change.length > 0) {
      let random_pixel = pixels_to_change.removeAt(
        randint(0, pixels_to_change.length - 1)
      );
      let row = Math.floor(random_pixel / 16);
      let column = random_pixel % 16;
      mySprite.image.setPixel(column, row, myImage.getPixel(column, row));
      pause(0.01);
    }
  }
}
