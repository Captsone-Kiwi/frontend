runtimeScene.ws = new WebSocket("ws://localhost:5100/ws");
const id = Math.floor(Math.random() * Math.floor(100000))
const sit = 0;
runtimeScene.player_id = id
runtimeScene.delayedEvents = []

runtimeScene.ws.onopen = function(event) {
    const BodyColor = runtimeScene.getGame().getVariables().get("PlayerBodyColor")._str;
    const HairColor = runtimeScene.getGame().getVariables().get("HairColor")._str;
    const TopColor = runtimeScene.getGame().getVariables().get("TopColor")._str;
    const BottomColor = runtimeScene.getGame().getVariables().get("BottomColor")._str;
    const ShoesColor = runtimeScene.getGame().getVariables().get("ShoesColor")._str;

    const HairStyle = runtimeScene.getGame().getVariables().get("PlayerHairStyle")._str;
    const TopStyle = runtimeScene.getGame().getVariables().get("PlayerTopStyle")._str;
    const BottomStyle = runtimeScene.getGame().getVariables().get("PlayerBottomStyle")._str;
    const ShoesStyle = runtimeScene.getGame().getVariables().get("PlayerShoesStyle")._str;
    const data = {
        command: "NEW_PLAYER",
        player_id: runtimeScene.player_id,
        data : {
            bodyColor: BodyColor,
            hairColor: HairColor,
            topColor: TopColor,
            bottomColor: BottomColor,
            shoesColor: ShoesColor,
            hairStyle: HairStyle,
            topStyle: TopStyle,
            bottomStyle: BottomStyle,
            shoesStyle: ShoesStyle,
            x: 90,
            y: 100,
            z: 9
        }
    }
    setTimeout(() => {
        runtimeScene.ws.send(JSON.stringify(data))
    }, 500);
};

runtimeScene.ws.onmessage = function (event) {
    const e = JSON.parse(event.data)
    console.log("Command : ",e.command);
    console.log("Full : ",e)
    switch(e.command) {
        case "NEW_PLAYER":
            newPlayer(e)
            break;
        case "MOVEMENT_LEFT":
            leftMovement(e)
            break;
        case "MOVEMENT_RIGHT":
            rightMovement(e)
            break;
        case "MOVEMENT_DOWN":
            downMovement(e)
            break;
        case "MOVEMENT_UP":
            upMovement(e)
            break;
        case "RELEASED_LEFT":
            leftRelease(e)
            break;
        case "RELEASED_RIGHT":
            rightRelease(e)
            break;
        case "RELEASED_DOWN":
            downRelease(e)
            break
        case "RELEASED_UP":
            upRelease(e)
            break;
        case "SPACEBAR":
            spacebar(e)
            break;
        case "REFRESH_PLAYER":
            refreshPlayers(e)
            break;
        default:
            console.log("unknown command: " + e.command)
    }
}

function newPlayer(event) {
    const p = createPlayer(event)
    if(runtimeScene.player_id !== p.player_id){
        // create that player
        const o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === runtimeScene.player_id)
        const update = {
            command: "REFRESH_PLAYER",
            player_id: runtimeScene.player_id,
            data: {
                x: o.getX(),
                y: o.getY(),
                z: o.getZOrder()
            }
        }
        runtimeScene.ws.send(JSON.stringify(update))
    }
}

function refreshPlayers(event) {
    const o = runtimeScene.getObjects("Player"+ BodyColor).find((o) => o.player_id === event.player_id)
    if(typeof o === "undefined") {
        const p = createPlayer(event)
        // p.setColor("255;100;100")
    }
}


