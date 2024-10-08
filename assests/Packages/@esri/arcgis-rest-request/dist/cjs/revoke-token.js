"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeToken = void 0;
const index_js_1 = require("./index.js");
/**
 * Revokes a token generated via any oAuth 2.0 method. `token` can be either a refresh token OR an access token. If you are using  {@linkcode ArcGISIdentityManager} you should use  {@linkcode ArcGISIdentityManager.destroy} instead. Cannot revoke API keys or tokens generated by {@linkcode ApplicationCredentialsManager}.
 *
 * See [`revokeToken`](https://developers.arcgis.com/rest/users-groups-and-items/revoke-token.htm) on the ArcGIS REST API for more details.
 */
function revokeToken(requestOptions) {
    const url = `${(0, index_js_1.cleanUrl)(requestOptions.portal || "https://www.arcgis.com/sharing/rest")}/oauth2/revokeToken/`;
    const token = requestOptions.token;
    const clientId = requestOptions.clientId;
    delete requestOptions.portal;
    delete requestOptions.clientId;
    delete requestOptions.token;
    const options = Object.assign(Object.assign({}, requestOptions), { httpMethod: "POST", params: {
            client_id: clientId,
            auth_token: token
        } });
    return (0, index_js_1.request)(url, options).then((response) => {
        if (!response.success) {
            throw new index_js_1.ArcGISRequestError("Unable to revoke token", 500, response, url, options);
        }
        return response;
    });
}
exports.revokeToken = revokeToken;
//# sourceMappingURL=revoke-token.js.map