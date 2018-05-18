// 用来获取地址栏的信息
/*function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}*/



// 那些单选按钮的点击事件
$(".pulmonaryInfo").on("click", "input[type='radio']", function() {	
	$(this).parent().addClass("radio-success")
				.siblings().removeClass("radio-success");
});

// 点击保存 
$("#saveBar #save").on("click", function() {
	console.log('save');	
	let baseUrl = 'http://47.100.43.165:8090'; // 部署的地址	
	//let baseUrl = 'http://192.168.10.50:8080'; // 测试地址
	//let baseUrl = 'http://172.16.87.221:80'; // 文dev		
	let saveUrl = baseUrl + '/v2/rmis/sysop/ai/plumTB';
	let imgArr = JSON.parse(decodeURIComponent(getQueryString('objects')))[0];
	let docName = getQueryString("docName");
	let accessionNum = getQueryString("accessionNum");
	let isNormalVal = $(".partOne .radio-success input").val();
	let isTbVal = $(".partTwo .radio-success input").val();
	let adviceVal = $(".partThree .radio-success input").val();
	let studyUid = imgArr.StudyUid;
	let seriesUid = imgArr.SeriesUid;
	let objectUid = imgArr.ObjectUid;

	if(!(isNormalVal && isTbVal && adviceVal)){
			alert('请您完所有选项！');
	}else{	
			//let baseUrl = 'http://47.100.43.165:8090'; // 部署的地址	  	

			let data = {
				accessionNum: accessionNum,
				advice: adviceVal,
				docName: docName,
				isAi: 0,
				normalFlag: isNormalVal,
				pulmTbFlag: isTbVal,
				objectUid: objectUid,
				seriesUid: seriesUid,
				studyUid: studyUid
			}

			console.log('data', data);
			$.ajax({
					url: saveUrl,
					dataType: "json",
					contentType: 'application/json',
					type: "PUT",
					data: JSON.stringify(data),					
					success: function(result) {
						console.log('save', result);
						console.log('人工保存成功！');
						$(this).prop('disabled',true).addClass("disabled"); // 禁用
						$(this).hide(); // 隐藏
					},
					error: function(result){
						console.log('人工保存失败！');
					}
				})
			//initEcharts([40,60]);
	}

	

	
})