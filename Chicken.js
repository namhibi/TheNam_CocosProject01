// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
       ChickenAnimation:cc.Animation,
       pos:cc.Node,
       DieChicken:cc.Node,
       ChickenSprite:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.ChickenAnimation=this.node.getChildByName("ChickenSprite").getComponent(cc.Animation);
        this.ChickenSprite=this.node.getChildByName("ChickenSprite");
        this.node.scale=0.5;
    },

    start () {

    },
    move(){
        this.ChickenAnimation.play('Chicken');
        let moveTween = cc.tween(this.node)
    .to(5, { position: this.pos.position,scale:0.7 },).call(() => {
        let targetPosition = new cc.Vec2(this.pos.position.x + 200, this.pos.position.y - 30);
        moveTween = cc.tween(this.node)
                .to(0.5, { position:targetPosition})
                .call(() => {
                    this.ChickenSprite.active=false;
                    this.DieChicken.active=true;
                }) 
                .start();
        this.ChickenAnimation.play('ChickenDie');
    });
    moveTween.start();
    }

    // update (dt) {},
});
