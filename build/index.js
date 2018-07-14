(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.main = {})));
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

    class ApiClient {
        get() {
            return "GET";
        }

        post() {
            return "POST";
        }

        put() {
            return "PUT";
        }

        delete() {
            return "DELETE";
        }
    }

    class VaultClient {
        get() {
            return "GET";
        }

        post() {
            return "POST";
        }

        put() {
            return "PUT";
        }

        delete() {
            return "DELETE";
        }
    }

    exports.ApiToken = ApiToken;
    exports.VaultToken = VaultToken;
    exports.ApiClient = ApiClient;
    exports.VaultClient = VaultClient;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
