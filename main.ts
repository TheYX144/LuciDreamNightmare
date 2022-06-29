sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.confetti)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Dreamy.vy = -200
})
info.onCountdownEnd(function () {
    game.over(true)
})
let projectile: Sprite = null
let Dreamy: Sprite = null
game.splash("Welcome to lucidream,", "lucid dreaming simulator")
game.splash("You are having a lucid", "nightmare ...")
info.setScore(0)
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
Dreamy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . e e e e e e e . . . . . 
    . . . . e d d d d d e e . . . . 
    . . . . d d f 1 d f 1 d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d d d b b b b . . . . 
    . . . . b b b b b b b b b . . . 
    . . . . b b b b b b b b . . . . 
    . . . . . b b b b b b b . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let Demon = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . f f 1 1 f 1 f . . . . . . 
    . . . . f 1 1 f 1 1 . . . . . . 
    . . . . f 1 f f 1 1 . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f f f f f f f . . . . . . 
    . f f f f f f f f f f . . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f f . . . 
    f f f f f f f f f f f f f . . . 
    f f f f f f f f f f f f f . . . 
    f f f f f f f f f f f f f . . . 
    f f f f f f f f f f f f f f . . 
    `, SpriteKind.Enemy)
Dreamy.setPosition(43, 109)
Demon.setPosition(127, 105)
Dreamy.ay = 600
controller.moveSprite(Dreamy, 100, 0)
info.startCountdown(60)
game.onUpdateInterval(3000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f 1 f . . . . . . . . . . 
        . f f f 1 1 1 . . . . . . . . . 
        . f f f f f f f . . . . . . . . 
        . . . f 1 1 f f . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Demon, randint(-50, -10), randint(-2, 2))
    info.changeScoreBy(1)
})
