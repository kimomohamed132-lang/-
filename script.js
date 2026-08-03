// ==========================================
// A1 Quiz Logic (Mobile-fixed)
// ==========================================

let studentName = "";
let timerInterval;
const TOTAL_MINUTES = 15;
let timeRemaining = TOTAL_MINUTES * 60;
let quizStarted = false;
let startTime = null;
let endTime = null;
let isSubmitted = false;

const solutionKey = {
    "z1": "aXN0", "z2": "aGVpJUMzJTlGZW4=", "z3": "aGVpJUMzJTlGZQ==",
    "z4": "a29tbWVu", "z5": "a29tbWU=", "z6": "a29tbWU=",
    "z7": "d29obmU=", "z8": "d29obmVu", "z9": "d29obmU=",

    "s1": "U3RlZmZp", "s2": "YXVzJTIwRGV1dHNjaGxhbmQ=", "s3": "aW4lMjBNJUMzJUJDbmNoZW4=",
    "s4": "RGV1dHNjaA==", "s5": "amV0enQlMjBSdXNzaXNjaA==", "s6": "Z2VybiUyMFRlbm5pcw==",
    "s7": "R3ltbmFzdGlr", "s8": "Z2VybiUyME11c2lr",

    "t1": "ZW4=", "t2": "ZW4=", "t3": "dA==", "t4": "dA==",
    "t5": "dA==", "t6": "dA==", "t7": "ZW4=", "t8": "ZW4=",
    "t9": "ZW4=", "t10": "ZW4=", "t11": "dA==", "t12": "dA==",
    "t13": "ZQ==", "t14": "ZQ==", "t15": "c3Q=", "t16": "c3Q=",
    "t17": "ZW4=", "t18": "ZW4=", "t19": "dA==", "t20": "dA==",

    "p1": "TWFya3Vz", "p2": "YXVzJTIwSXRhbGllbg==", "p3": "aW4lMjBSb20=",
    "p4": "SXRhbGllbmlzY2g=", "p5": "amV0enQlMjBBcmFiaXNjaA==", "p6": "Z2VybiUyMEJhc2tldGJhbGw=",
    "p7": "dmllbCUyMFNwb3J0", "p8": "Z2VybiUyMFRlZQ=="
};

const questionLabels = {
    "z1": "Guten Tag. Mein Name [...] Lydia Richter.",
    "z2": "Wie [...] Sie?",
    "z3": "Ich [...] Mario Martinez.",
    "z4": "Woher [...] Sie, Herr Martinez?",
    "z5": "Ich [...] aus Spanien. Und Sie?",
    "z6": "Ich [...] aus Österreich.",
    "z7": "Ich [...] in Wien.",
    "z8": "Wo [...] Sie?",
    "z9": "Ich [...] in Madrid.",

    "s1": "1. Das ist [...] (Steffi)",
    "s2": "2. Steffi kommt [...] (aus Deutschland)",
    "s3": "3. Sie wohnt [...] (in München)",
    "s4": "4. Steffi spricht [...] (Deutsch)",
    "s5": "5. Sie lernt [...] (jetzt Russisch)",
    "s6": "6. Sie spielt [...] (gern Tennis)",
    "s7": "7. Sie macht [...] (Gymnastik)",
    "s8": "8. Sie hört [...] (gern Musik)",

    "t1": "1. Alexis und Yanis komm[...] aus Griechenland.",
    "t2": "1. Sie spiel[...] gern Fußball.",
    "t3": "2. Viktor wohn[...] in Stockholm.",
    "t4": "2. Er fotografier[...] gern.",
    "t5": "3. Tiago sprich[...] Portugiesisch und Spanisch.",
    "t6": "3. Er koch[...] gern.",
    "t7": "4. Laura und Anna wohn[...] in Bern.",
    "t8": "4. Sie schwimm[...] gern.",
    "t9": "5. Lili, Fanni und Levente sprech[...] Ungarisch.",
    "t10": "5. Sie tanz[...] gern.",
    "t11": "6. Martina komm[...] aus der Schweiz.",
    "t12": "6. Sie lern[...] gern Sprachen.",
    "t13": "7. Ich trink[...] Tee...",
    "t14": "7. ...und ich spiel[...] gern Gitarre.",
    "t15": "8. Du lern[...] schnell Deutsch.",
    "t16": "8. Du hör[...] gern Radio.",
    "t17": "9. Sara und Jan kauf[...] ein Buch.",
    "t18": "9. Sie schreib[...] eine E-Mail.",
    "t19": "10. Ihr mach[...] heute Sport...",
    "t20": "10. ...und ihr geh[...] ins Kino.",

    "p1": "1. Das ist [...] (Markus)",
    "p2": "2. Er kommt [...] (aus Italien)",
    "p3": "3. Er wohnt [...] (in Rom)",
    "p4": "4. Markus spricht [...] (Italienisch)",
    "p5": "5. Er lernt [...] (jetzt Arabisch)",
    "p6": "6. Er spielt [...] (gern Basketball)",
    "p7": "7. Er macht [...] (viel Sport)",
    "p8": "8. Er trinkt [...] (gern Tee)"
};

