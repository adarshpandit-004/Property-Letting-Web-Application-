"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/me";
exports.ids = ["pages/api/auth/me"];
exports.modules = {

/***/ "(api-node)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToken: () => (/* binding */ createToken),\n/* harmony export */   getUserFromRequest: () => (/* binding */ getUserFromRequest)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n // For parsing cookies from request headers\n // For handling JSON Web Tokens (JWT)\n// Secret key used to sign/verify tokens, taken from .env file\nconst SECRET = process.env.JWT_SECRET;\n// Extracts and verifies user from request cookie (if token is valid)\nfunction getUserFromRequest(req) {\n    const cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(req.headers.cookie || ''); // Get cookies from request\n    const token = cookies.token; // Get token cookie\n    if (!token) return null; // No token = no user\n    try {\n        // Verify and decode token using the secret key\n        const user = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.JWT_SECRET);\n        return user; // Return user payload (id, role, name)\n    } catch (err) {\n        return null; // Invalid token = return null\n    }\n}\n// Creates a new JWT token for a logged-in user\nfunction createToken(user) {\n    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({\n        id: user.id,\n        role: user.role,\n        name: user.name\n    }, SECRET, {\n        expiresIn: '7d'\n    } // Token valid for 7 days\n    );\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9hdXRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQixDQUFLLDJDQUEyQztBQUNoRCxDQUFJLHFDQUFxQztBQUV4RSw4REFBOEQ7QUFDOUQsTUFBTUUsU0FBU0MsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO0FBRXJDLHFFQUFxRTtBQUM5RCxTQUFTQyxtQkFBbUJDLEdBQUc7SUFDcEMsTUFBTUMsVUFBVVIsNkNBQUtBLENBQUNPLElBQUlFLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJLEtBQU8sMkJBQTJCO0lBQzlFLE1BQU1DLFFBQVFILFFBQVFHLEtBQUssRUFBd0IsbUJBQW1CO0lBRXRFLElBQUksQ0FBQ0EsT0FBTyxPQUFPLE1BQWdDLHFCQUFxQjtJQUV4RSxJQUFJO1FBQ0YsK0NBQStDO1FBQy9DLE1BQU1DLE9BQU9YLDBEQUFVLENBQUNVLE9BQU9SLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtRQUNyRCxPQUFPTyxNQUEyQyx1Q0FBdUM7SUFDM0YsRUFBRSxPQUFPRSxLQUFLO1FBQ1osT0FBTyxNQUEyQyw4QkFBOEI7SUFDbEY7QUFDRjtBQUVBLCtDQUErQztBQUN4QyxTQUFTQyxZQUFZSCxJQUFJO0lBQzlCLE9BQU9YLHdEQUFRLENBQ2I7UUFBRWdCLElBQUlMLEtBQUtLLEVBQUU7UUFBRUMsTUFBTU4sS0FBS00sSUFBSTtRQUFFQyxNQUFNUCxLQUFLTyxJQUFJO0lBQUMsR0FDaERqQixRQUNBO1FBQUVrQixXQUFXO0lBQUssRUFBbUMseUJBQXlCOztBQUVsRiIsInNvdXJjZXMiOlsiRDpcXFllYXIgMlxcU1dEXFxBU1NJR05NRU5UXFxzd2RfcHJvamVjdF8zMTM0MzI5XFxsaWJcXGF1dGguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdjb29raWUnOyAgICAgLy8gRm9yIHBhcnNpbmcgY29va2llcyBmcm9tIHJlcXVlc3QgaGVhZGVyc1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7ICAgIC8vIEZvciBoYW5kbGluZyBKU09OIFdlYiBUb2tlbnMgKEpXVClcclxuXHJcbi8vIFNlY3JldCBrZXkgdXNlZCB0byBzaWduL3ZlcmlmeSB0b2tlbnMsIHRha2VuIGZyb20gLmVudiBmaWxlXHJcbmNvbnN0IFNFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XHJcblxyXG4vLyBFeHRyYWN0cyBhbmQgdmVyaWZpZXMgdXNlciBmcm9tIHJlcXVlc3QgY29va2llIChpZiB0b2tlbiBpcyB2YWxpZClcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJGcm9tUmVxdWVzdChyZXEpIHtcclxuICBjb25zdCBjb29raWVzID0gcGFyc2UocmVxLmhlYWRlcnMuY29va2llIHx8ICcnKTsgICAvLyBHZXQgY29va2llcyBmcm9tIHJlcXVlc3RcclxuICBjb25zdCB0b2tlbiA9IGNvb2tpZXMudG9rZW47ICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdG9rZW4gY29va2llXHJcblxyXG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsOyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vIHRva2VuID0gbm8gdXNlclxyXG5cclxuICB0cnkge1xyXG4gICAgLy8gVmVyaWZ5IGFuZCBkZWNvZGUgdG9rZW4gdXNpbmcgdGhlIHNlY3JldCBrZXlcclxuICAgIGNvbnN0IHVzZXIgPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcclxuICAgIHJldHVybiB1c2VyOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIHVzZXIgcGF5bG9hZCAoaWQsIHJvbGUsIG5hbWUpXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEludmFsaWQgdG9rZW4gPSByZXR1cm4gbnVsbFxyXG4gIH1cclxufVxyXG5cclxuLy8gQ3JlYXRlcyBhIG5ldyBKV1QgdG9rZW4gZm9yIGEgbG9nZ2VkLWluIHVzZXJcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRva2VuKHVzZXIpIHtcclxuICByZXR1cm4gand0LnNpZ24oXHJcbiAgICB7IGlkOiB1c2VyLmlkLCByb2xlOiB1c2VyLnJvbGUsIG5hbWU6IHVzZXIubmFtZSB9LCAgLy8gUGF5bG9hZCB0byBzdG9yZSBpbiB0b2tlblxyXG4gICAgU0VDUkVULCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaWduaW5nIHNlY3JldFxyXG4gICAgeyBleHBpcmVzSW46ICc3ZCcgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2tlbiB2YWxpZCBmb3IgNyBkYXlzXHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsicGFyc2UiLCJqd3QiLCJTRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImdldFVzZXJGcm9tUmVxdWVzdCIsInJlcSIsImNvb2tpZXMiLCJoZWFkZXJzIiwiY29va2llIiwidG9rZW4iLCJ1c2VyIiwidmVyaWZ5IiwiZXJyIiwiY3JlYXRlVG9rZW4iLCJzaWduIiwiaWQiLCJyb2xlIiwibmFtZSIsImV4cGlyZXNJbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/auth.js\n");

