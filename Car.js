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
        pos:cc.Node,
        pos2:cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    move(){
        let moveTween = cc.tween(this.node)
        .to(5, { position: this.pos.position, scale: 1 })
        .call(() => {
            moveTween = cc.tween(this.node)
                .to(5, { position: this.pos2.position })
                .call(() => {
                    console.log("Tween thứ hai đã hoàn thành!");
                }) 
                .start();
        })
        .start();
    
    moveTween.start();
    }
    // update (dt) {},
});
