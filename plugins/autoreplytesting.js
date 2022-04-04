/* Copyright (C) 2021 KAVIYAAH - Alexa Team  ,  Lusifar whatsapp bot owner
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
kaviyaah - kavishka sandaruwan (v 8.0.0 avalable)
*/

const lusifar = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const exec = require('child_process').exec;
const os = require("os");
const fs = require('fs');
const Config = require('../config')
const Language = require('../language');
const Lang = Language.getString('evaluators');
const SLang = Language.getString('conventer');
const NLang = Language.getString('scrapers');
const googleTTS = require('google-translate-tts');
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: Config.HEROKU.API_KEY
});
let baseURI = '/apps/' + Config.HEROKU.APP_NAME;



var autoreply_var = ''
async function antlch() {
    await heroku.get(baseURI + '/config-vars').then(async (vars) => {
        autoreply_var = vars.AUTO_REPLY
    });
}
antlch()
var ldc = ''
if (Config.LANG == 'AZ') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'TR') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'EN') ldc = '*කුනුහරුප කියන්න එපා මිතුර..!\nමං වගේ හොඳ ළමයෙක් වෙනන.*'
if (Config.LANG == 'ML') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'ID') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'PT') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'RU') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'HI') ldc = '*DO NOT USE BAD WORD*'
if (Config.LANG == 'ES') ldc = '*DO NOT USE BAD WORD*'

const KKK01 = "HI🌝"
const KKK02 = "Mn" 
const KKK03 = "hmm🌝" 
const KKK04 = "GM" 
const KKK05 = "Gn"
const KKK06 = "GOOD MORNING"
const KKK07 = "GOOD NIGHT" 
const KKK08 = "Bye" 
const KKK09 = "Hmm🌝" 

const KKK10 = "හායි අලේ😜" 
const KKK11 = "😌බායි බායි"
const KKK12 = "මොකුත් නෑ අනේ🌝"
const KKK13 = "😒නැත්තම් කමක් නෑ. ඉතිං මට මොකෝ😒"
const KKK14 = "🥰සුබ උදෑසනක්"
const KKK15 = "🥰ගුම් මෝනින්"
const KKK16 = "🥰සුබ රාත්‍රියක්"
const KKK17 = "😒බැ නම් කමක් නෑ. මට මොකෝ😒"
const KKK18 = "🥰බායි"
const KKK19 = "🥰කුමුතු හොඳ ළමයෙක්..! ඔයාලත් කුමුතු වගේ හැදෙන්න.🤭🤭"
const KKK20 = "🥰ප්‍රභාෂ හොඳ ළමයෙක්..! ඔයාලත් ප්‍රභාෂ වගේ හැදෙන්න.🤭🤭"
const KKK21 = "🥰I Love You Baby❤️🥺🤭"


