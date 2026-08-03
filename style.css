/* --- Variables & Reset --- */
:root {
    --primary: #FF8C42;
    --primary-hover: #F27627;
    --secondary: #FFD166;
    --success: #00B74A;
    --error: #E53935;
    --warning: #FFB300;
    --bg-light: #FFF8F3;
    --text-main: #2D3748;
    --text-muted: #718096;
    --glass-bg: rgba(255, 255, 255, 0.9);
    --glass-border: rgba(255, 255, 255, 0.6);
    --shadow-soft: 0 12px 32px -8px rgba(0, 0, 0, 0.08);
    --radius-lg: 24px;
    --radius-md: 16px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

html { touch-action: pan-y; }

body {
    font-family: 'Poppins', 'Segoe UI', system-ui, sans-serif;
    background-color: var(--bg-light);
    color: var(--text-main);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 50px;
    position: relative;
}

.bg-shape { position: fixed; border-radius: 50%; filter: blur(90px); z-index: -1; opacity: 0.5; }
.shape1 { width: 450px; height: 450px; background: rgba(255, 140, 66, 0.3); top: -100px; left: -100px; }
.shape2 { width: 350px; height: 350px; background: rgba(255, 209, 102, 0.3); bottom: 5%; right: -50px; }
.shape3 { width: 250px; height: 250px; background: rgba(0, 183, 74, 0.15); bottom: 40%; left: 10%; }

.app-container { max-width: 850px; margin: 80px auto 0; padding: 0 20px; }

.glass-panel {
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-soft);
    padding: 35px; margin-bottom: 30px;
}

.hidden { display: none !important; }

#top-bar {
    position: fixed; top: 0; left: 0; width: 100%;
    background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px);
    z-index: 1000; box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}
