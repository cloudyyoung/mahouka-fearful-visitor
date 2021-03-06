
window.wallpaperPropertyListener = {
    applyUserProperties: function (properties) {

        // Performance
        if (properties.performance) {
            switch (properties.performance.value) {
                case 'dynamic':
                    $(document).unbind("mousemove");
                    $(document).mousemove($.mouse);
                    break;
                case 'static':
                    $(document).unbind("mousemove");
                    $.mouse({ clientX: x_center });
                    break;
            }
        }

        // Snowflake
        if (properties.snowflake) {
            $(".flowers .flower").each((index, each) => {
                if (index > properties.snowflake.value - 1) {
                    $(each).hide()
                } else {
                    $(each).show();
                }
            });
        }
    }
}