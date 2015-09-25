var HelloWorldScene = cc.Scene.extend({
    onEnterTransitionDidFinish: function () {
        this._super();
        var layer = new AppLayer();
        this.addChild(layer);
    }
});

var AppLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        this.init();
    },

    init: function() {
        this.initBg();
        this.initAnsweBtns();
        this.addDialog();
    },

    initBg: function() {
        var bg = cc.Sprite.create(GameRes.bg);
        bg.setPosition(cc.p(Math.round(cc.winSize.width / 2), Math.round(cc.winSize.height / 2)));
        this.addChild(bg);
    },

    initAnsweBtns: function() {
        var button = new ccui.Button();
        button.setTouchEnabled(true);
        button.loadTextures(GameRes.button, GameRes.buttonPress, "");
        button.setAnchorPoint(cc.p(0, 0));
        button.setPosition(cc.p(30, 30));
        button.addTouchEventListener(function() {

        }, this);
        this.addChild(button);

        var button = new ccui.Button();
        button.setTouchEnabled(true);
        button.loadTextures(GameRes.button, GameRes.buttonPress, "");
        button.setAnchorPoint(cc.p(0, 0));
        button.setPosition(cc.p(380, 30));
        button.addTouchEventListener(function() {

        }, this);
        this.addChild(button);
    },

    addDialog: function() {
        var dialog = cc.Sprite.create(GameRes.dialog);
        dialog.setAnchorPoint(cc.p(0, 0));
        dialog.setPosition(cc.p(0, 250));
        this.addChild(dialog);

        var dialog = cc.Sprite.create(GameRes.dialog);
        dialog.setAnchorPoint(cc.p(0, 0));
        dialog.setPosition(cc.p(0, 450));
        this.addChild(dialog);

        var dialog = cc.Sprite.create(GameRes.dialog);
        dialog.setAnchorPoint(cc.p(0, 0));
        dialog.setPosition(cc.p(cc.winSize.width, 650));
        dialog.setScaleX(-1);
        this.addChild(dialog);

        var dialog = cc.Sprite.create(GameRes.dialog);
        dialog.setAnchorPoint(cc.p(0, 0));
        dialog.setPosition(cc.p(cc.winSize.width, 850));
        dialog.setScaleX(-1);
        this.addChild(dialog);

        var dialog = cc.Sprite.create(GameRes.dialog);
        dialog.setAnchorPoint(cc.p(0, 0));
        dialog.setPosition(cc.p(0, 1050));
        this.addChild(dialog);
    }
});

