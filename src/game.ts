import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../1f1dfb04-879e-422f-a8da-44852a421199/src/item"
import Script2 from "../38f933f4-fe86-45fe-921a-e6824406cbe0/src/item"
import Script3 from "../1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"
import Script4 from "../ed36149f-76c5-45c4-a678-d4b31c4ed9ca/src/item"
import Script5 from "../e446447f-aede-431a-92b7-b55c49223ce6/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("78300a73-f19a-4e91-bb8a-08a641e29706/FloorBaseWood_01/FloorBaseWood_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(30.5, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(14.999999046325684, 1, 0.9999994039535522)
})
concreteWall.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
concreteWall.addComponentOrReplace(gltfShape2)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(30.5, 0, 30),
  rotation: new Quaternion(2.0848923173825973e-14, -0.7071072459220886, 8.429374531715439e-8, 0.7071064114570618),
  scale: new Vector3(15.000030517578125, 1, 1.0000020265579224)
})
concreteWall2.addComponentOrReplace(transform7)
concreteWall2.addComponentOrReplace(gltfShape2)

const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
concreteWall3.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(1, 0, 30),
  rotation: new Quaternion(2.0848923173825973e-14, -0.7071072459220886, 8.429374531715439e-8, 0.7071064114570618),
  scale: new Vector3(15.000068664550781, 1, 1.0000044107437134)
})
concreteWall3.addComponentOrReplace(transform8)

