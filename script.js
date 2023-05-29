// complete the given function

function palindrome(str){
	let lowerecaseString=str.toLowerCase();
	
	let i=0;

	 let j=lowerecaseString.length-1;
	 while(i<j)
		 {
			 if(lowerecaseString.charAt(i)!==lowerecaseString.charAt(j))
			 {
				 return false;
			 }
			 i++;
			 j--;
		 }
	 return true;
 }
module.exports = palindrome
