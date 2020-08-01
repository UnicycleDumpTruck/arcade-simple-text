//% color=#3d8a59 block="Text Sprites"
namespace simpleText {
    //% blockId="simple_text_create_text"
    //% block="create text sprite $text with foreground $foreground background $background and kind $kind"
    //% kind.shadow=spritekind
    //% foreground.shadow=colorindexpicker
    //% foreground.defl=1
    //% background.defl=0
    //% background.shadow=colorindexpicker
    //% text.defl="hello"
    export function createTextSprite(text: string, foreground: number, background: number, kind: number): Sprite {
        const font = image.getFontForText(text);
        const textImage = image.create(font.charWidth * text.length, font.charHeight);
        if (background) textImage.fill(background);
        textImage.print(text, 0, 0, foreground, font);

        return sprites.create(textImage, kind);
    }
} 
    
namespace imagemorph {
    //% blockId="spritemorphimage"
    //% blockId=spritemorphimage block="morph %sprite(mySprite) image to %img=screen_image_picker"
    //% weight=7 help=sprites/sprite/set-image
    export function morph (mySprite: Sprite, myImage: Image) {
        pixels_to_change = []
        for (let index = 0; index <= 255; index++) {
            pixels_to_change.push(index)
        }
        while (pixels_to_change.length > 0) {
            random_pixel = pixels_to_change.removeAt(randint(0, pixels_to_change.length - 1))
            row = Math.floor(random_pixel / 16)
            column = random_pixel % 16
            mySprite.image.setPixel(column, row, myImage.getPixel(column, row))
            pause(0.01)
        }
    }
}
