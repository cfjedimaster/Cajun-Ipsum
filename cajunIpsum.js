var rawData = [
	"Boudreaux",
	"Thibideoux",
	"Fauxcheaux",
	"gumbo",
	"Lafayette",
	"Acadiana",
	"cajun",
	"bayou",
	"boucherie",
	"boudin",
	"crawfish",
	"etoufee",
	"file",
	"Mardi Gras",
	"King Cake",
	"lagniappe",
	"levee",
	"pirogue",
	"praline",
	"tasso",
	"couillon"
];

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function titleCase(s) {
	return s.substring(0,1).toUpperCase() + s.substring(1,s.length);	
}

exports.generate = function(paragraphs) {
	var result = "";

	for(var i=0; i<paragraphs; i++) {
		//Ok, each para should have 3-8 sentences.
		var sentences = getRandomInt(3,8);
		
		for(var j=0; j<sentences; j++) {
			var sentence = "";
			var words = getRandomInt(5, 10);

			for(var k=0; k<words; k++) {
				var word = rawData[getRandomInt(0,rawData.length-1)];	
				if(k == 0) word = titleCase(word);
				sentence += word;
				if(k < (words-1)) sentence += " ";
			}
			
			sentence += ". ";
			
			result += sentence;
		}
		
		result += "<p/>";
		
	}
	
	return result;
}