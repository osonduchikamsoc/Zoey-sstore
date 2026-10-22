
"use strict";

/* ==========================================
   ZOEY'S 22 — E-COMMERCE JAVASCRIPT
========================================== */

const DB = {
    cart: "zoeys22_cart",
    favs: "zoeys22_favourites",
    customer: "zoeys22_customer",
    orders: "zoeys22_orders",
    last: "zoeys22_last_order"
};

const PALETTE = [
    { name: "Violet", hex: "#502D55" },
    { name: "Rose", hex: "#935073" },
    { name: "Peach", hex: "#F6DBC0" },
    { name: "Cream", hex: "#F8F4E9" }
];

const DELIVERY = 2500;

const PRODUCTS = [
    {
        id: "bag-01",
        name: "Everyday Elegance Bag",
        category: "Bags",
        price: 18500,
        tag: "BESTSELLER",
        desc: "A polished everyday bag with a timeless silhouette and thoughtful details.",
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85"
        ]
    },
    {
        id: "dress-02",
        name: "Soft Grace Dress",
        category: "Fashion",
        price: 24500,
        tag: "NEW ARRIVAL",
        desc: "An effortlessly elegant dress for everyday confidence and special moments.",
        images: [
            "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=85"
        ]
    },
    {
        id: "heels-03",
        name: "Classic Chic Heels",
        category: "Shoes",
        price: 22000,
        tag: "POPULAR",
        desc: "Classic footwear designed to finish your look with understated elegance.",
        images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85"
        ]
    },
    {
        id: "purse-04",
        name: "Petite Charm Purse",
        category: "Bags",
        price: 9500,
        tag: "JUST IN",
        desc: "A compact purse for the essentials, finished with a charming modern feel.",
        images: [
            "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85"
        ]
    },
    {
        id: "blouse-05",
        name: "Everyday Muse Blouse",
        category: "Fashion",
        price: 12500,
        tag: "FAVOURITE",
        desc: "A versatile wardrobe staple that pairs beautifully with casual or smart looks.",
        images: [
            "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85"
        ]
    },
    {
        id: "sandals-06",
        name: "Weekend Luxe Sandals",
        category: "Shoes",
        price: 14500,
        tag: "TRENDING",
        desc: "Comfortable, easy-to-style sandals for relaxed days and weekend plans.",
        images: [
            "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=85"
        ]
    },
    {
        id: "shoulder-07",
        name: "Modern Shoulder Bag",
        category: "Bags",
        price: 16500,
        tag: "STYLE PICK",
        desc: "A clean, versatile shoulder bag for a refined everyday outfit.",
        images: [
            "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85"
        ]
    },
    {
        id: "skirt-08",
        name: "Elegant Flow Skirt",
        category: "Fashion",
        price: 17500,
        tag: "EDITOR'S PICK",
        desc: "A graceful, versatile piece for creating polished outfits all week.",
        images: [
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=85",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85"
        ]
    }
];

/* ==========================================
   GENERAL HELPERS
========================================== */

const $ = (selector, root = document) =>
    root.querySelector(selector);

const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];

function read(key, fallback = null) {
    try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : JSON.parse(value);
    } catch {
        return fallback;
    }
}

function write(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        toast("Could not save data in this browser.", true);
        return false;
    }
}

function money(amount) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 2
    }).format(Number(amount) || 0);
}

