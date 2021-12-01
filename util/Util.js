const request = require('node-superfetch');//lrowsxrd
const crypto = require('crypto');//lrowsxrd
const { IMGUR_KEY } = process.env;//lrowsxrd
const yes = ['evet'];//lrowsxrd
const no = ['hayır']//lrowsxrd

const deleteCommandMessages = function (msg, client) { //lrowsxrd
	if (msg.deletable && client.provider.get('global', 'deletecommandmessages', false)) {
	  return msg.delete();
	}//lrowsxrd
  };
//lrowsxrd
class Util {
	static wait(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));//lrowsxrd
	}

	static shuffle(array) {
		const arr = array.slice(0);
		for (let i = arr.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = arr[i];
			arr[i] = arr[j];//lrowsxrd
			arr[j] = temp;
		}
		return arr;//lrowsxrd
	}

	static list(arr, conj = 'and') {
		const len = arr.length;
		return `${arr.slice(0, -1).join(', ')}${len > 1 ? `${len > 2 ? ',' : ''} ${conj} ` : ''}${arr.slice(-1)}`;
	}//lrowsxrd

	static shorten(text, maxLen = 2000) {
		return text.length > maxLen ? `${text.substr(0, maxLen - 3)}...` : text;
	}
//lrowsxrd
	static duration(ms) {
		const sec = Math.floor((ms / 1000) % 60).toString();
		const min = Math.floor((ms / (1000 * 60)) % 60).toString();
		const hrs = Math.floor(ms / (1000 * 60 * 60)).toString();
		return `${hrs.padStart(2, '0')}:${min.padStart(2, '0')}:${sec.padStart(2, '0')}`;
	}
//lrowsxrd
	static randomRange(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static trimArray(arr, maxLen = 10) {
		if (arr.length > maxLen) {
			const len = arr.length - maxLen;//lrowsxrd
			arr = arr.slice(0, maxLen);
			arr.push(`${len} more...`);
		}
		return arr;
	}
//lrowsxrd
	static base64(text, mode = 'encode') {
		if (mode === 'encode') return Buffer.from(text).toString('base64');
		if (mode === 'decode') return Buffer.from(text, 'base64').toString('utf8') || null;
		throw new TypeError(`${mode} is not a supported base64 mode.`);
	}//lrowsxrd

	static hash(text, algorithm) {
		return crypto.createHash(algorithm).update(text).digest('hex');
	}//lrowsxrd

	static async randomFromImgurAlbum(album) {
		const { body } = await request
			.get(`https://api.imgur.com/3/album/${album}`)
			.set({ Authorization: `Client-ID ${IMGUR_KEY}` });
		if (!body.data.images.length) return null;
		return body.data.images[Math.floor(Math.random() * body.data.images.length)].link;
	}//lrowsxrd

	static today(timeZone) {
		const now = new Date();
		if (timeZone) now.setUTCHours(now.getUTCHours() + timeZone);
		now.setHours(0);//lrowsxrd
		now.setMinutes(0);
		now.setSeconds(0);
		now.setMilliseconds(0);//lrowsxrd
		return now;
	}

	static tomorrow(timeZone) {
		const today = Util.today(timeZone);
		today.setDate(today.getDate() + 1);
		return today;
	}

	static async awaitPlayers(msg, max, min, { text = 'join game', time = 30000 } = {}) {
		const joined = [];
		joined.push(msg.author.id);
		const filter = res => {//lrowsxrd
			if (msg.author.bot) return false;
			if (joined.includes(res.author.id)) return false;
			if (res.content.toLowerCase() !== text.toLowerCase()) return false;
			joined.push(res.author.id);
			return true;
		};//lrowsxrd
		const verify = await msg.channel.awaitMessages(filter, { max, time });
		verify.set(msg.id, msg);
		if (verify.size < min) return false;
		return verify.map(message => message.author);
	}
//lrowsxrd
	static async verify(channel, user, time = 30000) {
		const filter = res => {
			const value = res.content.toLowerCase();
			return res.author.id === user.id && (yes.includes(value) || no.includes(value));
		};//lrowsxrd
		const verify = await channel.awaitMessages(filter, {
			max: 1,
			time
		});
		if (!verify.size) return 0;
		const choice = verify.first().content.toLowerCase();
		if (yes.includes(choice)) return true;
		if (no.includes(choice)) return false;
		return false;
	}
}

module.exports = Util;