const largeStoneWall = new Entity('largeStoneWall')
engine.addEntity(largeStoneWall)
largeStoneWall.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(6.5, 0, 23.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 4.5, 1)
})
largeStoneWall.addComponentOrReplace(transform9)
const gltfShape3 = new GLTFShape("30b13e74-0a6a-48f2-89fc-a36efa43da1d/Wall_Stone_Large/Wall_Stone_Large.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
largeStoneWall.addComponentOrReplace(gltfShape3)

const wallPlainBeige3 = new Entity('wallPlainBeige3')
engine.addEntity(wallPlainBeige3)
wallPlainBeige3.setParent(_scene)
const gltfShape4 = new GLTFShape("cd0772b7-ef0a-4b5b-9a48-97cf20a931d9/PlainBeigeWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallPlainBeige3.addComponentOrReplace(gltfShape4)
const transform10 = new Transform({
  position: new Vector3(30.5, 0, 20.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5299997329711914, 1, 0.9999999403953552)
})
wallPlainBeige3.addComponentOrReplace(transform10)

const desk = new Entity('desk')
engine.addEntity(desk)
desk.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(29.5, 0, 5),
  rotation: new Quaternion(5.3022111034433175e-15, -0.7071067690849304, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.4809705018997192, 1, 1.0190297365188599)
})
desk.addComponentOrReplace(transform11)
const gltfShape5 = new GLTFShape("9a25f7ad-ec44-4ed7-bda6-c357c6691389/Furnit 4 Desk.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
desk.addComponentOrReplace(gltfShape5)

const videoComputerScreen = new Entity('videoComputerScreen')
engine.addEntity(videoComputerScreen)
videoComputerScreen.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(29.5, 1, 3.5),
  rotation: new Quaternion(-1.10062582369541e-15, -0.6343932747840881, 7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
videoComputerScreen.addComponentOrReplace(transform12)

const wallPlainBeige = new Entity('wallPlainBeige')
engine.addEntity(wallPlainBeige)
wallPlainBeige.setParent(_scene)
wallPlainBeige.addComponentOrReplace(gltfShape4)
const transform13 = new Transform({
  position: new Vector3(30.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.499999761581421, 1, 0.9999999403953552)
})
wallPlainBeige.addComponentOrReplace(transform13)

const desk2 = new Entity('desk2')
engine.addEntity(desk2)
desk2.setParent(_scene)
desk2.addComponentOrReplace(gltfShape5)
const transform14 = new Transform({
  position: new Vector3(29, 0, 13),
  rotation: new Quaternion(5.302211526959791e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4809712171554565, 1, 1.0190304517745972)
})
desk2.addComponentOrReplace(transform14)

const videoComputerScreen2 = new Entity('videoComputerScreen2')
engine.addEntity(videoComputerScreen2)
videoComputerScreen2.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(29, 1, 11.5),
  rotation: new Quaternion(-1.10062582369541e-15, -0.6343932747840881, 7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
videoComputerScreen2.addComponentOrReplace(transform15)

const desk3 = new Entity('desk3')
engine.addEntity(desk3)
desk3.setParent(_scene)
desk3.addComponentOrReplace(gltfShape5)
const transform16 = new Transform({
  position: new Vector3(30, 0, 19),
  rotation: new Quaternion(5.302211526959791e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.480971097946167, 1, 1.0190311670303345)
})
desk3.addComponentOrReplace(transform16)

const videoComputerScreen3 = new Entity('videoComputerScreen3')
engine.addEntity(videoComputerScreen3)
videoComputerScreen3.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(30, 1, 17),
  rotation: new Quaternion(-1.10062582369541e-15, -0.6343932747840881, 7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(0.9999999403953552, 1, 0.9999999403953552)
})
videoComputerScreen3.addComponentOrReplace(transform17)

const steampunkChair2 = new Entity('steampunkChair2')
engine.addEntity(steampunkChair2)
steampunkChair2.setParent(_scene)
const gltfShape6 = new GLTFShape("a92e3cfe-6b4f-4485-8605-bc6769ce3e76/Steampunk Chair.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
steampunkChair2.addComponentOrReplace(gltfShape6)
const transform18 = new Transform({
  position: new Vector3(28, 0, 11.5),
  rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.000002145767212, 1, 1.000002145767212)
})
steampunkChair2.addComponentOrReplace(transform18)

const steampunkChair3 = new Entity('steampunkChair3')
engine.addEntity(steampunkChair3)
steampunkChair3.setParent(_scene)
steampunkChair3.addComponentOrReplace(gltfShape6)
const transform19 = new Transform({
  position: new Vector3(28.5, 0, 17.5),
  rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000026226043701, 1, 1.0000026226043701)
})
steampunkChair3.addComponentOrReplace(transform19)

const desk4 = new Entity('desk4')
engine.addEntity(desk4)
desk4.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(3, 0, 26),
  rotation: new Quaternion(-2.9228645320242947e-17, -0.70710688829422, 8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
desk4.addComponentOrReplace(transform20)
const gltfShape7 = new GLTFShape("3583bbc4-03c1-400d-9ff3-4dc7718925c0/Furnit 3 Desk.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
desk4.addComponentOrReplace(gltfShape7)

const chairHighBack = new Entity('chairHighBack')
engine.addEntity(chairHighBack)
chairHighBack.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(2, 0, 25.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
chairHighBack.addComponentOrReplace(transform21)
const gltfShape8 = new GLTFShape("9cc4b4a2-46b6-4b49-aef9-da3959de0ac8/HighBackChair.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
chairHighBack.addComponentOrReplace(gltfShape8)

const armchairPurple = new Entity('armchairPurple')
engine.addEntity(armchairPurple)
armchairPurple.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(29.5, 0, 26.5),
  rotation: new Quaternion(2.4757479205416268e-15, 1.4901161193847656e-7, 4.207820130453969e-17, -1),
  scale: new Vector3(1, 1, 1)
})
armchairPurple.addComponentOrReplace(transform22)
const gltfShape9 = new GLTFShape("3f64a496-0dcd-456b-b798-3218c5385b82/PurpleArmchair.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
armchairPurple.addComponentOrReplace(gltfShape9)

const armchairPurple2 = new Entity('armchairPurple2')
engine.addEntity(armchairPurple2)
armchairPurple2.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(27.5, 0, 26.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
armchairPurple2.addComponentOrReplace(transform23)
armchairPurple2.addComponentOrReplace(gltfShape9)

const druidWoodenRoundTable = new Entity('druidWoodenRoundTable')
engine.addEntity(druidWoodenRoundTable)
druidWoodenRoundTable.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(28, 0, 28),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 0.75, 0.4999999701976776)
})
druidWoodenRoundTable.addComponentOrReplace(transform24)
const gltfShape10 = new GLTFShape("51e9b337-1795-40ba-9177-e5d613fa8a7c/WoodRoundTable_01/WoodRoundTable_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
druidWoodenRoundTable.addComponentOrReplace(gltfShape10)

const plantedFern = new Entity('plantedFern')
engine.addEntity(plantedFern)
plantedFern.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(3, 1, 25),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedFern.addComponentOrReplace(transform25)
const gltfShape11 = new GLTFShape("e9d4e87b-8d5f-4f03-a2e5-044effa9147f/PlantPot_03/PlantPot_03.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
plantedFern.addComponentOrReplace(gltfShape11)

const plantedBalsam = new Entity('plantedBalsam')
engine.addEntity(plantedBalsam)
plantedBalsam.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(28, 0.5, 28),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedBalsam.addComponentOrReplace(transform26)
const gltfShape12 = new GLTFShape("1091923b-56aa-415b-96a2-ca82ecee7782/PlantPot_04/PlantPot_04.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
plantedBalsam.addComponentOrReplace(gltfShape12)

const galleryInfoPurple = new Entity('galleryInfoPurple')
engine.addEntity(galleryInfoPurple)
galleryInfoPurple.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(6.5, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
galleryInfoPurple.addComponentOrReplace(transform27)

const wallPlainBeige4 = new Entity('wallPlainBeige4')
engine.addEntity(wallPlainBeige4)
wallPlainBeige4.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(30.5, 0, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1)
})
wallPlainBeige4.addComponentOrReplace(transform28)
wallPlainBeige4.addComponentOrReplace(gltfShape4)

const wallPlainBeige5 = new Entity('wallPlainBeige5')
engine.addEntity(wallPlainBeige5)
wallPlainBeige5.setParent(_scene)
wallPlainBeige5.addComponentOrReplace(gltfShape4)
const transform29 = new Transform({
  position: new Vector3(30.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7499998807907104, 1, 0.9999999403953552)
})
wallPlainBeige5.addComponentOrReplace(transform29)

const desk5 = new Entity('desk5')
engine.addEntity(desk5)
desk5.setParent(_scene)
desk5.addComponentOrReplace(gltfShape5)
const transform30 = new Transform({
  position: new Vector3(29.5, 0, 13),
  rotation: new Quaternion(5.302211526959791e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.480971336364746, 1, 1.0190314054489136)
})
desk5.addComponentOrReplace(transform30)

const desk6 = new Entity('desk6')
engine.addEntity(desk6)
desk6.setParent(_scene)
desk6.addComponentOrReplace(gltfShape5)
const transform31 = new Transform({
  position: new Vector3(29.5, 0, 6),
  rotation: new Quaternion(5.302211526959791e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4809715747833252, 1, 1.0190316438674927)
})
desk6.addComponentOrReplace(transform31)

const steampunkChair4 = new Entity('steampunkChair4')
engine.addEntity(steampunkChair4)
steampunkChair4.setParent(_scene)
steampunkChair4.addComponentOrReplace(gltfShape6)
const transform32 = new Transform({
  position: new Vector3(28, 0, 11.5),
  rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000028610229492, 1, 1.0000028610229492)
})
steampunkChair4.addComponentOrReplace(transform32)

const steampunkChair5 = new Entity('steampunkChair5')
engine.addEntity(steampunkChair5)
steampunkChair5.setParent(_scene)
steampunkChair5.addComponentOrReplace(gltfShape6)
const transform33 = new Transform({
  position: new Vector3(28, 0, 4.5),
  rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000030994415283, 1, 1.0000030994415283)
})
steampunkChair5.addComponentOrReplace(transform33)

const desk7 = new Entity('desk7')
engine.addEntity(desk7)
desk7.setParent(_scene)
desk7.addComponentOrReplace(gltfShape5)
const transform34 = new Transform({
  position: new Vector3(22.5, 0, 1.5),
  rotation: new Quaternion(2.04614382112256e-15, 0, -1.8496275186783524e-15, 1),
  scale: new Vector3(1.4809719324111938, 1, 1.0190311670303345)
})
desk7.addComponentOrReplace(transform34)

const steampunkChair = new Entity('steampunkChair')
engine.addEntity(steampunkChair)
steampunkChair.setParent(_scene)
steampunkChair.addComponentOrReplace(gltfShape6)
const transform35 = new Transform({
  position: new Vector3(21, 0, 3),
  rotation: new Quaternion(-7.39715566903075e-15, 0.9951847791671753, -1.1863525628541538e-7, 0.0980171263217926),
  scale: new Vector3(1.000007152557373, 1, 1.000007152557373)
})
steampunkChair.addComponentOrReplace(transform35)

const videoComputerScreen4 = new Entity('videoComputerScreen4')
engine.addEntity(videoComputerScreen4)
videoComputerScreen4.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(21, 1, 1.5),
  rotation: new Quaternion(-2.6455308043793046e-15, -5.960464477539063e-8, -3.797066166940895e-15, -1),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
videoComputerScreen4.addComponentOrReplace(transform36)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(24, 0, 0.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(11.25004768371582, 1, 0.37500330805778503)
})
wallPlainGlass.addComponentOrReplace(transform37)
const gltfShape13 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape13)