function safe(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function product(id) {
    return PRODUCTS.find(item => item.id === id);
}

function img(item, colour = "Violet") {
    const index = PALETTE.findIndex(
        option => option.name === colour
    );

    return item.images[index >= 0 ? index : 0];
}

function validColour(colour) {
    return PALETTE.some(item => item.name === colour);
}

function getCart() {
    const stored = read(DB.cart, []);

    if (!Array.isArray(stored)) return [];

    return stored
        .filter(item =>
            item &&
            product(item.id) &&
            Number.isInteger(item.qty) &&
            item.qty > 0 &&
            item.qty <= 99 &&
            validColour(item.colour)
        )
        .map(item => ({
            id: item.id,
            colour: item.colour,
            qty: item.qty
        }));
}

function cart() {
    return getCart();
}

function saveCart(items) {
    if (!write(DB.cart, items)) return false;

    updateCount();
    return true;
}

function count() {
    return cart().reduce((sum, item) => sum + item.qty, 0);
}

function subtotal(items = cart()) {
    return items.reduce((sum, item) => {
        const p = product(item.id);
        return sum + (p ? p.price * item.qty : 0);
    }, 0);
}

function delivery(items = cart()) {
    return items.length ? DELIVERY : 0;
}

function total(items = cart()) {
    return subtotal(items) + delivery(items);
}

/* ==========================================
   NOTIFICATIONS AND MODAL
========================================== */

function toast(message, error = false) {
    const wrapper = $("#toast-wrap");

    if (!wrapper) {
        console[error ? "error" : "log"](message);
        return;
    }

    const element = document.createElement("div");

    element.className = "toast" + (error ? " error" : "");
    element.textContent = message;

    wrapper.appendChild(element);

    setTimeout(() => element.remove(), 3200);
}

function modal(title, message, icon = "fa-check") {
    const backdrop = $("#modal-backdrop");

    if (!backdrop) {
        toast(message);
        return;
    }

    if ($("#modal-title")) {
        $("#modal-title").textContent = title;
    }

    if ($("#modal-message")) {
        $("#modal-message").textContent = message;
    }

    if ($("#modal-icon")) {
        $("#modal-icon").className = "fa-solid " + icon;
    }

    backdrop.classList.add("open");
    document.body.classList.add("locked");
}

function closeModal() {
    $("#modal-backdrop")?.classList.remove("open");
    document.body.classList.remove("locked");
}

function setupModal() {
    $$("[data-modal-close]").forEach(button => {
        button.addEventListener("click", closeModal);
    });

    $("#modal-backdrop")?.addEventListener("click", event => {
        if (event.target.id === "modal-backdrop") {
            closeModal();
        }
    });
}

/* ==========================================
   MOBILE NAVIGATION
========================================== */

function setupMenu() {
    const toggle = $("#menu-toggle");
    const overlay = $("#side-overlay");

    function closeMenu() {
        document.body.classList.remove("menu-open", "locked");
        toggle?.setAttribute("aria-expanded", "false");
    }

    toggle?.addEventListener("click", () => {
        const isOpen = document.body.classList.contains("menu-open");

        document.body.classList.toggle("menu-open", !isOpen);
        document.body.classList.toggle("locked", !isOpen);

        toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    $("#menu-close")?.addEventListener("click", closeMenu);
    overlay?.addEventListener("click", closeMenu);

    $$(".side-menu a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeMenu();
            closeModal();
        }
    });
}

/* ==========================================
   HERO SLIDER
========================================== */

function setupHero() {
    const slides = $$(".hero-slide");
    const dots = $("#hero-dots");

    if (!slides.length) return;

    let active = Math.max(
        0,
        slides.findIndex(slide => slide.classList.contains("active"))
    );

    let timer = null;

    if (dots) {
        dots.innerHTML = slides.map((slide, index) => `
            <button
                type="button"
                class="hero-dot ${index === active ? "active" : ""}"
                aria-label="Go to slide ${index + 1}"
                aria-pressed="${index === active}"
            ></button>
        `).join("");
    }

    function show(index) {
        active = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === active);
            slide.setAttribute("aria-hidden", String(i !== active));
        });

        $$(".hero-dot", dots || document).forEach((dot, i) => {
            dot.classList.toggle("active", i === active);
            dot.setAttribute("aria-pressed", String(i === active));
        });
    }

    function stop() {
        clearInterval(timer);
        timer = null;
    }

    function start() {
        stop();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        timer = setInterval(() => show(active + 1), 5000);
    }

    $$(".hero-dot", dots || document).forEach((dot, index) => {
        dot.addEventListener("click", () => {
            show(index);
            start();
        });
    });

    $("#hero-next")?.addEventListener("click", () => {
        show(active + 1);
        start();
    });

    $("#hero-prev")?.addEventListener("click", () => {
        show(active - 1);
        start();
    });

    $(".hero")?.addEventListener("mouseenter", stop);
    $(".hero")?.addEventListener("mouseleave", start);

    show(active);
    start();
}

/* ==========================================
   PRODUCT CARDS
========================================== */

