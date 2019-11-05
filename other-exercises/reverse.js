function reverse(str) {
	if (str.length <= 1) return str;
	const arr = str.split('');
	return reverse(arr.slice(1).join('')) + arr[0];
}

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'