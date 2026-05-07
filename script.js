/* ============================================================
   PRODUCT GALLERY — THUMBNAIL SWAP
   Clicking a thumbnail updates the large main image src/alt
   and marks the thumb as active.
   ============================================================ */
(function () {
  var mainImg = document.getElementById('main-img');
  var thumbs  = document.querySelectorAll('.gallery__thumb');

  if (!mainImg || !thumbs.length) return;

  thumbs.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      thumbs.forEach(function (t) {
        t.classList.remove('is-active');
        t.setAttribute('aria-pressed', 'false');
      });

      thumb.classList.add('is-active');
      thumb.setAttribute('aria-pressed', 'true');

      mainImg.src = thumb.dataset.src;
      mainImg.alt = thumb.dataset.alt;
    });
  });
})();

/* ============================================================
   COLOUR SELECTOR
   Clicking a swatch applies the active ring and updates the
   colour name label below the swatches.
   ============================================================ */
(function () {
  var swatches   = document.querySelectorAll('.colour-swatch');
  var colourName = document.getElementById('colour-name');

  if (!swatches.length || !colourName) return;

  swatches.forEach(function (swatch) {
    swatch.addEventListener('click', function () {
      swatches.forEach(function (s) {
        s.classList.remove('is-active');
        s.setAttribute('aria-checked', 'false');
      });

      swatch.classList.add('is-active');
      swatch.setAttribute('aria-checked', 'true');
      colourName.textContent = swatch.dataset.colour;
    });
  });
})();

/* ============================================================
   ADD TO CART — BRIEF CONFIRMATION FEEDBACK
   ============================================================ */
(function () {
  var btn = document.getElementById('add-to-cart');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var original = btn.textContent;
    btn.textContent = 'Added to cart ✓';
    btn.style.background = 'var(--accent)';
    btn.disabled = true;

    setTimeout(function () {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
    }, 2400);
  });
})();

/* ============================================================
   NEWSLETTER — SUBMIT FEEDBACK
   ============================================================ */
(function () {
  var form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = form.querySelector('.newsletter__input');
    var btn   = form.querySelector('.newsletter__btn');

    if (!input || !input.value.trim()) return;

    btn.textContent = 'You’re subscribed ✔';
    btn.style.color = 'var(--accent)';
    input.value = '';
    input.disabled = true;
    btn.disabled = true;
  });
})();
