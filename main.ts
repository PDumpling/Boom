controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(man, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
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
        `, mySprite, 0, 60)
})
let projectile: Sprite = null
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
	
})