function createPlayer(event) {
    // BODY
    var player;
    player = runtimeScene.createObject("Player" + BodyColor)
    console.log("Create Player : ",event);

    player.setX(event.data.x)
    player.setY(event.data.y)
    player.setZOrder(event.data.z)
    player.setHeight(64);
    player.setWidth(64);
    player.player_id = event.player_id
    player.positions = []

    // Top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.createObject("EmptyTop")
    }
    else if (TopStyle === "1"){
        top = runtimeScene.createObject("Suit"+TopColor)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.createObject("Basic"+TopColor)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.createObject("Floral"+TopColor)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.createObject("Sailor"+TopColor)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.createObject("Overall"+TopColor)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.createObject("Sporty"+TopColor)
    }

    top.setX(player.getPointX("zero"))
    top.setY(player.getPointY("zero"))
    top.setZOrder(event.data.z + 1)
    top.setHeight(64);
    top.setWidth(64);
    top.player_id = event.player_id
    top.positions = []
    
    // Bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.createObject("EmptyBottom")
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.createObject("Pant"+BottomColor)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.createObject("Skirt"+BottomColor)
    }
    
    bottom.setX(player.getPointX("zero"))
    bottom.setY(player.getPointY("zero"))
    bottom.setZOrder(event.data.z + 1)
    bottom.setHeight(64);
    bottom.setWidth(64);
    bottom.player_id = event.player_id
    bottom.positions = []

    // // Shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.createObject("EmptyShoes")
    }
    else {
        shoes = runtimeScene.createObject("Shoes"+ShoesColor)

    }
    shoes.setX(player.getPointX("zero"))
    shoes.setY(player.getPointY("zero"))
    shoes.setZOrder(event.data.z + 1)
    shoes.setHeight(64);
    shoes.setWidth(64);
    shoes.player_id = event.player_id
    shoes.positions = []

    // Hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.createObject("EmptyHair")
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.createObject("Emo"+HairColor)
    }
    else if (HairStyle === "2"){
        hair = runtimeScene.createObject("Gentle"+HairColor)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.createObject("Curly"+HairColor)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.createObject("Space"+HairColor)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.createObject("Braids"+HairColor)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.createObject("Wavy"+HairColor)
    }

    hair.setX(player.getPointX("zero"))
    hair.setY(player.getPointY("zero"))
    hair.setZOrder(event.data.z + 1)
    hair.setHeight(64);
    hair.setWidth(64);
    hair.player_id = event.player_id
    hair.positions = []

    // camera
    // var camX = runtimeScene.getLayer("").getCameraX(player.player_id)
    // var camY = runtimeScene.getLayer("").getCameraY(player.player_id)

    // runtimeScene.getLayer("").setCameraX(lerp(camX,player.getX(),0.8), player.player_id)
    // runtimeScene.getLayer("").setCameraY(lerp(camY,player.getY(),0.8), player.player_id)

    return player
}


function leftMovement(event){
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }

    o.setAnimationName("Left-walking")
    top.setAnimationName("Left-walking")
    bottom.setAnimationName("Left-walking")
    shoes.setAnimationName("Left-walking")
    hair.setAnimationName("Left-walking")

    movement(event)
}

function rightMovement(event){
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }
    o.setAnimationName("Right-walking")
    top.setAnimationName("Right-walking")
    bottom.setAnimationName("Right-walking")
    shoes.setAnimationName("Right-walking")
    hair.setAnimationName("Right-walking")
    movement(event)
}

function upMovement(event){
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }
    o.setAnimationName("Up-walking")
    top.setAnimationName("Up-walking")
    bottom.setAnimationName("Up-walking")
    shoes.setAnimationName("Up-walking")
    hair.setAnimationName("Up-walking")
    movement(event)
}

function downMovement(event){
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }
    o.setAnimationName("Down-walking")
    top.setAnimationName("Down-walking")
    bottom.setAnimationName("Down-walking")
    shoes.setAnimationName("Down-walking")
    hair.setAnimationName("Down-walking")
    movement(event)
}

function lerp(a,b,c){
    return a + (b - a) * c;
}

