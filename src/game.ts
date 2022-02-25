/// --- Set up a system ---

export class SimpleRotate implements ISystem {
  update() {
      const transform = zf3.getComponent(Transform)
      // mutate the rotation
      transform.rotate(Vector3.Up(), 20)
    }
}
engine.addSystem(new SimpleRotate())


let XBillboard = new Billboard(false, true ,false)

let stage = new Entity()
stage.addComponent(new GLTFShape("art/stage/scene.gltf"))
stage.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(0.5, 0.5, 0.5),
  })
)
stage.addComponent(XBillboard)
engine.addEntity(stage)

let zf3 = new Entity()
zf3.addComponent(new GLTFShape("art/zf3/scene.gltf"))
zf3.addComponent(
  new Transform({
    position: new Vector3(8, 5, 8),
    scale: new Vector3(5, 5, 5),
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