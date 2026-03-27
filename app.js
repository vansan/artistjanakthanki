// ===== ADWAIT ART — SPIRITUAL PORTFOLIO ===== //

// ===== DATA =====
const artworks = [
  { id: 1, title: "Kanha ki Chhavi", cat: "Stone Art", medium: "Stone Painting", desc: "A detailed eye of Lord Krishna with a peacock feather hand-painted on a natural river stone. Each line is a meditation in itself. Inspired by #StoneArt #KrishnaArt #HandPainted #Spirituality", tags: ["#KrishnaArt", "#StoneArt", "#HandPainted"], img: "images/stone_art_krishna.png", avail: "Available", price: 1800, type: "Original" },
  { id: 2, title: "Chakra Consciousness", cat: "Spiritual Art", medium: "Acrylic on Canvas", desc: "A meditating soul surrounded by glowing chakra energy. Sacred geometry and mandala patterns emerge from deep stillness. A window into inner light.", tags: ["#Meditation", "#Chakra", "#SacredGeometry"], img: "images/meditation_art.png", avail: "Available", price: 4500, type: "Original" },
  { id: 3, title: "Ram Darbar", cat: "Stone Art", medium: "Stone Painting", desc: "Miniature portrait of Lord Ram and Mata Sita, with the entire darbar, painted on a river stone. Nature's canvas meets devotional art. #jayshreeram #ram #art #ramnavmi", tags: ["#RamNavmi", "#JayShreeRam", "#StoneArt"], img: "images/ram_sita_stone.png", avail: "Available", price: 2800, type: "Original" },
  { id: 4, title: "Mehndi Blessings", cat: "Henna Art", medium: "Henna / Mehndi", desc: "Traditional Indian henna art — intricate floral and peacock patterns that flow like prayers on the skin. Designed for auspicious occasions and celebrations.", tags: ["#Mahendi", "#Henna", "#TraditionalArt"], img: "images/henna_art.png", avail: "Available", price: 800, type: "Original" },
  { id: 5, title: "The Sage in Silence", cat: "Sketches", medium: "Pencil on Paper", desc: "A fine pencil sketch of a spiritual saint — eyes closed, hands folded, seated in eternal peace. Drawn with 28 years of practiced stillness.", tags: ["#PencilSketch", "#Portrait", "#Spirituality"], img: "images/sketch_art.png", avail: "Available", price: 1200, type: "Original" },
  { id: 6, title: "Radha — Wood Shrine", cat: "Wood Carving", medium: "Teak Wood Carving", desc: "A hand-carved wooden shrine frame with 'Radha' in ornate Gujarati script. Crafted for an exhibition at MS University Vadodara. Each chisel stroke is a prayer.", tags: ["#WoodCarving", "#RadhaKrishna", "#Vadodara"], img: "images/wood_carving_radha.png", avail: "Available", price: 6500, type: "Original" },
  { id: 7, title: "Golden Mandala", cat: "Digital Art", medium: "Digital / Printable", desc: "Stunning digital mandala in muted gold and cream on deep navy — sacred geometry at its most intricate. Available as high-resolution digital download or print.", tags: ["#Mandala", "#DigitalArt", "#SacredGeometry"], img: "images/digital_mandala.png", avail: "Available", price: 450, type: "Digital" },
  { id: 8, title: "Lotus Stillness", cat: "Spiritual Art", medium: "Oil on Canvas", desc: "A lotus blooming from still water with sacred geometry dissolving into the background. Painted in a single meditative session. The first hero artwork from Adwait Art.", tags: ["#Lotus", "#SacredArt", "#OilPainting"], img: "images/hero_artwork.png", avail: "Available", price: 5800, type: "Original" },
];

