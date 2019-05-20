// 929. Unique Email Addresses

/**
 * @param {string[]} emails
 * @return {number}
 */

var numUniqueEmails = function(emails) {
	let differentEmails = [];  
	for(let i = 0; i < emails.length; i ++) {
			let eArray = emails[i].split('');
			let localArray =  eArray.splice(0, eArray.indexOf('@'));
			console.log(`Before: localArray is ${localArray}`);
			let domainArray = eArray.splice(eArray.indexOf('@'), eArray.length);

			const n = localArray.indexOf('+');
			if(n !== -1) { localArray = localArray.slice(0, n); }
			localArray = localArray.filter(char => char !== '.');
			console.log(`After: localArray is ${localArray}`);
			eArray = localArray.concat(domainArray);
			email = eArray.join('');
			console.log(`email address is ${email}`);
			if (! differentEmails.includes(email)) differentEmails.push(email);
	} 
	return differentEmails.length;  
};