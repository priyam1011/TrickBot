var Discord = require("discord.js");

 var bot = new Discord.Client();
 //var audio = new Audio();

 bot.on("message", function(message)
 {
	var input = message.content.toLowerCase();
	if(input === "trkappaline")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkAppaline.png");
	}
	if(input === "trkbronze")
	{
		//audio.src = "Projects//DiscordBot//audio//snoopdoge.mp3";
		//audio.loop = false;
		//audio.play();
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkBronze.png");
	}
	if(input === "trkdoge")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkDoge.png");
	}if(input === "trkdorito")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkDorito.png");
	}if(input === "trkfail")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkFail.png");
	}if(input === "trkgood")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkGood.png");
	}
	if(input === "trkhorsey")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkHorsey.png");
	}
	if(input === "trklata")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkLata.png");
	}
	if(input === "trklegend")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkLegend.png");
	}
	if(input === "trklyfe")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkLyfe.png");
	}
	if(input === "trkpcane")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkPcane.png");
	}
	if(input === "trkpleb")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkPleb.png");
	}
	if(input === "trkrip")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkRip.png");
	}
	if(input === "trksalt")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkSalt.png");
	}
	if(input === "trkwave")
	{
		bot.sendFile(message, "Projects//DiscordBot//emotes//trkWave.png");
	}

 });
 bot.login("patelpriyam1011@gmail.com", "juugo123");
