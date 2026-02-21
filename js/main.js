// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Formspree submit (real sending)
const form = document.getElementById("contactForm");
const hint = document.getElementById("formHint");

if (form && hint) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    hint.textContent = "Sending...";
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        hint.textContent = "Message sent. I’ll get back to you soon.";
        form.reset();
      } else {
        hint.textContent = "Something went wrong. Please email me directly.";
      }
    } catch {
      hint.textContent = "Network error. Please email me directly.";
    }
  });
}