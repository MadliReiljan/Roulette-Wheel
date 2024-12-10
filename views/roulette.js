document.getElementById('spinButton').addEventListener('click', async () => {
    const resultDiv = document.getElementById('result');

    try {
        const response = await fetch('/api/wheel/spin');
        const data = await response.json();

        if (data.success) {
            resultDiv.textContent = `Result: ${data.result.color} ${data.result.number}`;
        } else {
            resultDiv.textContent = 'Failed to spin the wheel.';
        }
    } catch (error) {
        resultDiv.textContent = 'Error: Could not connect to the server.';
    }
});
