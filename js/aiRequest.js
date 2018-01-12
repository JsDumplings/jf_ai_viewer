function aiCallback(stackIdx, aiResult) {
	console.log(aiResult);

	if (aiResult["reportStatus"] === 5000) {
		// let seriesList = $(studyViewerTemplate).find('.thumbnails')[0];
		// let seriesElement = $(seriesList).find('.list-group-item')[stackIdx];
		// let thumbnail = $(seriesElement).find('.div')[0];
		// console.log(thumbnail);
		let thumbnail = $('.csthumbnail')[stackIdx];
		// console.log(thumbnail);
		
		if (aiResult["detection_result"].length > 0) {

			let items = aiResult["detection_result"][0]["data"];
			items.forEach(function(item){
				let aiData = {
					element: thumbnail,
					data: item,
				};
				cornerstoneTools.ellipticalAi.addNewMeasurement(aiData);
			});

			forEachViewport(function(element){
				cornerstone.updateImage(element);
			});
		}
		
	} else {
		console.log("Invalid ai result.");
	}
}

function AIFinshed(status){	
	if(status){
		// al deal success
		$("#ai .toolbar-text").html("<span style='color: green;'>成功</span>");
	}else{
		// al deal fail
		$("#ai .toolbar-text").html("<span style='color: red;'>失败</span>");
	}
	setTimeout(function(){
		// anyway show AI after 3s
		$("#ai .toolbar-text").html("AI");
	},3000);
	
}

function aiRequest(metaData, stackIdx, callback) {
	// let aiObj = {
	// 	studyUid: metaData["0020000D"].Value[0],
	// 	seriesUid: metaData["0020000E"].Value[0],
	// 	instanceUid: metaData["00080018"].Value[0]
	// };

	// aiArr = [];
	// aiArr.push(aiObj);
	// let aiUrl = JSON.stringify(aiArr);
	
	let studyUid = metaData["0020000D"].Value[0];
	let seriesUid = metaData["0020000E"].Value[0];
	let imageUid = metaData["00080018"].Value[0];
	let aiStr = 'http://10.10.10.50:8080/dcm4chee-arc/aets/DCM4CHEE/wado?requestType=WADO&contentType=image/jpeg';
	aiStr += '&studyUid=' + studyUid;
	aiStr += '&seriesUID=' + seriesUid;
	aiStr += '&objectUID=' + imageUid;
	let aiUrl = encodeURIComponent(aiStr).replace(/'/g,"%27").replace(/"/g,"%22");
	aiUrl = baseAiUrl + aiUrl;

	$.ajax({
		url: aiUrl,
		dataType: "json",
		type: "GET",
		success: function(aiResult) {
			callback(stackIdx, aiResult);
			AIFinshed(true);
		},
		error: function(aiResult){
			AIFinshed(false);
		}
	})
}