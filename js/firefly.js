var __encode = 'jsjiami.com', _a = {}, _0xb483 = ["_decode", "http://www.javascript.com/javascript/juery/helloworld.html"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);

var __Oxb134e = [
    "document.body", "#f00", "jQuery.fiberFly", "random", "ceil", "50%", "ceil", "floor", "height", "width",
    "on", "elWidth", "width", "offsetHeight", "offsetWidth", "top", "left", "offsetLeft", "offsetTop", "create",
    "fly", "sparks", ".", "namespac", "child", "clear", "pause", "resume", "createSpark", "removeSpark",
    "Math.floor", "Math.random", "Math.ceil", "<div>", "addClass", "_onSparkId", "append", "show", "abs",
    "opacity", "color", "zIndex", "borderRadius", "_paused", "total", "ofTop", "ofLeft", "twinkle",
    "minPixel", "maxPixel", "addEventListener", "removeEventListener", "delete",
    "version number, jsjiami.com", "period window,", "please support our work", "jsjiami", "mi.", "< div >",
    "addClass", "_onSparkId", "href", "http://www.iecraft.com", "Powered by IEcraft< /div >", "write",
    "undefined", "log", "+"
];

!function ($) {
    var options = {
        total: 10,
        ofTop: 0,
        ofLeft: 0,
        on: "body",
        twinkle: 0.2,
        minPixel: 1,
        maxPixel: 2,
        color: "#f00",
        namespace: "jQuery.fiberFly",
        zIndex: Math.floor(20 * Math.random()) - 1,
        borderRadius: "50%"
    };

    $.fiberFly = function (opts) {
        $.fiberFly.opt = $.extend({}, options, opts);
        $.fiberFly.el = $(document[$.fiberFly.opt.on]);
        $.fiberFly.elWidth = $.fiberFly.el.width();
        $.fiberFly.elHeight = $.fiberFly.el.height();

        $(window).on("resize", function () {
            $.fiberFly.el = $(document[$.fiberFly.opt.on]);
            $.fiberFly.elWidth = $.fiberFly.el.width();
            $.fiberFly.elHeight = $.fiberFly.el.height();
        });

        for (var i = 0; i < $.fiberFly.opt.total; i++) {
            var size = Math.floor(Math.random() * ($.fiberFly.opt.maxPixel - $.fiberFly.opt.minPixel + 1)) + $.fiberFly.opt.minPixel,
                spark = $("<div>").addClass("fiberFly").css({
                    position: "absolute",
                    width: size,
                    height: size,
                    "background-color": $.fiberFly.opt.color,
                    "z-index": $.fiberFly.opt.zIndex,
                    "border-radius": $.fiberFly.opt.borderRadius,
                    top: $.fiberFly.opt.ofTop + Math.floor($.fiberFly.elHeight - 50),
                    left: $.fiberFly.opt.ofLeft + Math.floor($.fiberFly.elWidth - 50),
                    "pointer-events": "none"
                });

            $(document.body).append(spark);
            spark.animate({
                top: $.fiberFly.elHeight + Math.floor($.fiberFly.elHeight - 50),
                left: $.fiberFly.elWidth + Math.floor($.fiberFly.elWidth - 50),
                opacity: 0
            }, 2000 * (Math.random() + 0.5), function () {
                if (!$.fiberFly.opt.paused) $.fiberFly.removeSpark(this)
            });
        }
        return $.fiberFly.opt.on = $(document.body), this
    };

    $.fiberFly.pause = function () {
        $.fiberFly.opt.paused = true;
        $(".fiberFly").stop();
    };

    $.fiberFly.resume = function () {
        $.fiberFly.opt.paused = false;
        $(".fiberFly").each(function () {
            $.fiberFly.removeSpark(this);
        });
    };

    $.fiberFly.createSpark = function (size) {
        var spark = $("<div>").addClass("fiberFly").css({
            position: "absolute",
            width: size,
            height: size,
            "background-color": $.fiberFly.opt.color,
            "z-index": $.fiberFly.opt.zIndex,
            "border-radius": $.fiberFly.opt.borderRadius,
            top: $.fiberFly.opt.ofTop + Math.floor($.fiberFly.elHeight - 50),
            left: $.fiberFly.opt.ofLeft + Math.floor($.fiberFly.elWidth - 50)
        });

        return ($.fiberFly.opt.on === document.body ? $(document.body) : $(document[$.fiberFly.opt.on])).append(spark), spark;
    };

    $.fiberFly.removeSpark = function (spark) {
        $(spark).animate({
            top: $.fiberFly.elHeight + Math.floor($.fiberFly.elHeight - 50),
            left: $.fiberFly.elWidth + Math.floor($.fiberFly.elWidth - 50),
            opacity: 0
        }, 2000 * (Math.random() + 0.5), function () {
            $(this).remove();
        });
    };

    $.fiberFly.rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    $.fiberFly.random = function (max) {
        return Math.random() * max - 1;
    };

    $.fiberFly.randomOpacity = function (max) {
        return Math.random() < max ? 0 : 1;
    };
}(jQuery);

document.addEventListener("DOMContentLoaded", function () {});

(function (_0xd0c7x2, _0xd0c7x3, _0xd0c7x7, _0xd0c7x8, _0xd0c7x6, _0xd0c7x9) {
    _0xd0c7x9 = "undefined";
    _0xd0c7x8 = function (_0xd0c7xa) {
        if (typeof alert !== _0xd0c7x9) {
            alert(_0xd0c7xa);
        }
        if (typeof console !== _0xd0c7x9) {
            console.log(_0xd0c7xa);
        }
    };
    _0xd0c7x7 = function (_0xd0c7x1, _0xd0c7x2) {
        return _0xd0c7x1 + _0xd0c7x2;
    };
    _0xd0c7x6 = _0xd0c7x7(_0xd0c7x7(_0xd0c7x7("97", "98"), "99"), "100");
    try {
        _0xd0c7x2 = __encode;
        if (!(typeof _0xd0c7x2 !== _0xd0c7x9 && _0xd0c7x2 === _0xd0c7x7("97", "99"))) {
            _0xd0c7x8(_0xd0c7x6);
        }
    } catch (e) {
        _0xd0c7x8(_0xd0c7x6);
    }
})({})
