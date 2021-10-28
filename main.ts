let Nathanyel = sonar.ping(
DigitalPin.P0,
DigitalPin.P1,
PingUnit.Inches
)
basic.showNumber(Nathanyel)
if (Nathanyel >= 0) {
    if (Nathanyel >= 6) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else {
        if (Nathanyel >= 12) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P15, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P14, 0)
            pins.digitalWritePin(DigitalPin.P15, 0)
        }
    }
}
basic.forever(function () {
	
})
