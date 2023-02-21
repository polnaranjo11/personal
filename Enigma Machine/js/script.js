// Dictionary to switch characters to their encrypted versions
const conversion = {
    'a': '4',
    'e': '3',
    'i': 'l',
    'o': '0'
};

// Function to encrypt the message
function encryptMessage() {
    const messageInput = document.getElementById('message');
    const encryptedMessageOutput = document.getElementById('encrypted-message');
    let message = messageInput.value.toLowerCase();
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
        let char = message.charAt(i);
        if (char in conversion) {
            encryptedMessage += conversion[char];
        } else {
            encryptedMessage += char;
        }
    }
    encryptedMessageOutput.value = encryptedMessage;
    messageInput.value = '';
}