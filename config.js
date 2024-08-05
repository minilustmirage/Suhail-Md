const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ~༺ღ༒𝐷𝛯𝛮𝐽𝛪-𝑆𝛥𝛮༒ღ༻" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250555581921";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_50_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjExLFxuICAgICAgICA1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDQwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA2MixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA0OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg1LFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5lTW0yd2JleG1EVFdMNWhXWVc4UUxzNUkyZ1ZGSFJVSlpaSHlWaHhNUHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhKa0dCbGxDU0J5ZjI1WmFMNjVLMEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGIwZjQ0YjItMTk4Mi00MjUxLThiNDktYmU2ZGYyZjQ1N2JiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMTcwLFxuICAgICAgMTc0LFxuICAgICAgODMsXG4gICAgICAxMDYsXG4gICAgICAzMSxcbiAgICAgIDk0LFxuICAgICAgMTA2LFxuICAgICAgODMsXG4gICAgICAxNDEsXG4gICAgICAxODUsXG4gICAgICAyMjcsXG4gICAgICAyMjEsXG4gICAgICA4OCxcbiAgICAgIDg5LFxuICAgICAgMTUyLFxuICAgICAgNzUsXG4gICAgICAyMTQsXG4gICAgICA2OSxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDEyMyxcbiAgICAgIDIyMixcbiAgICAgIDUwLFxuICAgICAgNTYsXG4gICAgICAyMzcsXG4gICAgICA5OCxcbiAgICAgIDE5NixcbiAgICAgIDEyOCxcbiAgICAgIDE2MSxcbiAgICAgIDE4OCxcbiAgICAgIDE3MyxcbiAgICAgIDE0MCxcbiAgICAgIDI1MixcbiAgICAgIDE3MSxcbiAgICAgIDc0LFxuICAgICAgNjIsXG4gICAgICAyMjAsXG4gICAgICAyMTksXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tuTzc2VUZFT2lrd3JVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQm5iSE40L2gzSnoyaXp3ZjZkbFNwU0FNOThZb0RjQWlBUmdNZWpVc0xpYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGYUhOOTFDSk9NT3dsMFVZZCtLcGpQYXZwN2RnY0RzODlHZHBCd04xTncyTU5HREh3TndzV0ZvZUxWeTY2dmg1T0FBeDgvWDZ6dnNEQW9sM2ZVS0lDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJrWkpMb3BjSHpiVE5XbllWWmNTK1QvZWwrcUhMZG0wQ1ZjOTFwaGttaE5SQW03Vy9TbC92UjhrUUM1Mk5nWTUrOW5zWmFYK2l0QmtleDNGdWRkOHJnQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTU1NTgxOTIxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4Ly64YOm4LyS8J2Qt/Cdm6/wnZuu8J2QvfCdm6ot8J2RhvCdm6XwnZuuXFxu4LyS4YOm4Ly7XCIsXG4gICAgXCJsaWRcIjogXCIxNTUxOTA2MDY5NjcwMjU6MTFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU1NTU4MTkyMToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODQ3ODUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRHhHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEeEYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0ekRTbzB0MzkwLzYxWGR3MnlFejZPQjRRWnlTSWliWCtWQUZTU04rdW1rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjE2MDA1NTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR4Ry5qc29uIjogIntcImtleURhdGFcIjpcInZ1VHZQM1hYeTBpZTJkcTlzS1d2cGlzTlJHSW4yUFYrL3ZUOG1CR2xMNUE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQyMTYwMDU1MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNDM3MTQwMjgzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "Σ",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "~༺ღ༒𝐷𝛯𝛮𝐽𝛪-𝑆𝛥𝛮༒ღ༻",
  packname: process.env.PACK_NAME || "~༺ღ༒𝐷𝛯𝛮𝐽𝛪-𝑆𝛥𝛮༒ღ༻",
  botname : process.env.BOT_NAME  || "~༺ღ༒𝐷𝛯𝛮𝐽𝛪-𝑆𝛥𝛮༒ღ༻",
  ownername:process.env.OWNER_NAME|| "~༺ღ༒𝐷𝛯𝛮𝐽𝛪-𝑆𝛥𝛮༒ღ༻",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
