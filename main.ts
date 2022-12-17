input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.playMelody("E E E - E E E - ", 120)
    music.playMelody("E G C D E - - - ", 120)
    music.playMelody("F F F F F E E E ", 120)
})
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    if (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showString("W")
    } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        basic.showString("R")
    } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        basic.showString("L")
    } else {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # # # .
        `)
    music.playMelody("E G C5 - G A G - ", 120)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . . . .
            . . # . .
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P13, 1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . # . # #
            . # . # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . . . . .
            . # # # .
            . . # . .
            `)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P14, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        basic.showLeds(`
            . . . . .
            # . . # .
            # # . # #
            # . . # .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P15, 1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P15, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        basic.showLeds(`
            . . . . .
            . # . . #
            # # . # #
            . # . . #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P13, 512)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P13, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P14, 512)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P14, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
        pins.analogWritePin(AnalogPin.P15, 355)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P15, 0)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        basic.showLeds(`
            . . . # .
            . . # # .
            . # # # .
            . . # # .
            . . . # .
            `)
        pins.analogWritePin(AnalogPin.P16, 355)
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # . # #
            . . . . .
            `)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
})
bluetooth.startIOPinService()
bluetooth.startLEDService()
basic.showString("Hello")
pins.digitalWritePin(DigitalPin.P12, 1)
