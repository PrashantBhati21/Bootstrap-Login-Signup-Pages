document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".form-control");

  // Loop through each input element
  inputs.forEach((input, index) => {
    // Event listener for when user types in the input field

    input.addEventListener("input", () => {
      if (input.value.length === 1 && index < inputs.length - 1) {
        // Move focus to the next input if the current one is filled

        inputs[index + 1].focus();
      }
    });

    // Event listener for handling 'Backspace' key

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && input.value === "" && index > 0) {
        // Move focus to the previous input if 'Backspace' is pressed and current input is empty

        inputs[index - 1].focus();
      }
    });
  });
});
const otpSent = () => {
  alert("OTP verified successfully");
};
