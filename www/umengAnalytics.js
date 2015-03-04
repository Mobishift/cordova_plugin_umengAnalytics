window.umengAnalytics = {
    execute: function(action, successCallback, errorCallback) {
        cordova.exec(    
            successCallback, 
            errorCallback,
            "ANPRService",
            action,
            []
        )
    },
    getNumberPlate: function(successCallback, errorCallback) {
        this.execute("getNumberPlate", successCallback, errorCallback);
    }
}
module.exports = umengAnalytics;
