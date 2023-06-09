Java.perform(function () {
    let activity = Java.use('com.nighp.babytracker_android.activities.MainActivity4');
    activity.loadAd.implementation = function () {
        console.log("hook成功frida")
    }
})