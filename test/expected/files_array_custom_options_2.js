angular.module('my-custom-templates', ['test/fixtures/two.tpl.html']);

angular.module("test/fixtures/two.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("test/fixtures/two.tpl.html",
    "Testing");
}]);
