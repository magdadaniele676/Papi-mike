const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || ""SUHAIL_23_09_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgODMsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMwLFxuICAgICAgICA5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMixcbiAgICAgICAgMjMxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDU4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNixcbiAgICAgICAgNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpqVVFpK3RCeW1IVkwzR01jVnk2NlBiTi9xWkNFcTg2L2ZrLzBkZFYyWFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTgyOTQ3OTc0OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ1REMxOTA1N0Q5MkZDNTU0NUE4MDY1MzZEN0UyMzRCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMjQ4OTc4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE4Mjk0Nzk3NDk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NUEzQTY0ODYwODhBNTEwRTI2OEY2NTdCNTIxQjQ4RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI0ODk3OTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZXVCQVFlcFdUUENZVmFqSDUxclRHQVwiLFxuICBcInBob25lSWRcIjogXCJiNTg1MmI3Zi1iN2Y0LTQ4ZjQtOWMwZi0xOTY4NmEzYTkyNGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgMjU1LFxuICAgICAgNjMsXG4gICAgICAyMjgsXG4gICAgICAyMzEsXG4gICAgICAxOTIsXG4gICAgICAxNTYsXG4gICAgICA5MCxcbiAgICAgIDcwLFxuICAgICAgMTA4LFxuICAgICAgMTczLFxuICAgICAgMjUyLFxuICAgICAgMTcsXG4gICAgICAzLFxuICAgICAgMTA0LFxuICAgICAgNTYsXG4gICAgICA1OCxcbiAgICAgIDIzNSxcbiAgICAgIDU4LFxuICAgICAgMjM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDIwOCxcbiAgICAgIDIxNSxcbiAgICAgIDExOSxcbiAgICAgIDE5OSxcbiAgICAgIDIyNCxcbiAgICAgIDEzMCxcbiAgICAgIDAsXG4gICAgICAxMyxcbiAgICAgIDIzOSxcbiAgICAgIDgsXG4gICAgICAzLFxuICAgICAgOCxcbiAgICAgIDE2MCxcbiAgICAgIDc1LFxuICAgICAgMjM5LFxuICAgICAgOTYsXG4gICAgICA5NCxcbiAgICAgIDk5LFxuICAgICAgNTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiR1YySEdKRDhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE4Mjk0Nzk3NDk4OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzM1MDg1NTg2MzUyMzM6MzNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8JODtVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0liYnA2VURFTGJranJvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZVU0NXFpeU5UOFA1dG02N0kxb1RDYVRnRmZFS3N5Q1RYVHN5MVVhcENqQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDVWNjWE1IQmhXSmtQdlhTNVVRUVhsNlZqODZUdUJTdm1HOFhkczZhN0syT2wxQ01ndHdBK25HSDJ6Z0xKYmo0TFBQVTlPNjFDbGRyS25IemRQdTZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzcU1FWjA4YkRoeUgxOTVtRmVJaGFoVHdzR0E4eVlZaytrY2pva0t3Q1NJcllQeVhLc0J2VEVQRzJKa2xTVUtpNWp4M2tJOW1Vb3lndk05WVhYbk5EUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODI5NDc5NzQ5ODozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQ4OTc4NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg2U1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDZTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVXdBYTY3N1pXeWQ1WVhiNXF1MFVXdXZJVFRMTWFSamwrd0R3V3NLcWZXcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4ODM1NTE2MjIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMjQ4OTc5MzI5NFwifSIKfQ==  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
