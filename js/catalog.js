function updateRange() {
	var minPriceHandle = document.getElementById("min-price-handle");
	var maxPriceHandle = document.getElementById("max-price-handle");
	var minPriceInput = document.getElementById("price-min");
	var maxPriceInput = document.getElementById("price-max");
	var minPrice = Number(minPriceInput.value);
	var maxPrice = Number(maxPriceInput.value);
	var highestPrice = Number(minPriceInput.getAttribute('max'));
	if (minPrice > maxPrice) {
		let temp = minPrice;
		//maxPriceInput.value = minPrice;
		minPrice = maxPrice;
		//minPriceInput.value = maxPrice;
		maxPrice = temp;
	}
	if (minPrice < 0) {
		minPrice = 0;
		//minPriceInput.value = minPrice;
	}
	if (maxPrice > highestPrice) {
		maxPrice = highestPrice;
		//maxPriceInput.value = maxPrice;
	}
	var minPriceOffset = 201 * minPrice / highestPrice;
	var maxPriceOffset = 201 * maxPrice / highestPrice;
	minPriceHandle.style.left = minPriceOffset + "px";
	maxPriceHandle.style.left = maxPriceOffset + "px";
	var coloredStripe = document.getElementById("colored-stripe");
	coloredStripe.style.left = minPriceOffset + "px";
	coloredStripe.style.width = maxPriceOffset - minPriceOffset + "px";

	var dummy1 = document.getElementById("dummy-1");
	var dummy2 = document.getElementById("dummy-2");
	var dummy3 = document.getElementById("dummy-3");
	var minPriceLabel = document.getElementById("min-price-label");
	var maxPriceLabel = document.getElementById("max-price-label");
	dummy1.style.flexGrow = (minPriceOffset < minPriceLabel.offsetWidth / 2) ? 0 : minPriceOffset;
	dummy2.style.flexGrow = maxPriceOffset - minPriceOffset;
	dummy3.style.flexGrow = (201 - maxPriceOffset < maxPriceLabel.offsetWidth / 2) ? 0 : 201 - maxPriceOffset;
	updateInputWidth(false, minPriceInput);
	updateInputWidth(false, maxPriceInput);
}

function updateInputWidth(e, node) {
	console.log(this + ' = ' + e)
	var input = node || this;
	setTimeout(function () {
		input.style.width = '';
		input.style.width = input.scrollWidth + 'px';
	}, 0);
}

function handleRangeClick(e) {
	if (e.target == e.currentTarget) {
		var minPriceInput = document.getElementById("price-min");
		var maxPriceInput = document.getElementById("price-max");
		var minPrice = Number(minPriceInput.value);
		var maxPrice = Number(maxPriceInput.value);
		var highestPrice = Number(minPriceInput.getAttribute('max'));
		if (minPrice < 0) {
			minPrice = 0;
			//minPriceInput.value = minPrice;
		}
		if (maxPrice > highestPrice) {
			maxPrice = highestPrice;
			//maxPriceInput.value = maxPrice;
		}		
		var newPrice = Math.floor((e.offsetX - 4) * highestPrice / 2010) * 10;
		if (newPrice < 0) {
			newPrice = 0;
		}
		if (newPrice > highestPrice) {
			newPrice = highestPrice;
		}
		if (Math.abs(newPrice - minPrice) < Math.abs(newPrice - maxPrice)) {
			minPriceInput.value = newPrice;
			updateInputWidth(false, minPriceInput);
		} else {
			maxPriceInput.value = newPrice;
			updateInputWidth(false, maxPriceInput);
		}
		var range = this;
		updateRange();

	}
}
document.getElementById("price-min").addEventListener("keyup", updateRange);
document.getElementById("price-max").addEventListener("keyup", updateRange);
document.getElementById("price-min").addEventListener("change", updateRange);
document.getElementById("price-max").addEventListener("change", updateRange);

document.getElementById("price-min").addEventListener("keydown", updateInputWidth);
document.getElementById("price-max").addEventListener("keydown", updateInputWidth);
updateRange();

document.getElementById("price-range").addEventListener("click", handleRangeClick);