// --- Initialization & UI Flow ---
document.getElementById('student-name').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') document.getElementById('start-btn').click();
});

document.getElementById('start-btn').addEventListener('click', () => {
    const nameInput = document.getElementById('student-name').value.trim();
    if (nameInput === "") {
        const inputEl = document.getElementById('student-name');
        inputEl.style.borderColor = "var(--error)";
        inputEl.classList.add('incorrect');
        setTimeout(() => inputEl.classList.remove('incorrect'), 400);
        return;
    }

    studentName = nameInput;
    document.getElementById('display-name').textContent = studentName;

    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('top-bar').classList.remove('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    quizStarted = true;
    startTime = new Date();
    startTimer();
    initScrollObserver();
});

// --- Timer Logic ---
function startTimer() {
    const timerText = document.getElementById('timer-text');
    const timerBadge = document.getElementById('timer-badge');

    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            timerText.textContent = "00:00";
            if (!isSubmitted) {
                document.getElementById('warning-modal').classList.add('hidden');
                handleQuizFinish('بسبب انتهاء الوقت');
            }
            return;
        }

        timeRemaining--;
        const mins = Math.floor(timeRemaining / 60);
        const secs = timeRemaining % 60;
        timerText.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (timeRemaining <= 300 && timeRemaining > 60) {
            timerBadge.className = 'timer-badge warning';
        } else if (timeRemaining <= 60) {
            timerBadge.className = 'timer-badge danger';
        }
    }, 1000);
}

function initScrollObserver() {
    const sections = document.querySelectorAll('.quiz-section');
    const progressBar = document.getElementById('progress-bar');
    const badge = document.getElementById('current-teil-indicator');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const num = id.split('-')[1];
                badge.textContent = `Teil ${num}`;
                progressBar.style.width = `${(num / sections.length) * 100}%`;
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(sec => observer.observe(sec));
}

// --- Unified Drag & Drop (Mouse + Touch via Pointer Events) ---
let dragEl = null;      // element currently being dragged
let ghostEl = null;     // floating clone shown while dragging
let startX = 0, startY = 0;
let pointerDown = false;
let dragging = false;
const DRAG_THRESHOLD = 6; // px movement before we treat it as a drag (avoids accidental drags on tap)

document.querySelectorAll('.draggable').forEach(el => {
    el.addEventListener('pointerdown', onPointerDown);
});

function onPointerDown(e) {
    if (!quizStarted || isSubmitted) return;
    // Only left mouse button / primary touch
    if (e.button !== undefined && e.button !== 0) return;

    dragEl = e.currentTarget;
    pointerDown = true;
    dragging = false;
    startX = e.clientX;
    startY = e.clientY;

    // Capture pointer so we keep receiving move/up even if finger leaves the element
    try { dragEl.setPointerCapture(e.pointerId); } catch (err) {}

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
}

function startGhost(x, y) {
    const rect = dragEl.getBoundingClientRect();
    ghostEl = dragEl.cloneNode(true);
    ghostEl.classList.add('touch-clone');
    ghostEl.style.width = rect.width + 'px';
    document.body.appendChild(ghostEl);
    dragEl.classList.add('dragging', 'touch-active');
    moveGhost(x, y, rect);
}

function moveGhost(x, y, rect) {
    if (!ghostEl) return;
    const r = rect || dragEl.getBoundingClientRect();
    // Offset upward so the finger doesn't cover the dragged word
    ghostEl.style.left = (x - r.width / 2) + 'px';
    ghostEl.style.top = (y - r.height / 2 - 46) + 'px';
}

