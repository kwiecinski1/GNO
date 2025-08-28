# Generator Nazw Odcinków (GNO)

**Opis:**  
Generator Nazw Odcinków do programów montażowych. Aplikacja webowa pozwala na szybkie generowanie nazw plików odcinków według wybranego schematu, z uwzględnieniem wersji, numerów, dat i innych parametrów. Może być używana jako PWA (Progressive Web App).

## Funkcje strony

### Tryby generowania
- **Odcinek**: generuje nazwę pliku dla pojedynczego odcinka na podstawie nazwy serii, numeru odcinka i podtytułu.
- **Sezon**: pozwala wygenerować nazwy dla wielu odcinków naraz (można podać zakres np. `1-5` lub listę `1,3,5`). Podtytuł jest wtedy zablokowany.
- **Niestandardowy**: umożliwia wpisanie własnej, dowolnej nazwy.

### Ustawienia formatowania
- **Spacje na myślniki**: opcja zamieniająca spacje na myślniki w wygenerowanej nazwie pliku.
- **Rodzaj wersji**: wybór typu wersji (Emisja, Kolaudacja, Wizja, Radio, Niestandardowa) oraz w razie potrzeby możliwość wpisania niestandardowej nazwy wersji.
- **Numer wersji**: pole do wpisania numeru wersji.
- **Data**: wybór daty z kalendarza.
- **Format daty**: wybór formatu daty (np. YYYY-MM-DD, DD-MM-YY, MM-DD itd.).

### Podgląd i generowanie
- **Podgląd nazwy**: na bieżąco pokazuje jak będzie wyglądała wygenerowana nazwa pliku.
- **Generuj nazwę**: przycisk generujący nazwę (lub nazwy) i kopiujący ją do schowka.
- **Kopiuj datę**: osobny przycisk do kopiowania sformatowanej daty.
- **Wyczyść wszystko**: czyści wszystkie pola i historię.

### Historia
- Lista ostatnio wygenerowanych nazw plików dostępna na stronie.

### Tryb jasny/ciemny
- Przełącznik trybu jasnego/ciemnego, automatycznie wykrywa preferencje systemowe.

### Komunikaty
- Dedykowane okno z komunikatami informacyjnymi/błędami.

## Progressive Web App (PWA)

Aplikacja może być zainstalowana na urządzeniu jako PWA:
- Manifest oraz Service Worker umożliwiają działanie offline i instalację na pulpicie (komputer/telefon).
- Ikona oraz obsługa podstawowych funkcji PWA.

## Technologie

- HTML, CSS (Tailwind), JavaScript
- Manifest PWA oraz Service Worker

## Uruchomienie

Aplikacja działa bezpośrednio w przeglądarce, nie wymaga serwera.  
Wystarczy otworzyć `index.html` lub przejść na stronę:  
https://kwiecinski1.github.io/GNO/