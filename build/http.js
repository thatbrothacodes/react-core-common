(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.http = {})));
}(this, (function (exports) { 'use strict';

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

    exports.ApiClient = ApiClient;
    exports.VaultClient = VaultClient;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
