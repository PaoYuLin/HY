;
(function (global, undefined) {
    'use strict'
    var _global;


    window.addEventListener('load', function () {
        'use strict'
    });

    var hy = {
        $: function (ele) {
            if (typeof ele == 'string') {
                return document.querySelector(ele);
            }
        },

        $$: function (ele) {
            if (typeof ele == 'string') {
                return Array.prototype.slice.call(document.querySelectorAll(ele));
            }
        },

        addEvent: function (obj, type, func) {
            return obj.addEventListener(type, func, false);
        },

        newsToggle: function (t) {
            if (typeof e === 'undefined') {
                var e = window.event;
            }
            e.target.classList.toggle('on');
            e.target.parentNode.classList.toggle('on');
        },

    }


    _global = (function () {
        return this || (0, eval)('this');
    }());
    !('hy' in _global) && (_global.hy = hy);

}());