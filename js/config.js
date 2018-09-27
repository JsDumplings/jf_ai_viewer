var config = {
  webWorkerPath:'lib/cornerstoneWADOImageLoaderWebWorker.js',
  taskConfiguration:{
    'decodeTask':{
       codecsPath:'cornerstoneWADOImageLoaderCodecs.js'
    }
  }
};
cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.configure({
  beforeSend: function(xhr) {
    // Add custom headers here (e.g. auth tokens)
    // var apiKey = $('#apikey').val();
    // if(apiKey && apiKey.length) {
    //     xhr.setRequestHeader('APIKEY', apiKey);
    // }
  }
});

cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.external.$ = $;
cornerstoneTools.external.Hammer = Hammer;

cornerstoneTools.textStyle.setFont('20px Arial');
cornerstoneTools.toolStyle.setToolWidth(3);
cornerstoneTools.toolColors.setToolColor('darkred');

var measurementConfig = { drawHandlesOnHover: true };
cornerstoneTools.ellipticalAi.setConfiguration(measurementConfig);
cornerstoneTools.length.setConfiguration(measurementConfig);
cornerstoneTools.ellipticalRoi.setConfiguration(measurementConfig);
cornerstoneTools.rectangleRoi.setConfiguration(measurementConfig);
cornerstoneTools.angle.setConfiguration(measurementConfig);
cornerstoneTools.arrowAnnotate.setConfiguration(measurementConfig);
cornerstoneTools.rectangleAi.setConfiguration(measurementConfig);

cornerstone.events.addEventListener('cornerstoneimageloadprogress', function(event){
  updateImageProgress(event.detail);
});