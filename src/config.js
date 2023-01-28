/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Other


global.prefa = ['','!','.','🐦','🐤','🗿','/']
global.sp = '⭔'
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'

global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.mess = {
    success: '*SUKSESS...*',
    admin: '*FITUR KHUSUS ADMIN GROUP!*',
    botAdmin: '*BOT HARUS JADI ADMIN TERLEBIH DAHULU!!*',
    owner: '*FITUR KUSUS OWNER!*',
    group: '*GUNAKAN FITUR INI DI GROUP*',
    private: '*GUNAKAN FITUR INI DI PRIVATE CHAT!*',
    bot: '*FITUR HANYA BISA DIGUNAKAN DI NOMOR BOT!*',
    wait: '*LOADING....*',
    nsfw: '*NSFW TIDAK AKTIF!!*',
    wrongFormat: '*FORMAT SALAH SILAHKAN CEK DAN BACA PRINTAH BOT TERLEBIH DAHULU*',
    banned: '*ANDA TELAH DI BANNED*',
    error: '*TERJADI KESALAHAN*',
    linkna: '*LINK*?',
}
global.thumb = fs.readFileSync('./karuta/karuta.png')
global.vidmenu = fs.readFileSync("./karuta/Karuta.mp4")
global.limitawal = {
premium: "Infinity",
free: 50
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
