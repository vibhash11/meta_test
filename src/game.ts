/// --- Set up a system ---

export class SimpleRotate implements ISystem {
  update() {
      const transform = zf3.getComponent(Transform)
      // mutate the rotation
      transform.rotate(Vector3.Up(), 10)
    }
}
engine.addSystem(new SimpleRotate())

let XBillboard = new Billboard(false, true ,false)

let canvas = new UICanvas()

function spawnText(x: string) {
	const message = new UIText(canvas)
	message.value = x
	message.fontSize = 15
	message.width = 120
	message.height = 30
	message.vAlign = "bottom"
	message.positionX = -80
	return canvas
}

let stage = new Entity()
stage.addComponent(new GLTFShape("art/stage/scene.gltf"))
stage.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(0.5, 0.5, 0.5),
  })
)
stage.addComponent(XBillboard)
stage.addComponent(
  new OnClick(() => {
    openExternalURL("https://www.samsung.com/in/smartphones/galaxy-z-flip3-5g/buy/")
  })
)
engine.addEntity(stage)

let zf3 = new Entity()
zf3.addComponent(new GLTFShape("art/zf3/scene.gltf"))
zf3.addComponent(
  new Transform({
    position: new Vector3(8, 5, 8),
    scale: new Vector3(5, 5, 5),
  })
)
zf3.addComponent(
  new OnPointerDown(() => {
	canvas = spawnText("This is Samsung Galaxy Z Flip3.")
  })
)
engine.addEntity(zf3)

let floor = new Entity()
floor.addComponent(new GLTFShape("art/floor/FloorBasePebbles_01.glb"))
floor.addComponent(
  new Transform({
    position: new Vector3(8,0,8),
    scale: new Vector3(1, 1, 1),
  })
)
engine.addEntity(floor)