const desk8 = new Entity('desk8')
engine.addEntity(desk8)
desk8.setParent(_scene)
desk8.addComponentOrReplace(gltfShape5)
const transform38 = new Transform({
  position: new Vector3(15.5, 0, 1.5),
  rotation: new Quaternion(2.04614382112256e-15, 0, -1.8496275186783524e-15, 1),
  scale: new Vector3(1.4809719324111938, 1, 1.0190311670303345)
})
desk8.addComponentOrReplace(transform38)

const steampunkChair6 = new Entity('steampunkChair6')
engine.addEntity(steampunkChair6)
steampunkChair6.setParent(_scene)
steampunkChair6.addComponentOrReplace(gltfShape6)
const transform39 = new Transform({
  position: new Vector3(13.5, 0, 2.5),
  rotation: new Quaternion(-7.39715566903075e-15, 0.9951847791671753, -1.1863525628541538e-7, 0.0980171263217926),
  scale: new Vector3(1.0000085830688477, 1, 1.0000085830688477)
})
steampunkChair6.addComponentOrReplace(transform39)

const videoComputerScreen5 = new Entity('videoComputerScreen5')
engine.addEntity(videoComputerScreen5)
videoComputerScreen5.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(14, 1, 1.5),
  rotation: new Quaternion(-2.6455308043793046e-15, -5.960464477539063e-8, -3.797066166940895e-15, -1),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
