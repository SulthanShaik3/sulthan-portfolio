const titles = [
    "Digital Workplace Support Engineer",
    "SCCM Engineer",
    "Intune Administrator",
    "Autopilot Specialist",
];

const typingTarget = document.getElementById("typing");

if (typingTarget) {
    let titleIndex = 0;
    let characterIndex = 0;

    function typeTitle() {
        const title = titles[titleIndex];

        if (characterIndex < title.length) {
            typingTarget.textContent += title.charAt(characterIndex);
            characterIndex += 1;
            window.setTimeout(typeTitle, 100);
            return;
        }

        window.setTimeout(() => {
            typingTarget.textContent = "";
            characterIndex = 0;
            titleIndex = (titleIndex + 1) % titles.length;
            typeTitle();
        }, 1500);
    }

    typeTitle();
}

const phoneToggle = document.querySelector(".phone-toggle");
const phoneNumber = document.getElementById("phoneNumber");

if (phoneToggle && phoneNumber) {
    phoneToggle.addEventListener("click", () => {
        const showNumber = phoneToggle.getAttribute("aria-expanded") !== "true";
        phoneToggle.setAttribute("aria-expanded", String(showNumber));
        phoneToggle.setAttribute("aria-label", showNumber ? "Hide phone number" : "Show phone number");
        phoneNumber.hidden = !showNumber;
    });
}

const resumeButton = document.querySelector(".resume-download");
const resumeToast = document.getElementById("resumeToast");
const toastCloseButton = document.querySelector(".resume-toast-close");
let toastHideTimer;
let toastRemoveTimer;
let toastAnimationFrame;

function hideResumeToast() {
    window.clearTimeout(toastHideTimer);
    window.cancelAnimationFrame(toastAnimationFrame);
    resumeToast.classList.remove("is-visible");
    window.clearTimeout(toastRemoveTimer);
    toastRemoveTimer = window.setTimeout(() => {
        if (!resumeToast.classList.contains("is-visible")) {
            resumeToast.hidden = true;
        }
    }, 350);
}

if (resumeButton && resumeToast && toastCloseButton) {
    resumeButton.addEventListener("click", () => {
        window.clearTimeout(toastHideTimer);
        window.clearTimeout(toastRemoveTimer);
        window.cancelAnimationFrame(toastAnimationFrame);
        resumeToast.hidden = false;
        resumeToast.classList.remove("is-visible");
        toastAnimationFrame = window.requestAnimationFrame(() => {
            resumeToast.classList.add("is-visible");
        });
        toastHideTimer = window.setTimeout(hideResumeToast, 7000);
    });

    toastCloseButton.addEventListener("click", hideResumeToast);
}
