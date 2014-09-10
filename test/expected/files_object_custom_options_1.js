angular.module('my-custom-template-module', ['test/fixtures/one.tpl.html']);

angular.module("test/fixtures/one.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("test/fixtures/one.tpl.html",
    "1 2 3");
}]);