function onPointerMove(e) {
    if (!pointerDown || !dragEl) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (!dragging) {
        if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD) {
            dragging = true;
            startGhost(e.clientX, e.clientY);
        } else {
            return;
        }
    }

    e.preventDefault();
    moveGhost(e.clientX, e.clientY);

    // Highlight the drop target under the pointer (ignore the ghost itself)
    if (ghostEl) ghostEl.style.display = 'none';
    const below = document.elementFromPoint(e.clientX, e.clientY);
    if (ghostEl) ghostEl.style.display = '';

    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));
    if (below) {
        const dropTarget = below.closest('.drop-zone') || below.closest('.word-bank');
        if (dropTarget) dropTarget.classList.add('drag-over');
    }
}

function onPointerUp(e) {
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
    pointerDown = false;

    document.querySelectorAll('.drag-over').forEach(el => el.classList.remove('drag-over'));

    if (!dragging) {
        // It was just a tap/click, not a drag — nothing to do
        dragEl = null;
        return;
    }

    if (ghostEl) { ghostEl.remove(); ghostEl = null; }
    dragEl.classList.remove('dragging', 'touch-active');

    if (ghostEl) ghostEl.style.display = 'none';
    const below = document.elementFromPoint(e.clientX, e.clientY);

    if (below) {
        const target = below.closest('.drop-zone') || below.closest('.word-bank');
        if (target) {
            if (target.classList.contains('drop-zone')) {
                if (target.children.length === 0) {
                    target.appendChild(dragEl);
                } else if (target.children[0] !== dragEl) {
                    const existingChild = target.children[0];
                    const originalParent = dragEl.parentNode;
                    target.appendChild(dragEl);
                    originalParent.appendChild(existingChild);
                }
            } else if (target.classList.contains('word-bank')) {
                target.appendChild(dragEl);
            }
        }
    }

    dragEl = null;
    dragging = false;
}

