(function() {
		var plusBtn = document.getElementsByClassName("plus")[0];
		var minusBtn = document.getElementsByClassName("minus")[0];
		var count = document.getElementsByClassName("travel-time").value;
		document.getElementsByClassName("travel-time").value = "Count";
		var now = 0
		
		plusBtn.addEventListener("click", function(event) {
			event.preventDefault();
			count = now;
			now++;
		});
			
		if (document.onclick = plusButton) {
  			count++;
 			console.log(count);
		} else if (document.onclick = minusButton) {
			count--;
			 console.log(count);
			}
})();