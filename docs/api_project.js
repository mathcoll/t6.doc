define({
  "name": "t6, IoT platform and API",
  "version": "2.0.1",
  "description": "t6 is an 'oriented-Data' platform to connect physical Objects with timeseries DB.",
  "title": "t6, IoT platform and API",
  "url": "https://api.internetcollaboratif.info/v2.0.1",
  "sampleUrl": "https://api.internetcollaboratif.info/v2.0.1",
  "header": {
    "title": "t6, IoT platform and API",
    "content": "<div class=\"article-content\">\n\t<div class=\"article-text\">\n\t\t<div>\n\t\t\t<h1>Introduction</h1>\n\t\t\t<p>\n\t\t\t\tt6 is using Https protocols to manage your Objects, Flows and DataPoints, Dashboards and so on.<br />\n\t\t\t\tThis documentation is aiming to give technical overview ; The <a href=\"https://github.com/mathcoll/t6/wiki\">functionnal features are explained in the Wiki.</a>\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tEndpoints allows to manage your own Objects, Flows, Users, and DataPoints using normalized verbs:\n\t\t\t</p>\n\t\t\t<ul>\n\t\t\t<li><strong class=\"navtype navtype__get\">GET</strong> verb is used to retrieve information from t6;</li>\n\t\t\t<li><strong class=\"navtype navtype__post\">POST</strong> verb is used to create a new element;</li>\n\t\t\t<li><strong class=\"navtype navtype__put\">PUT</strong> verb is used to edit an existing elements;</li>\n\t\t\t<li><strong class=\"navtype navtype__del\">DELETE</strong> verb is used to delete existing elements.</li>\n\t\t\t</ul>\n\t\t\t<p>\n\t\t\t\tAll API enpoints support json and optional Http Headers can be provided:<br />\n\t\t\t\t<span class=\"label label-primary\">Content-Type: application/json</span><br />\n\t\t\t\t<span class=\"label label-primary\">Accept: application/json</span><br />\n\t\t\t</p>\n\t\t</div>\n\t\t<div>\t\n\t\t\t<h1>Authentication</h1>\n\t\t\t<p>\n\t\t\t\tTo create and get a JWT Token, you must authenticate yourself on the API by using the dedicated Endpoint.<br />\n\t\t\t\tMost API endpoint require an Authentication to identify and approve the user request. This is done by adding \n\t\t\t\t<span class=\"label label-primary\">Authorization: Bearer <JWTtoken></span> Header to the Http request.\n\t\t\t</p>\n\t\t</div>\n\t\t<div>\t\n\t\t\t<h1>Quota</h1>\n\t\t\t<p>\n\t\t\t\tQuota is defined during the registration process. When the limit is reached, an Http error message is sent by the API and the request is not processed:\n\t\t\t\t<span class=\"label label-primary\">429 Too Many Requests</span>.\n\t\t\t</p>\n\t\t</div>\n\t\t<div>\t\n\t\t\t<h1>Pagination</h1>\n\t\t\t<p>\n\t\t\t\tPagination is using the following parameters:\n\t\t\t\t<ul>\n\t\t\t\t\t<li><b>size</b>: the size parameter allow  to request the number of items you want to retrieve.</li>\n\t\t\t\t\t<li><b>page</b>: this page parameter allows to place cursor on the selected page.</li>\n\t\t\t\t</ul>\n\t\t\t\te.g.: <span class=\"label label-primary\">https://api.internetcollaboratif.info/v2.0.1/objects/?page=2&size=20</span><br />\n\t\t\t\tThis will generate the payload listing Objects from resource cursor 21 to 41.\n\t\t\t</p>\n\t\t\t<p>\n\t\t\t\tAdditionnaly, the json payload is containing the following data:\n\t\t\t\t<ul>\n\t\t\t\t\t<li><b>parent</b>: url endpoint of the parent resource.</li>\n\t\t\t\t\t<li><b>self</b>: url endpoint of the current resource.</li>\n\t\t\t\t\t<li><b>first</b>: url endpoint of the first page/cursor for the current resource.</li>\n\t\t\t\t\t<li><b>last</b>: url endpoint of the last page/cursor for the current resource.</li>\n\t\t\t\t\t<li><b>prev</b>: url endpoint of the previous page/cursor for the current resource.</li>\n\t\t\t\t\t<li><b>next</b>: url endpoint of the next page/cursor for the current resource.</li>\n\t\t\t\t</ul>\n\t\t\t</p>\n\t\t</div>\n\t\t<div>\n\t\t\t<h1>Http Success Statuses</h1>\n\t\t\t<table>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th class=\"c1\">Status</th>\n\t\t\t\t\t\t<th class=\"c2\">Description</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">200</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Server successfully understood the request</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">201</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Creation of a new resource was successful</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">202</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Server successfully understood the request, it will be done asynchroneously</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<h1>Http Error Statuses</h1>\n\t\t\t<table>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th class=\"c1\">Status</th>\n\t\t\t\t\t\t<th class=\"c2\">Description</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">400</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Bad Request, require a Bearer Authentication or revision is incorrect</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">401</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Require a Bearer Authentication</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">403</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Forbidden Token used in transaction is not valid - check your token and/or\n\t\t\t\t\t\t\tpermission</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">404</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Not Found We couldn't find the resource you are trying to access</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">405</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Method Not Allowed ; API endpoint does not accept the method used</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">409</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Conflict</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">429</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Too Many Requests</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td class=\"code\">500</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<p>Internal Server Error</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div>\t\n\t\t\t<h1>t6 Architecture</h1>\n\t\t\t<p>\n\t\t\t\t<img src=\"https://raw.githubusercontent.com/mathcoll/t6/master/public/img/m/t6.png\" class=\"img-responsive center-block\" alt=\"General-structure\"/>\n\t\t\t\t<br />\n\t\t\t\t<a href=\"https://github.com/mathcoll/t6/wiki\">More details on t6 features in the Wiki.</a>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>"
  },
  "footer": {
    "title": "Credits",
    "content": "<p>© t6, IoT platform and API</p>\n"
  },
  "template": {
    "withCompare": true,
    "withGenerator": true,
    "forceLanguage": "en",
    "aloneDisplay": false
  },
  "order": [
    "0. DataPoint Measure",
    "1. Object and User Interfaces",
    "2. Flow",
    "3. Dashboard",
    "4. Snippet",
    "5. Rule",
    "6. Source and Over The Air OTA",
    "7. Mqtt",
    "8. Administration",
    "9. Notifications email",
    "10. Exploratory Data Analysis EDA",
    "User",
    "General"
  ],
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2021-11-21T21:56:45.437Z",
    "url": "https://apidocjs.com",
    "version": "0.28.1"
  }
});
