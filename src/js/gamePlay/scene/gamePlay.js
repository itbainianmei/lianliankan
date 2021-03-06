var GamePlayScene  = cc.Scene.extend({
  onEnter:function () {
    this._super();

    var layer = new GamePlayLayer();
    this.addChild(layer);

  }
});

var GamePlayLayer = cc.Layer.extend({

  backgroundLayer : null,
  touchLayer : null,
  ctor : function(){
    this._super();

    this.addCache();

    this.addBackgroundLayer();

    this.addTouchLayer();
  },

  addCache : function(){

    cc.spriteFrameCache.addSpriteFrames(res.tile_plist);
    cc.spriteFrameCache.addSpriteFrames(res.pipe_plist);
    cc.spriteFrameCache.addSpriteFrames(res.boom_plist);
    cc.spriteFrameCache.addSpriteFrames(res.icon_plist);
    cc.spriteFrameCache.addSpriteFrames(res.result_plist);
    cc.spriteFrameCache.addSpriteFrames(res.prop_plist);
    cc.spriteFrameCache.addSpriteFrames(res.map_plist);

  },


  addBackgroundLayer : function(){

    this.backgroundLayer = new GPBackgroundLayer();
    this.addChild(this.backgroundLayer);
  },

  addTouchLayer : function(){
    this.touchLayer = new GPTouchLayer();
    this.addChild(this.touchLayer);
  }
});
