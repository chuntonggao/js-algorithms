const log = console.log;
const stringSearch = (long: string, short: string): number => {
	let count: number = 0;
	for(let i = 0; i < long.length; i++) {
		for(let k = 0; k < short.length; k++) {
			if(long[i + k] !== short[k]) break;
			if(k === short.length - 1) count ++;
		}
	}
	return count;
}

log(stringSearch("lorie loled", "lol"));
log(stringSearch("lorie lololed olol lol lo", "lol"));