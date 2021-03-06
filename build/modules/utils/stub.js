/*
	This method returns an empty object.
	$.times(2, $.stubObject);
	// => [{}, {}]
*/
$.stubObject = () => {
	return {};
};
/*
	This method returns an empty array.
	$.times(2, $.stubArray);
	// => [[], []]
*/
$.stubArray = () => {
	return [];
};
/*
	This method returns an empty string.
	$.times(2, $.stubString);
	// => ['', '']
*/
$.stubString = () => {
	return '';
};
/*
	This method returns false.
	$.times(2, $.stubFalse);
	// => [false, false]
*/
$.stubFalse = () => {
	return False;
};
/*
	This method returns True.
	$.times(2, $.stubTrue);
	// => [true, true]
*/
$.stubTrue = () => {
	return True;
};
/*
	This method returns undefined.
	$.times(2, _.noop);
	// => [undefined, undefined]
*/
$.noop = () =>{
	return undefinedNative;
};