function productCard(item) {
    const favourites = read(DB.favs, []);
    const isFavourite = Array.isArray(favourites) &&
        favourites.includes(item.id);

    const colour = "Violet";

    return `
        <article class="product-card" data-card="${item.id}">
            <div class="product-image">
                <a data-view-link
                   href="product.html?id=${item.id}&colour=${colour}">
                    <img
                        data-card-image
                        src="${img(item, colour)}"
                        alt="${safe(item.name)} in ${colour}"
                        loading="lazy"
                    >
                </a>

                <span class="product-tag">${safe(item.tag)}</span>

                <button
                    type="button"
                    class="heart-btn ${isFavourite ? "active" : ""}"
                    data-fav="${item.id}"
                    aria-label="Toggle favourite"
                    aria-pressed="${isFavourite}"
                >
                    <i class="fa-${isFavourite ? "solid" : "regular"} fa-heart"></i>
                </button>
            </div>

            <div class="product-info">
                <span class="product-category">
                    ${safe(item.category)}
                </span>

                <h3>${safe(item.name)}</h3>

                <div class="product-price">${money(item.price)}</div>

                <div class="swatches">
                    ${PALETTE.map((colourOption, index) => `
                        <button
                            type="button"
                            class="swatch ${index === 0 ? "selected" : ""}"
                            data-colour="${colourOption.name}"
                            style="background:${colourOption.hex}"
                            aria-label="${colourOption.name}"
                            aria-pressed="${index === 0}"
                        ></button>
                    `).join("")}
                </div>

                <div class="product-actions">
                    <a
                        class="btn btn-outline"
                        data-view-link
                        href="product.html?id=${item.id}&colour=${colour}"
                    >View</a>

                    <button
                        type="button"
                        class="btn btn-primary"
                        data-add="${item.id}"
                        data-selected-colour="${colour}"
                    >
                        <i class="fa-solid fa-bag-shopping"></i>
                        Add
                    </button>
                </div>
            </div>
        </article>
    `;
}

function renderProducts(target, items = PRODUCTS) {
    if (!target) return;

    target.innerHTML = items.length
        ? items.map(productCard).join("")
        : `<div class="no-results">
               No products match your search. Try another keyword.
           </div>`;
}

/* ==========================================
   CART OPERATIONS
========================================== */

function add(id, colour = "Violet", qty = 1) {
    const item = product(id);

    if (!item || !validColour(colour)) {
        toast("Invalid product or colour.", true);
        return;
    }

    if (!Number.isInteger(qty) || qty < 1 || qty > 99) {
        toast("Please choose a valid quantity.", true);
        return;
    }

    const items = cart();
    const existing = items.find(
        entry => entry.id === id && entry.colour === colour
    );

    if (existing) {
        if (existing.qty + qty > 99) {
            toast("Maximum quantity is 99 per colour.", true);
            return;
        }

        existing.qty += qty;
    } else {
        items.push({ id, colour, qty });
    }

    if (saveCart(items)) {
        modal(
            "Added to your bag",
            `${item.name} in ${colour} has been added to your cart.`,
            "fa-bag-shopping"
        );
    }
}

function setQty(id, colour, delta) {
    if (![-1, 1].includes(delta)) return;

    const items = cart();
    const existing = items.find(
        entry => entry.id === id && entry.colour === colour
    );

    if (!existing) return;

    const nextQty = existing.qty + delta;

    if (nextQty > 99) {
        toast("Maximum quantity is 99.", true);
        return;
    }

    const updated = items
        .map(entry =>
            entry.id === id && entry.colour === colour
                ? { ...entry, qty: nextQty }
                : entry
        )
        .filter(entry => entry.qty > 0);

    if (saveCart(updated)) renderCart();
}

function removeItem(id, colour) {
    const updated = cart().filter(
        entry => !(entry.id === id && entry.colour === colour)
    );

    if (saveCart(updated)) {
        renderCart();
        toast("Product removed from cart.");
    }
}

function updateCount() {
    $$(".cart-count").forEach(element => {
        element.textContent = count();
    });
}

/* ==========================================
   CART PAGE
========================================== */

