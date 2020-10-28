let random_dice = 0
let random_year = 0
let years_sum = 0
let count_BabyBoomers = 0
let count_millenial = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index <= 5; index++) {
        basic.showNumber(index)
        basic.clearScreen()
    }
    random_dice = randint(0, 6)
    basic.showNumber(random_dice)
    if (random_dice == 6 || random_dice == 3) {
        basic.showString("Win")
        music.playMelody("G B A G C5 B A B ", 120)
    } else {
        basic.showString("Lose")
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        random_year = randint(1949, 2010)
        basic.showNumber(random_year)
        if (random_year >= 1949 && random_year <= 1968) {
            basic.showString("Baby Boom")
            years_sum = years_sum + random_year
            count_BabyBoomers += 1
        } else if (random_year >= 1969 && random_year <= 1980) {
            basic.showString("X Generation")
            years_sum = years_sum + random_year
        } else if (random_year >= 1981 && random_year <= 1993) {
            basic.showString("Millenial")
            years_sum = years_sum + random_year
            count_millenial += 1
        } else if (random_year >= 1994 && random_year <= 2010) {
            basic.showString("Z Generation")
            years_sum = years_sum + random_year
        }
    }
    basic.showString("Average year of birth:")
    basic.showNumber(years_sum / 20)
    basic.showString("Total Millenial:")
    basic.showNumber(count_millenial)
    basic.showString("Total Baby Boomers:")
    basic.showNumber(count_BabyBoomers)
    basic.clearScreen()
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = 2
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
            basic.pause(200)
        }
    }
})
