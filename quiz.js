const quizData = [
    {
        question: "01: Was sollte man tun, um Waldbrände zu verhindern?",
        options: ["Wasser trinken", "Zigarettenstummel in den Mülleimer werfen", "Zigaretten im Auto rauchen", "Mit einer Lupe kokeln"],
        correct: 1
    },
    {
        question: "02: Was kann jeder Einzelne tun, um dem Wald zu helfen?",
        options: ["Öffentliche Verkehrsmittel benutzen", "Mehr Papier nutzen", "Mehr Auto fahren", "Keine Bäume nachpflanzen"],
        correct: 0
    },
    {
        question: "03: Woran erkennt man umweltfreundliches Papier?",
        options: ["An der Farbe", "Am Umweltzeichen Blauer Engel", "Durch den Aufkleber 'neu Produziert'", "Am Preis"],
        correct: 1
    },
    {
        question: "04: Welche Bäume sind besonders gut gegen Trockenheit gewappnet?",
        options: ["Nadelbäume, da sie viel Wasser speichern", "Obstbäume, da sie nie brennen", "Palmen durch die riesigen Blätter", "Laubbäume mit vielfältigen Strukturen"],
        correct: 3
    },
    {
        question: "05: Welche Siegel sollte man bei Holzprodukten beachten?",
        options: ["Das Fair-Trade-Siegel", "Das Bio-Siegel", "Das FSC-Siegel", "Den Nutri-Score"],
        correct: 2
    },
    {
        question: "06: Warum ist sparsamer Umgang mit Holz wichtig?",
        options: ["Weil Holz ein kostbarer, aber nicht unendlich verfügbarer Rohstoff ist", "Weil Holz unendlich verfügbar ist", "Weil Holz billig ist", "Weil Holz zur Verbrennung dient"],
        correct: 0
    },
    {
        question: "07: Wie entstehen viele Waldbrände?",
        options: ["Durch fahrlässiges Verhalten oder absichtliche Brandstiftung", "Durch Erdbewegungen", "Durch Blitzschläge", "Durch Vulkanausbrüche"],
        correct: 0
    },
    {
        question: "08: Warum sind Kiefernwälder besonders brandgefährdet?",
        options: ["Weil Kiefernwälder immer feucht sind", "Weil Kiefern zu viele Äste haben", "Weil der Nadelstreu sich schneller entzündet", "Weil die Bäume zu nah aneinander stehen"],
        correct: 2
    },
    {
        question: "09: Welche Bäume sollten zur Förderung des Waldschutzes gepflanzt werden?",
        options: ["Nadelbäume, da sie schwer brennen", "Laubbäume", "Obstbäume", "Es sollten Mischwälder sein, da sie schwerer brennen"],
        correct: 1
    },
    {
        question: "10: Wie lange dauert die Erholung der Wälder nach einem Brand?",
        options: ["Monate", "Wochen", "Tage", "Jahrzehnte bis Jahrhunderte"],
        correct: 3
    },
    {
        question: "11: Was trägt zu Trockenperioden von menschlichen Eingriffen insbesondere die am Waldrand zur erhöhten Waldbrandgefahr bei?",
        options: ["Das Entwässern von Feuchtgebieten und die Schaffung von trockenen Flächen", "Das Anpflanzen von Laubbaum-Mischwäldern, die besonders anfällig für Feuer sind", "Durch die Verringerung von Kiefernwäldern und die Förderung von Artenvielfalt", "Durch das Pflanzen von feuersicheren Vegetationen"],
        correct: 0
    },
    {
        question: "12: Was bedeuten die verschiedenen Waldbrandstufen?",
        options: ["Sie zeigen an, welcher Wald nicht gut brennt", "Sie zeigen an, wie gut ein Wald brennen würde", "Sie zeigen an, wie groß ein Wald ist", "Sie sind nur eine Formalität und unnötig"],
        correct: 1
    },
    {
        question: "13: Welche spezifischen Maßnahmen können am Waldrand umgesetzt werden, um die Ausbreitung von Waldbränden zu verhindern?",
        options: ["Erhöhte Abholzung um freie Flächen zu schaffen", "Errichtung von Metallzäunen zur Blockierung von Funkenflug", "Pflanzen von Laubbäumen und Entfernen von Nadelbäumen", "Aufbau von Grillplätzen in gefährdeten Gebieten"],
        correct: 2
    },
    {
        question: "14: Warum ist das Einhalten von Vorsichtsmaßnahmen wie das Vermeiden von Feuer oder Zigaretten am Waldrand so essenziell für den Schutz des Waldes?",
        options: ["Weil die Nähe zu Menschen grundsätzlich die Waldbrandgefahr verringert", "Weil Funken von Zigarettenstummeln oder Feuer Gras oder Nadelstreu leicht entzünden können", "Weil Waldbrände natürlicherweise fast ausschließlich durch Blitze entstehen", "Weil Zigarettenrauch giftige Gase bildet, die Bäume töten können"],
        correct: 1
    },
    {
        question: "15: Haben die Waldbrände etwas mit der Klimakrise zu tun?",
        options: ["Nein, denn Wälder sind nicht von dem Klima betroffen", "Ja, aber Blitzeinschläge sind die Hauptgründe von Waldbränden", "Nein, weil die Bäume immer feucht sind und somit nicht brennen", "Ja, denn durch die ansteigende Temperatur werden Wälder trocken und so leichter entzündbar"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    resultEl.textContent = '';
    nextBtn.style.display = 'none';
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;

    optionsEl.innerHTML = '';
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        optionsEl.appendChild(button);
    });
}

function selectAnswer(index) {
    const currentQuiz = quizData[currentQuestion];
    if (index === currentQuiz.correct) {
        score++;
        resultEl.textContent = 'Richtig!';
    } else {
        resultEl.textContent = 'Falsch! Die korrekte Antwort ist: ' + currentQuiz.options[currentQuiz.correct];
    }
    // Buttons deaktivieren nach Auswahl
    const buttons = optionsEl.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
    nextBtn.style.display = 'inline';
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
});

function showFinalScore() {
    questionEl.textContent = `Du hast ${score} von ${quizData.length} Punkten erreicht!`;
    optionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
}

loadQuestion();
