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
exports.id = "pages/api/admin/users";
exports.ids = ["pages/api/admin/users"];
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

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fusers&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Cusers%5Cindex.js&middlewareConfigBase64=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fusers&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Cusers%5Cindex.js&middlewareConfigBase64=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_admin_users_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\admin\\users\\index.js */ \"(api-node)/./pages/api/admin/users/index.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_admin_users_index_js__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_admin_users_index_js__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/admin/users\",\n        pathname: \"/api/admin/users\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_admin_users_index_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGYWRtaW4lMkZ1c2VycyZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYWRtaW4lNUN1c2VycyU1Q2luZGV4LmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNFO0FBQzFEO0FBQ2lFO0FBQ2pFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw0REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsNERBQVE7QUFDcEM7QUFDTyx3QkFBd0IseUdBQW1CO0FBQ2xEO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgaG9pc3QgfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL3RlbXBsYXRlcy9oZWxwZXJzXCI7XG4vLyBJbXBvcnQgdGhlIHVzZXJsYW5kIGNvZGUuXG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiLi9wYWdlc1xcXFxhcGlcXFxcYWRtaW5cXFxcdXNlcnNcXFxcaW5kZXguanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FkbWluL3VzZXJzXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWRtaW4vdXNlcnNcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiAnJyxcbiAgICAgICAgZmlsZW5hbWU6ICcnXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fusers&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Cusers%5Cindex.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/admin/users/index.js":
/*!****************************************!*\
  !*** ./pages/api/admin/users/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api-node)/./lib/db.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(api-node)/./lib/auth.js\");\n // MySQL connection\n // Auth helper to validate user\n// Admin-only API route to fetch all users\nasync function handler(req, res) {\n    const user = (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.getUserFromRequest)(req); // Get logged-in user\n    // Reject if not an admin\n    if (!user || user.role !== 'admin') {\n        return res.status(403).json({\n            message: 'Unauthorized'\n        });\n    }\n    // Get list of all users (basic info only)\n    const [rows] = await _lib_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"].query('SELECT id, name, email, role FROM users');\n    // Return users to client\n    return res.status(200).json(rows);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9hZG1pbi91c2Vycy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEIsQ0FBdUIsbUJBQW1CO0FBQ3BCLENBQUMsK0JBQStCO0FBRWhGLDBDQUEwQztBQUMzQixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsTUFBTUMsT0FBT0osNkRBQWtCQSxDQUFDRSxNQUFNLHFCQUFxQjtJQUUzRCx5QkFBeUI7SUFDekIsSUFBSSxDQUFDRSxRQUFRQSxLQUFLQyxJQUFJLEtBQUssU0FBUztRQUNsQyxPQUFPRixJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBZTtJQUN4RDtJQUVBLDBDQUEwQztJQUMxQyxNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNVixxREFBUSxDQUFDO0lBRTlCLHlCQUF5QjtJQUN6QixPQUFPSSxJQUFJRyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRTtBQUM5QiIsInNvdXJjZXMiOlsiRDpcXFllYXIgMlxcU1dEXFxBU1NJR05NRU5UXFxzd2RfcHJvamVjdF8zMTM0MzI5XFxwYWdlc1xcYXBpXFxhZG1pblxcdXNlcnNcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICdAL2xpYi9kYic7ICAgICAgICAgICAgICAgICAgICAgICAvLyBNeVNRTCBjb25uZWN0aW9uXHJcbmltcG9ydCB7IGdldFVzZXJGcm9tUmVxdWVzdCB9IGZyb20gJ0AvbGliL2F1dGgnOyAvLyBBdXRoIGhlbHBlciB0byB2YWxpZGF0ZSB1c2VyXHJcblxyXG4vLyBBZG1pbi1vbmx5IEFQSSByb3V0ZSB0byBmZXRjaCBhbGwgdXNlcnNcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IHVzZXIgPSBnZXRVc2VyRnJvbVJlcXVlc3QocmVxKTsgLy8gR2V0IGxvZ2dlZC1pbiB1c2VyXHJcblxyXG4gIC8vIFJlamVjdCBpZiBub3QgYW4gYWRtaW5cclxuICBpZiAoIXVzZXIgfHwgdXNlci5yb2xlICE9PSAnYWRtaW4nKSB7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9KTtcclxuICB9XHJcblxyXG4gIC8vIEdldCBsaXN0IG9mIGFsbCB1c2VycyAoYmFzaWMgaW5mbyBvbmx5KVxyXG4gIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGRiLnF1ZXJ5KCdTRUxFQ1QgaWQsIG5hbWUsIGVtYWlsLCByb2xlIEZST00gdXNlcnMnKTtcclxuXHJcbiAgLy8gUmV0dXJuIHVzZXJzIHRvIGNsaWVudFxyXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihyb3dzKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZGIiLCJnZXRVc2VyRnJvbVJlcXVlc3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidXNlciIsInJvbGUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInJvd3MiLCJxdWVyeSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/admin/users/index.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fadmin%2Fusers&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cadmin%5Cusers%5Cindex.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();