const https = require('https');

const apiUrl = "https://api.groq.com/openai/v1/chat/completions";
const apiKey = "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"; // Replace with your actual API key if not using environment variables

const requestData = JSON.stringify({
    model: "llama3-8b-8192",
    messages: [
        {
            role: "user",
            content: "Explain the importance of fast language models"
        }
    ]
});

const options = {
    hostname: "api.groq.com",
    path: "/openai/v1/chat/completions",
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        "Content-Length": Buffer.byteLength(requestData)
    }
};

const req = https.request(options, res => {
    let data = '';

    // Collect data chunks
    res.on('data', chunk => {
        data += chunk;
    });

    // Handle response when complete
    res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
            console.log("Response:", JSON.parse(data));
        } else {
            console.error(`Error: HTTP ${res.statusCode}`, data);
        }
    });
});

// Handle request errors
req.on('error', error => {
    console.error("Request error:", error);
});

// Send the request
req.write(requestData);
req.end();
