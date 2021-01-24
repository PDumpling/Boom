controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    x = 0
    y = -60
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(man, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . 5 . 2 . . . . . . . . 
        . . . . . . 4 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, man, x, y)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    x = -60
    y = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    x = 60
    y = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    x = 0
    y = 60
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 500)
})
let beest: Sprite = null
let projectile: Sprite = null
let y = 0
let x = 0
let man: Sprite = null
tiles.setTilemap(tilemap`level1`)
man = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 5 5 2 . d d d . . . . . . . . 
    . . 4 2 . d d d . . . . . . . . 
    . . . 2 . d d d . . . . . . . . 
    . . . f 8 8 8 8 8 . . . . . . . 
    . . . f . 8 8 8 . . . . . . . . 
    . . . . . 8 . 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
man.setStayInScreen(true)
scene.cameraFollowSprite(man)
game.onUpdateInterval(5000, function () {
    beest = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e . . . . . . . 
        . . . . . e e f e . . . . . . . 
        . . . . . e e e e e f . . . . . 
        . . e e e e e e e e f . . . . . 
        . . e e e e e e . . . . . . . . 
        . . e e e e e e . . . . . . . . 
        . . e . e . . e . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    beest.follow(man, 40)
    beest.setPosition(randint(0, 10), randint(0, 10))
})