function spacebar(event){
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }
    // To global variable
    const leftChairGroup = runtimeScene.getObjects("couch02").concat(runtimeScene.getObjects("chair_kitchen02"))
    const rightChairGroup = runtimeScene.getObjects("chair_kitchen").concat(runtimeScene.getObjects("couch_blue02")).concat(runtimeScene.getObjects("couch01"))
    const downChairGroup = runtimeScene.getObjects("toilet").concat(runtimeScene.getObjects("couch_blue01"))
    const upChairGroup = runtimeScene.getObjects("makeup_chair01").concat(runtimeScene.getObjects("makeup_chair02")).concat(runtimeScene.getObjects("makeup_chair03")).concat(runtimeScene.getObjects("couch_up")).concat(runtimeScene.getObjects("chair_kitchen03")).concat(runtimeScene.getObjects("chair_black"))
    for(let obj of leftChairGroup){
        if (gdjs.RuntimeObject.collisionTest(o,obj,false) == true){
            o.setAnimationName("Left-sit")
            top.setAnimationName("Left-sit")
            bottom.setAnimationName("Down-sit")
            shoes.setAnimationName("Left-sit")
            hair.setAnimationName("Left-sit")
            
            o.setX(obj.getPointX("Center"))
            o.setY(obj.getPointY("Center"))

            top.setX(o.getPointX("zero"))
            top.setY(o.getPointY("zero"))
            top.setZOrder(o.getZOrder()+1)

            bottom.setX(o.getPointX("zero"))
            bottom.setY(o.getPointY("zero"))
            bottom.setZOrder(o.getZOrder()+1)

            shoes.setX(o.getPointX("zero"))
            shoes.setY(o.getPointY("zero"))
            shoes.setZOrder(o.getZOrder()+1)

            hair.setX(o.getPointX("zero"))
            hair.setY(o.getPointY("zero"))
            hair.setZOrder(o.getZOrder()+1)

            // sit = 1;
            return;
        }
    }

    for(let obj of rightChairGroup){
        if (gdjs.RuntimeObject.collisionTest(o,obj,false) == true){
            o.setAnimationName("Right-sit")
            top.setAnimationName("Right-sit")
            bottom.setAnimationName("Down-sit")
            shoes.setAnimationName("Right-sit")
            hair.setAnimationName("Right-sit")
            
            o.setX(obj.getPointX("Center"))
            o.setY(obj.getPointY("Center"))

            top.setX(o.getPointX("zero"))
            top.setY(o.getPointY("zero"))
            top.setZOrder(o.getZOrder()+1)

            bottom.setX(o.getPointX("zero"))
            bottom.setY(o.getPointY("zero"))
            bottom.setZOrder(o.getZOrder()+1)

            shoes.setX(o.getPointX("zero"))
            shoes.setY(o.getPointY("zero"))
            shoes.setZOrder(o.getZOrder()+1)

            hair.setX(o.getPointX("zero"))
            hair.setY(o.getPointY("zero"))
            hair.setZOrder(o.getZOrder()+1)
            return;
        }
    }

    for(let obj of downChairGroup){
        if (gdjs.RuntimeObject.collisionTest(o,obj,false) == true){
            o.setAnimationName("Down-sit")
            top.setAnimationName("Down-sit")
            bottom.setAnimationName("Down-sit")
            shoes.setAnimationName("Down-sit")
            hair.setAnimationName("Down-sit")
            
            o.setX(obj.getPointX("Center"))
            o.setY(obj.getPointY("Center"))

            top.setX(o.getPointX("zero"))
            top.setY(o.getPointY("zero"))
            top.setZOrder(o.getZOrder()+1)

            bottom.setX(o.getPointX("zero"))
            bottom.setY(o.getPointY("zero"))
            bottom.setZOrder(o.getZOrder()+1)

            shoes.setX(o.getPointX("zero"))
            shoes.setY(o.getPointY("zero"))
            shoes.setZOrder(o.getZOrder()+1)

            hair.setX(o.getPointX("zero"))
            hair.setY(o.getPointY("zero"))
            hair.setZOrder(o.getZOrder()+1)
            return;
        }
    }

    for(let obj of upChairGroup){
        if (gdjs.RuntimeObject.collisionTest(o,obj,false) == true){
            o.setAnimationName("Up-sit")
            top.setAnimationName("Up-sit")
            bottom.setAnimationName("Down-sit")
            shoes.setAnimationName("Up-sit")
            hair.setAnimationName("Up-sit")
            
            o.setX(obj.getPointX("Center"))
            o.setY(obj.getPointY("Center"))

            top.setX(o.getPointX("zero"))
            top.setY(o.getPointY("zero"))
            top.setZOrder(o.getZOrder()+1)

            bottom.setX(o.getPointX("zero"))
            bottom.setY(o.getPointY("zero"))
            bottom.setZOrder(o.getZOrder()+1)

            shoes.setX(o.getPointX("zero"))
            shoes.setY(o.getPointY("zero"))
            shoes.setZOrder(o.getZOrder()+1)

            hair.setX(o.getPointX("zero"))
            hair.setY(o.getPointY("zero"))
            hair.setZOrder(o.getZOrder()+1)
            return;
        }
    }

}

