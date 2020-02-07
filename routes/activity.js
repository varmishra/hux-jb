"use strict";
var util = require("util");

// Deps
const Path = require("path");
const JWT = require(Path.join(__dirname, "..", "lib", "jwtDecoder.js"));
//const customScript = require(Path.join(__dirname, '..', 'lib', 'utilityScript.js'));
var util = require("util");
var http = require("https");

exports.logExecuteData = [];

function logData(req) {
  exports.logExecuteData.push({
    body: req.body,
    headers: req.headers,
    trailers: req.trailers,
    method: req.method,
    url: req.url,
    params: req.params,
    query: req.query,
    route: req.route,
    cookies: req.cookies,
    ip: req.ip,
    path: req.path,
    host: req.host,
    fresh: req.fresh,
    stale: req.stale,
    protocol: req.protocol,
    secure: req.secure,
    originalUrl: req.originalUrl
  });
  console.log("body: " + util.inspect(req.body));
  console.log("headers: " + req.headers);
  console.log("trailers: " + req.trailers);
  console.log("method: " + req.method);
  console.log("url: " + req.url);
  console.log("params: " + util.inspect(req.params));
  console.log("query: " + util.inspect(req.query));
  console.log("route: " + req.route);
  console.log("cookies: " + req.cookies);
  console.log("ip: " + req.ip);
  console.log("path: " + req.path);
  console.log("host: " + req.host);
  console.log("fresh: " + req.fresh);
  console.log("stale: " + req.stale);
  console.log("protocol: " + req.protocol);
  console.log("secure: " + req.secure);
  console.log("originalUrl: " + req.originalUrl);
}

/*
 * POST Handler for / route of Activity (this is the edit route).
 */
exports.edit = function (req, res) {
  // Data from the req and put it in an array accessible to the main app.
  //console.log( req.body );
  logData(req);
  res.send(200, "Edit");
};

/*
 * POST Handler for /save/ route of Activity.
 */
exports.save = function (req, res) {
  // Data from the req and put it in an array accessible to the main app.
  //console.log( req.body );
  logData(req);
  res.send(200, "Save");
};

/*
 * POST Handler for /execute/ route of Activity.
 */
// exports.execute = function (req, res) {
//   // example on how to decode JWT
//   // JWT(req.body, process.env.jwtSecret, (err, decoded) => {
//   //   // verification error -> unauthorized request
//   //   if (err) {
//   //     console.error(err);
//   //     return res.status(401).end();
//   //   }
//   logData(req);
//   res.send(200).json({
//     "success": true
//   })
//   console.log("Hello");
//   // if (decoded && decoded.inArguments && decoded.inArguments.length > 0) {
//   var customerId = req.body.inArguments[0].INDID;
//   console.log(customerId);
//   // var temp_url = customScript.fetchUrl();
//   // var url = 'https://cors-anywhere.herokuapp.com/' + temp_url;
//   // var url = "https://cors-anywhere.herokuapp.com/" + stepTwoUrl;
//   url = "https://cors-anywhere.herokuapp.com/" + localStorage.getItem("url");
//   fetch(url)
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (obj) {
//       console.log(obj);
//       var i;
//       for (i = 0; i < Object.keys(obj.content).length; i++) {
//         if (obj.content[i].CUSTOMER_INDID == customerId) {
//           return res.status(200).json({
//             branchResult: obj.content[i].segmentValue
//           });
//         }
//       }
//     })
//     .catch(function (error) {
//       console.error(error);
//       return res.status(400).end();
//     });
//   // } 
//   //   else {
//   //     console.error("inArguments invalid.");
//   //     return res.status(400).end();
//   //   }
//   // });
// };

exports.execute = function (req, res) {
  logData(req);
  res.send(200, req)
};

/*
 * POST Handler for /publish/ route of Activity.
 */
exports.publish = function (req, res) {
  // Data from the req and put it in an array accessible to the main app.
  //console.log( req.body );
  logData(req);
  res.send(200).json({
    "suceess": true
  });
};

/*
 * POST Handler for /validate/ route of Activity.
 */
exports.validate = function (req, res) {
  // Data from the req and put it in an array accessible to the main app.
  //console.log( req.body );
  logData(req);
  res.send(200).json({
    "success": true
  });
};