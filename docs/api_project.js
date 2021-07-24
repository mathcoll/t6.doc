define({
  "name": "t6, IoT platform and API",
  "version": "2.0.1",
  "description": "t6 is an 'oriented-Data' platform to connect physical Objects with timeseries DB.",
  "title": "t6, IoT platform and API",
  "url": "https://api.internetcollaboratif.info/v2.0.1",
  "sampleUrl": "https://api.internetcollaboratif.info/v2.0.1",
  "header": {
    "title": "t6, IoT platform and API",
    "content": "<div>\t\n\t<h1>Introduction</h2>\n\t<p>\n\t\tt6 is using Https protocols to manage your Objects, Flows and DataPoints, Dashboards and so on.<br />\n\t\tThis documentation is aiming to give technical overview ; The <a href=\"https://github.com/mathcoll/t6/wiki\">functionnal features are explained in the Wiki.</a>\n\t</p>\n\t<p>\n\t\tEndpoints allows to manage your own Objects, Flows, Users, and DataPoints using normalized verbs:\n\t</p>\n\t<ul>\n\t<li><strong class=\"navtype navtype__get\">GET</strong> verb is used to retrieve information from t6;</li>\n\t<li><strong class=\"navtype navtype__post\">POST</strong> verb is used to create a new element;</li>\n\t<li><strong class=\"navtype navtype__put\">PUT</strong> verb is used to edit an existing elements;</li>\n\t<li><strong class=\"navtype navtype__del\">DELETE</strong> verb is used to delete existing elements.</li>\n\t</ul>\n\t<p>\n\t\tAll API enpoints support json and optional Http Headers can be provided:<br />\n\t\t<span class=\"label label-primary\">Content-Type: application/json</span><br />\n\t\t<span class=\"label label-primary\">Accept: application/json</span><br />\n\t</p>\n</div>\n<div>\t\n\t<h1>Authentication</h2>\n\t<p>\n\t\tTo create and get a JWT Token, you must authenticate yourself on the API by using the dedicated Endpoint.<br />\n\t\tMost API endpoint require an Authentication to identify and approve the user request. This is done by adding \n\t\t<span class=\"label label-primary\">Authorization: Bearer <JWTtoken></span> Header to the Http request.\n\t</p>\n</div>\n<div>\t\n\t<h1>Quota</h2>\n\t<p>\n\t\tQuota is defined during the registration process. When the limit is reached, an Http error message is sent by the API and the request is not processed:\n\t\t<span class=\"label label-primary\">429 Too Many Requests</span>.\n\t</p>\n</div>\n<div>\t\n\t<h1>Pagination</h2>\n\t<p>\n\t\tPagination is using the following parameters:\n\t\t<ul>\n\t\t\t<li><b>size</b>: the size parameter allow  to request the number of items you want to retrieve.</li>\n\t\t\t<li><b>page</b>: this page parameter allows to place cursor on the selected page.</li>\n\t\t</ul>\n\t\te.g.: <span class=\"label label-primary\">https://api.internetcollaboratif.info/v2.0.1/objects/?page=2&size=20</span><br />\n\t\tThis will generate the payload listing Objects from resource cursor 21 to 41.\n\t</p>\n\t<p>\n\t\tAdditionnaly, the json payload is containing the following data:\n\t\t<ul>\n\t\t\t<li><b>parent</b>: url endpoint of the parent resource.</li>\n\t\t\t<li><b>self</b>: url endpoint of the current resource.</li>\n\t\t\t<li><b>first</b>: url endpoint of the first page/cursor for the current resource.</li>\n\t\t\t<li><b>last</b>: url endpoint of the last page/cursor for the current resource.</li>\n\t\t\t<li><b>prev</b>: url endpoint of the previous page/cursor for the current resource.</li>\n\t\t\t<li><b>next</b>: url endpoint of the next page/cursor for the current resource.</li>\n\t\t</ul>\n\t</p>\n</div>\n<div>\t\n\t<h1>Http Statuses</h2>\n\t<p>\n\t\t<ul>\n\t\t\t<li><span class=\"type label label-primary\">200 Success</span> Server successfully understood the transaction.</li>\n\t\t\t<li><span class=\"type label label-primary\">201 Created</span> The Creation of a new resource was successful.</li>\n\t\t\t<li><span class=\"type label label-primary\">400 Bad Request</span> Require a Bearer Authentication.</li>\n\t\t\t<li><span class=\"type label label-primary\">401 Not Authorized</span> Require a Bearer JWTtoken Authentication.</li>\n\t\t\t<li><span class=\"type label label-primary\">403 Forbidden</span> JWTtoken used in transaction is not valid. Check your token and/or permission.</li>\n\t\t\t<li><span class=\"type label label-primary\">404 Not Found</span> We couldn't find the resource you are trying to access.</li>\n\t\t\t<li><span class=\"type label label-primary\">405 Method Not Allowed</span> API endpoint does not accept the method used.</li>\n\t\t\t<li><span class=\"type label label-primary\">412 Precondition Failed</span> Request input does not match prerequisites, and so, failed.</li>\n\t\t\t<li><span class=\"type label label-primary\">429 Too Many Requests</span> Request failed due to quota overlimit.</li>\n\t\t</ul>\n\t</p>\n</div>\n<div>\t\n\t<h1>t6 Architecture</h2>\n\t<p>\n\t\t<img src=\"https://raw.githubusercontent.com/mathcoll/t6/master/public/img/m/t6.png\" class=\"img-responsive center-block\" alt=\"General-structure\"/>\n\t\t<br />\n\t\t<a href=\"https://github.com/mathcoll/t6/wiki\">More details on t6 features in the Wiki.</a>\n\t</p>\n</div>"
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
    "time": "2021-07-24T19:45:46.163Z",
    "url": "https://apidocjs.com",
    "version": "0.28.1"
  }
});
