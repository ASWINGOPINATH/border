var gfg = document.getElementById("gfg");
		var changeBorder =
			document.getElementById("changeBorder");
		changeBorder.addEventListener("click", function () {
			gfg.style.border = "3px solid green";
			gfg.style.borderRadius = "10px";
		});