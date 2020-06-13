"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getContentPaths = exports.getContentItem = exports.getContentItems = exports.ContentType = void 0;
var fs = require("fs");
function parseIndexData(directory) {
    var file = fs.readFileSync(directory + "/index.md", { encoding: "utf8" });
    var parts = file.split("---");
    if (parts.length !== 3) {
        throw new Error("Incorrect template format for file " + directory + "/index.md");
    }
    var attributes = parts[1]
        .trim()
        .split("\n")
        .reduce(function (obj, string) {
        var _a;
        var _b = string.split(":"), key = _b[0], rest = _b.slice(1);
        return __assign(__assign({}, obj), (_a = {}, _a[key] = rest.join(":").trim(), _a));
    }, {});
    return __assign({ content: parts[2].trim() }, attributes);
}
var ContentType;
(function (ContentType) {
    ContentType["PROJECT"] = "projects";
    ContentType["BLOG_POST"] = "articles";
    ContentType["PHOTO"] = "photos";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
function getContentItems(contentType) {
    var directories = fs
        .readdirSync("./public/contents/" + contentType, { withFileTypes: true })
        .filter(function (result) { return result.isDirectory(); })
        .map(function (result) { return result.name; });
    return directories.map(function (directoryName) { return ({
        directoryName: directoryName,
        files: fs.readdirSync("./public/contents/" + contentType + "/" + directoryName),
        indexData: parseIndexData("./public/contents/" + contentType + "/" + directoryName)
    }); });
}
exports.getContentItems = getContentItems;
function getContentItem(contentType, id) {
    return {
        directoryName: id,
        files: fs.readdirSync("./public/contents/" + contentType + "/" + id),
        indexData: parseIndexData("./public/contents/" + contentType + "/" + id)
    };
}
exports.getContentItem = getContentItem;
function getContentPaths(contentType) {
    return fs
        .readdirSync("./public/contents/" + contentType)
        .map(function (id) { return ({ params: { id: id } }); });
}
exports.getContentPaths = getContentPaths;
