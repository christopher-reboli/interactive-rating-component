const feedbackSection = document.querySelector("#feedback");
const thankYouSection = document.querySelector(".thank-you");
const ratingOptions = document.querySelectorAll("input[name='rate']");
const rating = document.getElementById("rating");
const submitButton = document.querySelector("#submit");
let selected;

// Find the selected rating and update the text
const findSelected = () => {
	selected = document.querySelector("input[name='rate']:checked").value;
	rating.textContent = `You selected ${selected} out of 5`;
};

ratingOptions.forEach((ratingOption) => {
	ratingOption.addEventListener("change", findSelected);
});

// Submits rating and shows the "Thank you" section
submitButton.addEventListener("click", () => {
	if (selected == undefined) {
		alert("Please choose a note first!");
	} else {
		feedbackSection.style.display = "none";
		thankYouSection.style.display = "flex";
	}
});
