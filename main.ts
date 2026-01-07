input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 4, NeoPixelMode.RGB)
