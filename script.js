// Funktion zum Entschlüsseln der Antworten
function getAns(encoded) {
    try {
        return decodeURIComponent(atob(encoded));
    } catch(e) {
        return "";
    }
}

// Verschlüsselte Quiz-Daten
const quizData = {
    u1: [
        { pre: "Ich", hint: "nehmen", post: "als Vorspeise eine Tomatensuppe.", ans: "bmVobWU=" },
        { pre: "", hint: "möchten", post: "Sie schon etwas trinken?", ans: "TSVDMyVCNmNodGVuJTdDTSVDMyVCNmNodGVzdA==" },
        { pre: "In Deutschland", hint: "essen", post: "man abends oft Brot mit Käse.", ans: "aXNzdA==" },
        { pre: "Wie", hint: "schmecken", post: "das Schnitzel?", ans: "c2NobWVja3Q=" },
        { pre: "Die Nudeln", hint: "sein", post: "sehr lecker.", ans: "c2luZA==" },
        { pre: "", hint: "trinken", post: "du gern Kaffee zum Frühstück?", ans: "VHJpbmtzdA==" },
        { pre: "", hint: "können", post: "wir bitte die Speisekarte haben?", ans: "SyVDMyVCNm5uZW4=" },
        { pre: "Ich", hint: "haben", post: "gern ein Glas Weißwein.", ans: "aCVDMyVBNHR0ZQ==" },
        { pre: "Wie", hint: "finden", post: "du die Nudeln?", ans: "ZmluZGVzdA==" },
        { pre: "Was", hint: "nehmen", post: "Sie als Hauptgericht?", ans: "bmVobWVu" }
    ],
    u2: [
        { ans: "V2FzJTIwaXNzdCUyMGR1JTIwbWl0dGFncyUzRg==" },
        { ans: "U2NobWVja3QlMjBkZXIlMjBTYWxhdCUyMGd1dCUzRg==" },
        { ans: "V2FzJTIwbSVDMyVCNmNodGVuJTIwU2llJTIwdHJpbmtlbiUzRg==" },
        { ans: "SyVDMyVCNm5uZW4lMjB3aXIlMjBiaXR0ZSUyMHphaGxlbiUzRg==" },
        { ans: "SXNzdCUyMGR1JTIwZ2VybiUyMEZpc2NoJTNG" },
        { ans: "V2llJTIwZmluZGVuJTIwU2llJTIwZGllJTIwU3VwcGUlM0Y=" },
        { ans: "SGFiZW4lMjBTaWUlMjBhdWNoJTIwQXBmZWxzYWZ0JTNG" },
        { ans: "V2FzJTIwbmVobWVuJTIwU2llJTIwYWxzJTIwSGF1cHRnZXJpY2h0JTNG" },
        { ans: "VHJpbmt0JTIwTWF4JTIwZ2VybiUyMEJpZXIlM0Y=" },
        { ans: "U2NobWVja2VuJTIwZGllJTIwTnVkZWxuJTIwbGVja2VyJTNG" }
    ],
    u3: [
        { speaker: "Kellner", pre: "Guten Tag.", hint: "möchten", post: "Sie schon etwas trinken?", ans: "TSVDMyVCNmNodGVu" },
        { speaker: "Gast", pre: "Ja, ich", hint: "nehmen", post: "ein Mineralwasser.", ans: "bmVobWU=" },
        { speaker: "Kellner", pre: "Und was möchten Sie", hint: "essen", post: "?", ans: "ZXNzZW4=" },
        { speaker: "Gast", pre: "Ich nehme", hint: "bestimmter Artikel", post: "Schnitzel mit Kartoffelsalat.", ans: "ZGFz" },
        { speaker: "Kellner", pre: "Kommt sofort. ... Hier ist Ihr Essen. Guten", hint: "", post: "!", ans: "QXBwZXRpdA==" },
        { speaker: "Gast", pre: "Entschuldigung, das Fleisch ist", hint: "zu", post: "zäh.", ans: "enU=" },
        { speaker: "Gast", pre: "Und der Kartoffelsalat schmeckt mir auch", hint: "Negation", post: ".", ans: "bmljaHQ=" },
        { speaker: "Gast", pre: "Außerdem habe ich", hint: "Negation", post: "Gabel.", ans: "a2VpbmU=" },
        { speaker: "Kellner", pre: "Ohne Gabel", hint: "können", post: "Sie nicht essen, das stimmt. Tut mir leid!", ans: "ayVDMyVCNm5uZW4=" },
        { speaker: "Gast", pre: "Ich möchte dann bitte", hint: "bezahlen", post: ".", ans: "emFobGVuJTdDYmV6YWhsZW4=" }
    ],
    u4: [
        { pre: "Der Salat schmeckt", post: ".", ans: "bmljaHQ=" },
        { pre: "Ich esse", post: "Salat.", ans: "a2VpbmVu" },
        { pre: "Ich kann heute", post: "kochen.", ans: "bmljaHQ=" },
        { pre: "Ich möchte", post: "Vorspeise.", ans: "a2VpbmU=" },
        { pre: "Das Schnitzel ist", post: "zäh.", ans: "bmljaHQ=" },
        { pre: "Ich trinke", post: "Bier.", ans: "a2Vpbg==" },
        { pre: "Wir gehen heute", post: "ins Restaurant.", ans: "bmljaHQ=" },
        { pre: "Ich habe", post: "Löffel.", ans: "a2VpbmVu" },
        { pre: "Maria trinkt abends", post: "Kaffee.", ans: "a2VpbmVu" },
        { pre: "Ich esse", post: "gern Currywurst.", ans: "bmljaHQ=" }
    ],
    u5: [
        { ans: "RGllJTIwRGV1dHNjaGVuJTIwZXNzZW4lMjBnZXJuJTIwQ3Vycnl3dXJzdC4lN0NHZXJuJTIwZXNzZW4lMjBkaWUlMjBEZXV0c2NoZW4lMjBDdXJyeXd1cnN0Lg==" },
        { ans: "V2lyJTIwZ2VoZW4lMjBoZXV0ZSUyMG5pY2h0JTIwaW5zJTIwUmVzdGF1cmFudC4lN0NIZXV0ZSUyMGdlaGVuJTIwd2lyJTIwbmljaHQlMjBpbnMlMjBSZXN0YXVyYW50Lg==" },
        { ans: "TWVpbiUyME1hbm4lMjBrYW5uJTIwbmljaHQlMjBrb2NoZW4u" },
        { ans: "SWNoJTIwbmVobWUlMjBlaW4lMjBNaW5lcmFsd2Fzc2VyLg==" },
        { ans: "RGllJTIwTnVkZWxuJTIwc2luZCUyMGxlY2tlci4=" },
        { ans: "SWNoJTIwa29jaGUlMjBoZXV0ZS4lN0NIZXV0ZSUyMGtvY2hlJTIwaWNoLg==" },
        { ans: "RGVyJTIwU2FsYXQlMjBzY2htZWNrdCUyMG5pY2h0Lg==" },
        { ans: "SWNoJTIwZXNzZSUyMGtlaW5lJTIwVG9tYXRlbi4=" },
        { ans: "SWNoJTIwbSVDMyVCNmNodGUlMjBhbHMlMjBEZXNzZXJ0JTIwZWluZW4lMjBBcGZlbGt1Y2hlbi4lN0NBbHMlMjBEZXNzZXJ0JTIwbSVDMyVCNmNodGUlMjBpY2glMjBlaW5lbiUyMEFwZmVsa3VjaGVuLg==" },
        { ans: "SW4lMjBEZXV0c2NobGFuZCUyMGthbm4lMjBtYW4lMjBNaW5lcmFsd2Fzc2VyJTIwa2F1ZmVuLiU3Q01hbiUyMGthbm4lMjBpbiUyMERldXRzY2hsYW5kJTIwTWluZXJhbHdhc3NlciUyMGthdWZlbi4=" }
    ]
};