function movement(event) {
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }
    o.setX(event.data.x)
    o.setY(event.data.y)
    o.setZOrder(event.data.z)

    top.setX(o.getPointX("zero"))
    top.setY(o.getPointY("zero"))
    top.setZOrder(o.getZOrder()+1)

    bottom.setX(o.getPointX("zero"))
    bottom.setY(o.getPointY("zero"))
    bottom.setZOrder(o.getZOrder()+1)

    shoes.setX(o.getPointX("zero"))
    shoes.setY(o.getPointY("zero"))
    shoes.setZOrder(o.getZOrder()+1)

    hair.setX(o.getPointX("zero"))
    hair.setY(o.getPointY("zero"))
    hair.setZOrder(o.getZOrder()+1)


    if(o.player_id === id){
        var camX = runtimeScene.getLayer("Item Layer").getCameraX(o.player_id)
        var camY = runtimeScene.getLayer("Item Layer").getCameraY(o.player_id)

        runtimeScene.getLayer("Item Layer").setCameraX(lerp(camX,o.getX(),0.8), o.player_id)
        runtimeScene.getLayer("Item Layer").setCameraY(lerp(camY,o.getY(),0.8), o.player_id)
    }
}

function leftRelease(event){
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }

    o.setAnimationName("Left-idle")
    top.setAnimationName("Left-idle")
    bottom.setAnimationName("Left-idle")
    shoes.setAnimationName("Left-idle")
    hair.setAnimationName("Left-idle")
}

function rightRelease(event){
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }
    o.setAnimationName("Right-idle")
    top.setAnimationName("Right-idle")
    bottom.setAnimationName("Right-idle")
    shoes.setAnimationName("Right-idle")
    hair.setAnimationName("Right-idle")
}

function upRelease(event){
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }
    o.setAnimationName("Up-idle")
    top.setAnimationName("Up-idle")
    bottom.setAnimationName("Up-idle")
    shoes.setAnimationName("Up-idle")
    hair.setAnimationName("Up-idle")
}

function downRelease(event){
    //body
    var o;
    o = runtimeScene.getObjects("Player"+BodyColor).find((o) => o.player_id === event.player_id)
    
    //top
    var top;
    if (TopStyle === "0"){
        top = runtimeScene.getObjects("EmptyTop").find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "1"){
        top = runtimeScene.getObjects("Suit"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "2"){
        top = runtimeScene.getObjects("Basic"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "3"){
        top = runtimeScene.getObjects("Floral"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "4"){
        top = runtimeScene.getObjects("Sailor"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "5"){
        top = runtimeScene.getObjects("Overall"+TopColor).find((o) => o.player_id === event.player_id)
    }
    else if (TopStyle === "6"){
        top = runtimeScene.getObjects("Sporty"+TopColor).find((o) => o.player_id === event.player_id)
    }
    
    //bottom
    var bottom;
    if (BottomStyle === "0"){
        bottom = runtimeScene.getObjects("EmptyBottom").find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "1"){
        bottom = runtimeScene.getObjects("Pant"+BottomColor).find((o) => o.player_id === event.player_id)
    }
    else if (BottomStyle === "2"){
        bottom = runtimeScene.getObjects("Skirt"+BottomColor).find((o) => o.player_id === event.player_id)
    }

    // shoes
    var shoes;
    if (ShoesStyle === "0"){
        shoes = runtimeScene.getObjects("EmptyShoes").find((o) => o.player_id === event.player_id)
    }
    else {
        shoes = runtimeScene.getObjects("Shoes"+ShoesColor).find((o) => o.player_id === event.player_id)
    }

    //hair
    var hair;
    if (HairStyle === "0"){
        hair = runtimeScene.getObjects("EmptyHair").find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "1"){
        hair = runtimeScene.getObjects("Emo"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "2"){
       hair = runtimeScene.getObjects("Gentle"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "3"){
        hair = runtimeScene.getObjects("Curly"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "4"){
        hair = runtimeScene.getObjects("Space"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "5"){
        hair = runtimeScene.getObjects("Braids"+HairColor).find((o) => o.player_id === event.player_id)
    }
    else if (HairStyle === "6"){
        hair = runtimeScene.getObjects("Wavy"+HairColor).find((o) => o.player_id === event.player_id)
    }

    if (typeof o === "undefined") {
        return
    }
    
    o.setAnimationName("Down-idle")
    top.setAnimationName("Down-idle")
    bottom.setAnimationName("Down-idle")
    shoes.setAnimationName("Down-idle")
    hair.setAnimationName("Down-idle")
}