function renderCart() {
    const element = $("#cart-items");

    if (!element) return;

    const items = cart();
    const itemCount = count();
    const checkout = $("#cart-checkout");

    if ($("#cart-count-label")) {
        $("#cart-count-label").textContent =
            `${itemCount} item${itemCount === 1 ? "" : "s"}`;
    }

    if ($("#cart-subtotal")) {
        $("#cart-subtotal").textContent = money(subtotal(items));
    }

    if ($("#cart-delivery")) {
        $("#cart-delivery").textContent = money(delivery(items));
    }

    if ($("#cart-total")) {
        $("#cart-total").textContent = money(total(items));
    }

    if (!items.length) {
        element.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-bag-shopping"></i>
                <h2>Your bag is waiting</h2>
                <p>Discover pieces made to complement your style.</p>
                <a class="btn btn-primary" href="index.html#shop">
                    Explore the collection
                </a>
            </div>
        `;

        if (checkout) {
            checkout.href = "index.html#shop";
            checkout.setAttribute("aria-disabled", "true");
        }

        return;
    }

    if (checkout) {
        checkout.href = "checkout.html";
        checkout.removeAttribute("aria-disabled");
    }

    element.innerHTML = items.map(entry => {
        const item = product(entry.id);

        return `
            <article class="cart-item">
                <a href="product.html?id=${item.id}&colour=${encodeURIComponent(entry.colour)}">
                    <img
                        src="${img(item, entry.colour)}"
                        alt="${safe(item.name)}"
                    >
                </a>

                <div>
                    <h3>${safe(item.name)}</h3>
                    <div class="muted">Colour: ${safe(entry.colour)}</div>
                    <div class="muted">${money(item.price)} each</div>

                    <div class="qty-control">
                        <button
                            type="button"
                            data-qty="-1"
                            data-id="${entry.id}"
                            data-colour="${entry.colour}"
                            aria-label="Decrease quantity"
                        >−</button>

                        <strong>${entry.qty}</strong>

                        <button
                            type="button"
                            data-qty="1"
                            data-id="${entry.id}"
                            data-colour="${entry.colour}"
                            aria-label="Increase quantity"
                        >+</button>
                    </div>

                    <button
                        type="button"
                        class="remove-btn"
                        data-remove="${entry.id}"
                        data-colour="${entry.colour}"
                    >
                        <i class="fa-regular fa-trash-can"></i>
                        Remove
                    </button>
                </div>

                <div class="line-price">
                    ${money(item.price * entry.qty)}
                </div>
            </article>
        `;
    }).join("");
}

/* ==========================================
   PRODUCT DETAILS PAGE
========================================== */

function renderDetail() {
    const element = $("#product-detail");

    if (!element) return;

    const params = new URLSearchParams(location.search);
    const item = product(params.get("id"));

    if (!item) {
        element.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-box-open"></i>
                <h2>Product not found</h2>
                <a class="btn btn-primary" href="index.html#shop">
                    Back to shop
                </a>
            </div>
        `;
        return;
    }

    let colour = validColour(params.get("colour"))
        ? params.get("colour")
        : "Violet";

    let qty = 1;
    let imageIndex = 0;

    element.innerHTML = `
        <div>
            <div class="gallery-main">
                <img
                    id="detail-image"
                    src="${img(item, colour)}"
                    alt="${safe(item.name)} in ${colour}"
                >
            </div>

            <div class="thumbs">
                ${item.images.map((image, index) => `
                    <button
                        type="button"
                        class="thumb ${index === 0 ? "active" : ""}"
                        data-thumb="${index}"
                        aria-label="Product image ${index + 1}"
                    >
                        <img src="${image}" alt="">
                    </button>
                `).join("")}
            </div>
        </div>

        <div>
            <span class="eyebrow" style="color:var(--rose)">
                ${safe(item.category)} · ${safe(item.tag)}
            </span>

            <h1 class="detail-title">${safe(item.name)}</h1>
            <div class="detail-price">${money(item.price)}</div>
            <p>${safe(item.desc)}</p>

            <div class="field">
                <label>
                    Choose a colour:
                    <strong id="colour-label">${colour}</strong>
                </label>

                <div class="swatches">
                    ${PALETTE.map(option => `
                        <button
                            type="button"
                            class="swatch ${option.name === colour ? "selected" : ""}"
                            data-detail-colour="${option.name}"
                            style="background:${option.hex}"
                            aria-label="${option.name}"
                            aria-pressed="${option.name === colour}"
                        ></button>
                    `).join("")}
                </div>
            </div>

            <div class="field">
                <label>Quantity</label>

                <div class="qty-control">
                    <button type="button" id="detail-minus" aria-label="Decrease">−</button>
                    <strong id="detail-qty">1</strong>
                    <button type="button" id="detail-plus" aria-label="Increase">+</button>
                </div>
            </div>

            <div style="display:flex;gap:10px;flex-wrap:wrap">
                <button type="button" class="btn btn-primary" id="detail-add">
                    <i class="fa-solid fa-bag-shopping"></i>
                    Add to cart
                </button>

                <button type="button" class="btn btn-secondary" id="detail-buy">
                    Buy now <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>

            <div class="notice" style="margin-top:22px">
                <i class="fa-solid fa-heart"></i>
                Choose from four Violet Dusk colour options.
                Product images are illustrative samples.
            </div>
        </div>
    `;

    function setColour(nextColour) {
        if (!validColour(nextColour)) return;

        colour = nextColour;

        $("#colour-label").textContent = colour;
        $("#detail-image").src = item.images[imageIndex];
        $("#detail-image").alt = `${item.name} in ${colour}`;

        $$("[data-detail-colour]", element).forEach(button => {
            const selected = button.dataset.detailColour === colour;

            button.classList.toggle("selected", selected);
            button.setAttribute("aria-pressed", String(selected));
        });
    }

    $$("[data-detail-colour]", element).forEach(button => {
        button.addEventListener("click", () => {
            imageIndex = PALETTE.findIndex(
                option => option.name === button.dataset.detailColour
            );

            setColour(button.dataset.detailColour);
        });
    });

    $$("[data-thumb]", element).forEach(button => {
        button.addEventListener("click", () => {
            imageIndex = Number(button.dataset.thumb);

            if (!Number.isInteger(imageIndex) ||
                imageIndex < 0 ||
                imageIndex >= item.images.length) {
                return;
            }

            $("#detail-image").src = item.images[imageIndex];

            $$(".thumb", element).forEach(thumb => {
                thumb.classList.toggle("active", thumb === button);
            });
        });
    });

    $("#detail-minus").addEventListener("click", () => {
        qty = Math.max(1, qty - 1);
        $("#detail-qty").textContent = qty;
    });

    $("#detail-plus").addEventListener("click", () => {
        qty = Math.min(99, qty + 1);
        $("#detail-qty").textContent = qty;
    });

    $("#detail-add").addEventListener("click", () => {
        add(item.id, colour, qty);
    });

    $("#detail-buy").addEventListener("click", () => {
        const items = cart();
        const existing = items.find(
            entry => entry.id === item.id && entry.colour === colour
        );

        if (existing) {
            if (existing.qty + qty > 99) {
                toast("Maximum quantity is 99.", true);
                return;
            }

            existing.qty += qty;
        } else {
            items.push({ id: item.id, colour, qty });
        }

        if (saveCart(items)) {
            location.href = "checkout.html";
        }
    });
}