let studentName = "";
let timeRemaining = 25 * 60;
let timerInterval;
const TOTAL_QUESTIONS = 50;

// ---------- Helpers ----------

function escapeAttr(str) {
    return str.replace(/"/g, '&quot;');
}

function makeHiddenInput(name) {
    return `<input type="hidden" name="${name}" value="">`;
}

function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ---------- Rendering: fill-in-the-blank (u1, u3) ----------

function renderBlankExercise(containerId, items, namePrefix, withSpeaker) {
    let html = "";
    items.forEach((item, i) => {
        const name = `${namePrefix}_q${i}`;
        html += `<div class="question-block"><div class="fill-blank">${i+1}. `;
        if (withSpeaker) html += `<b>${item.speaker}:</b> `;
        if (item.pre) html += `${item.pre} `;
        if (item.hint) html += `<span class="hint-tag">(${item.hint})</span> `;
        html += `<input type="text" class="blank-input" name="${name}">`;
        if (item.post) html += ` ${item.post}`;
        html += `</div></div>`;
    });
    document.getElementById(containerId).innerHTML = html;
}

// ---------- Rendering: pill choice (u4) ----------

function renderPillExercise(containerId, items, namePrefix, options) {
    let html = "";
    items.forEach((item, i) => {
        const name = `${namePrefix}_q${i}`;
        html += `<div class="question-block"><div class="question-text">${i+1}. ${item.pre} <span class="blank-marker"></span> ${item.post}</div>`;
        html += `<div class="pill-group" data-name="${name}">`;
        options.forEach(opt => {
            html += `<button type="button" class="pill-choice" data-value="${opt}">${opt}</button>`;
        });
        html += `</div>${makeHiddenInput(name)}</div>`;
    });
    document.getElementById(containerId).innerHTML = html;
}

// ---------- Rendering: tap-to-build word order (u2, u5) ----------

function renderWordOrderExercise(containerId, items, namePrefix) {
    let html = "";
    items.forEach((item, i) => {
        const name = `${namePrefix}_q${i}`;
        const correctFull = getAns(item.ans).split('|')[0];
        const tokens = correctFull.split(' ');
        const shuffled = shuffle(tokens.map((t, idx) => ({ text: t, tid: `${name}-${idx}` })));

        html += `<div class="question-block word-order-block">
            <div class="question-text">${i+1}.</div>
            <div class="answer-line" data-name="${name}">
                <span class="answer-placeholder">Tippe die Wörter unten in der richtigen Reihenfolge an…</span>
            </div>
            <div class="word-bank" data-name="${name}">`;
        shuffled.forEach(tok => {
            html += `<button type="button" class="pill-choice word-pill" data-word="${escapeAttr(tok.text)}" data-tid="${tok.tid}">${tok.text}</button>`;
        });
        html += `</div>
            <button type="button" class="reset-btn" data-reset="${name}">↺ Zurücksetzen</button>
            ${makeHiddenInput(name)}
        </div>`;
    });
    document.getElementById(containerId).innerHTML = html;
}

function attachWordOrderHandlers() {
    document.querySelectorAll('.word-order-block').forEach(block => {
        const bank = block.querySelector('.word-bank');
        const line = block.querySelector('.answer-line');
        const name = bank.dataset.name;
        const hidden = document.querySelector(`input[type="hidden"][name="${name}"]`);
        const resetBtn = block.querySelector('.reset-btn');

        function refreshHidden() {
            const words = Array.from(line.querySelectorAll('.word-pill')).map(b => b.dataset.word);
            hidden.value = words.join(' ');
            const placeholder = line.querySelector('.answer-placeholder');
            if (placeholder) placeholder.style.display = words.length ? 'none' : 'inline';
            updateProgress();
        }

        block.addEventListener('click', (e) => {
            const btn = e.target.closest('.word-pill');
            if (!btn) return;
            if (btn.parentElement === bank) {
                line.appendChild(btn);
            } else {
                bank.appendChild(btn);
            }
            refreshHidden();
        });

        resetBtn.addEventListener('click', () => {
            block.querySelectorAll('.word-pill').forEach(btn => bank.appendChild(btn));
            refreshHidden();
        });
    });
}

// ---------- Full render ----------

function renderQuiz() {
    renderBlankExercise('u1-container', quizData.u1, 'u1', false);
    renderWordOrderExercise('u2-container', quizData.u2, 'u2');
    renderBlankExercise('u3-container', quizData.u3, 'u3', true);
    renderPillExercise('u4-container', quizData.u4, 'u4', ['nicht', 'kein', 'keine', 'keinen']);
    renderWordOrderExercise('u5-container', quizData.u5, 'u5');

    attachPillHandlers();
    attachWordOrderHandlers();
    attachTextInputHandlers();
    updateProgress();
}

function attachPillHandlers() {
    document.querySelectorAll('.pill-group').forEach(group => {
        const name = group.dataset.name;
        const hidden = document.querySelector(`input[type="hidden"][name="${name}"]`);
        group.querySelectorAll('.pill-choice').forEach(btn => {
            btn.addEventListener('click', () => {
                group.querySelectorAll('.pill-choice').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                hidden.value = btn.dataset.value;
                updateProgress();
            });
        });
    });
}

function attachTextInputHandlers() {
    document.querySelectorAll('.blank-input').forEach(input => {
        input.addEventListener('input', updateProgress);
    });
}

// ---------- Progress bar ----------

function updateProgress() {
    const form = document.forms['quiz-form'];
    if (!form) return;
    let answered = 0;
    ['u1', 'u2', 'u3', 'u4', 'u5'].forEach(prefix => {
        for (let i = 0; i < 10; i++) {
            const el = form[`${prefix}_q${i}`];
            if (el && el.value && el.value.trim()) answered++;
        }
    });
    const pct = Math.round((answered / TOTAL_QUESTIONS) * 100);
    const fill = document.getElementById('progress-fill');
    const rocket = document.getElementById('progress-rocket');
    if (fill) fill.style.width = pct + '%';
    if (rocket) rocket.style.left = pct + '%';
}

// ---------- Flow control ----------

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    const el = document.getElementById(id);
    el.style.display = (id === 'setup-screen') ? 'flex' : 'block';
}

