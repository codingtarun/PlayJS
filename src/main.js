// ===== Clock (top panel + login screen) =====
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const loginDateEl = document.getElementById("login-date");
const loginTimeEl = document.getElementById("login-time");

function updateClock() {
  const now = new Date();
  const date = now.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  dateEl.textContent = date;
  timeEl.textContent = time;
  if (loginDateEl) loginDateEl.textContent = date;
  if (loginTimeEl) loginTimeEl.textContent = time;
}
updateClock();
setInterval(updateClock, 1000);

// ===== Login screen — dismiss without password =====
const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const loginAvatar = document.getElementById("login-avatar");

function logIn() {
  loginScreen.style.opacity = "0";
  loginScreen.style.pointerEvents = "none";
  setTimeout(() => loginScreen.remove(), 500);
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  logIn();
});
loginAvatar.addEventListener("click", logIn);

// Dock tile + indicator styling (kept here so it's all in one place for tweaking)
const style = document.createElement("style");
style.textContent = `
  .dock-icon {
    position: relative;
    width: 44px; height: 44px;
    display: grid; place-items: center;
    border-radius: 8px;
    transition: background-color .15s ease;
  }
  .dock-icon:hover { background: rgba(255,255,255,0.08); }

  .dock-tile {
    width: 40px; height: 40px;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 2px 3px rgba(0,0,0,0.35));
  }

  .dock-indicator {
    position: absolute;
    right: -1px; top: 50%;
    transform: translateY(-50%);
    width: 3px; height: 12px;
    border-radius: 2px;
    background: #ffffff;
    opacity: 0.95;
  }
`;
document.head.appendChild(style);

document.querySelectorAll(".dock-icon").forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`TODO: open ${btn.dataset.app}`);
  });
});