/* ==========================================
   CHECKOUT PAGE
========================================== */

function renderCheckout() {
    const element = $("#checkout-items");

    if (!element) return;

    const items = cart();
    const placeOrder = $("#place-order");

    if (!items.length) {
        element.innerHTML = `
            <div class="empty-state">
                <h2>Your cart is empty</h2>
                <a class="btn btn-primary" href="index.html#shop">
                    Shop now
                </a>
            </div>
        `;

        if (placeOrder) placeOrder.disabled = true;

        return;
    }

    if (placeOrder) placeOrder.disabled = false;

    element.innerHTML = items.map(entry => {
        const item = product(entry.id);

        return `
            <div class="checkout-item">
                <img src="${img(item, entry.colour)}" alt="${safe(item.name)}">

                <div>
                    <strong>${safe(item.name)}</strong>
                    <small>${safe(entry.colour)} · Qty ${entry.qty}</small>
                </div>

                <strong>${money(item.price * entry.qty)}</strong>
            </div>
        `;
    }).join("");

    if ($("#checkout-subtotal")) {
        $("#checkout-subtotal").textContent = money(subtotal(items));
    }

    if ($("#checkout-delivery")) {
        $("#checkout-delivery").textContent = money(delivery(items));
    }

    if ($("#checkout-total")) {
        $("#checkout-total").textContent = money(total(items));
    }

    const savedCustomer = read(DB.customer, {});

    ["name", "phone", "email", "address", "city", "state", "note"]
        .forEach(name => {
            const field = $(`[name="${name}"]`);

            if (field && savedCustomer[name]) {
                field.value = savedCustomer[name];
            }
        });
}

