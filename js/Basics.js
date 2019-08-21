"use strict";
var _createClass=function(){
    function r(e,t){
    for(var n=0;
        n<t.length;
        n++){
            var r=t[n];
            r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)
        }
    }
    return function(e,t,n){
        return t&&r(e.prototype,t),n&&r(e,n),e
    }
}();
function _classCallCheck(e,t){
    if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")
}
var Basics=function(){
    function e(){
        _classCallCheck(this,e)
    }
    return _createClass(e,null,[{
        key:"hide",value:function(e){
        var t=document.querySelector(e);
        t.classList.remove("show-height"),t.classList.add("hide-height")
    }
},{
    key:"show",value:function(e){
        var t=document.querySelector(e);
        t.classList.remove("hide-height"),t.classList.add("show-height")
    }
},{
    key:"createHtml",value:function(e,t){
        document.querySelector(e).innerHTML+=t
    }
},{
    key:"replaceHtml",value:function(e,t){
        document.querySelector(e).innerHTML=t
    }
}]),e
}();