function startQuiz() {
    const nameInput = document.getElementById('student-name').value.trim();
    if (!nameInput) { alert("Bitte gib deinen Namen ein!"); return; }
    studentName = nameInput;

    window.onbeforeunload = function() {
        return "Bist du sicher? Deine Antworten gehen verloren!";
    };

    showScreen('quiz-screen');
    renderQuiz();
    startTimer();
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    timerInterval = setInterval(() => {
        timeRemaining--;
        let m = Math.floor(timeRemaining / 60);
        let s = timeRemaining % 60;
        timerElement.textContent = `${m}:${s < 10 ? '0'+s : s}`;

        if (timeRemaining <= 60) { timerElement.classList.add('warning'); }

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Die Zeit ist abgelaufen! Deine Antworten werden automatisch gesendet.");
            submitQuiz(true);
        }
    }, 1000);
}

// ---------- Scoring ----------

function normalizeUmlaut(s) {
    return s
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/ß/g, 'ss');
}

function isCorrect(val, encodedAns) {
    let userVal = normalizeUmlaut((val || '').trim().toLowerCase()).replace(/[.?!]/g, '').trim();
    const alts = getAns(encodedAns).toLowerCase().split('|').map(a => normalizeUmlaut(a));
    return alts.some(a => a.replace(/[.?!]/g, '').trim() === userVal && userVal !== "");
}