function setupCheckout() {
    const form = $("#checkout-form");

    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!cart().length) {
            toast("Your cart is empty.", true);
            return;
        }

        if (!form.reportValidity()) return;

        const data = Object.fromEntries(
            new FormData(form).entries()
        );

        for (const key of [
            "name", "phone", "email", "address", "city", "state"
        ]) {
            data[key] = String(data[key] || "").trim();
        }

        for (const key of [
            "name", "phone", "email", "address", "city", "state"
        ]) {
            if (!data[key]) {
                toast(`Please enter your ${key}.`, true);
                return;
            }
        }

        if (!write(DB.customer, data)) return;

        location.href = "payment.html";
    });
}

/* ==========================================
   PAYMENT PAGE
========================================== */

function renderPayment() {
    const items = cart();

    if ($("#payment-total")) {
        $("#payment-total").textContent = money(total(items));
    }

    if ($("#payment-count")) {
        const itemCount = count();

        $("#payment-count").textContent =
            `${itemCount} item${itemCount === 1 ? "" : "s"}`;
    }

    if (!items.length && $("#confirm-payment")) {
        $("#confirm-payment").disabled = true;
    }
}

function setupPayment() {
    const form = $("#payment-form");

    if (!form) return;

    form.addEventListener("submit", event => {
        event.preventDefault();

        const items = cart();
        const customer = read(DB.customer, {});

        if (!items.length) {
            toast("Your cart is empty.", true);
            return;
        }

        if (!customer.name || !customer.phone ||
            !customer.address || !customer.city || !customer.state) {
            location.href = "checkout.html";
            return;
        }

        if (!form.reportValidity()) return;

        const method = form.elements.paymentMethod?.value;

        if (!["bank", "usdt", "cash"].includes(method)) {
            toast("Choose a valid payment method.", true);
            return;
        }

        const previousOrders = read(DB.orders, []);

        if (!Array.isArray(previousOrders)) {
            toast("Unable to load your orders. Please try again.", true);
            return;
        }

        const order = {
            orderNo: "ZSY-" + Date.now().toString(36).toUpperCase(),
            date: new Date().toISOString(),
            customer,
            items: items.map(entry => {
                const item = product(entry.id);

                return {
                    id: item.id,
                    name: item.name,
                    colour: entry.colour,
                    qty: entry.qty,
                    price: item.price,
                    lineTotal: item.price * entry.qty,
                    image: img(item, entry.colour)
                };
            }),
            subtotal: subtotal(items),
            delivery: delivery(items),
            total: total(items),
            method,
            status: method === "cash"
                ? "Order placed — cash payment pending"
                : "Payment instructions selected — awaiting verification"
        };

        if (!write(DB.orders, [...previousOrders, order])) return;
        if (!write(DB.last, order)) return;

        if (method === "bank" || method === "usdt") {
            location.href = "payment-instructions.html";
            return;
        }

        if (write(DB.cart, [])) {
            updateCount();
            location.href = "receipt.html";
        }
    });
}

/* ==========================================
   PAYMENT INSTRUCTIONS
========================================== */

