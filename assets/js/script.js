// Function to handle license key formatting
var licenseKeyFormatting = function(s, k) {
    let output = '';
    const arrayString = s.replaceAll('-', '').split('');
    let count = 1;

    for (let i = arrayString.length - 1; i >= 0; i--) {
        output = arrayString[i].toUpperCase() + output;
        if (!(count % k) && count && i) {
            output = '-' + output;
        }
        count++;
    }

    return output;
};

// Function to handle input field changes and trigger output display
function handleInputAndSubmit() {
    var formatString = document.getElementById('formatInput').value;
    var keyLength = parseInt(document.getElementById('lengthInput').value);
    var outputElement = document.getElementById('output');

    if (formatString && keyLength > 0) {
        var formattedKey = licenseKeyFormatting(formatString, keyLength);
        outputElement.innerText = formattedKey;
    } else {
        outputElement.innerText = 'Please enter a valid format string and key length.';
    }
}

// Add event listeners for the submit button and input fields
document.getElementById('submit').addEventListener('click', handleInputAndSubmit);

document.getElementById('formatInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleInputAndSubmit();
    }
});

document.getElementById('lengthInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleInputAndSubmit();
    }
});

// Function to clear input fields on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formatInput').value = '';
    document.getElementById('lengthInput').value = '';
});