radio.onReceivedString(function (receivedString) {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    move = receivedString
})
let move = ""
radio.setGroup(1)
basic.forever(function () {
    if (move == "F") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    }
    if (move == "B") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (move == "R") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (move == "L") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    }
    if (move == "B") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
