const whiteboard = new Entity();
engine.addEntity(whiteboard);
whiteboard.addComponent(new GLTFShape("models/whiteboard/whiteboard.glb"));
whiteboard.addComponent(new Transform());
whiteboard.getComponent(Transform).position.set(15, -0.1, 5);

const tablet1 = new Entity();
engine.addEntity(tablet1);
tablet1.addComponent(new GLTFShape("models/tablet/tablet.glb"));
tablet1.addComponent(new Transform());
tablet1.getComponent(Transform).position.set(4.3, 1.2, 7.5);
tablet1.getComponent(Transform).scale.set(0.1, 0.1, 0.1);

const tablet2 = new Entity();
engine.addEntity(tablet2);
tablet2.addComponent(new GLTFShape("models/tablet/tablet.glb"));
tablet2.addComponent(new Transform());
tablet2.getComponent(Transform).position.set(12.7, 1.2, 7.5);
tablet2.getComponent(Transform).scale.set(0.1, 0.1, 0.1);
tablet2.getComponent(Transform).rotation.set(0, 1, 0, 0);

const tablet8 = new Entity();
engine.addEntity(tablet8);
tablet8.addComponent(new GLTFShape("models/tablet/tablet.glb"));
tablet8.addComponent(new Transform());
tablet8.getComponent(Transform).position.set(10, 1.2, 8.2);
tablet8.getComponent(Transform).scale.set(0.1, 0.1, 0.1);
tablet8.getComponent(Transform).rotation.set(0, 1, 0, 1);

const tablet7 = new Entity();
engine.addEntity(tablet7);
tablet7.addComponent(new GLTFShape("models/tablet/tablet.glb"));
tablet7.addComponent(new Transform());
tablet7.getComponent(Transform).position.set(8, 1.2, 8.2);
tablet7.getComponent(Transform).scale.set(0.1, 0.1, 0.1);
tablet7.getComponent(Transform).rotation.set(0, 1, 0, 1);

const tablet6 = new Entity();
engine.addEntity(tablet6);
tablet6.addComponent(new GLTFShape("models/tablet/tablet.glb"));
tablet6.addComponent(new Transform());
tablet6.getComponent(Transform).position.set(6, 1.2, 8.2);
tablet6.getComponent(Transform).scale.set(0.1, 0.1, 0.1);
tablet6.getComponent(Transform).rotation.set(0, 1, 0, 1);

const tablet5 = new Entity();
engine.addEntity(tablet5);
tablet5.addComponent(new GLTFShape("models/tablet/tablet.glb"));
tablet5.addComponent(new Transform());
tablet5.getComponent(Transform).position.set(10, 1.2, 6.8);
tablet5.getComponent(Transform).scale.set(0.1, 0.1, 0.1);
tablet5.getComponent(Transform).rotation.set(0, 1, 0, -1);

const tablet4 = new Entity();
engine.addEntity(tablet4);
tablet4.addComponent(new GLTFShape("models/tablet/tablet.glb"));
tablet4.addComponent(new Transform());
tablet4.getComponent(Transform).position.set(8, 1.2, 6.8);
tablet4.getComponent(Transform).scale.set(0.1, 0.1, 0.1);
tablet4.getComponent(Transform).rotation.set(0, 1, 0, -1);

const tablet3 = new Entity();
engine.addEntity(tablet3);
tablet3.addComponent(new GLTFShape("models/tablet/tablet.glb"));
tablet3.addComponent(new Transform());
tablet3.getComponent(Transform).position.set(6, 1.2, 6.8);
tablet3.getComponent(Transform).scale.set(0.1, 0.1, 0.1);
tablet3.getComponent(Transform).rotation.set(0, 1, 0, -1);


const walln = new Entity();
engine.addEntity(walln);
walln.addComponent(new GLTFShape("models/walls/wall.glb"));
walln.addComponent(new Transform());
walln.getComponent(Transform).scale.set(0.8, 1, 0.20);
walln.getComponent(Transform).position.set(8.0, -0.1, 15);

const wallw = new Entity();
engine.addEntity(wallw);
wallw.addComponent(new GLTFShape("models/walls/wall.glb"));
wallw.addComponent(new Transform());
wallw.getComponent(Transform).scale.set(0.8, 1, 0.20);
wallw.getComponent(Transform).rotation.set(0, 1, 0, 1);
wallw.getComponent(Transform).position.set(-0.8, -0.1, 8);

const walle = new Entity();
engine.addEntity(walle);
walle.addComponent(new GLTFShape("models/walls/wall.glb"));
walle.addComponent(new Transform());
walle.getComponent(Transform).scale.set(0.8, 1, 0.20);
walle.getComponent(Transform).rotation.set(0, 1, 0, 1);
walle.getComponent(Transform).position.set(15, -0.1, 8);

const walls = new Entity();
engine.addEntity(walls);
walls.addComponent(new GLTFShape("models/walls/wall.glb"));
walls.addComponent(new Transform());
walls.getComponent(Transform).scale.set(0.7, 1, 0.15);
walls.getComponent(Transform).position.set(8.8, -0.1, -0.5);