function submitQuiz(isAutoSubmit) {
    if (!isAutoSubmit && !confirm("Möchtest du deine Antworten wirklich senden?")) return;

    clearInterval(timerInterval);
    window.onbeforeunload = null;

    showScreen('loading-screen');

    const form = document.forms['quiz-form'];
    let score = 0;
    let errors = [];

    quizData.u1.forEach((item, i) => {
        let val = form[`u1_q${i}`].value;
        if (isCorrect(val, item.ans)) score++;
        else errors.push(`<b>Übung 1 (Frage ${i+1}):</b> ${item.pre} ___ ${item.post}<br>Deine Antwort: <span style="color:var(--error)">${val||'Keine'}</span><br>Richtig: <span style="color:var(--success)">${getAns(item.ans)}</span>`);
    });

    quizData.u2.forEach((item, i) => {
        let val = form[`u2_q${i}`].value;
        if (isCorrect(val, item.ans)) score++;
        else errors.push(`<b>Übung 2 (Frage ${i+1}):</b><br>Deine Antwort: <span style="color:var(--error)">${val||'Keine'}</span><br>Richtig: <span style="color:var(--success)">${getAns(item.ans).split('|')[0]}</span>`);
    });

    quizData.u3.forEach((item, i) => {
        let val = form[`u3_q${i}`].value;
        if (isCorrect(val, item.ans)) score++;
        else errors.push(`<b>Übung 3 (Frage ${i+1}):</b> ${item.speaker}: ${item.pre} ___ ${item.post}<br>Deine Antwort: <span style="color:var(--error)">${val||'Keine'}</span><br>Richtig: <span style="color:var(--success)">${getAns(item.ans)}</span>`);
    });

    quizData.u4.forEach((item, i) => {
        let val = form[`u4_q${i}`].value;
        if (isCorrect(val, item.ans)) score++;
        else errors.push(`<b>Übung 4 (Frage ${i+1}):</b> ${item.pre} ___ ${item.post}<br>Deine Antwort: <span style="color:var(--error)">${val||'Keine'}</span><br>Richtig: <span style="color:var(--success)">${getAns(item.ans)}</span>`);
    });

    quizData.u5.forEach((item, i) => {
        let val = form[`u5_q${i}`].value;
        if (isCorrect(val, item.ans)) score++;
        else errors.push(`<b>Übung 5 (Frage ${i+1}):</b><br>Deine Antwort: <span style="color:var(--error)">${val||'Keine'}</span><br>Richtig: <span style="color:var(--success)">${getAns(item.ans).split('|')[0]}</span>`);
    });

    const errorsText = errors.length > 0 ? errors.join("\n\n") : "Perfekt! Keine Fehler.";
    fetch("https://formspree.io/f/xrenaojv", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
            Student: studentName,
            Kapitel: "Kapitel 5 - Essen und Trinken",
            Ergebnis: score + " / 50",
            Details: errorsText.replace(/<[^>]*>?/gm, '')
        })
    }).catch(err => console.log("Fehler:", err));

    let count = 3;
    const countdownEl = document.getElementById('loading-countdown');
    let cdInterval = setInterval(() => {
        count--;
        countdownEl.textContent = count;
        if (count <= 0) {
            clearInterval(cdInterval);
            showResults(score, errors);
        }
    }, 1000);
}

