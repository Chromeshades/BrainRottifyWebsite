import rottify from 'brain-rottify-text';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    const inputText = document.getElementById('input-text');
    const outputText = document.getElementById('output-text');
    const convertButton = document.getElementById('convert-button');
    
    console.log('Convert button:', convertButton);
    
    convertButton.addEventListener('click', async () => {
        console.log('Button clicked');
        const textToRottify = inputText.value;
        
        try {
            const response = await fetch('/api/rottify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: textToRottify })
            });
            
            const data = await response.json();
            outputText.textContent = data.result;
        } catch (error) {
            console.error('Error:', error);
            outputText.textContent = 'Error rottifying text!';
        }
    });
});