// jsweek4hw.js
function billingFunction() {
	if (same.checked) {
		billingName.value = shippingName.value;
		billingZip.value = shippingZip.value; 
	} else {
		billingName.value = ""
		billingZip.value = ""
	}
}