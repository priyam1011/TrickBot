var Discord = require("discord.js");

 var bot = new Discord.Client();
 //var audio = new Audio();

 bot.on("message", function(message)
 {
	var input = message.content.toLowerCase();
	if(input === "trkappaline")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkAppaline.png");
	}
	if(input === "trkbronze")
	{
		//audio.src = "audio//snoopdoge.mp3";
		//audio.loop = false;
		//audio.play();
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkBronze.png");
	}
	if(input === "trkdoge")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkDoge.png");
	}if(input === "trkdorito")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkDorito.png");
	}if(input === "trkfail")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkFail.png");
	}if(input === "trkgood")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkGood.png");
	}
	if(input === "trkhorsey")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkHorsey.png");
	}
	if(input === "trklata")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkLata.png");
	}
	if(input === "trklegend")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkLegend.png");
	}
	if(input === "trklyfe")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkLyfe.png");
	}
	if(input === "trkpcane")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkPcane.png");
	}
	if(input === "trkpleb")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkPleb.png");
	}
	if(input === "trkrip")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkRip.png");
	}
	if(input === "trksalt")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkSalt.png");
	}
	if(input === "trkwave")
	{
		bot.sendFile(message, "C://Users//Priyam//Desktop//Dropbox//trkWave.png");
	}

 });
 bot.login("patelpriyam1011@gmail.com", "juugo123");
