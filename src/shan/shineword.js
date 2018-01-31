;void function () {

    var defaults = {
        items: ".J-shine-wrod",
        num: 3,
        speed: 50,
        shineClass: "shine"
    };

    var Shineword = function (config) {
        this.config = $.extend(true, {}, defaults, config);
        observe(this);

        this.__init();
    };

    Shineword.prototype = {
        constructor: Shineword,
        _: {},
        $elems: {},
        __init: function () {
            var _this = this;
            this.$elems = $(this.config.items);

            this.$elems.each(function(){
                _this._initStr($(this));
            });

        },
        __bindEvents: function () {
            

        },
        _initStr: function($item){
            var str = $item.html().split("");

            for(var i=0; i<str.length; i++){
                str[i] = '<span class="J-shine-item">' + str[i] + '</span>';
            }

            $item.html("<span class='J-shine-source'>" + $item.html() + "</span>");
            $item.append("<span style='display:none;' class='J-shine-part'>" + str.join("") + "</span>");

            this._shine($item);
        },
        _changeVisible: function($item){
            if($item.hasClass(this.config.shineClass)){
                $item.removeClass(this.config.shineClass);
            }else{
                $item.addClass(this.config.shineClass);
            }
        },
        _shine: function($item){
            var _this = this;
            var times = 0;
            var len = $item.find(".J-shine-item").length;
            var random = [];

            for(var i=0; i<this.config.num; i++){
                random[i] = parseInt(Math.random() * len);
            }

            setInterval(function(){
                if(times < 4){
                    for(var i=0; i<_this.config.num; i++){
                        _this._changeVisible($item.find(".J-shine-item").eq(random[i]));
                    }
                    times ++;
                }else{
                    times = 0;
                    for(var i=0; i<_this.config.num; i++){
                        random[i] = parseInt(Math.random() * len);
                    }
                }
            }, _this.config.speed);
        },
        shine: function($item){
            if($item){
                $item.find(".J-shine-source").hide();
                $item.find(".J-shine-part").show();
            }else{
                this.$elems.find(".J-shine-source").hide();
                this.$elems.find(".J-shine-part").show();
            }
            
        },
        stopShine: function($item){
            if($item){
                $item.find(".J-shine-source").show();
                $item.find(".J-shine-part").hide();
            }else{
                this.$elems.find(".J-shine-source").show();
                this.$elems.find(".J-shine-part").hide();
            }
        }
        
    };
    
    window.Shineword = Shineword;
}.call(this);