/***/ }),

/***/ "(api-node)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n // Use promise-based MySQL client\n// Create a connection pool using environment variables\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    waitForConnections: true,\n    connectionLimit: 10\n});\n// Export the pool for use in API routes and queries\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUMsQ0FBQyxpQ0FBaUM7QUFFckUsdURBQXVEO0FBQ3ZELE1BQU1DLE9BQU9ELGdFQUFnQixDQUFDO0lBQzVCRyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87SUFDekJDLE1BQU1ILFFBQVFDLEdBQUcsQ0FBQ0csT0FBTztJQUN6QkMsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxXQUFXO0lBQ2pDQyxVQUFVUCxRQUFRQyxHQUFHLENBQUNPLE9BQU87SUFDN0JDLG9CQUFvQjtJQUNwQkMsaUJBQWlCO0FBQ25CO0FBRUEsb0RBQW9EO0FBQ3BELGlFQUFlYixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJEOlxcWWVhciAyXFxTV0RcXEFTU0lHTk1FTlRcXHN3ZF9wcm9qZWN0XzMxMzQzMjlcXGxpYlxcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJzsgLy8gVXNlIHByb21pc2UtYmFzZWQgTXlTUUwgY2xpZW50XHJcblxyXG4vLyBDcmVhdGUgYSBjb25uZWN0aW9uIHBvb2wgdXNpbmcgZW52aXJvbm1lbnQgdmFyaWFibGVzXHJcbmNvbnN0IHBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcclxuICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULCAgICAgICAgIC8vIERhdGFiYXNlIGhvc3RcclxuICB1c2VyOiBwcm9jZXNzLmVudi5EQl9VU0VSLCAgICAgICAgIC8vIERCIHVzZXJuYW1lXHJcbiAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1NXT1JELCAvLyBEQiBwYXNzd29yZFxyXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLCAgICAgLy8gREIgbmFtZVxyXG4gIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSwgICAgICAgICAgLy8gV2FpdCBpZiBubyBjb25uZWN0aW9uIGlzIGF2YWlsYWJsZVxyXG4gIGNvbm5lY3Rpb25MaW1pdDogMTAsICAgICAgICAgICAgICAgLy8gTWF4IG51bWJlciBvZiBjb25uZWN0aW9uc1xyXG59KTtcclxuXHJcbi8vIEV4cG9ydCB0aGUgcG9vbCBmb3IgdXNlIGluIEFQSSByb3V0ZXMgYW5kIHF1ZXJpZXNcclxuZXhwb3J0IGRlZmF1bHQgcG9vbDtcclxuIl0sIm5hbWVzIjpbIm15c3FsIiwicG9vbCIsImNyZWF0ZVBvb2wiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJ3YWl0Rm9yQ29ubmVjdGlvbnMiLCJjb25uZWN0aW9uTGltaXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./lib/db.js\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fme&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cme.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fme&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cme.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_me_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\me.js */ \"(api-node)/./pages/api/auth/me.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_me_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_me_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/me\",\n        pathname: \"/api/auth/me\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_auth_me_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRm1lJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUNhdXRoJTVDbWUuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ0U7QUFDMUQ7QUFDc0Q7QUFDdEQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLGtEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyxrREFBUTtBQUNwQztBQUNPLHdCQUF3Qix5R0FBbUI7QUFDbEQ7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFwaVxcXFxhdXRoXFxcXG1lLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL21lXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9tZVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fme&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cme.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/auth/me.js":
/*!******************************!*\
  !*** ./pages/api/auth/me.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(api-node)/./lib/auth.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(api-node)/./lib/db.js\");\n // Extract user from token\n // DB connection\n// GET /api/auth/me\n// Returns the logged-in user's profile data\nasync function handler(req, res) {\n    const userToken = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.getUserFromRequest)(req); // Extract user from JWT token\n    // If no valid token → unauthorized\n    if (!userToken) {\n        return res.status(401).json({\n            message: 'Unauthorized'\n        });\n    }\n    // Fetch user's full data from the DB using ID from token\n    const [rows] = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query('SELECT id, name, email, role FROM users WHERE id = ?', [\n        userToken.id\n    ]);\n    const user = rows[0];\n    // If user doesn't exist in DB\n    if (!user) {\n        return res.status(404).json({\n            message: 'User not found'\n        });\n    }\n    // Return user info\n    return res.status(200).json(user);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9hdXRoL21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnRCxDQUFDLDBCQUEwQjtBQUNqRCxDQUF1QixnQkFBZ0I7QUFFakUsbUJBQW1CO0FBQ25CLDRDQUE0QztBQUM3QixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsTUFBTUMsWUFBWUwsNkRBQWtCQSxDQUFDRyxNQUFNLDhCQUE4QjtJQUV6RSxtQ0FBbUM7SUFDbkMsSUFBSSxDQUFDRSxXQUFXO1FBQ2QsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQWU7SUFDeEQ7SUFFQSx5REFBeUQ7SUFDekQsTUFBTSxDQUFDQyxLQUFLLEdBQUcsTUFBTVIscURBQVEsQ0FDM0Isd0RBQ0E7UUFBQ0ksVUFBVU0sRUFBRTtLQUFDO0lBR2hCLE1BQU1DLE9BQU9ILElBQUksQ0FBQyxFQUFFO0lBRXBCLDhCQUE4QjtJQUM5QixJQUFJLENBQUNHLE1BQU07UUFDVCxPQUFPUixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBaUI7SUFDMUQ7SUFFQSxtQkFBbUI7SUFDbkIsT0FBT0osSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0s7QUFDOUIiLCJzb3VyY2VzIjpbIkQ6XFxZZWFyIDJcXFNXRFxcQVNTSUdOTUVOVFxcc3dkX3Byb2plY3RfMzEzNDMyOVxccGFnZXNcXGFwaVxcYXV0aFxcbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VXNlckZyb21SZXF1ZXN0IH0gZnJvbSAnQC9saWIvYXV0aCc7IC8vIEV4dHJhY3QgdXNlciBmcm9tIHRva2VuXHJcbmltcG9ydCBkYiBmcm9tICdAL2xpYi9kYic7ICAgICAgICAgICAgICAgICAgICAgICAvLyBEQiBjb25uZWN0aW9uXHJcblxyXG4vLyBHRVQgL2FwaS9hdXRoL21lXHJcbi8vIFJldHVybnMgdGhlIGxvZ2dlZC1pbiB1c2VyJ3MgcHJvZmlsZSBkYXRhXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBjb25zdCB1c2VyVG9rZW4gPSBnZXRVc2VyRnJvbVJlcXVlc3QocmVxKTsgLy8gRXh0cmFjdCB1c2VyIGZyb20gSldUIHRva2VuXHJcblxyXG4gIC8vIElmIG5vIHZhbGlkIHRva2VuIOKGkiB1bmF1dGhvcml6ZWRcclxuICBpZiAoIXVzZXJUb2tlbikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBGZXRjaCB1c2VyJ3MgZnVsbCBkYXRhIGZyb20gdGhlIERCIHVzaW5nIElEIGZyb20gdG9rZW5cclxuICBjb25zdCBbcm93c10gPSBhd2FpdCBkYi5xdWVyeShcclxuICAgICdTRUxFQ1QgaWQsIG5hbWUsIGVtYWlsLCByb2xlIEZST00gdXNlcnMgV0hFUkUgaWQgPSA/JywgXHJcbiAgICBbdXNlclRva2VuLmlkXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSByb3dzWzBdO1xyXG5cclxuICAvLyBJZiB1c2VyIGRvZXNuJ3QgZXhpc3QgaW4gREJcclxuICBpZiAoIXVzZXIpIHtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6ICdVc2VyIG5vdCBmb3VuZCcgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBSZXR1cm4gdXNlciBpbmZvXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJnZXRVc2VyRnJvbVJlcXVlc3QiLCJkYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1c2VyVG9rZW4iLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInJvd3MiLCJxdWVyeSIsImlkIiwidXNlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/auth/me.js\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2Fme&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5Cme.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();