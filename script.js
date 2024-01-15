/** @format */

const adviceQoute = document.querySelector(".advice-qoute");
const adviceId = document.querySelector(".advice-id");
const newAdviceBtn = document.querySelector(".new-advice-btn");

// add event listener for trigerring change of advice
newAdviceBtn.addEventListener("click", fetchNewAdvice);

// functions
function fetchNewAdvice() {
	// Call `fetch()`, passing in the URL.
	fetch("https://api.adviceslip.com/advice")
		// fetch() returns a promise. When we have received a response from the server,
		// the promise's `then()` handler is called with the response.
		.then((response) => {
			// Our handler throws an error if the request did not succeed.
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
			}
			// Otherwise (if the response succeeded), our handler fetches the response
			// as a JavaScript object by calling response.json(), and immediately returns the promise
			// returned by `response.json()`.
			else {
				// console.log(response.json());
				return response.json();
			}
		})
		// When response.json() has succeeded, the `then()` handler is called with
		// the object, and we assign it as the value of the `adviceSlipObject` variable.
		.then((slipObject) => {
			updateNewAdvice(slipObject.slip.id, slipObject.slip.advice);
		})
		// Catch any errors that might happen, and display a message
		// .
		.catch((error) => {
			console.log(error);
		});
}

function updateNewAdvice(id, advice) {
	// update the text contents of the affected elements
	adviceId.textContent = id;
	adviceQoute.textContent = advice;
}

// show new advice on page load finish
// fetchNewAdvice();