const digitalProducts = [
  { id: 1, title: "Golden Mandala Print", type: "Wall Art", img: "images/digital_mandala.png", price: 299, resolution: "5000×5000 px" },
  { id: 2, title: "Chakra Meditation Poster", type: "Poster", img: "images/meditation_art.png", price: 199, resolution: "3000×3000 px" },
  { id: 3, title: "Lotus Sacred Wallpaper", type: "Wallpaper", img: "images/hero_artwork.png", price: 149, resolution: "4K Mobile + Desktop" },
  { id: 4, title: "Spiritual Art Bundle (3 prints)", type: "Bundle", img: "images/stone_art_krishna.png", price: 499, resolution: "HQ Pack — 3 artworks" },
  { id: 5, title: "Ram Darbar Art Print", type: "Wall Art", img: "images/ram_sita_stone.png", price: 249, resolution: "4000×4000 px" },
  { id: 6, title: "Sage Portrait Print", type: "Poster", img: "images/sketch_art.png", price: 179, resolution: "3000×4000 px" },
  { id: 7, title: "Radha Shrine Wallpaper", type: "Wallpaper", img: "images/wood_carving_radha.png", price: 129, resolution: "4K Desktop" },
  { id: 8, title: "Mehndi Art Poster", type: "Poster", img: "images/henna_art.png", price: 179, resolution: "3000×3000 px" },
];

const blogPosts = [
  { id: 1, title: "How Meditation Deepens Artistic Vision", tag: "Meditation & Art", excerpt: "When the mind grows still, the hand begins to see. Swamiji shares how daily meditation has shaped every brushstroke in his 28-year journey.", img: "images/hero_artwork.png", date: "March 2025" },
  { id: 2, title: "The Hidden Meaning Behind Stone Art", tag: "Meaning Behind Artwork", excerpt: "Why paint on stones? There is something ancient and sacred about returning art to nature's own canvas. A reflection on impermanence and devotion.", img: "images/stone_art_krishna.png", date: "February 2025" },
  { id: 3, title: "Sacred Geometry: The Universe's Visual Language", tag: "Spiritual Creativity", excerpt: "From the Sri Yantra to the Flower of Life — sacred geometry is not decoration. It is architecture of consciousness.", img: "images/digital_mandala.png", date: "January 2025" },
  { id: 4, title: "Studio Stories from Vadodara", tag: "Studio Stories", excerpt: "A quiet morning, incense, and the first light of day falling on a blank canvas. Life in an artist's studio is not glamorous — it is sacred.", img: "images/meditation_art.png", date: "December 2024" },
  { id: 5, title: "Henna as Prayer: The Art of Mehndi", tag: "Conscious Living", excerpt: "Every intricate henna pattern follows a tradition thousands of years old. In an age of speed, mehndi reminds us to slow down and be present.", img: "images/henna_art.png", date: "November 2024" },
  { id: 6, title: "Why I Carve in Wood: A Meditation", tag: "Spiritual Creativity", excerpt: "Wood remembers trees. Carving is a conversation with life itself — the chisel finds what was always already there.", img: "images/wood_carving_radha.png", date: "October 2024" },
];

// ===== CART STATE =====
let cart = [];
let currentFilter = 'All';
let mobileNavOpen = false;

// ===== PAGE NAVIGATION =====
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(pageId + '-page');
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Update nav active state
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navLink = document.getElementById('nav-' + pageId);
  if (navLink) navLink.classList.add('active');

  // Render pages dynamically
  if (pageId === 'gallery') renderGallery(artworks);
  if (pageId === 'shop') renderShop(artworks);
  if (pageId === 'digital') renderDigital(digitalProducts);
  if (pageId === 'blog') renderBlog(blogPosts);

  if (mobileNavOpen) toggleMobileNav();
}

// ===== MOBILE NAV =====
function toggleMobileNav() {
  mobileNavOpen = !mobileNavOpen;
  document.getElementById('mobile-nav').classList.toggle('open', mobileNavOpen);
}

// ===== SCROLL EFFECTS =====
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  // Navbar
  document.getElementById('navbar').classList.toggle('scrolled', y > 20);
  // Back to top
  document.getElementById('back-to-top').classList.toggle('visible', y > 400);
  // Reveal animations
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
});

// Trigger on load
window.dispatchEvent(new Event('scroll'));

