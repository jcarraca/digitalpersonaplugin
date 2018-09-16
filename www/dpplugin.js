// Empty constructor
function EntelPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
DPPlugin.prototype.start = function(compressionAlgorithm, compressionRate, latentDetection, successCallback, errorCallback) {
  var options = {};
  options.compressionAlgorithm = compressionAlgorithm;
  options.compressionRate = compressionRate;
  options.latentDetection = latentDetection;
  cordova.exec(successCallback, errorCallback, 'EntelPlugin', 'start', [options]);
}

DPPlugin.prototype.connect = function(successCallback, errorCallback) {
  var options = {};
  cordova.exec(successCallback, errorCallback, 'EntelPlugin', 'connect', [options]);
}

DPPlugin.prototype.stop = function(successCallback, errorCallback) {
  var options = {};
  cordova.exec(successCallback, errorCallback, 'EntelPlugin', 'stop', [options]);
}

// Installation constructor that binds EntelPlugin to window
DPPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.dpPlugin = new DPPlugin();
  return window.plugins.dpPlugin;
};
cordova.addConstructor(DPPlugin.install);
