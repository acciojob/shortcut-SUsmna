function shortcut(s1, s2) {
  // your code here
	if (s1 ==="" || s2===""){
		return '';
	}
	const letters = s1.charAt(0).toLowerCase() + s2.charAt(0).toLowerCase();
	return letters
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