// ===== GALLERY RENDER =====
function renderGallery(data) {
  const grid = document.getElementById('masonry-grid');
  if (!grid) return;
  grid.innerHTML = data.map(a => `
    <div class="masonry-item" data-cat="${a.cat}" data-title="${a.title.toLowerCase()}" onclick="openModal('${a.img}','${a.cat}','${a.title}','${a.desc.replace(/'/g,"\\'")}','${a.cat}','${a.medium}','${a.avail}',${a.price})">
      <img src="${a.img}" alt="${a.title}" loading="lazy">
      <div class="masonry-overlay">
        <div class="masonry-title">${a.title}</div>
        <div class="masonry-cat">${a.cat} · ${a.medium}</div>
      </div>
      ${a.avail === 'Sold' ? '<span class="artwork-badge badge-sold" style="position:absolute;top:12px;right:12px">Sold</span>' : ''}
    </div>
  `).join('');
  initReveal();
}

function filterGallery(cat, btn) {
  currentFilter = cat;
  // Update button states
  document.querySelectorAll('.gallery-filters .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const data = cat === 'All' ? artworks :
    cat === 'Available' ? artworks.filter(a => a.avail === 'Available') :
    artworks.filter(a => a.cat === cat);
  renderGallery(data);
}

function searchGallery(q) {
  const lq = q.toLowerCase();
  const data = artworks.filter(a =>
    a.title.toLowerCase().includes(lq) ||
    a.cat.toLowerCase().includes(lq) ||
    a.medium.toLowerCase().includes(lq) ||
    a.desc.toLowerCase().includes(lq)
  );
  renderGallery(data);
}

// ===== SHOP RENDER =====
function renderShop(data) {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;
  grid.innerHTML = data.map(a => `
    <div class="shop-card" data-type="${a.type}">
      <div class="shop-card-img">
        <img src="${a.img}" alt="${a.title}" loading="lazy">
        <div class="shop-card-actions">
          <button class="shop-action-btn" onclick="openModal('${a.img}','${a.cat}','${a.title}','${a.desc.replace(/'/g,"\\'")}','${a.cat}','${a.medium}','${a.avail}',${a.price})" title="Quick View">👁</button>
          <button class="shop-action-btn" onclick="addToWishlist('${a.title}')" title="Wishlist">♡</button>
        </div>
      </div>
      <div class="shop-card-body">
        <div class="shop-card-cat">${a.cat}</div>
        <div class="shop-card-title">${a.title}</div>
        <div class="shop-card-medium">${a.medium}</div>
        <div class="shop-card-footer">
          <div class="shop-card-price">₹ ${a.price.toLocaleString('en-IN')}</div>
          ${a.avail === 'Sold' ? '<span class="artwork-badge badge-sold">Sold</span>' :
          `<button class="add-to-cart" onclick="addToCart(${a.id},'${a.title}',${a.price},'${a.img}')">Add to Cart</button>`}
        </div>
      </div>
    </div>
  `).join('');
}

function filterShop(type, btn) {
  document.querySelectorAll('#shop-page .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const data = type === 'All' ? artworks : artworks.filter(a => a.type === type);
  renderShop(data);
}

// ===== DIGITAL RENDER =====
function renderDigital(data) {
  const grid = document.getElementById('digital-grid');
  if (!grid) return;
  grid.innerHTML = data.map(d => `
    <div class="digital-card" data-type="${d.type}">
      <img src="${d.img}" alt="${d.title}" loading="lazy">
      <div class="digital-card-body">
        <div class="digital-card-type">${d.type}</div>
        <div class="digital-card-title">${d.title}</div>
        <p style="font-size:11px;color:var(--warm-grey);margin-bottom:12px">${d.resolution}</p>
        <div class="digital-card-foot">
          <div class="digital-price">₹ ${d.price}</div>
          <button class="digital-dl-btn" onclick="addToCart(${d.id+100},'${d.title} (Digital)',${d.price},'${d.img}')">Buy & Download</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterDigital(type, btn) {
  document.querySelectorAll('#digital-page .filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const data = type === 'All' ? digitalProducts : digitalProducts.filter(d => d.type === type);
  renderDigital(data);
}

// ===== BLOG RENDER =====
function renderBlog(data) {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;
  grid.innerHTML = data.map(p => `
    <div class="blog-card" onclick="showToast('Blog article coming soon!')">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="blog-card-body">
        <span class="blog-tag">${p.tag}</span>
        <h3 class="blog-card-title">${p.title}</h3>
        <p class="blog-card-excerpt">${p.excerpt}</p>
        <div class="blog-card-foot">
          <span style="font-size:12px;color:var(--stone)">Read More →</span>
          <span class="blog-date">${p.date}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== ARTWORK MODAL =====
function openModal(img, cat, title, desc, catLabel, medium, avail, price) {
  document.getElementById('modal-img').src = img;
  document.getElementById('modal-cat').textContent = catLabel;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  document.getElementById('modal-medium').textContent = medium;
  document.getElementById('modal-avail').textContent = avail;
  const cartBtn = document.getElementById('modal-cart-btn');
  if (avail === 'Sold') {
    cartBtn.textContent = 'Sold Out';
    cartBtn.disabled = true;
    cartBtn.style.opacity = '0.5';
  } else {
    cartBtn.textContent = `Add to Cart — ₹ ${Number(price).toLocaleString('en-IN')}`;
    cartBtn.disabled = false;
    cartBtn.style.opacity = '1';
    cartBtn.onclick = () => {
      addToCart(Date.now(), title, price, img);
      closeModal();
    };
  }
  document.getElementById('artwork-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('artwork-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== CART =====
function addToCart(id, name, price, img) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, img, qty: 1 });
  }
  updateCartUI();
  showToast(`"${name}" added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  badge.style.display = count > 0 ? 'flex' : 'none';
  badge.textContent = count;
  document.getElementById('cart-total').textContent = `₹ ${total.toLocaleString('en-IN')}`;
  const itemsEl = document.getElementById('cart-items');
  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty"><span class="cart-empty-icon">🪷</span><span>Your cart is empty</span></div>`;
  } else {
    itemsEl.innerHTML = cart.map(i => `
      <div class="cart-item">
        <img src="${i.img}" alt="${i.name}">
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name}</div>
          <div class="cart-item-price">₹ ${i.price.toLocaleString('en-IN')} × ${i.qty}</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${i.id})">✕</button>
      </div>
    `).join('');
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

function checkout() {
  if (cart.length === 0) { showToast('Your cart is empty!'); return; }
  showToast('Checkout coming soon! WhatsApp us to complete your order.');
  // Redirect to WhatsApp with order details
  const items = cart.map(i => `• ${i.name} (₹${i.price} × ${i.qty})`).join('\n');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const msg = encodeURIComponent(`Hello Swamiji,\nI would like to purchase:\n${items}\n\nTotal: ₹${total.toLocaleString('en-IN')}\n\nPlease guide me on payment & shipping.`);
  setTimeout(() => {
    window.open(`https://wa.me/919999999999?text=${msg}`, '_blank');
  }, 1000);
}

function addToWishlist(name) {
  showToast(`"${name}" added to wishlist 🤍`);
}

// ===== FORMS =====
function submitCommission(e) {
  e.preventDefault();
  const name = document.getElementById('c-name').value;
  const phone = document.getElementById('c-phone').value;
  const email = document.getElementById('c-email').value;
  const type = document.getElementById('c-type').value;
  const desc = document.getElementById('c-desc').value;
  const msg = encodeURIComponent(`Hello Swamiji,\n\nI'd like to commission an artwork.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nArtwork Type: ${type}\nDescription: ${desc}\n\nPlease contact me to discuss further.`);
  showToast('Thank you! Connecting you on WhatsApp...');
  setTimeout(() => window.open(`https://wa.me/919999999999?text=${msg}`, '_blank'), 800);
  e.target.reset();
}

function submitContact(e) {
  e.preventDefault();
  showToast('Message sent! We will get back to you soon 🙏');
  e.target.reset();
}

function subscribeNewsletter(e) {
  e.preventDefault();
  const emailInput = e.target.querySelector('input[type="email"]');
  if (emailInput && emailInput.value) {
    showToast('Thank you for subscribing! 🪷');
    emailInput.value = '';
  }
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== REVEAL ANIMATIONS =====
function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Initial reveal check
  initReveal();
  // Set up reveal on scroll
  window.addEventListener('scroll', initReveal);

  // Keyboard close modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      if (document.getElementById('cart-sidebar').classList.contains('open')) toggleCart();
    }
  });
});