function showResults(score, errors) {
    showScreen('result-screen');

    document.getElementById('display-name').textContent = studentName;
    document.getElementById('score-text').textContent = score;

    const pct = score / TOTAL_QUESTIONS;
    const ring = document.getElementById('score-ring');
    const deg = Math.round(pct * 360);
    ring.style.background = `conic-gradient(var(--coral) ${deg}deg, var(--purple) ${deg}deg, #F0ECF9 ${deg}deg)`;

    const msgEl = document.getElementById('result-message');
    if (pct >= 0.9) msgEl.textContent = "Ausgezeichnet! Du bist ein Deutsch-Profi! 🏆";
    else if (pct >= 0.7) msgEl.textContent = "Sehr gut gemacht! Weiter so! 💪";
    else if (pct >= 0.5) msgEl.textContent = "Guter Versuch! Übung macht den Meister. 📚";
    else msgEl.textContent = "Nicht aufgeben! Schau dir die Korrekturen an und übe weiter. 🌱";

    const errContainer = document.getElementById('errors-container');
    if (errors.length === 0) {
        errContainer.innerHTML = '<div class="result-item correct-ans">Ausgezeichnet! Du hast alles richtig gemacht.</div>';
    } else {
        let html = "";
        errors.forEach(err => { html += `<div class="result-item wrong-ans">${err}</div>`; });
        errContainer.innerHTML = html;
    }

    if (pct >= 0.8) launchConfetti();
}

// ---------- Confetti (lightweight, no external libs) ----------

function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const colors = ['#FF6B4A', '#7C5CFC', '#FFC15E', '#21B573', '#FF5C7A'];
    const pieces = [];
    for (let i = 0; i < 140; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * canvas.height * 0.5,
            w: 6 + Math.random() * 6,
            h: 8 + Math.random() * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedY: 2 + Math.random() * 3,
            speedX: -1.5 + Math.random() * 3,
            rotation: Math.random() * 360,
            rotationSpeed: -6 + Math.random() * 12
        });
    }
    let frame = 0;
    const maxFrames = 240;
    function draw() {
        frame++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pieces.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.rotation += p.rotationSpeed;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
            ctx.restore();
        });
        if (frame < maxFrames) {
            requestAnimationFrame(draw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    draw();
}

window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

showScreen('setup-screen');
