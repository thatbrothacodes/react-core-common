(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.token = {})));
}(this, (function (exports) { 'use strict';

    class ApiToken {
        get() {
            return "get";
        }

        encrypt() {
            return "encrypt";
        }

        decrypt() {
            return "decrypt";
        }
    }

    class VaultToken {
        get() {
            return "get";
        }

        encrypt() {
            return "encrypt";
        }

        decrypt() {
            return "decrypt";
        }
    }

    exports.ApiToken = ApiToken;
    exports.VaultToken = VaultToken;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
