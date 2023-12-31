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
        lampList: [cc.Node],
        lampIndex: 0,
        countDown: 3,
        countDownTxt: cc.Label,
        chicken: cc.Node,
        car: cc.Node,
        timeElapsed: 0,
        lampDelay: 2.2,
        countdownInterval: 1,
        isLightOn: false,
        starWalk:false
    },
    onLoad() {

    },
    start() {
        this.timeElapsed = 0;
    },
    // turnOnTheLight() {
    //     this.lampList[this.lampIndex].getComponent("Lamp").startLight();
    //     this.lampIndex++;
    //     this.lampActive = function () {
    //         if (this.lampIndex == 2) {
    //             this.lampList[this.lampIndex].getComponent("Lamp").node.color = this.lampList[this.lampIndex].getComponent("Lamp").lampColor;
    //             this.countDownNumber();
    //             this.unschedule(this.lampActive);
    //         } else {
    //             this.lampList[this.lampIndex].getComponent("Lamp").startLight();
    //             this.lampIndex++;
    //         }
    //     }
    //     this.schedule(this.lampActive, 2.2);
    // },
    // countDownNumber() {
    //     this.countDownTxt.string = this.countDown.toString();
    //     this.countDown--;
    //     this.count = function () {
    //         if (this.countDown == 0) {
    //             this.countDownTxt.string = "";
    //             this.chicken.getComponent("Chicken").move();
    //             this.car.getComponent("Car").move();
    //             this.unschedule(this.count);
    //         } else {
    //             console.log(this.countDown);
    //             this.countDownTxt.string = this.countDown.toString();
    //         }
    //         this.countDown--;
    //     }
    //     this.schedule(this.count, 1);
    // },
    update(dt) {
        if (!this.isLightOn) {
            this.timeElapsed += dt;

            if (this.timeElapsed >= this.lampDelay) {
                this.timeElapsed = 0;

                if (this.lampIndex <2) {
                    this.lampList[this.lampIndex].getComponent("Lamp").startLight();
                    this.lampIndex++;
                } else {
                    this.isLightOn = true;
                }
            }
        } else {
            this.lampList[2].getComponent("Lamp").node.color = this.lampList[this.lampIndex].getComponent("Lamp").lampColor;
            this.timeElapsed += dt;
            if (this.timeElapsed >= this.countdownInterval) {
                this.timeElapsed = 0;
                if (this.countDown > 0) {
                    console.log(this.countDown);
                    this.countDownTxt.string = this.countDown.toString();
                    this.countDown--;
                } else {
                    if(!this.starWalk){
                        this.countDownTxt.string = "";
                        this.chicken.getComponent("Chicken").move();
                        this.car.getComponent("Car").move();
                        this.starWalk=true;
                    }
                    this.isLightOn = false;
                }
            }
        }
    },

    countDownNumber() {
        this.countDownTxt.string = this.countDown.toString();
    }
});
