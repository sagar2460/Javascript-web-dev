function randomImg() {
	
		var myImages = new Array();		
		
			myImages[1] = "images/image2.jpg";
			myImages[2] = "images/image3.jpg";
			myImages[3] = "images/image4.jpg";
			myImages[4] = "images/image5.jpg";
			myImages[5] = "images/image6.jpg";
			myImages[6] = "images/image7.jpg";
			myImages[7] = "images/image8.jpg";
			myImages[8] = "images/image9.jpg";
			myImages[9] = "images/image2.jpg";
			myImages[10] = "images/image3.jpg";
			myImages[11] = "images/image4.jpg";
			myImages[12] = "images/image5.jpg";
			myImages[13] = "images/image6.jpg";
			myImages[14] = "images/image7.jpg";
			myImages[15] = "images/image8.jpg";
			myImages[16] = "images/image9.jpg";

			var rnd = Math.floor((Math.random() * 6)+1);
			if(rnd == 0){
				rnd = 1;
			}

			document.write('<img src="'+myImages[rnd] +'" style="width: 32%;" style="margin-left: 40px;" border=50>');	
}


function randVid(){
	var myImages = new Array();	
			myImages[1] = "vids/vid1.mp4";	
			myImages[2] = "vids/vid2.mp4";
			myImages[3] = "vids/vid3.mp4";
			myImages[4] = "vids/vid4.mp4";
			myImages[5] = "vids/vid5.mp4";
			myImages[6] = "vids/vid6.mp4";
			myImages[7] = "vids/vid7.mp4";
			myImages[8] = "vids/vid8.mp4";
			myImages[9] = "vids/vid9.mp4";
			myImages[10] = "vids/vid10.mp4";
			myImages[11] = "vids/vid11.mp4";
			myImages[12] = "vids/vid12.mp4";
			myImages[13] = "vids/vid1.mp4";
			myImages[14] = "vids/vid2.mp4";
			myImages[15] = "vids/vid3.mp4";
			myImages[16] = "vids/vid4.mp4";
			myImages[17] = "vids/vid5.mp4";
			myImages[18] = "vids/vid6.mp4";
			myImages[19] = "vids/vid7.mp4";
			myImages[20] = "vids/vid8.mp4";
			myImages[21] = "vids/vid9.mp4";
			myImages[22] = "vids/vid10.mp4";
			myImages[23] = "vids/vid11.mp4";
			myImages[24] = "vids/vid12.mp4";
			

			

			var rnd = Math.floor((Math.random()*6) +1);
			if(rnd == 0){
				rnd = 1;
			}

			for(let i=0; i<1; i++){

				document.write('<video controls width="400px" border="20px" height:"300px" loop autoplay><source src="'+myImages[rnd + i] +'"></video>');
			}	
			

}