// --- Helpers ---
function decodeAnswer(encodedAnswer) { return decodeURIComponent(atob(encodedAnswer)); }
function checkMatch(userInput, encodedAnswer) {
    if (!userInput) return false;
    return userInput.trim().toLowerCase() === decodeAnswer(encodedAnswer).toLowerCase();
}
function formatTimeSpent(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${m} دقائق و ${s} ثوانٍ`;
}

// --- Submit Logic (With Warning Modal) ---
document.getElementById('check-btn').addEventListener('click', () => {
    if (isSubmitted) return;

    let hasEmpty = false;
    document.querySelectorAll('.drop-zone').forEach(el => {
        if (el.children.length === 0) hasEmpty = true;
    });
    document.querySelectorAll('input.text-gap').forEach(el => {
        if (el.value.trim() === "") hasEmpty = true;
    });

    if (hasEmpty) {
        document.getElementById('warning-modal').classList.remove('hidden');
    } else {
        handleQuizFinish('بشكل طبيعي');
    }
});

document.getElementById('cancel-submit-btn').addEventListener('click', () => {
    document.getElementById('warning-modal').classList.add('hidden');
});

document.getElementById('confirm-submit-btn').addEventListener('click', () => {
    document.getElementById('warning-modal').classList.add('hidden');
    handleQuizFinish('بشكل طبيعي (مع ترك أسئلة فارغة)');
});

async function handleQuizFinish(finishReason) {
    if (isSubmitted) return;
    isSubmitted = true;

    clearInterval(timerInterval);
    endTime = new Date();

    const checkBtn = document.getElementById('check-btn');
    const btnText = checkBtn.querySelector('.btn-text');
    const spinner = checkBtn.querySelector('.spinner');

    checkBtn.disabled = true;
    btnText.textContent = "جارٍ تصحيح الامتحان...";
    spinner.classList.remove('hidden');

    document.querySelectorAll('input[type="text"], .draggable').forEach(el => {
        if (el.tagName === 'INPUT') el.readOnly = true;
        else el.setAttribute('draggable', 'false');
    });

    let score = 0;
    let total = Object.keys(solutionKey).length;
    let wrongAnswersReport = [];

    for (const [elementId, encodedAns] of Object.entries(solutionKey)) {
        const el = document.getElementById(elementId);
        let isCorrect = false;
        let userAnswer = "";
        const correctAnswer = decodeAnswer(encodedAns);

        if (!el) continue;

        if (el.classList.contains('drop-zone')) {
            if (el.children.length > 0) {
                userAnswer = el.children[0].textContent.trim();
                isCorrect = checkMatch(userAnswer, encodedAns);
            } else {
                userAnswer = "[فارغ]";
            }
        } else if (el.tagName === 'INPUT') {
            userAnswer = el.value.trim();
            if (userAnswer === "") userAnswer = "[فارغ]";
            isCorrect = checkMatch(userAnswer, encodedAns);
        }

        if (isCorrect) {
            el.classList.add('correct');
            score++;
        } else {
            el.classList.add('incorrect');
            const questionLabel = questionLabels[elementId] || elementId;
            wrongAnswersReport.push({
                frage: questionLabel,
                userAntwort: userAnswer,
                richtigAntwort: correctAnswer
            });
        }
    }

    const timeSpentMs = endTime - startTime;
    await sendResultsToFormspree(studentName, score, total, wrongAnswersReport, finishReason, timeSpentMs);

    setTimeout(() => {
        showResultScreen(score, total, timeSpentMs, wrongAnswersReport);
    }, 2500);
}

// --- Formspree Integration ---
async function sendResultsToFormspree(name, score, total, wrongList, reason, timeSpentMs) {
    const formspreeEndpoint = "https://formspree.io/f/mnjeepje";

    const percentage = Math.round((score / total) * 100);
    const timeSpentFormatted = formatTimeSpent(timeSpentMs);
    const finishDateStr = endTime.toLocaleString('ar-EG');

    let wrongAnswersFormatted = "";
    if (wrongList.length === 0) {
        wrongAnswersFormatted = "ممتاز! لا توجد أخطاء.";
    } else {
        wrongList.forEach((item, index) => {
            wrongAnswersFormatted += `${index + 1}) السؤال: ${item.frage}\n   - إجابة الطالب: "${item.userAntwort}"\n   - الإجابة الصحيحة: "${item.richtigAntwort}"\n\n`;
        });
    }

    const payload = {
        "اسم الطالب": name,
        "الدرجة": score,
        "النسبة المئوية": `${percentage}%`,
        "وقت إنهاء الامتحان": finishDateStr,
        "الوقت المستغرق": timeSpentFormatted,
        "عدد الإجابات الصحيحة": score,
        "عدد الأخطاء": total - score,
        "قائمة الأخطاء كاملة": wrongAnswersFormatted,
        "هل انتهى الامتحان": reason
    };

    try {
        await fetch(formspreeEndpoint, {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
    } catch (error) {
        console.error("Formspree Error:", error);
    }
}

// --- Render Result Screen ---
function showResultScreen(score, total, timeSpentMs, wrongList) {
    const percent = Math.round((score / total) * 100);

    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('top-bar').classList.add('hidden');
    const resultScreen = document.getElementById('result-screen');
    resultScreen.classList.remove('hidden');

    const emojiEl = document.getElementById('result-emoji');
    let color = "var(--primary)";
    if (percent >= 90) { emojiEl.textContent = "🏆"; color = "var(--success)"; }
    else if (percent >= 60) { emojiEl.textContent = "👏"; color = "var(--warning)"; }
    else { emojiEl.textContent = "💪"; color = "var(--error)"; }

    document.getElementById('score-val').textContent = `${score} / ${total}`;
    document.getElementById('correct-val').textContent = score;
    document.getElementById('wrong-val').textContent = total - score;
    document.getElementById('time-val').textContent = formatTimeSpent(timeSpentMs);

    document.getElementById('percent-text').textContent = `${percent}%`;
    document.getElementById('percent-text').style.color = color;
    document.getElementById('score-circle').style.background = `conic-gradient(${color} ${percent}%, #EDF2F7 ${percent}%)`;

    if (wrongList.length > 0) {
        document.getElementById('errors-container').classList.remove('hidden');
        const errorsListDiv = document.getElementById('errors-list');
        let html = '';
        wrongList.forEach(item => {
            html += `
                <div class="error-card slide-up">
                    <div class="err-header">
                        <div class="err-q">${item.frage}</div>
                        <div class="err-icon">❌</div>
                    </div>
                    <div class="err-ans-row">
                        <span class="err-ans-label">إجابتك:</span>
                        <span class="err-ans user">[${item.userAntwort}]</span>
                    </div>
                    <div class="err-ans-row-correct">
                        <span class="err-ans-label-correct">الإجابة الصحيحة:</span>
                        <span class="err-ans correct">${item.richtigAntwort}</span>
                        <div class="err-check-icon">✓</div>
                    </div>
                </div>
            `;
        });
        errorsListDiv.innerHTML = html;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}