videoComputerScreen5.addComponentOrReplace(transform40)

const coffeeMachine = new Entity('coffeeMachine')
engine.addEntity(coffeeMachine)
coffeeMachine.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(28.5, 1, 22),
  rotation: new Quaternion(-2.3644251331410727e-15, -1, 1.1920928955078125e-7, 0),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
coffeeMachine.addComponentOrReplace(transform41)
const gltfShape14 = new GLTFShape("bf7da256-1314-40dc-a5b4-19c8dc5196e4/Coffee_Machine.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
coffeeMachine.addComponentOrReplace(gltfShape14)

const squareWoodTable = new Entity('squareWoodTable')
engine.addEntity(squareWoodTable)
squareWoodTable.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(29, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable.addComponentOrReplace(transform42)
const gltfShape15 = new GLTFShape("36a9ea1e-61b9-4221-a580-74011955a191/Table_03/Table_03.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
squareWoodTable.addComponentOrReplace(gltfShape15)

const wallCorrugatedMetal = new Entity('wallCorrugatedMetal')
engine.addEntity(wallCorrugatedMetal)
wallCorrugatedMetal.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(10, 0, 0.5),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(8.000022888183594, 1, 1.0000028610229492)
})
wallCorrugatedMetal.addComponentOrReplace(transform43)
const gltfShape16 = new GLTFShape("ed5d1431-0172-4730-b81c-856fc44043f7/CorrugatedMetalWall.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
wallCorrugatedMetal.addComponentOrReplace(gltfShape16)

const wallBrick = new Entity('wallBrick')
engine.addEntity(wallBrick)
wallBrick.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(10, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.249999523162842, 1, 0.9999996423721313)
})
wallBrick.addComponentOrReplace(transform44)
const gltfShape17 = new GLTFShape("171c182d-e766-4e6d-a290-308fd81b3ac5/BrickWall.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
wallBrick.addComponentOrReplace(gltfShape17)

const wallBrick2 = new Entity('wallBrick2')
engine.addEntity(wallBrick2)
wallBrick2.setParent(_scene)
wallBrick2.addComponentOrReplace(gltfShape17)
const transform45 = new Transform({
  position: new Vector3(4, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999996423721313, 1, 0.9999996423721313)
})
wallBrick2.addComponentOrReplace(transform45)

const videoScreenStanding = new Entity('videoScreenStanding')
engine.addEntity(videoScreenStanding)
videoScreenStanding.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(5.5, 0, 2),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7499998807907104, 0.75, 0.9999999403953552)
})
videoScreenStanding.addComponentOrReplace(transform46)