function renderInstructions() {
    const order = read(DB.last, null);

    if (!order) return;

    const title = $("#instruction-title");
    const text = $("#instruction-text");
    const box = $("#instruction-box");

    if (title) {
        title.textContent = order.method === "bank"
            ? "Bank transfer instructions"
            : "USDT payment instructions";
    }

    if (text) {
        text.textContent = order.method === "bank"
            ? "Transfer the exact order total only to the verified business bank account provided by the store owner. Confirm the account details before sending money."
            : "Send USDT only to a verified receiving wallet supplied by the store owner. Confirm the network, address and amount before transferring.";
    }

    if (box) {
        if (order.method === "bank") {
            box.innerHTML = `
                <p><strong>Order reference:</strong> ${safe(order.orderNo)}</p>
                <p><strong>Amount to transfer:</strong> ${money(order.total)}</p>
                <p><strong>Bank details:</strong> Add your verified bank name, account name and account number before launch.</p>
            `;
        } else {
            box.innerHTML = `
                <p><strong>Order reference:</strong> ${safe(order.orderNo)}</p>
                <p><strong>NGN order total:</strong> ${money(order.total)}</p>
                <p><strong>Wallet address:</strong> Add your verified wallet address and supported network before launch.</p>
            `;
        }
    }

    const button = $("#instructions-continue");

    if (!button || button.dataset.bound === "true") return;

    button.dataset.bound = "true";

    button.addEventListener("click", () => {
        const orders = read(DB.orders, []);

        if (!Array.isArray(orders)) {
            toast("Unable to update your order.", true);
            return;
        }

        const updated = orders.map(item =>
            item.orderNo === order.orderNo
                ? {
                    ...item,
                    status: "Awaiting manual payment verification"
                }
                : item
        );

        const latest = {
            ...order,
            status: "Awaiting manual payment verification"
        };

        if (!write(DB.orders, updated)) return;
        if (!write(DB.last, latest)) return;
        if (!write(DB.cart, [])) return;

        updateCount();
        location.href = "receipt.html";
    });
}

/* ==========================================
   RECEIPT PAGE
========================================== */

function renderReceipt() {
    if (!$("#receipt-items")) return;

    const content = $("#receipt-content");
    const order = read(DB.last, null);

    if (!order || !Array.isArray(order.items)) {
        if (content) {
            content.innerHTML = `
                <div class="empty-state">
                    <h2>No recent order found</h2>
                    <a class="btn btn-primary" href="index.html#shop">
                        Start shopping
                    </a>
                </div>
            `;
        }

        return;
    }

    const customer = order.customer || {};

    function setText(id, value) {
        const element = $("#" + id);

        if (element) element.textContent = value;
    }

    setText("receipt-order", order.orderNo || "—");

    setText(
        "receipt-date",
        order.date
            ? new Date(order.date).toLocaleString("en-NG")
            : "—"
    );

    setText("receipt-name", customer.name || "—");
    setText("receipt-phone", customer.phone || "—");
    setText("receipt-email", customer.email || "—");

    setText(
        "receipt-address",
        [customer.address, customer.city, customer.state]
            .filter(Boolean)
            .join(", ") || "—"
    );

    setText(
        "receipt-method",
        ({
            bank: "Bank transfer",
            usdt: "USDT",
            cash: "Cash"
        })[order.method] || order.method || "—"
    );

    setText("receipt-status", order.status || "Pending");

    setText("receipt-subtotal", money(order.subtotal));
    setText("receipt-delivery", money(order.delivery));
    setText("receipt-total", money(order.total));

    $("#receipt-items").innerHTML = order.items.map(item => `
        <div class="receipt-line">
            <div>
                <strong>${safe(item.name)}</strong>
                <div class="muted">
                    ${safe(item.colour)} · Qty ${item.qty} ·
                    ${money(item.price)} each
                </div>
            </div>

            <strong>${money(item.lineTotal)}</strong>
        </div>
    `).join("");

    const printButton = $("#print-receipt");

    if (printButton && printButton.dataset.bound !== "true") {
        printButton.dataset.bound = "true";

        printButton.addEventListener("click", () => {
            window.print();
        });
    }
}

/* ==========================================
   PRODUCT SEARCH AND FILTERS
========================================== */

function setupSearchAndFilters() {
    const search = $("#product-search");
    const grid = $("#product-grid");

    let activeCategory = "all";

    function filterProducts() {
        const term = (search?.value || "").trim().toLowerCase();

        const filtered = PRODUCTS.filter(item => {
            const matchesCategory =
                activeCategory === "all" ||
                item.category.toLowerCase() === activeCategory;

            const searchableText = [
                item.name,
                item.category,
                item.desc,
                item.tag
            ].join(" ").toLowerCase();

            return matchesCategory && searchableText.includes(term);
        });

        renderProducts(grid, filtered);
    }

    search?.addEventListener("input", filterProducts);

    $$("[data-filter]").forEach(button => {
        button.addEventListener("click", () => {
            activeCategory = button.dataset.filter.toLowerCase();

            $$("[data-filter]").forEach(filter => {
                filter.classList.toggle("active", filter === button);
            });

            filterProducts();
        });
    });
}