lusifar.addCommand({on: 'text', fromMe: false, deleteCommand: false}, (async (message, match) => {
    if (autoreply_var == 'true' && message.jid !== '905511384572-1616356915@g.us') {
        let regex01 = new RegExp('hi')
        let regex02 = new RegExp('HI')
        let regex03 = new RegExp('Hi')
        
        let regex04 = new RegExp('MK')
        let regex05 = new RegExp('Mk')
        let regex06 = new RegExp('mk')
        
        let regex07 = new RegExp('Mn')
        let regex08 = new RegExp('MN')
        let regex09 = new RegExp('mn')
        
        let regex10 = new RegExp('GM')
        let regex11 = new RegExp('Gm')
        let regex12 = new RegExp('gm')
        
        let regex13 = new RegExp('GN')
        let regex14 = new RegExp('Gn')
        let regex15 = new RegExp('gn')
        
        let regex16 = new RegExp('GOOD MORNING')
        let regex17 = new RegExp('Good morning')
        let regex18 = new RegExp('good morning')
        let regex19 = new RegExp('Good Morning')
        
        let regex20 = new RegExp('GOOD NIGHT')
        let regex21 = new RegExp('Good Night')
        let regex22 = new RegExp('good night')
        let regex23 = new RegExp('Good Night')
        
        let regex24 = new RegExp('bye')
        let regex25 = new RegExp('BYE')
        let regex26 = new RegExp('Bye')
        
        let regex27 = new RegExp('BA')
        let regex28 = new RegExp('ba')
        let regex29 = new RegExp('Ba')
        
        let regex30 = new RegExp('හායි')
        let regex31 = new RegExp('බායි')
        let regex32 = new RegExp('මොකද කරන්නෙ')
        let regex33 = new RegExp('මොකුත් නෑ')
        let regex34 = new RegExp('මුකුත් නැ')
        let regex35 = new RegExp('ගුඩ් මෝනින්')
        let regex36 = new RegExp('ගුම් මෝනිම්')
        let regex37 = new RegExp('ගුඩ් නයිට්')
        let regex38 = new RegExp('බෑ')
        let regex39 = new RegExp('බැ')
        let regex40 = new RegExp('බායි')
        
        let regex41 = new RegExp('Kari ')
        let regex42 = new RegExp('kari ')
        let regex43 = new RegExp('Hukana')
        let regex44 = new RegExp('hukana')
        let regex45 = new RegExp('හුත්තා')
        let regex46 = new RegExp('හුත්ති')
        let regex47 = new RegExp('හුකන්නා')
        let regex48 = new RegExp('හුකනවා')
        let regex49 = new RegExp('හිකුනා')
        let regex50 = new RegExp('හිකිලා')
        let regex51 = new RegExp('හුත්')
        let regex52 = new RegExp('හුකා')
        let regex53 = new RegExp('කැරියා')
        let regex54 = new RegExp('කැරි')
        let regex55 = new RegExp('පකයා')
        let regex56 = new RegExp('පක')
        let regex57 = new RegExp('පකා')
        let regex58 = new RegExp('පක්')
        let regex59 = new RegExp('ෆක්')
        let regex60 = new RegExp('පින්නයා')
        let regex61 = new RegExp('pinnaya')
        let regex62 = new RegExp('Pinnaya')
        let regex63 = new RegExp('බඩුව')
        let regex64 = new RegExp('වේසාවා')
        let regex65 = new RegExp('වේසි')
        let regex66 = new RegExp('පයිය')
        let regex67 = new RegExp('පයියා')
        let regex68 = new RegExp('esawa ')
        let regex69 = new RegExp(' esi ')
        let regex70 = new RegExp('uddika ')
        let regex71 = new RegExp('Uddika ')
        let regex72 = new RegExp('උද්දික ')
        let regex73 = new RegExp('ඒසාවා ')
        let regex74 = new RegExp('ඒසි')
        let regex75 = new RegExp('Esawa ')
        let regex76 = new RegExp('Esi ')
        let regex77 = new RegExp('හුකන්නා')
        let regex78 = new RegExp('හුත්තිගෙ')
        let regex79 = new RegExp('Huththige')
        let regex80 = new RegExp('huththige')
        let regex81 = new RegExp('වේසිගෙ')
        let regex82 = new RegExp('ponnaya')
        let regex83 = new RegExp('ponnay')
        let regex84 = new RegExp('ponnayage')
        let regex85 = new RegExp('ponnayek')
        let regex86 = new RegExp('ponnayekne')
        let regex87 = new RegExp('ponnayekge')
        let regex88 = new RegExp('පොන්නයා')
        let regex89 = new RegExp('පොන්නයෙක්')
        let regex90 = new RegExp('පොන්නයෙක්නෙ')
        let regex91 = new RegExp('පොන්නයෙක්ගෙ')
        let regex92 = new RegExp('vesi ')
        let regex93 = new RegExp('vesawa')
        let regex94 = new RegExp('vesiyak')
        let regex95 = new RegExp('wesiyak')
        let regex96 = new RegExp('Wesiyak')
        let regex97 = new RegExp('Vesi ')
        let regex98 = new RegExp('Vesawa')
        let regex99 = new RegExp('වේසියක්ගෙ')
        let regex100 = new RegExp('Huththiyak')
        let regex101 = new RegExp('huththiyak')
        let regex102 = new RegExp('payyek')
        let regex103 = new RegExp('Payyek')
        let regex104 = new RegExp('pakayek')
        let regex105 = new RegExp('Pakayek')
        let regex106 = new RegExp('Huththek')
        let regex107 = new RegExp('huththek')
        let regex108 = new RegExp('හුත්තියක්')
        let regex109 = new RegExp('පයියෙක්')
        let regex110 = new RegExp('වේසියක්')
        let regex111 = new RegExp('බඩුවක්')
        let regex112 = new RegExp('baduwak')
        let regex113 = new RegExp('Baduwak')
        let regex114 = new RegExp('pinnayek')
        let regex115 = new RegExp('Pinnayek')
        let regex116 = new RegExp('පින්නයෙක්')
        let regex117 = new RegExp('Huththage')
        let regex118 = new RegExp('huththage')
        let regex119 = new RegExp('හුත්තගෙ')
        let regex120 = new RegExp('Huththata')
        let regex121 = new RegExp('හුත්තට')
        let regex122 = new RegExp('huththata')
        let regex123 = new RegExp('pakata')
        let regex124 = new RegExp('Pakata')
        let regex125 = new RegExp('පකට')
        let regex126 = new RegExp('පකාට')
        let regex127 = new RegExp('ponnayata')
        let regex128 = new RegExp('Ponnayata')
        let regex129 = new RegExp('Huththata')
        let regex130 = new RegExp('huththata')
        let regex131 = new RegExp('හුත්තට')
        let regex132 = new RegExp('පොන්නයට')
        let regex133 = new RegExp('පයියට')
        let regex134 = new RegExp('payyata')
        let regex135 = new RegExp('Payyata')
        let regex136 = new RegExp('vesita')
        let regex137 = new RegExp('Vesita')
        let regex138 = new RegExp('wesita')
        let regex139 = new RegExp('Wesita')
        let regex140 = new RegExp('වේසිට')
        let regex141 = new RegExp('vesiyek')
        let regex142 = new RegExp('Vesiyek')
        let regex143 = new RegExp('Wesiyek')
        let regex144 = new RegExp('vesiyek')
        let regex145 = new RegExp('වේසියෙක්')
        let regex146 = new RegExp('හුත්තියෙක්')
        let regex147 = new RegExp('huththiyek')
        let regex148 = new RegExp('Huththiyek')
        let regex149 = new RegExp('huttiyek')
        let regex150 = new RegExp('Huttiyek')
        let regex151 = new RegExp('huttek')
        let regex152 = new RegExp('Huttek')
        let regex153 = new RegExp('ponni')
        let regex154 = new RegExp('Ponni')
        let regex155 = new RegExp('පොන්නි')
        let regex156 = new RegExp('ponniyak')
        let regex157 = new RegExp('Ponniyak')
        let regex158 = new RegExp('Ponniyek')
        let regex159 = new RegExp('ponniyek')
        let regex160 = new RegExp('Bacic')
        let regex161 = new RegExp('becic')
        let regex162 = new RegExp('becige')
        let regex163 = new RegExp('Basige')
        let regex164 = new RegExp('Bacige')
        let regex165 = new RegExp('besige')
        let regex166 = new RegExp('hukaam')
        let regex167 = new RegExp('Hukaam')
        let regex168 = new RegExp('Hukaham')
        let regex169 = new RegExp('Hukahan')
        let regex170 = new RegExp('hukahan')
        let regex171 = new RegExp('hukaham')
        let regex172 = new RegExp('hukapu')
        let regex173 = new RegExp('Hukapu')
        let regex174 = new RegExp('හුකාම්')
        let regex175 = new RegExp('හුකහම්')
        let regex176 = new RegExp('pakeer')
        let regex177 = new RegExp('fakeer')
        let regex178 = new RegExp('පකීර්')
        let regex179 = new RegExp('හුකහන්')
        let regex180 = new RegExp('ෆකීර්')
        let regex181 = new RegExp('පිත්තම්')
        let regex182 = new RegExp('කල්ලතෝනි')
        let regex183 = new RegExp('මරිමොංගල්')
        let regex184 = new RegExp('සිපයියා')
        let regex185 = new RegExp('පිම්පි')
        let regex186 = new RegExp('වඳ')
        let regex187 = new RegExp('පීචන්')
        let regex188 = new RegExp('කැරිය')
        let regex189 = new RegExp('ලෙස්බියන්')
        let regex190 = new RegExp('හොරහුත්ති')
        let regex191 = new RegExp('නාට්ටාමි')
        let regex192 = new RegExp('බැල්ලි')
        let regex193 = new RegExp('පක')
        let regex194 = new RegExp('ඇටදෙක')
        let regex195 = new RegExp('මන්දමානසික')
        let regex196 = new RegExp('කණ්ඩම්')
        let regex197 = new RegExp('කොණ්ඩම්')
        let regex198 = new RegExp('පීචන්')
        let regex199 = new RegExp('පකෝ')
        let regex200 = new RegExp('කනවැන්දුමා')
        let regex201 = new RegExp('මෑඇටේ')
        let regex202 = new RegExp('මෑමල')
        let regex203 = new RegExp('අවජාතක')
        let regex204 = new RegExp('බලුජානෙ')
        let regex205 = new RegExp('හුකන්නා')
        let regex206 = new RegExp('බඩුව')
        let regex207 = new RegExp('ගොම්බඩුව')
        let regex208 = new RegExp('පොන්නහුකන්නා')
        let regex209 = new RegExp('කැරිහුත්ති')
        let regex210 = new RegExp('පොට්ටහුත්ති')
        let regex211 = new RegExp('පොට්ටවේසි')
        let regex212 = new RegExp('ෆක්')
        let regex213 = new RegExp('වඳහුත්ති')
        let regex214 = new RegExp('ලෙඩබැල්ලි')
        let regex215 = new RegExp('වේසබඩුව')
        let regex216 = new RegExp('පිත්තම්')
        let regex217 = new RegExp('piththam')
        let regex218 = new RegExp('Piththam')
        let regex219 = new RegExp('marimongal')
        let regex220 = new RegExp('Marimongal')
        let regex221 = new RegExp('pimpi')
        let regex222 = new RegExp('Pimpi')
        let regex223 = new RegExp('pichan')
        let regex224 = new RegExp('Pichan')
        let regex225 = new RegExp('kariya')
        let regex226 = new RegExp('Kariya')
        let regex227 = new RegExp('හොරහුත්ති')
        let regex228 = new RegExp('horahuththi')
        let regex229 = new RegExp('Horahuththi')
        let regex230 = new RegExp('nattami')
        let regex231 = new RegExp('Nattami')
        let regex232 = new RegExp('paka ')
        let regex233 = new RegExp('Paka ')
        let regex234 = new RegExp('hukaham')
        let regex235 = new RegExp('Hukaham')
        let regex236 = new RegExp('mandamanasika')
        let regex237 = new RegExp('Mandamanasika')
        let regex238 = new RegExp('kandam')
        let regex239 = new RegExp('Kandam')
        let regex240 = new RegExp('kondam')
        let regex241 = new RegExp('Kondam')
        let regex242 = new RegExp('pichan')
        let regex243 = new RegExp('Pichan')
        let regex244 = new RegExp('pako ')
        let regex245 = new RegExp('Pako ')
        let regex246 = new RegExp('kanawanduma')
        let regex247 = new RegExp('Kanawanduma')
        let regex248 = new RegExp('ma ate ')
        let regex249 = new RegExp('Ma ate ')
        let regex250 = new RegExp('ma mfdfsgggala ')
        let regex251 = new RegExp('Ma maggddsdla')
        let regex252 = new RegExp('awajathaka')
        let regex253 = new RegExp('Awajathaka')
        let regex254 = new RegExp('balujane')
        let regex255 = new RegExp('Balujane')
        let regex256 = new RegExp('hukanna')
        let regex257 = new RegExp('Hukanna')
        let regex258 = new RegExp('gonbaduwa')
        let regex259 = new RegExp('Gonbaduwa')
        let regex260 = new RegExp('ponnahukanna')
        let regex261 = new RegExp('Ponnahukanna')
        let regex262 = new RegExp('karihuththu')
        let regex263 = new RegExp('Karihuththi')
        let regex264 = new RegExp('pottahuththi')
        let regex265 = new RegExp('Pottahuththi')
        let regex266 = new RegExp('pottawesi')
        let regex267 = new RegExp('Pottawesi')
        let regex268 = new RegExp('kbgigihogkgkgggjvuug')
        let regex269 = new RegExp('ffhhufffufjjffjjjfjjjifjffhhhfhfh')
        let regex270 = new RegExp('wadahuththi')
        let regex271 = new RegExp('Wadahuththi')
        let regex272 = new RegExp('ledaballi')
        let regex273 = new RegExp('Ledaballi')
        let regex274 = new RegExp('wesabaduwa')
        let regex275 = new RegExp('Wesabaduwa')
        let regex276 = new RegExp('pinnayek')
        let regex277 = new RegExp('Pinnayek')
        let regex278 = new RegExp('හුත්තෝ')
        let regex279 = new RegExp('huththo')
        let regex280 = new RegExp('Huththo')
        let regex281 = new RegExp('hutto')
        let regex282 = new RegExp('Hutto')
        let regex283 = new RegExp('පකෝ')
        let regex284 = new RegExp('pako')
        let regex285 = new RegExp('Pako ')
        let regex286 = new RegExp('පයියො')
        let regex287 = new RegExp('payyo')
        let regex288 = new RegExp('Payyo')
        let regex289 = new RegExp('කැරියෝ')
        let regex290 = new RegExp('kariyo')
        let regex291 = new RegExp('Kariyo')
        let regex292 = new RegExp('puthcfsdfghjjo ')
        let regex293 = new RegExp('පුvghjiiiiiතෝ ')
        let regex294 = new RegExp('හුකන්නො ')
        let regex295 = new RegExp('hukanno')
        let regex296 = new RegExp('Hukanno')
        let regex297 = new RegExp('keriyo')
        let regex298 = new RegExp('Keriyo')
        let regex299 = new RegExp('esawo ')
        let regex300 = new RegExp('Esawo ')
        let regex301 = new RegExp('esavo ')
        let regex302 = new RegExp('Esavo ')
        let regex303 = new RegExp('https://chat')
        let regex304 = new RegExp('hutho ')
        let regex305 = new RegExp('Hutho ')
        let regex306 = new RegExp('pamka')
        let regex307 = new RegExp('Pamka')
        let regex308 = new RegExp('Humkapan')
        let regex309 = new RegExp('humkapan')
        let regex310 = new RegExp('humtha')
        let regex311 = new RegExp('Humtha')
        let regex312 = new RegExp('Humtho')
        let regex313 = new RegExp('humtho')
        let regex314 = new RegExp('Pamko')
        let regex315 = new RegExp('pamko')
        let regex316 = new RegExp('kamriya')
        let regex317 = new RegExp('Kamriya')
        let regex318 = new RegExp('wemsi')
        let regex319 = new RegExp('Wemsi')
        let regex320 = new RegExp('pussy')
        let regex321 = new RegExp('piss')
        let regex322 = new RegExp('xnxx')
        let regex323 = new RegExp('Piss ')
        let regex324 = new RegExp('Pussy')
        let regex325 = new RegExp('vulva')
        let regex326 = new RegExp('Vulva')
        let regex327 = new RegExp('penis')
        let regex328 = new RegExp('kumuthu')
        let regex329 = new RegExp('Kumuthu')
        let regex330 = new RegExp('කුමුතු')
        let regex331 = new RegExp('prabhasha')
        let regex332 = new RegExp('Prabhasha')
        let regex333 = new RegExp('prabasha')
        let regex334 = new RegExp('ප්‍රභාෂ')
        let regex335 = new RegExp('love')
        let regex336 = new RegExp('ලව්')




        if (regex01.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK01, MessageType.text, {quoted: message.data })
                
        } 
        else if (regex02.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK01, MessageType.text, {quoted: message.data })
                
        }
         else if (regex03.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK01, MessageType.text, {quoted: message.data })
                
        }
        else if (regex04.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK02, MessageType.text, {quoted: message.data })
                
        }
        else if (regex05.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK02, MessageType.text, {quoted: message.data })
                
        }
         else if (regex06.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK02, MessageType.text, {quoted: message.data })
                
        }
         else if (regex07.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK03, MessageType.text, {quoted: message.data })
                
        }
         else if (regex08.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK03, MessageType.text, {quoted: message.data })
                
        }
         else if (regex09.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK03, MessageType.text, {quoted: message.data })
                
        }
         else if (regex10.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK04, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex11.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK04, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex12.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK04, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex13.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK05, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex14.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK05, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex15.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK05, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex16.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK06, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex17.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK06, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex18.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK06, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex19.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK06, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex20.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK07, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex21.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK07, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex22.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK07, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex23.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK07, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex24.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK08, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex25.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK08, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex26.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK08, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex27.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK09, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex28.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK09, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex29.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK09, MessageType.text, {quoted: message.data })
                
        }     
        else if (regex30.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK10, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex31.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK11, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex32.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK12, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex33.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK13, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex34.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK13, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex35.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK14, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex36.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK15, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex37.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK16, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex38.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK17, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex39.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK17, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex40.test(message.message)) {
                  await message.client.sendMessage(message.jid,KKK18, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex41.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex42.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex43.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex44.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex45.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex46.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex47.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex48.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex49.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex50.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex51.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex52.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex53.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex54.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex55.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex56.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex57.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex58.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex59.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex60.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex61.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex62.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex63.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex64.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex65.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex66.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex67.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex68.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex69.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex70.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex71.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex72.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex73.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex74.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex75.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex76.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex77.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex78.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex79.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex80.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex81.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex82.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex83.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex84.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex85.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex86.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex87.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex88.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex89.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex90.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex91.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex92.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex93.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex94.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex95.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex96.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex97.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex98.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex99.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex100.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex101.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex102.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex103.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex104.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex105.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex106.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex107.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex108.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex109.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex110.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex111.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex112.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex113.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex114.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex115.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex116.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex117.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex118.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex119.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex120.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex121.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex122.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex123.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex124.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex125.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex126.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex127.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex128.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex129.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex130.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex131.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex132.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex133.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex134.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex135.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex136.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex137.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex138.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex139.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex140.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex141.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex142.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex143.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex144.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex145.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex146.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex147.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex148.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex149.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex150.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex151.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex152.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex153.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex154.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex155.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex156.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex157.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex158.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex159.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex160.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex161.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex162.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex163.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex164.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex165.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex166.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex167.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex168.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex169.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex170.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex171.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex172.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex173.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex174.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex175.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex176.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex177.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex178.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex179.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex180.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex181.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex182.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex183.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex184.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex185.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex186.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex187.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex188.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex189.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex190.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex191.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex192.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex193.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex194.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex195.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex196.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex197.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex198.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex199.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex200.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex201.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex202.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex203.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex204.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex205.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex206.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex207.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex208.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex209.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex210.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex211.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex212.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex213.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex214.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex215.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex216.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex217.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex218.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex219.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex220.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex221.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex222.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex223.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex224.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex225.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex226.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex227.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex228.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex229.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex230.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex231.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex232.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex233.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex234.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex235.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex236.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex237.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex238.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex239.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex240.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex241.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex242.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex243.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex244.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex245.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex246.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex247.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex248.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex249.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex250.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex251.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex252.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex253.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex254.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex255.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex256.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex257.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex258.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex259.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex260.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex261.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex262.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex263.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex264.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex265.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex266.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex267.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex268.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex269.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex270.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex271.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex272.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex273.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex274.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex275.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex276.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex277.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex278.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex279.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex280.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex281.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex282.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex283.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex284.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex285.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex286.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex287.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex288.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex289.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex290.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex291.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex292.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex293.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex294.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex295.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex296.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex297.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex298.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex299.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex300.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex301.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex302.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex303.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })      
                
        }      
        else if (regex303.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex304.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex305.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex306.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex307.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex308.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex309.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex310.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex311.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex312.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex313.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex314.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex315.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex316.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex317.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex318.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex319.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex320.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex321.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex322.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex323.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex324.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex325.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex326.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        }      
        else if (regex327.test(message.message)) {
                  await message.client.sendMessage(message.jid,ldc, MessageType.text, {quoted: message.data })
                
        } 
        else if (regex328.test(message.message)) {
            await message.client.sendMessage(message.jid,KKK19, MessageType.text, {quoted: message.data })
          
        }
        else if (regex329.test(message.message)) {
            await message.client.sendMessage(message.jid,KKK19, MessageType.text, {quoted: message.data })
          
        }
        else if (regex330.test(message.message)) {
            await message.client.sendMessage(message.jid,KKK19, MessageType.text, {quoted: message.data })
          
        }
    
    else if (regex331.test(message.message)) {
        await message.client.sendMessage(message.jid,KKK20, MessageType.text, {quoted: message.data })
      
    }
    else if (regex332.test(message.message)) {
        await message.client.sendMessage(message.jid,KKK20, MessageType.text, {quoted: message.data })
      
    }
    else if (regex333.test(message.message)) {
        await message.client.sendMessage(message.jid,KKK20, MessageType.text, {quoted: message.data })
      
    }
    else if (regex334.test(message.message)) {
        await message.client.sendMessage(message.jid,KKK20, MessageType.text, {quoted: message.data })
      
    }
    else if (regex335.test(message.message)) {
        await message.client.sendMessage(message.jid,KKK21, MessageType.text, {quoted: message.data })
    }
    else if (regex336.test(message.message)) {
        await message.client.sendMessage(message.jid,KKK21, MessageType.text, {quoted: message.data })
    }
}     
    
}))
