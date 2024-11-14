<h1>Opis aplikacji</h1>

Ta aplikacja jest napisana w Node.js i służy do przekształcania artykułu tekstowego w kod HTML przy użyciu API OpenAI. Aplikacja wykonuje następujące kroki:

1. Łączy się z API OpenAI – wykorzystuje model językowy GPT-3.5-turbo do przetwarzania tekstu artykułu.

2. Odczytuje plik tekstowy z artykułem – wczytuje zawartość pliku artykul.txt.

3. Przekazuje treść artykułu wraz z promptem do OpenAI – wysyła zapytanie do API OpenAI z odpowiednio sformułowanym promptem, aby otrzymać przekształcony kod HTML.

4. Zapisuje otrzymany kod w pliku artykul.html – zapisuje wygenerowany kod HTML w pliku, który można następnie wykorzystać na stronie internetowej.

Kod artykułu wygenerowany przez AI spełnia następujące wytyczne:

- Używa odpowiednich tagów HTML do strukturyzacji treści.
- Oznacza miejsca, gdzie warto wstawić grafiki, używając tagu img z atrybutem src="image_placeholder.jpg". Dodaje atrybut alt do każdego obrazka z dokładnym promptem do wygenerowania grafiki. Podpisy pod grafikami są umieszczane przy użyciu odpowiednich tagów HTML.
- Nie zawiera kodu CSS ani JavaScript. Zwrócony kod zawiera wyłącznie zawartość do wstawienia pomiędzy tagami body. Nie zawiera znaczników html, head ani body.

<h2>Pliki w repozytorium</h2>

- app.js – kod źródłowy aplikacji.
- artykul.txt – plik tekstowy z artykułem do przetworzenia.
- artykul.html – wygenerowany przez aplikację kod HTML artykułu.
- szablon.html – szablon strony HTML.
- podgląd.html – plik pozwalający na podgląd wygenerowanego artykułu w szablonie.

<h2>Wymagania</h2>

- Node.js zainstalowany na komputerze.
- Konto w OpenAI z wygenerowanym kluczem API.

<h2>Instrukcja uruchomienia</h2>

- Sklonuj repozytorium:
```
git clone https://github.com/KornelFugat/ArticleConverter_OpenAI.git
cd ArticleConverter_OpenAI
```

- Zainstaluj wymagane biblioteki:
```
npm install axios fs dotenv
```
- Ustaw zmienną środowiskową z kluczem API OpenAI:

- Utwórz plik .env w głównym katalogu aplikacji.

- Dodaj do niego linię:
```
OPENAI_API_KEY=twój_klucz_api
```
- Zastąp twój_klucz_api swoim rzeczywistym kluczem API OpenAI.

- Uruchom aplikację:
```
node app.js
```
- Sprawdź wygenerowany plik artykul.html:

- Otwórz plik podgląd.html w przeglądarce, aby zobaczyć, jak może prezentować się wygenerowany artykuł w szablonie strony.
<h2>Uwagi</h2>

- Upewnij się, że masz dostęp do internetu, aby aplikacja mogła połączyć się z API OpenAI.
- Jeśli napotkasz problemy z limitem znaków lub tokenów, możesz dostosować wartość max_tokens w pliku app.js.
- Pamiętaj, że wygenerowany kod HTML nie zawiera znaczników html, head ani body. Jest to celowe, gdyż kod ten jest przeznaczony do wstawienia w istniejący szablon strony.
