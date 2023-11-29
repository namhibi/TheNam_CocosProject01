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
        lampColor: cc.Color,
        defaultColor: cc.Color,
        count: 0,
        timerFlash: 0,
        timer: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    update(dt) { 
        if (this.isFlashing) {
            this.timer += dt;
            if (this.timer >= 0.6) {
                this.node.color = this.defaultColor;
                this.isFlashing = false;
            } else if (this.timer >= 0.3) {
                if (this.count % 2 === 0) {
                    this.node.color = this.defaultColor;
                } else {
                    this.node.color = this.lampColor;
                }
                this.count++;
            }
        }
    },
    startLight() {
        // this.node.color = this.lampColor;
        // this.scheduleOnce(function () {
        //     this.flashOff();
        // }, 1);
        this.node.color = this.lampColor;
        this.isFlashing = true;
    },
    flashOff() {
        // this.fash = function () {
        //     if (this.timer >= 0.6) {
        //         this.node.color = this.defaultColor;
        //         this.unschedule(this.fash);
        //     }
        //     if (this.count % 2 == 0) {
        //         this.node.color = this.defaultColor;
        //     } else {
        //         this.node.color = this.lampColor;
        //     }
        //     this.timer += 0.1;
        //     this.count++;
        // }
        // this.schedule(this.fash, 0.1);
    },
});
