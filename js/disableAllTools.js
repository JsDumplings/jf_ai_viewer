// Disable all tools
function disableAllTools() {
    forEachViewport(function(element) {                
        cornerstoneTools.wwwc.activate(element,4);
        cornerstoneTools.pan.activate(element, 2); // 2 is middle mouse button
        //cornerstoneTools.zoom.activate(element, 4); // 4 is right mouse button
        cornerstoneTools.zoomWheel.activate(element, 2);
        cornerstoneTools.wwwcRegion.deactivate(element, 1);
        cornerstoneTools.probe.deactivate(element, 1);
        cornerstoneTools.length.deactivate(element, 1);
        cornerstoneTools.angle.deactivate(element, 1);
        cornerstoneTools.rotate.deactivate(element, 1);
        cornerstoneTools.ellipticalRoi.deactivate(element, 1);
        cornerstoneTools.rectangleRoi.deactivate(element, 1);
        cornerstoneTools.stackScroll.deactivate(element, 1);
        cornerstoneTools.wwwcTouchDrag.deactivate(element);
        cornerstoneTools.zoomTouchDrag.deactivate(element);
        cornerstoneTools.panTouchDrag.deactivate(element);
        cornerstoneTools.stackScrollTouchDrag.deactivate(element);
        cornerstoneTools.arrowAnnotate.deactivate(element, 1);
        cornerstoneTools.arrowAnnotateTouch.deactivate(element)
    });
}