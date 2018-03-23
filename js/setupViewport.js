function setupViewport(element, stack, image) {
    // Display the image on the viewer element
    cornerstone.displayImage(element, image);

    $(element).find('.loading').remove();

    // If it's a movie (has frames), then play the clip
    if (stack.frameRate !== undefined) {
        cornerstone.playClip(element, stack.frameRate);
    }

    // Activate mouse clicks, mouse wheel and touch
    cornerstoneTools.mouseInput.enable(element);
    cornerstoneTools.mouseWheelInput.enable(element);
    cornerstoneTools.touchInput.enable(element);

    // Enable all tools we want to use with this element
    cornerstoneTools.wwwc.activate(element, 4); // ww/wc is the default tool for right mouse button
    cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
    //cornerstoneTools.zoom.activate(element, 1); // zoom is the default tool for right mouse button
    cornerstoneTools.zoomWheel.activate(element, 2);
    cornerstoneTools.wwwcRegion.activate(element, 1);
    cornerstoneTools.probe.deactivate(element); 
    cornerstoneTools.length.deactivate(element);
    cornerstoneTools.ellipticalRoi.deactivate(element);
    cornerstoneTools.rectangleRoi.deactivate(element);
    cornerstoneTools.angle.deactivate(element);
    cornerstoneTools.arrowAnnotate.deactivate(element);
    cornerstoneTools.wwwcTouchDrag.activate(element);
    cornerstoneTools.zoomTouchPinch.activate(element);

    // Stack tools
    cornerstoneTools.addStackStateManager(element, ['playClip']);
    cornerstoneTools.addToolState(element, 'stack', stack);
    cornerstoneTools.stackScrollWheel.activate(element);
    cornerstoneTools.stackPrefetch.enable(element);


}
