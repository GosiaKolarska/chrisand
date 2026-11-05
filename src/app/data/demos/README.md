# Strony demo dla firm

Adres: `chrisand.design/demo/<firma>`. Strony nie są indeksowane ani linkowane z portfolio.

## Nowe demo

1. Skopiuj `szablon.json` jako `<firma>.json` i ustaw `slug` oraz treść.
2. Zaimportuj plik w `index.js` i dopisz go do tablicy `published`.
3. Prototyp i zrzuty ekranu wrzuć do `public/demo-files/<firma>/`.
4. Sprawdź lokalnie: `npm run dev`, a potem `/demo/<firma>`.

Sekcje `media`, `prototype` i `next` są opcjonalne: usunięcie ich z pliku JSON usuwa je ze strony.
Prototyp działa w izolowanej ramce. Żeby dopasować jej wysokość, odpowiadaj na wiadomość `"demo:height?"` i wysyłaj `parent.postMessage({ demoHeight: wysokosc }, "*")`, także po każdej zmianie widoku. Wzór jest w `public/demo-files/droplabs/prototype.html`.
Podgląd szablonu działa tylko lokalnie pod `/demo/szablon`.

## Zasady

- Pisz tylko to, co faktycznie sprawdziłeś. Bez szacunków strat.
- Bez marek i danych klientów firmy, chyba że masz zgodę.
- Każdy, kto ma link, może otworzyć stronę, więc nie umieszczaj niczego poufnego.
- Po zakończeniu rozmowy usuń demo z `published`.
