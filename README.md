# cron
Zadanie polega na stworzeniu hooka, który będzie ustawiać odpowiedniego stringa w inpucie (Harmonogram) na podstawie dokonanych wyborów w formularzu.

Wymagania:

1. React + Vite + Typescript
2. Komponenty UI do wyboru:- MUI- shadcn/ui
3. Dowolny framework Tailwind/Bootstrap
4. Biblioteka React Hook Form, React Tanstack Router

Opis funkcjonalności:

1. Podstawowy formularz zawiera 3 pola tekstowe: (Nazwa, Komenda, Harmonogram).
2. Pod polem tekstowym „Harmonogram” znajduje się button „Ustaw harmonogram”.
3. Po kliknięciu w button „Ustaw harmonogram” powinien pojawić się popup z dodatkowym formularzem służącym do utworzenia stosownego patternu. Formularz składa się nagłówka, w którym znajduje się jego podgląd oraz 5 sekcji:- Minuta- Godzina- Dzień miesiąca- Miesiąc roku- Dzień tygodnia.
4. Pattern w nagłówku (harmonogram) odpowiada kolejno: minuta, godzina, dzień, miesiąc, dzień tygodnia.
5. Każda sekcja dzieli się na odpowiednie pola typu select uaktywniane radioboxem (aktywna może być tylko jedna podsekcja, np: Minuta / Co minutę między).
6. Zmiana wyboru dokonywane przy pomocy radioboxów nie usuwają wartości w polach formularza (powinny zostać zapamiętane).
7. Każdy wybór powinien aktualizować podgląd w nagłówku.
8. Button „Ustaw” powinien przenosić stworzony string do inputa „Harmonogram” w głównym formularzu i zamknąć popup.