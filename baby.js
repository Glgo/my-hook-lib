Java.perform(function () {
    let SettingsColor4 = Java.use("com.nighp.babytracker_android.activities.SettingsColor4");
    SettingsColor4["onCreateView"].implementation = function (layoutInflater, viewGroup, bundle) {
        console.log(`SettingsColor4.onCreateView is called: layoutInflater=${layoutInflater}, viewGroup=${viewGroup}, bundle=${bundle}`);
        let result = this["onCreateView"](layoutInflater, viewGroup, bundle);
        console.log(`SettingsColor4.onCreateView result=${result}`);
        return result;
    };

    SettingsColor4["onScale"].implementation = function (f) {
        console.log(`SettingsColor4.onScale is called: f=${f}`);
        this["onScale"](f);
    };
});