.progress-container { width: 100%; height: 6px; background: #FEF0E6; }
#progress-bar { height: 100%; width: 0%; background: var(--primary); transition: width 0.4s ease; border-radius: 0 3px 3px 0; }
.bar-content {
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;
    max-width: 850px; margin: 0 auto; padding: 12px 20px;
}
.teil-badge {
    background: #FEF0E6; color: var(--primary); padding: 6px 16px;
    border-radius: 20px; font-weight: 700; font-size: 14px; letter-spacing: 0.5px;
}
.timer-badge { display: flex; align-items: center; gap: 8px; font-weight: 700; font-size: 18px; color: var(--text-main); transition: var(--transition); }
.timer-badge.warning { color: var(--warning); }
.timer-badge.danger { color: var(--error); animation: pulse 1s infinite; }

h1 { font-size: 32px; font-weight: 700; text-align: center; color: var(--primary); margin-bottom: 12px; }
h2 { font-size: 26px; color: var(--text-main); margin-bottom: 25px; }
h3 { font-size: 22px; color: var(--primary); margin-bottom: 8px; }
p { color: var(--text-muted); line-height: 1.6; }
.highlight-text { color: var(--primary); font-weight: 700; }

.section-header { margin-bottom: 25px; }
.modern-card { background: #ffffff; border-radius: var(--radius-md); padding: 25px; border: 2px solid #FEF0E6; }

.welcome-content { text-align: center; }
.logo-icon { font-size: 70px; margin-bottom: 15px; }
.input-group { margin: 30px 0; }
input[type="text"] {
    width: 100%; max-width: 350px; padding: 15px 22px;
    font-size: 18px; border: 2px solid #E2E8F0; border-radius: var(--radius-lg);
    outline: none; transition: var(--transition); background: #F7FAFC;
    font-family: inherit; font-weight: 500; text-align: center;
}
input[type="text"]:focus { border-color: var(--primary); background: #fff; box-shadow: 0 0 0 5px rgba(255, 140, 66, 0.15); }

.primary-btn, .secondary-btn {
    border: none; padding: 15px 35px; font-size: 18px; font-weight: 700; font-family: inherit;
    border-radius: var(--radius-lg); cursor: pointer; transition: var(--transition);
    display: inline-flex; justify-content: center; align-items: center; gap: 10px;
}
.primary-btn { background: var(--primary); color: #fff; box-shadow: 0 6px 20px rgba(255, 140, 66, 0.25); }
.primary-btn:hover:not(:disabled) { background: var(--primary-hover); transform: translateY(-3px); box-shadow: 0 8px 25px rgba(255, 140, 66, 0.35); }
.primary-btn:active:not(:disabled) { transform: translateY(0); }
.primary-btn:disabled { background: #CBD5E0; cursor: not-allowed; box-shadow: none; opacity: 0.9; }

.secondary-btn { background: #EDF2F7; color: var(--text-main); }
.secondary-btn:hover { background: #E2E8F0; transform: translateY(-2px); }

.action-footer { text-align: center; margin-top: 40px; }
.submit-btn { min-width: 260px; font-size: 22px; }

.spinner { width: 24px; height: 24px; border: 3px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: #fff; animation: spin 1s linear infinite; }

.modal-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(45, 55, 72, 0.6); backdrop-filter: blur(5px);
    z-index: 2000; display: flex; align-items: center; justify-content: center;
}
.modal-content { background: #fff; border-radius: var(--radius-lg); padding: 40px; max-width: 90%; width: 450px; text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
.modal-icon { font-size: 60px; margin-bottom: 15px; animation: bounce 2s infinite; }
.modal-content h3 { color: var(--warning); font-size: 26px; margin-bottom: 10px; }
.modal-content p { font-size: 18px; margin-bottom: 30px; }
.modal-actions { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; }
.modal-actions button { font-size: 16px; padding: 12px 25px; }

/* --- Drag & Drop --- */
.word-bank {
    background: #FFFDFC; border: 2px dashed #FFD166; border-radius: var(--radius-lg);
    padding: 25px; min-height: 90px; margin-bottom: 30px;
    display: flex; flex-wrap: wrap; gap: 14px; transition: var(--transition);
}
.word-bank.drag-over { background: #FFF5E6; border-color: var(--primary); }

.draggable {
    background: #fff; color: var(--text-main); font-weight: 600; font-size: 17px;
    padding: 10px 22px; border-radius: 25px; cursor: grab; user-select: none;
    -webkit-user-select: none; -webkit-touch-callout: none;
    box-shadow: 0 4px 10px rgba(0,0,0,0.06); border: 2px solid #FFF1E6;
    transition: transform 0.2s, box-shadow 0.2s, color 0.2s;
    touch-action: none;
}
.draggable:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 8px 15px rgba(255, 140, 66, 0.15); color: var(--primary); border-color: #FEF0E6; }
.draggable:active { cursor: grabbing; transform: scale(0.95); }
.draggable.dragging { opacity: 0.5; }
.draggable.touch-active { box-shadow: 0 10px 20px rgba(255, 140, 66, 0.3); border-color: var(--primary); }

.drop-zone {
    display: inline-flex; align-items: center; justify-content: center;
    min-width: 100px; min-height: 42px; height: auto; border: 2px dashed #CBD5E0;
    border-radius: 25px; vertical-align: middle; background: #F7FAFC;
    margin: 6px; transition: var(--transition); padding: 4px 10px;
}
.drop-zone.large { min-width: 170px; }
.drop-zone.drag-over { background: #FFF5E6; border-color: var(--primary); transform: scale(1.08); }
.drop-zone .draggable { margin: 0; box-shadow: none; border: none; background: transparent; padding: 0; color: var(--primary); font-size: 17px; touch-action: none; }
.drop-zone .draggable:hover { transform: none; }

.match-list { list-style: none; }
.match-list li { margin-bottom: 18px; font-size: 17px; display: flex; align-items: center; flex-wrap: wrap; }
.match-list li span:first-child { min-width: 150px; font-weight: 500;}

.text-inputs p { margin-bottom: 18px; font-size: 17px; color: var(--text-main); font-weight: 500;}
.text-gap {
    width: 55px !important; text-align: center; padding: 6px 10px !important;
    margin: 0 6px; font-weight: 700; font-size: 17px; color: var(--primary);
    border-radius: 8px !important; transition: var(--transition);
}

.correct { border-color: var(--success) !important; background: #F0FDF4 !important; color: var(--success) !important; box-shadow: 0 0 0 3px rgba(0, 183, 74, 0.15); }
.incorrect { border-color: var(--error) !important; background: #FEF2F2 !important; color: var(--error) !important; box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.15); animation: shake 0.4s; }
.drop-zone.correct .draggable { color: var(--success) !important; }
.drop-zone.incorrect .draggable { color: var(--error) !important; }

.result-header { text-align: center; margin-bottom: 30px; }
.emoji-huge { font-size: 80px; margin-bottom: 10px; animation: popIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
.stats-grid { display: flex; align-items: center; justify-content: center; gap: 50px; flex-wrap: wrap; margin-bottom: 40px; background: #fff; padding: 30px; border-radius: var(--radius-lg); border: 2px solid #FEF0E6;}

.progress-circle {
    width: 150px; height: 150px; border-radius: 50%;
    background: conic-gradient(var(--primary) 0%, #EDF2F7 0%);
    display: flex; align-items: center; justify-content: center;
    box-shadow: inset 0 0 20px rgba(0,0,0,0.05); position: relative;
    transition: background 1.5s ease-out;
}
.circle-inner {
    width: 120px; height: 120px; background: #fff; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 32px; font-weight: 700; color: var(--primary);
    box-shadow: 0 6px 15px rgba(0,0,0,0.08);
}

.stat-details { display: flex; flex-direction: column; gap: 15px; font-size: 19px; }
.stat-row { display: flex; justify-content: space-between; gap: 30px; border-bottom: 2px dashed #EDF2F7; padding-bottom: 8px; }
.stat-row .label { font-weight: 600; color: var(--text-muted); }
.stat-row .val { font-weight: 700; color: var(--text-main); }
.success-text { color: var(--success) !important; }
.error-text { color: var(--error) !important; }

#errors-container h3 { text-align: center; margin-bottom: 25px; color: var(--error); border-top: 2px dashed #E2E8F0; padding-top: 35px; font-size: 24px; }
#errors-list { display: flex; flex-direction: column; gap: 15px; }
.error-card {
    background: #fff; border-radius: var(--radius-md); padding: 18px 25px;
    border-right: 6px solid var(--error);
    box-shadow: 0 4px 15px rgba(0,0,0,0.04);
    display: flex; flex-direction: column; gap: 12px;
}
.err-header { display: flex; justify-content: flex-start; align-items: center; gap: 8px; flex-direction: row-reverse; }
.err-q { font-weight: 700; color: var(--text-main); font-size: 18px; text-align: right; width: 100%; direction: rtl;}
.err-icon { font-size: 18px; color: var(--error); }
.err-ans-row { display: flex; align-items: center; justify-content: flex-start; gap: 6px; direction: rtl; width: 100%;}
.err-ans-label { font-weight: 500; font-size: 15px; color: #A0AEC0;}
.err-ans.user { color: #A0AEC0; text-decoration: line-through; font-size: 15px; }
.err-ans-row-correct { display: flex; align-items: center; justify-content: flex-start; gap: 6px; direction: rtl; width: 100%;}
.err-ans-label-correct { color: var(--success); font-size: 15px; font-weight: 600;}
.err-ans.correct { color: var(--success); font-size: 15px; font-weight: 600; }
.err-check-icon { background: var(--success); color: white; border-radius: 4px; padding: 2px; font-size: 12px; display: flex; align-items: center; justify-content: center; width: 18px; height: 18px;}

@keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes popIn { 0% { opacity: 0; transform: scale(0.3); } 70% { transform: scale(1.15); } 100% { opacity: 1; transform: scale(1); } }
@keyframes pulse { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.1); opacity: 0.8; } 100% { transform: scale(1); opacity: 1; } }
@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
@keyframes spin { 100% { transform: rotate(360deg); } }
@keyframes shake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }

.slide-up { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.fade-in { animation: fadeIn 0.8s ease forwards; }
.bounce { animation: bounce 3s ease-in-out infinite; }

/* Floating touch clone */
.touch-clone {
    position: fixed; pointer-events: none; z-index: 9999; opacity: 0.95;
    box-shadow: 0 14px 30px rgba(255, 140, 66, 0.45) !important;
    transform: scale(1.08);
}

/* --- Mobile Responsiveness --- */
@media (max-width: 600px) {
    .app-container { margin-top: 70px; padding: 0 14px; }
    .glass-panel { padding: 20px 16px; border-radius: 18px; }
    h1 { font-size: 24px; }
    h2 { font-size: 21px; }
    h3 { font-size: 19px; }
    .bar-content { padding: 10px 14px; }
    .teil-badge { font-size: 12px; padding: 5px 12px; }
    .timer-badge { font-size: 16px; }

    .word-bank { padding: 14px; gap: 10px; }
    .draggable { padding: 9px 16px; font-size: 15px; }
    .drop-zone { min-width: 80px; min-height: 40px; margin: 5px; }
    .drop-zone.large { min-width: 130px; }
    .drop-zone .draggable { font-size: 15px; }

    .match-list li { flex-direction: column; align-items: flex-start; gap: 8px; margin-bottom: 22px; }
    .match-list li span:first-child { min-width: unset; }
    .drop-zone { margin: 0; width: 100%; justify-content: flex-start; }

    .text-inputs p { font-size: 15px; line-height: 2.1; }
    .text-gap { width: 48px !important; font-size: 15px; }

    .stats-grid { flex-direction: column; gap: 20px; padding: 18px;}
    .stat-details { width: 100%; font-size: 16px; }
    .stat-row { gap: 16px; }
    .progress-circle { width: 130px; height: 130px; }
    .circle-inner { width: 104px; height: 104px; font-size: 26px; }

    .modal-content { padding: 26px 18px; }
    .modal-icon { font-size: 48px; }
    .modal-content h3 { font-size: 22px; }
    .modal-content p { font-size: 16px; }
    .modal-actions button { width: 100%; }

    .submit-btn { min-width: unset; width: 100%; font-size: 18px; padding: 14px 20px; }
    .primary-btn, .secondary-btn { padding: 13px 22px; font-size: 16px; }
}

@media (max-width: 380px) {
    .draggable { padding: 8px 13px; font-size: 14px; }
    .drop-zone { min-width: 70px; }
    h1 { font-size: 21px; }
}
