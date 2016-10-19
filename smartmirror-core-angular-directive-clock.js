app.directive("smartmirrorWidgetClock", function() {
    return {
        template : "<h2>{{clock | date:'medium'}}</h2>"
    };
});