const yellowDinnerTable = new Entity('yellowDinnerTable')
engine.addEntity(yellowDinnerTable)
yellowDinnerTable.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(5.5, 0, 8),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.5, 1.5, 1.5000038146972656)
})
yellowDinnerTable.addComponentOrReplace(transform47)
const gltfShape18 = new GLTFShape("87383b74-7a88-4722-b298-fd1fb0444a77/TableSciFi_02/TableSciFi_02.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
yellowDinnerTable.addComponentOrReplace(gltfShape18)

const chairHighBack2 = new Entity('chairHighBack2')
engine.addEntity(chairHighBack2)
chairHighBack2.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(7, 0, 5.5),
  rotation: new Quaternion(-7.781870092739773e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
chairHighBack2.addComponentOrReplace(transform48)
chairHighBack2.addComponentOrReplace(gltfShape8)

const chairHighBack3 = new Entity('chairHighBack3')
engine.addEntity(chairHighBack3)
chairHighBack3.setParent(_scene)
chairHighBack3.addComponentOrReplace(gltfShape8)
const transform49 = new Transform({
  position: new Vector3(7, 0, 7),
  rotation: new Quaternion(-7.781870092739773e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
chairHighBack3.addComponentOrReplace(transform49)

const chairHighBack4 = new Entity('chairHighBack4')
engine.addEntity(chairHighBack4)
chairHighBack4.setParent(_scene)
chairHighBack4.addComponentOrReplace(gltfShape8)
const transform50 = new Transform({
  position: new Vector3(7, 0, 8.5),
  rotation: new Quaternion(-7.781870092739773e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
chairHighBack4.addComponentOrReplace(transform50)

const chairHighBack5 = new Entity('chairHighBack5')
engine.addEntity(chairHighBack5)
chairHighBack5.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(3.5, 0, 5),
  rotation: new Quaternion(2.262906752104987e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000004768371582, 1, 1.0000004768371582)
})
chairHighBack5.addComponentOrReplace(transform51)
chairHighBack5.addComponentOrReplace(gltfShape8)

const chairHighBack6 = new Entity('chairHighBack6')
engine.addEntity(chairHighBack6)
chairHighBack6.setParent(_scene)
chairHighBack6.addComponentOrReplace(gltfShape8)
const transform52 = new Transform({
  position: new Vector3(3.5, 0, 6.5),
  rotation: new Quaternion(2.262906752104987e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000007152557373, 1, 1.0000007152557373)
})
chairHighBack6.addComponentOrReplace(transform52)

const chairHighBack7 = new Entity('chairHighBack7')
engine.addEntity(chairHighBack7)
chairHighBack7.setParent(_scene)
chairHighBack7.addComponentOrReplace(gltfShape8)
const transform53 = new Transform({
  position: new Vector3(3.5, 0, 8),
  rotation: new Quaternion(2.262906752104987e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
chairHighBack7.addComponentOrReplace(transform53)

const chairHighBack8 = new Entity('chairHighBack8')
engine.addEntity(chairHighBack8)
chairHighBack8.setParent(_scene)
chairHighBack8.addComponentOrReplace(gltfShape8)
const transform54 = new Transform({
  position: new Vector3(3.5, 0, 9.5),
  rotation: new Quaternion(2.262906752104987e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
chairHighBack8.addComponentOrReplace(transform54)

const chairHighBack9 = new Entity('chairHighBack9')
engine.addEntity(chairHighBack9)
chairHighBack9.setParent(_scene)
chairHighBack9.addComponentOrReplace(gltfShape8)
const transform55 = new Transform({
  position: new Vector3(7, 0, 10),
  rotation: new Quaternion(-7.781870092739773e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
chairHighBack9.addComponentOrReplace(transform55)

const scriptorium = new Entity('scriptorium')
engine.addEntity(scriptorium)
scriptorium.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(8, 0, 4),
  rotation: new Quaternion(1.1684561762592693e-8, 0.9951847791671753, 0.09801702946424484, 2.7140316293731807e-15),
  scale: new Vector3(1.0000011920928955, 1.4809705018997192, 1.0190309286117554)
})
scriptorium.addComponentOrReplace(transform56)
const gltfShape19 = new GLTFShape("54d93298-8dc5-4cfc-8974-08e7ce262fa4/PapyrusDesk_01/PapyrusDesk_01.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
scriptorium.addComponentOrReplace(gltfShape19)

const woodenDoor = new Entity('woodenDoor')
engine.addEntity(woodenDoor)
woodenDoor.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(5.5, 0, 17),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
woodenDoor.addComponentOrReplace(transform57)

const galleryInfoGrey = new Entity('galleryInfoGrey')
engine.addEntity(galleryInfoGrey)
galleryInfoGrey.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(9, 1.5, 17.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 0.5, 1)
})
galleryInfoGrey.addComponentOrReplace(transform58)

const desk9 = new Entity('desk9')
engine.addEntity(desk9)
desk9.setParent(_scene)
desk9.addComponentOrReplace(gltfShape5)
const transform59 = new Transform({
  position: new Vector3(10.5, 0, 6),
  rotation: new Quaternion(-1.4004572758150664e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4809719324111938, 1, 1.0190316438674927)
})
desk9.addComponentOrReplace(transform59)

const steampunkChair7 = new Entity('steampunkChair7')
engine.addEntity(steampunkChair7)
steampunkChair7.setParent(_scene)
steampunkChair7.addComponentOrReplace(gltfShape6)
const transform60 = new Transform({
  position: new Vector3(11.5, 0, 7.5),
  rotation: new Quaternion(4.60710452670739e-15, -0.7071067690849304, 8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(1.0000094175338745, 1, 1.0000094175338745)
})
steampunkChair7.addComponentOrReplace(transform60)

const videoComputerScreen6 = new Entity('videoComputerScreen6')
engine.addEntity(videoComputerScreen6)
videoComputerScreen6.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(10.5, 1, 7.5),
  rotation: new Quaternion(1.0358086391100245e-14, 0.70710688829422, -8.429368136830817e-8, 0.7071067690849304),
  scale: new Vector3(1.0000001192092896, 1, 1.0000001192092896)
})
videoComputerScreen6.addComponentOrReplace(transform61)

const desk10 = new Entity('desk10')
engine.addEntity(desk10)
desk10.setParent(_scene)
desk10.addComponentOrReplace(gltfShape5)
const transform62 = new Transform({
  position: new Vector3(10.5, 0, 11.5),
  rotation: new Quaternion(-1.4004572758150664e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.480972170829773, 1, 1.0190318822860718)
})
desk10.addComponentOrReplace(transform62)

const videoComputerScreen7 = new Entity('videoComputerScreen7')
engine.addEntity(videoComputerScreen7)
videoComputerScreen7.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(10.5, 1, 13),
  rotation: new Quaternion(1.0358086391100245e-14, 0.70710688829422, -8.429368136830817e-8, 0.7071067690849304),
  scale: new Vector3(1.0000003576278687, 1, 1.0000003576278687)
})
videoComputerScreen7.addComponentOrReplace(transform63)

const steampunkChair8 = new Entity('steampunkChair8')
engine.addEntity(steampunkChair8)
steampunkChair8.setParent(_scene)
steampunkChair8.addComponentOrReplace(gltfShape6)
const transform64 = new Transform({
  position: new Vector3(11.5, 0, 13),
  rotation: new Quaternion(4.60710452670739e-15, -0.7071067690849304, 8.429367426288081e-8, 0.7071068286895752),
  scale: new Vector3(1.0000094175338745, 1, 1.0000094175338745)
})
steampunkChair8.addComponentOrReplace(transform64)

const desk11 = new Entity('desk11')
engine.addEntity(desk11)
desk11.setParent(_scene)
desk11.addComponentOrReplace(gltfShape5)
const transform65 = new Transform({
  position: new Vector3(22.5, 0, 9),
  rotation: new Quaternion(5.302211526959791e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4809714555740356, 1, 1.0190306901931763)
})
desk11.addComponentOrReplace(transform65)

const videoComputerScreen8 = new Entity('videoComputerScreen8')
engine.addEntity(videoComputerScreen8)
videoComputerScreen8.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(22.5, 1, 7),
  rotation: new Quaternion(-1.10062582369541e-15, -0.6343932747840881, 7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(0.9999998807907104, 1, 0.9999998807907104)
})
videoComputerScreen8.addComponentOrReplace(transform66)

const steampunkChair9 = new Entity('steampunkChair9')
engine.addEntity(steampunkChair9)
steampunkChair9.setParent(_scene)
steampunkChair9.addComponentOrReplace(gltfShape6)
const transform67 = new Transform({
  position: new Vector3(21.5, 0, 7.5),
  rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000033378601074, 1, 1.0000033378601074)
})
steampunkChair9.addComponentOrReplace(transform67)

const desk12 = new Entity('desk12')
engine.addEntity(desk12)
desk12.setParent(_scene)
desk12.addComponentOrReplace(gltfShape5)
const transform68 = new Transform({
  position: new Vector3(22.5, 0, 16.5),
  rotation: new Quaternion(5.302211526959791e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.4809716939926147, 1, 1.0190309286117554)
})
desk12.addComponentOrReplace(transform68)

const videoComputerScreen9 = new Entity('videoComputerScreen9')
engine.addEntity(videoComputerScreen9)
videoComputerScreen9.setParent(_scene)
const transform69 = new Transform({
  position: new Vector3(22.5, 1, 14.5),
  rotation: new Quaternion(-1.10062582369541e-15, -0.6343932747840881, 7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(0.9999998211860657, 1, 0.9999998211860657)
})
videoComputerScreen9.addComponentOrReplace(transform69)

const steampunkChair10 = new Entity('steampunkChair10')
engine.addEntity(steampunkChair10)
steampunkChair10.setParent(_scene)
steampunkChair10.addComponentOrReplace(gltfShape6)
const transform70 = new Transform({
  position: new Vector3(21.5, 0, 15),
  rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.0000035762786865, 1, 1.0000035762786865)
})
steampunkChair10.addComponentOrReplace(transform70)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape13)
const transform71 = new Transform({
  position: new Vector3(17, 0, 0.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(11.250048637390137, 1, 0.3750036358833313)
})
wallPlainGlass2.addComponentOrReplace(transform71)

const wallPlainBeige2 = new Entity('wallPlainBeige2')
engine.addEntity(wallPlainBeige2)
wallPlainBeige2.setParent(_scene)
wallPlainBeige2.addComponentOrReplace(gltfShape4)
const transform72 = new Transform({
  position: new Vector3(13, 0, 5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.499999761581421, 1, 0.9999999403953552)
})
wallPlainBeige2.addComponentOrReplace(transform72)

const wallPlainBeige6 = new Entity('wallPlainBeige6')
engine.addEntity(wallPlainBeige6)
wallPlainBeige6.setParent(_scene)
wallPlainBeige6.addComponentOrReplace(gltfShape4)
const transform73 = new Transform({
  position: new Vector3(24, 0, 12),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.499999761581421, 1, 0.9999999403953552)
})
wallPlainBeige6.addComponentOrReplace(transform73)

const wallPlainBeige7 = new Entity('wallPlainBeige7')
engine.addEntity(wallPlainBeige7)
wallPlainBeige7.setParent(_scene)
wallPlainBeige7.addComponentOrReplace(gltfShape4)
const transform74 = new Transform({
  position: new Vector3(13, 0, 11),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.499999761581421, 1, 0.9999999403953552)
})
wallPlainBeige7.addComponentOrReplace(transform74)

const squareWoodTable2 = new Entity('squareWoodTable2')
engine.addEntity(squareWoodTable2)
squareWoodTable2.setParent(_scene)
squareWoodTable2.addComponentOrReplace(gltfShape15)
const transform75 = new Transform({
  position: new Vector3(29, 0, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
squareWoodTable2.addComponentOrReplace(transform75)

const doorframeGlass = new Entity('doorframeGlass')
engine.addEntity(doorframeGlass)
doorframeGlass.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(8, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
doorframeGlass.addComponentOrReplace(transform76)
const gltfShape20 = new GLTFShape("f38f0a83-881b-4080-abba-a6f7ffe671a4/GlassDoorframe.glb")
gltfShape20.withCollisions = true
gltfShape20.isPointerBlocker = true
gltfShape20.visible = true
doorframeGlass.addComponentOrReplace(gltfShape20)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(30.5, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.362497329711914, 1, 0.9999999403953552)
})
wallPlainGlass3.addComponentOrReplace(transform77)
wallPlainGlass3.addComponentOrReplace(gltfShape13)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(6, 0, 30),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2.5, 1, 1)
})
wallPlainGlass4.addComponentOrReplace(transform78)
wallPlainGlass4.addComponentOrReplace(gltfShape13)

const roofWhiteEdges = new Entity('roofWhiteEdges')
engine.addEntity(roofWhiteEdges)
roofWhiteEdges.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(0.5, 0, 30.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-7.500000476837158, 1, 7.499994277954102)
})
roofWhiteEdges.addComponentOrReplace(transform79)
const gltfShape21 = new GLTFShape("7baaf62a-9809-47b3-b4b6-92fca93045e3/WhiteRoof_4Edges.glb")
gltfShape21.withCollisions = true
gltfShape21.isPointerBlocker = true
gltfShape21.visible = true
roofWhiteEdges.addComponentOrReplace(gltfShape21)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script1.spawn(videoComputerScreen, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen, channelBus))
script1.spawn(videoComputerScreen2, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen2","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen2, channelBus))
script1.spawn(videoComputerScreen3, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen3","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen3, channelBus))
script2.spawn(galleryInfoPurple, {"text":"SAMSUNG","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoPurple, channelBus))
script1.spawn(videoComputerScreen4, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen4","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen4, channelBus))
script1.spawn(videoComputerScreen5, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen5","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen5, channelBus))
script3.spawn(videoScreenStanding, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoScreenStanding","actionId":"toggle","values":{}}]}, createChannel(channelId, videoScreenStanding, channelBus))
script4.spawn(woodenDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"woodenDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, woodenDoor, channelBus))
script5.spawn(galleryInfoGrey, {"text":"CONFERENCE ROOM","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoGrey, channelBus))
script1.spawn(videoComputerScreen6, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen6","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen6, channelBus))
script1.spawn(videoComputerScreen7, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen7","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen7, channelBus))
script1.spawn(videoComputerScreen8, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen8","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen8, channelBus))
script1.spawn(videoComputerScreen9, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoComputerScreen9","actionId":"toggle","values":{}}]}, createChannel(channelId, videoComputerScreen9, channelBus))