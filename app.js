const fs = require('fs');
const axios = require('axios');
require('dotenv').config(); // Zmienne srodowiskowe

// Funkcja do wczytywania tekstu z pliku
function readTextFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

// Funkcja do przetwarzania artykułu
async function processArticle(articleContent) {
    const prompt = `Przekształć poniższy artykuł w kod HTML, który spełnia następujące wytyczne:
• Użyj odpowiednich tagów HTML do strukturyzacji treści.
• Określ miejsca, gdzie warto wstawić grafiki – oznacz je z użyciem tagu <img> z atrybutem src="image_placeholder.jpg". Dodaj atrybut alt do każdego obrazka z dokładnym promptem, który możemy użyć do wygenerowania grafiki. Umieść podpisy pod grafikami używając odpowiedniego tagu HTML.
• Nie dodawaj kodu CSS ani JavaScript. Zwrócony kod powinien zawierać wyłącznie zawartość do wstawienia pomiędzy tagami <body> i </body>. Nie dołączaj znaczników <html>, <head> ani <body>.

Artykuł:
`

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-3.5-turbo", // Model gpt, wybralem gpt-3.5-turbo bo jest bardziej wydajny
            messages: [
                { role: "system", content: "You are an assistant that generates HTML content." },
                { role: "user", content: `${prompt}\n\n${articleContent}` }
            ],
            max_tokens: 1500,
            temperature: 0.5,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` // Replace with your OpenAI API key
            }
        });

        const data = response.data;

        // Sprawdzenie odpowiedzi
        if (data && data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
            return data.choices[0].message.content.trim();
        } else {
            throw new Error("Unexpected response structure from OpenAI API.");
        }
    } catch (error) {
        console.error('Error processing article:', error.message);
        throw error;
    }
}

// Glowna funkcja aplikacji
async function main() {
    try {
        const articleContent = await readTextFile('artykul.txt');
        const processedContent = await processArticle(articleContent);

        fs.writeFile('artykul.html', processedContent, (err) => {
            if (err) throw err;
            console.log('The file artykul.html has been saved.');
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