/* ==========================================
   FAVOURITES
========================================== */

function toggleFavourite(button) {
    const id = button.dataset.fav;

    if (!product(id)) return;

    const stored = read(DB.favs, []);
    const favourites = Array.isArray(stored) ? stored : [];

    const exists = favourites.includes(id);

    const updated = exists
        ? favourites.filter(item => item !== id)
        : [...favourites, id];

    if (!write(DB.favs, updated)) return;

    button.classList.toggle("active", !exists);

    button.setAttribute("aria-pressed", String(!exists));

    button.innerHTML = `
        <i class="fa-${exists ? "regular" : "solid"} fa-heart"></i>
    `;

    toast(
        exists
            ? "Removed from favourites."
            : "Added to favourites."
    );
}

/* ==========================================
   EVENT DELEGATION
========================================== */

function setupDelegation() {
    document.addEventListener("click", event => {
        const target = event.target;

        const addButton = target.closest("[data-add]");

        if (addButton) {
            add(
                addButton.dataset.add,
                addButton.dataset.selectedColour || "Violet"
            );

            return;
        }

        const swatch = target.closest("[data-colour]");

        if (swatch) {
            const card = swatch.closest("[data-card]");
            const item = product(card?.dataset.card);

            if (!item || !card) return;

            const colour = swatch.dataset.colour;

            if (!validColour(colour)) return;

            $$("[data-colour]", card).forEach(button => {
                const selected = button === swatch;

                button.classList.toggle("selected", selected);
                button.setAttribute("aria-pressed", String(selected));
            });

            const image = $("[data-card-image]", card);

            if (image) {
                image.src = img(item, colour);
                image.alt = `${item.name} in ${colour}`;
            }

            $$("[data-view-link]", card).forEach(link => {
                link.href =
                    `product.html?id=${item.id}&colour=${encodeURIComponent(colour)}`;
            });

            const cardAddButton = $("[data-add]", card);

            if (cardAddButton) {
                cardAddButton.dataset.selectedColour = colour;
            }

            return;
        }

        const favouriteButton = target.closest("[data-fav]");

        if (favouriteButton) {
            toggleFavourite(favouriteButton);
            return;
        }

        const quantityButton = target.closest("[data-qty]");

        if (quantityButton) {
            setQty(
                quantityButton.dataset.id,
                quantityButton.dataset.colour,
                Number(quantityButton.dataset.qty)
            );

            return;
        }

        const removeButton = target.closest("[data-remove]");

        if (removeButton) {
            removeItem(
                removeButton.dataset.remove,
                removeButton.dataset.colour
            );
        }
    });
}

/* ==========================================
   SCROLL REVEAL ANIMATIONS
========================================== */

function setupScrollReveal() {
    const targets = $$(
        ".section, .section-head, .benefit, .product-card, " +
        ".split-banner, .panel, .page-hero, .receipt, " +
        ".contact-card, .footer-grid > div"
    );

    targets.forEach((element, index) => {
        element.classList.add("reveal");

        if (element.classList.contains("product-card")) {
            element.style.setProperty(
                "--reveal-delay",
                `${(index % 4) * 70}ms`
            );
        }
    });

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        targets.forEach(element => {
            element.classList.add("is-visible");
        });

        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
    });

    targets.forEach(element => observer.observe(element));
}

/* ==========================================
   APPLICATION INITIALIZATION
========================================== */

function init() {
    $$(".year").forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    setupMenu();
    setupModal();
    setupHero();
    setupDelegation();

    renderProducts($("#product-grid"));
    renderProducts($("#related-products"), PRODUCTS.slice(0, 4));

    renderDetail();
    renderCart();
    renderCheckout();

    setupCheckout();

    renderPayment();
    setupPayment();

    renderInstructions();
    renderReceipt();

    updateCount();
    setupSearchAndFilters();
    setupScrollReveal();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
    init();
}
