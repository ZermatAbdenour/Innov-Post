const { OpenAI }= require("openai");  // Use the correct OpenAI import
const  fs =  require("fs");


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API, 
});

async function analyzeIssueWithPdf(sellerMessage, pdfPath) {
    try {
        const pdfContent = fs.readFileSync(pdfPath);

        const prompt = `
        A seller has raised a dispute claiming they delivered a product or service. 
        The seller's message is as follows:
        "${sellerMessage}"
        
        Attached is a PDF document with the seller's proof. Analyze the document to:
        1. Determine if the seller has provided sufficient proof of delivery.
        2. Provide a verdict ("Valid Proof" or "Insufficient Proof").
        3. Highlight specific parts of the PDF supporting your decision.
        `;

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a dispute resolution assistant.' },
                { role: 'user', content: prompt },
            ],
            files: [
                {
                    file_name: 'seller_proof.pdf',
                    file_content: pdfContent.toString('base64'), // Encode the PDF as base64
                },
            ],
            max_tokens: 500,
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error analyzing the issue:', error.message);
        throw error;
    }
}

// Example usage
const sellerMessage = "The buyer received the product on 2023-11-20 as shown in the attached delivery receipt.";
const pdfPath = './AI/seller_proof.pdf';

analyzeIssueWithPdf(sellerMessage, pdfPath)
    .then((result) => {
        console.log('Analysis Result:', result);
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
