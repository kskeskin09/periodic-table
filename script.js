document.addEventListener('DOMContentLoaded', () => {
    const periodicTableGrid = document.getElementById('periodic-table-grid');
    const langEnBtn = document.getElementById('lang-en');
    const langTrBtn = document.getElementById('lang-tr');
    const elementInput = document.getElementById('element-input');
    const submitAnswerBtn = document.getElementById('submit-answer');
    const feedbackDiv = document.getElementById('feedback');
    const resetQuizBtn = document.getElementById('reset-quiz');

    // Element verileri
    const elements = [
        // Atomic Number, Symbol, EN Name, TR Name, Group, Period
        [1, "H", "Hydrogen", "Hidrojen", 1, 1],
        [2, "He", "Helium", "Helyum", 18, 1],
        [3, "Li", "Lithium", "Lityum", 1, 2],
        [4, "Be", "Beryllium", "Berilyum", 2, 2],
        [5, "B", "Boron", "Bor", 13, 2],
        [6, "C", "Carbon", "Karbon", 14, 2],
        [7, "N", "Nitrogen", "Azot", 15, 2],
        [8, "O", "Oxygen", "Oksijen", 16, 2],
        [9, "F", "Fluorine", "Flor", 17, 2],
        [10, "Ne", "Neon", "Neon", 18, 2],
        [11, "Na", "Sodium", "Sodyum", 1, 3],
        [12, "Mg", "Magnesium", "Magnezyum", 2, 3],
        [13, "Al", "Aluminum", "Alüminyum", 13, 3],
        [14, "Si", "Silicon", "Silisyum", 14, 3],
        [15, "P", "Phosphorus", "Fosfor", 15, 3],
        [16, "S", "Sulfur", "Kükürt", 16, 3],
        [17, "Cl", "Chlorine", "Klor", 17, 3],
        [18, "Ar", "Argon", "Argon", 18, 3],
        [19, "K", "Potassium", "Potasyum", 1, 4],
        [20, "Ca", "Calcium", "Kalsiyum", 2, 4],
        [21, "Sc", "Scandium", "Skandiyum", 3, 4],
        [22, "Ti", "Titanium", "Titanyum", 4, 4],
        [23, "V", "Vanadium", "Vanadyum", 5, 4],
        [24, "Cr", "Chromium", "Krom", 6, 4],
        [25, "Mn", "Manganese", "Mangan", 7, 4],
        [26, "Fe", "Iron", "Demir", 8, 4],
        [27, "Co", "Cobalt", "Kobalt", 9, 4],
        [28, "Ni", "Nickel", "Nikel", 10, 4],
        [29, "Cu", "Copper", "Bakır", 11, 4],
        [30, "Zn", "Zinc", "Çinko", 12, 4],
        [31, "Ga", "Gallium", "Galyum", 13, 4],
        [32, "Ge", "Germanium", "Germanyum", 14, 4],
        [33, "As", "Arsenic", "Arsenik", 15, 4],
        [34, "Se", "Selenium", "Selenyum", 16, 4],
        [35, "Br", "Bromine", "Brom", 17, 4],
        [36, "Kr", "Krypton", "Kripton", 18, 4],
        [37, "Rb", "Rubidium", "Rubidyum", 1, 5],
        [38, "Sr", "Strontium", "Stronsiyum", 2, 5],
        [39, "Y", "Yttrium", "İtriyum", 3, 5],
        [40, "Zr", "Zirconium", "Zirkonyum", 4, 5],
        [41, "Nb", "Niobium", "Niyobyum", 5, 5],
        [42, "Mo", "Molybdenum", "Molibden", 6, 5],
        [43, "Tc", "Technetium", "Teknesyum", 7, 5],
        [44, "Ru", "Ruthenium", "Rutenyum", 8, 5],
        [45, "Rh", "Rhodium", "Rodyum", 9, 5],
        [46, "Pd", "Palladium", "Paladyum", 10, 5],
        [47, "Ag", "Silver", "Gümüş", 11, 5],
        [48, "Cd", "Cadmium", "Kadmiyum", 12, 5],
        [49, "In", "Indium", "İndiyum", 13, 5],
        [50, "Sn", "Tin", "Kalay", 14, 5],
        [51, "Sb", "Antimony", "Antimon", 15, 5],
        [52, "Te", "Tellurium", "Tellür", 16, 5],
        [53, "I", "Iodine", "İyot", 17, 5],
        [54, "Xe", "Xenon", "Ksenon", 18, 5],
        [55, "Cs", "Cesium", "Sezyum", 1, 6],
        [56, "Ba", "Barium", "Baryum", 2, 6],
        // Lanthanides (57-71) are usually placed below. We'll add a placeholder.
        [57, "La", "Lanthanum", "Lantan", 3, 6], // Placeholder for grid positioning
        [72, "Hf", "Hafnium", "Hafniyum", 4, 6],
        [73, "Ta", "Tantalum", "Tantal", 5, 6],
        [74, "W", "Tungsten", "Tungsten", 6, 6],
        [75, "Re", "Rhenium", "Reniyum", 7, 6],
        [76, "Os", "Osmium", "Osmiyum", 8, 6],
        [77, "Ir", "Iridium", "İridyum", 9, 6],
        [78, "Pt", "Platinum", "Platin", 10, 6],
        [79, "Au", "Gold", "Altın", 11, 6],
        [80, "Hg", "Mercury", "Civa", 12, 6],
        [81, "Tl", "Thallium", "Talyum", 13, 6],
        [82, "Pb", "Lead", "Kurşun", 14, 6],
        [83, "Bi", "Bismuth", "Bizmut", 15, 6],
        [84, "Po", "Polonium", "Polonyum", 16, 6],
        [85, "At", "Astatine", "Astatin", 17, 6],
        [86, "Rn", "Radon", "Radon", 18, 6],
        [87, "Fr", "Francium", "Fransiyum", 1, 7],
        [88, "Ra", "Radium", "Radyum", 2, 7],
        // Actinides (89-103) are usually placed below. We'll add a placeholder.
        [89, "Ac", "Actinium", "Aktinyum", 3, 7], // Placeholder for grid positioning
        [104, "Rf", "Rutherfordium", "Rutherfordyum", 4, 7],
        [105, "Db", "Dubnium", "Dubniyum", 5, 7],
        [106, "Sg", "Seaborgium", "Seaborgiyum", 6, 7],
        [107, "Bh", "Bohrium", "Bohriyum", 7, 7],
        [108, "Hs", "Hassium", "Hassiyum", 8, 7],
        [109, "Mt", "Meitnerium", "Meitneriyum", 9, 7],
        [110, "Ds", "Darmstadtium", "Darmstadtiyum", 10, 7],
        [111, "Rg", "Roentgenium", "Röntgenyum", 11, 7],
        [112, "Cn", "Copernicium", "Kopernikyum", 12, 7],
        [113, "Nh", "Nihonium", "Nihonyum", 13, 7],
        [114, "Fl", "Flerovium", "Flerovyum", 14, 7],
        [115, "Mc", "Moscovium", "Moskovyum", 15, 7],
        [116, "Lv", "Livermorium", "Livermoryum", 16, 7],
        [117, "Ts", "Tennessine", "Tennessin", 17, 7],
        [118, "Og", "Oganesson", "Oganesson", 18, 7],

        // Lanthanides (separate block, typically periods 6 and 7, groups 3-18)
        [58, "Ce", "Cerium", "Seryum", 3, 8], // F-block elements are placed below the main table
        [59, "Pr", "Praseodymium", "Praseodim", 4, 8],
        [60, "Nd", "Neodymium", "Neodim", 5, 8],
        [61, "Pm", "Promethium", "Prometyum", 6, 8],
        [62, "Sm", "Samarium", "Samaryum", 7, 8],
        [63, "Eu", "Europium", "Evropiyum", 8, 8],
        [64, "Gd", "Gadolinium", "Gadolinyum", 9, 8],
        [65, "Tb", "Terbium", "Terbiyum", 10, 8],
        [66, "Dy", "Dysprosium", "Disprosyum", 11, 8],
        [67, "Ho", "Holmium", "Holmiyum", 12, 8],
        [68, "Er", "Erbium", "Erbiyum", 13, 8],
        [69, "Tm", "Thulium", "Tulyum", 14, 8],
        [70, "Yb", "Ytterbium", "İterbiyum", 15, 8],
        [71, "Lu", "Lutetium", "Lutesyum", 16, 8], // Note: Lu is sometimes considered a d-block element

        // Actinides (separate block, typically periods 6 and 7, groups 3-18)
        [90, "Th", "Thorium", "Toryum", 3, 9],
        [91, "Pa", "Protactinium", "Protaktinyum", 4, 9],
        [92, "U", "Uranium", "Uranyum", 5, 9],
        [93, "Np", "Neptunium", "Neptünyum", 6, 9],
        [94, "Pu", "Plutonium", "Plütonyum", 7, 9],
        [95, "Am", "Americium", "Amerikyum", 8, 9],
        [96, "Cm", "Curium", "Küriyum", 9, 9],
        [97, "Bk", "Berkelium", "Berkelyum", 10, 9],
        [98, "Cf", "Californium", "Kaliforniyum", 11, 9],
        [99, "Es", "Einsteinium", "Aynştaynyum", 12, 9],
        [100, "Fm", "Fermium", "Fermiyum", 13, 9],
        [101, "Md", "Mendelevium", "Mendelevyum", 14, 9],
        [102, "No", "Nobelium", "Nobelyum", 15, 9],
        [103, "Lr", "Lawrencium", "Lavrensiyum", 16, 9],
    ];

    let currentLang = 'en'; // Default language

    // Translations for quiz messages
    const messages = {
        en: {
            placeholder: "Enter element name (e.g., Hydrogen)",
            submit: "Submit",
            reset: "Reset Quiz",
            correct: "Correct! Good job!",
            incorrect: "Incorrect. Try again!",
            already_filled: "This element is already correctly placed.",
            enter_element: "Please enter an element name."
        },
        tr: {
            placeholder: "Element adı girin (örn. Hidrojen)",
            submit: "Gönder",
            reset: "Quizi Sıfırla",
            correct: "Doğru! Tebrikler!",
            incorrect: "Yanlış. Tekrar deneyin!",
            already_filled: "Bu element zaten doğru bir şekilde yerleştirildi.",
            enter_element: "Lütfen bir element adı girin."
        }
    };

    const filledElements = new Set(); // Stores symbols of correctly placed elements

    // Function to update UI based on language
    function updateUI() {
        elementInput.placeholder = messages[currentLang].placeholder;
        submitAnswerBtn.textContent = messages[currentLang].submit;
        resetQuizBtn.textContent = messages[currentLang].reset;
        // Also update the main heading if needed (e.g., if it changes with lang)
        document.querySelector('h1').textContent = currentLang === 'en' ? 'Periodic Table Quiz' : 'Periyodik Tablo Quizi';
    }

    // Function to generate the periodic table grid
    function generatePeriodicTable() {
        periodicTableGrid.innerHTML = ''; // Clear existing table

        const maxPeriod = Math.max(...elements.map(e => e[5])); // Max Period is 9 for f-block
        const maxGroup = Math.max(...elements.map(e => e[4])); // Max Group is 18

        // Create empty cells to correctly position elements
        for (let period = 1; period <= 9; period++) { // Iterate through periods
            for (let group = 1; group <= 18; group++) { // Iterate through groups
                let element = elements.find(e => e[5] === period && e[4] === group);
                let elementCell = document.createElement('div');
                elementCell.classList.add('element-cell');

                // Special handling for gaps in the main periodic table
                if (period === 1 && (group > 2 && group < 18)) {
                    elementCell.classList.add('empty');
                } else if (period === 2 && (group > 2 && group < 13)) {
                    elementCell.classList.add('empty');
                } else if (period === 3 && (group > 2 && group < 13)) {
                    elementCell.classList.add('empty');
                }
                // Placeholder for Lanthanides/Actinides within the main table
                else if ((period === 6 && group === 3) || (period === 7 && group === 3)) {
                    elementCell.classList.remove('empty'); // Ensure it's not empty
                    elementCell.innerHTML = `<span class="element-number">${element[0]}</span><span class="element-symbol">${element[1]}</span>`;
                    elementCell.dataset.symbol = element[1];
                    elementCell.dataset.nameEn = element[2].toLowerCase();
                    elementCell.dataset.nameTr = element[3].toLowerCase();
                    elementCell.dataset.period = element[5];
                    elementCell.dataset.group = element[4];
                    // Add special class for Lanthanides/Actinides to differentiate from main elements
                    elementCell.classList.add('lanthanide-actinide-placeholder-cell');
                }
                else if (period >= 8 && period <= 9) { // F-block elements (Lanthanides & Actinides)
                    if (group >= 3 && group <= 16) { // They span 14 elements from group 3
                        element = elements.find(e => e[5] === period && e[4] === group);
                        if (element) {
                            elementCell.innerHTML = `
                                <span class="element-number">${element[0]}</span>
                                <span class="element-symbol">${element[1]}</span>
                                <span class="element-name">${element[2]}</span>
                            `;
                            elementCell.dataset.symbol = element[1];
                            elementCell.dataset.nameEn = element[2].toLowerCase();
                            elementCell.dataset.nameTr = element[3].toLowerCase();
                            elementCell.dataset.period = element[5];
                            elementCell.dataset.group = element[4];
                            elementCell.classList.add('f-block-element');
                            if (filledElements.has(element[1])) {
                                const userInputSymbol = document.createElement('div');
                                userInputSymbol.classList.add('user-input-symbol');
                                userInputSymbol.textContent = element[1]; // Display symbol again
                                elementCell.appendChild(userInputSymbol);
                            }
                        } else {
                             elementCell.classList.add('empty');
                        }
                    } else {
                        elementCell.classList.add('empty'); // Empty cells outside f-block range
                    }
                }
                else if (element) {
                    // Normal elements in the main table
                    elementCell.innerHTML = `
                        <span class="element-number">${element[0]}</span>
                        <span class="element-symbol">${element[1]}</span>
                        <span class="element-name">${element[2]}</span>
                    `;
                    elementCell.dataset.symbol = element[1];
                    elementCell.dataset.nameEn = element[2].toLowerCase();
                    elementCell.dataset.nameTr = element[3].toLowerCase();
                    elementCell.dataset.period = element[5];
                    elementCell.dataset.group = element[4];

                    // Check if already filled
                    if (filledElements.has(element[1])) {
                        const userInputSymbol = document.createElement('div');
                        userInputSymbol.classList.add('user-input-symbol');
                        userInputSymbol.textContent = element[1]; // Display symbol again
                        elementCell.appendChild(userInputSymbol);
                    }
                } else {
                    elementCell.classList.add('empty');
                }
                periodicTableGrid.appendChild(elementCell);
            }
        }
    }


    // Function to handle quiz submission
    submitAnswerBtn.addEventListener('click', () => {
        const inputName = elementInput.value.trim().toLowerCase();
        if (!inputName) {
            feedbackDiv.textContent = messages[currentLang].enter_element;
            feedbackDiv.className = 'feedback'; // Reset class
            return;
        }

        const foundElement = elements.find(element =>
            (currentLang === 'en' && element[2].toLowerCase() === inputName) ||
            (currentLang === 'tr' && element[3].toLowerCase() === inputName)
        );

        if (foundElement) {
            const symbol = foundElement[1];
            if (filledElements.has(symbol)) {
                feedbackDiv.textContent = messages[currentLang].already_filled;
                feedbackDiv.className = 'feedback';
                elementInput.value = '';
                return;
            }

            const elementCell = document.querySelector(`.element-cell[data-symbol="${symbol}"]`);
            if (elementCell) {
                // Remove existing name and potentially add the symbol input
                const elementNameSpan = elementCell.querySelector('.element-name');
                if (elementNameSpan) {
                    elementNameSpan.remove();
                }

                let userInputSymbol = elementCell.querySelector('.user-input-symbol');
                if (!userInputSymbol) {
                    userInputSymbol = document.createElement('div');
                    userInputSymbol.classList.add('user-input-symbol');
                    elementCell.appendChild(userInputSymbol);
                }
                userInputSymbol.textContent = symbol;
                elementCell.style.backgroundColor = '#d4edda'; // Light green for correct
                feedbackDiv.textContent = messages[currentLang].correct;
                feedbackDiv.className = 'feedback success';
                filledElements.add(symbol); // Mark as filled
            }
        } else {
            feedbackDiv.textContent = messages[currentLang].incorrect;
            feedbackDiv.className = 'feedback';
        }
        elementInput.value = ''; // Clear input after submission
    });

    // Reset quiz
    resetQuizBtn.addEventListener('click', () => {
        filledElements.clear(); // Clear filled elements
        generatePeriodicTable(); // Re-generate to reset all cells
        feedbackDiv.textContent = ''; // Clear feedback
        elementInput.value = '';
        elementInput.focus();
    });

    // Language selection
    langEnBtn.addEventListener('click', () => {
        currentLang = 'en';
        langEnBtn.classList.add('active');
        langTrBtn.classList.remove('active');
        updateUI();
        generatePeriodicTable(); // Re-render table to ensure names are updated (though for this quiz, only symbol is placed)
    });

    langTrBtn.addEventListener('click', () => {
        currentLang = 'tr';
        langTrBtn.classList.add('active');
        langEnBtn.classList.remove('active');
        updateUI();
        generatePeriodicTable(); // Re-render table
    });

    // Initial setup
    updateUI();
    generatePeriodicTable();
});
