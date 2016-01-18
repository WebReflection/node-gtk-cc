
exports.apply = function(GLib) {
    GLib.testOverride = function() {
        return 1 + 1;
    };
};
