/* Shared helpers: newsletter form + card rendering */
function cardHTML(r) {
  return (
    '<a class="card" href="recipe.html?recipe=' + r.slug + '">' +
    '<img src="' + r.image + '" alt="' + r.name + '">' +
    '<div class="card-body"><div class="meta"><span class="pill">' + r.category +
    '</span><span class="pill sage">' + r.cookTime + ' min</span></div>' +
    '<h3>' + r.name + '</h3><p>' + r.shortDescription + '</p></div></a>'
  );
}

function wireNewsletter(form) {
  var msg = form.querySelector(".form-msg");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.querySelector('[name="name"]').value.trim();
    var email = form.querySelector('[name="email"]').value.trim();
    var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || !validEmail) {
      msg.className = "form-msg err";
      msg.textContent = "Oh dear — Grandma needs your name and a proper email address.";
      return;
    }
    msg.className = "form-msg ok";
    msg.textContent = "Wonderful! Grandma will be in touch.";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("form.newsletter-form").forEach(wireNewsletter);
});
