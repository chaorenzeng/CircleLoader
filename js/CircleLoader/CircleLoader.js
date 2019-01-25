/*
 * CircleLoader loading插件
 * Version:	1.0.0
 * Author:	KevinTseng
 */

(function (window, document) {
    //属性
    window.CircleLoader = function (option) {
        this.cl = null;
        this.settings = extend({
            left: '48%',
            top: '40%',
            width: "50px",
            height: "50px",
            lineWidth: "12%",
            lineHeight: "12%",
            lineRadius: "0%",
            lineBgColor: "#337ab7",
            index: 1,
            display: false,
            css_link: null
        }, option, true);
        this._init();
    }
    //方法
    CircleLoader.prototype = {
        _init: function () {
            //判断是否存在，不存在则创建loader
            var settings = this.settings;
            var has_create = document.getElementsByClassName('sk-circle-loader');
            if (has_create.length > 0) {
                this.cl = has_create[0];
            } else {
                //引用css
                if(settings.css_link){
                	includeLinkStyle(settings.css_link);
                }
                //CircleLoader容器 位置
                var cl = this.cl = document.createElement('section');
                cl.className = "sk-circle-loader";
                cl.style.left = settings.left;
                cl.style.top = settings.top;
                cl.style.zIndex = settings.index;
                cl.style.display = settings.display ? "block" : "none";
                //CircleLoader 大小
                var cl_bounce = document.createElement('div');
                cl_bounce.className = "sk-circle-bounce";
                cl_bounce.style.width = settings.width;
                cl_bounce.style.height = settings.height;
                //CircleLoader 子容器
                for (var i = 1; i <= 12; i++) {
                    var cl_bounce_child = document.createElement('div');
                    cl_bounce_child.className = "sk-child";
                    cl_bounce_child.className += " sk-circle-" + i;
                    //CircleLoader 显示点
                    var cl_point = document.createElement('div');
                    cl_point.className = "sk-circle-point";
                    cl_point.style.width = settings.lineWidth;
                    cl_point.style.height = settings.lineHeight;
                    cl_point.style.borderRadius = settings.lineRadius;
                    cl_point.style.backgroundColor = settings.lineBgColor;
                    cl_bounce_child.appendChild(cl_point);
                    cl_bounce.appendChild(cl_bounce_child);
                }
                cl.appendChild(cl_bounce);
                document.body.appendChild(cl);
            }
        },
        show: function () {
            this.cl.style.display = "block";
        },
        hide: function () {
            this.cl.style.display = "none";
        }
    }
    //默认值覆盖
    function extend(o, n, override) {
        for (var key in n) {
            if (n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)) {
                o[key] = n[key];
            }
        }
        return o;
    }
    //引用css
    function includeLinkStyle(url) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    //判断头部文件存在
    function isInclude(name) {
        var js = /js$/i.test(name);
        var es = document.getElementsByTagName(js ? 'script' : 'link');
        for (var i = 0; i < es.length; i++)
            if (es[i][js ? 'src' : 'href'].indexOf(name) != -1) return true;
        return false;
    }
})(window,document);