const walls2 = new Entity();
engine.addEntity(walls2);
walls2.addComponent(new GLTFShape("models/walls/wall.glb"));
walls2.addComponent(new Transform());
walls2.getComponent(Transform).scale.set(0.1, 0.65, 0.15);
walls2.getComponent(Transform).position.set(1, 2.5, -0.5);

const wallt = new Entity();
engine.addEntity(wallt);
wallt.addComponent(new GLTFShape("models/walls/wall.glb"));
wallt.addComponent(new Transform());
wallt.getComponent(Transform).scale.set(0.78, 2, 0.15);
wallt.getComponent(Transform).position.set(8, 8.5, 0);
wallt.getComponent(Transform).rotation.set(1, 0, 0, 1);


const table = new Entity();
engine.addEntity(table);
table.addComponent(new GLTFShape("models/table/table.glb"));
table.addComponent(new Transform());
table.getComponent(Transform).scale.set(0.015, 0.012, 0.01);
table.getComponent(Transform).position.set(8.5, 0, 7.5)

const chair1 = new Entity();
engine.addEntity(chair1);
chair1.addComponent(new GLTFShape("models/chair/chair0.glb"));
chair1.addComponent(new Transform());
//chair1.getComponent(Transform).scale.set(0.025, 0.025, 0.025);
chair1.getComponent(Transform).position.set(3.5, 0, 7.5)
chair1.getComponent(Transform).rotation.set(0, 1, 0, 1);

const chair2 = new Entity();
engine.addEntity(chair2);
chair2.addComponent(new GLTFShape("models/chair/chair0.glb"));
chair2.addComponent(new Transform());
//chair2.getComponent(Transform).scale.set(0.025, 0.025, 0.025);
chair2.getComponent(Transform).position.set(13.5, 0, 7.5)
chair2.getComponent(Transform).rotation.set(0, 1, 0, -1);

const chair3 = new Entity();
engine.addEntity(chair3);
chair3.addComponent(new GLTFShape("models/chair/chair0.glb"));
chair3.addComponent(new Transform());
chair3.getComponent(Transform).rotation.set(0, 0, 0, 0);
chair3.getComponent(Transform).position.set(6, 0, 6.25)

const chair4 = new Entity();
engine.addEntity(chair4);
chair4.addComponent(new GLTFShape("models/chair/chair0.glb"));
chair4.addComponent(new Transform());
chair4.getComponent(Transform).rotation.set(0, 0, 0, 0);
chair4.getComponent(Transform).position.set(8, 0, 6.25)

const chair5 = new Entity();
engine.addEntity(chair5);
chair5.addComponent(new GLTFShape("models/chair/chair0.glb"));
chair5.addComponent(new Transform());
chair5.getComponent(Transform).rotation.set(0, 0, 0, 0);
chair5.getComponent(Transform).position.set(10, 0, 6.25)

const chair6 = new Entity();
engine.addEntity(chair6);
chair6.addComponent(new GLTFShape("models/chair/chair0.glb"));
chair6.addComponent(new Transform());
chair6.getComponent(Transform).rotation.set(0, 1, 0, 0);
chair6.getComponent(Transform).position.set(6, 0, 8.75)

const chair7 = new Entity();
engine.addEntity(chair7);
chair7.addComponent(new GLTFShape("models/chair/chair0.glb"));
chair7.addComponent(new Transform());
chair7.getComponent(Transform).rotation.set(0, 1, 0, 0);
chair7.getComponent(Transform).position.set(8, 0, 8.75)

const chair8 = new Entity();
engine.addEntity(chair8);
chair8.addComponent(new GLTFShape("models/chair/chair0.glb"));
chair8.addComponent(new Transform());
chair8.getComponent(Transform).rotation.set(0, 1, 0, 0);
chair8.getComponent(Transform).position.set(10, 0, 8.75)

const screen = new Entity();
engine.addEntity(screen);
screen.addComponent(new GLTFShape("models/screen/screen_collider.glb"));
screen.addComponent(new Transform());
screen.getComponent(Transform).scale.set(0.125, 0.125, 0.125);
screen.getComponent(Transform).position.set(0.5, 5, 7.5);
screen.getComponent(Transform).rotation.set(0, 10, 0, 10);

const door = new Entity();
engine.addEntity(door);
door.addComponent(new GLTFShape("models/door/Puzzle02_Door.glb"));
door.addComponent(new Transform());
door.getComponent(Transform).scale.set(0.75, 0.75, 1);
door.getComponent(Transform).position.set(0.25, 0, 0.25);
door.addComponent(new Animator());
door.getComponent(Animator).addClip(new AnimationState("Door_Open", { looping:false }));
door.getComponent(Animator).addClip(new AnimationState("Door_Close", { looping:false }));
let isDoorOpen = false;
door.addComponent(new OnPointerDown((): void => {
    if(!isDoorOpen)
    {
        door.getComponent(Animator).getClip("Door_Open").play();
        isDoorOpen = true;
    }
    else
    {
        door.getComponent(Animator).getClip("Door_Close").play();
        isDoorOpen = false;
    }
}));