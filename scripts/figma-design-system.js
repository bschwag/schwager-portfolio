// ─────────────────────────────────────────────────────────────────────────────
// Schwager Portfolio — Design System Page Builder
// Run once via Figma › Plugins › Development › New Plugin › Run once
// Re-running clears and rebuilds the entire Design System page.
// ─────────────────────────────────────────────────────────────────────────────

// ── Tokens (mirrors tokens/tokens.json) ──────────────────────────────────────
const tokens = {
  color: {
    brandPrimary:      { hex: '#f97316', name: 'brand/primary' },
    brandPrimaryHover: { hex: '#ea6c0a', name: 'brand/primary-hover' },
    brandSecondary:    { hex: '#ef4444', name: 'brand/secondary' },
    neutral50:         { hex: '#f9fafb', name: 'neutral/50' },
    neutral100:        { hex: '#f3f4f6', name: 'neutral/100' },
    neutral200:        { hex: '#e5e7eb', name: 'neutral/200' },
    neutral300:        { hex: '#d1d5db', name: 'neutral/300' },
    neutral400:        { hex: '#9ca3af', name: 'neutral/400' },
    neutral500:        { hex: '#6b7280', name: 'neutral/500' },
    neutral600:        { hex: '#4b5563', name: 'neutral/600' },
    neutral700:        { hex: '#374151', name: 'neutral/700' },
    neutral800:        { hex: '#1f2937', name: 'neutral/800' },
    neutral900:        { hex: '#111827', name: 'neutral/900' },
    textPrimary:       { hex: '#111827', name: 'text/primary' },
    textSecondary:     { hex: '#4b5563', name: 'text/secondary' },
    textMuted:         { hex: '#9ca3af', name: 'text/muted' },
    textInverse:       { hex: '#ffffff', name: 'text/inverse' },
    bgBase:            { hex: '#ffffff', name: 'bg/base' },
    bgSubtle:          { hex: '#f9fafb', name: 'bg/subtle' },
    bgDark:            { hex: '#111827', name: 'bg/dark' },
    borderDefault:     { hex: '#e5e7eb', name: 'border/default' },
    borderStrong:      { hex: '#9ca3af', name: 'border/strong' },
  },
  // M3-inspired semantic type scale — mirrors tailwind.config.js + tokens.json
  // Sizes in px (1rem = 16px base). lineHeight as multiplier → stored as %.
  typeScale: [
    { label: 'display/lg',  size: 57, weight: 'Bold',      lh: 112, ls: -1.5,  sample: 'Creative Generalist' },
    { label: 'display/md',  size: 45, weight: 'Bold',      lh: 115, ls: -1.0,  sample: 'Two decades of design' },
    { label: 'display/sm',  size: 36, weight: 'Bold',      lh: 120, ls: -0.5,  sample: 'Experience & Craft' },
    { label: 'headline/lg', size: 40, weight: 'Bold',      lh: 125, ls: 0,     sample: 'Experience' },
    { label: 'headline/md', size: 28, weight: 'Bold',      lh: 130, ls: 0,     sample: 'Building from Zero' },
    { label: 'headline/sm', size: 24, weight: 'Bold',      lh: 133, ls: 0,     sample: 'Scaling & Leadership' },
    { label: 'title/lg',    size: 22, weight: 'Bold',      lh: 127, ls: 0,     sample: 'evo · Creative Manager' },
    { label: 'title/md',    size: 16, weight: 'Semi Bold', lh: 150, ls: 0.9,   sample: 'Co-founder & CCO' },
    { label: 'title/sm',    size: 14, weight: 'Semi Bold', lh: 143, ls: 0.6,   sample: '2022–Present' },
    { label: 'body/lg',     size: 16, weight: 'Regular',   lh: 160, ls: 3.1,   sample: 'Two decades designing memorable brand stories across startups and agencies.' },
    { label: 'body/md',     size: 14, weight: 'Regular',   lh: 157, ls: 1.6,   sample: 'Leading creative strategy and design execution for global campaigns.' },
    { label: 'body/sm',     size: 12, weight: 'Regular',   lh: 133, ls: 2.5,   sample: 'Environmental & Digital · 2022–Present' },
    { label: 'label/lg',    size: 14, weight: 'Semi Bold', lh: 143, ls: 0.6,   sample: 'SECTION LABEL' },
    { label: 'label/md',    size: 12, weight: 'Semi Bold', lh: 133, ls: 3.1,   sample: 'CAPS · TRACKING' },
    { label: 'label/sm',    size: 11, weight: 'Semi Bold', lh: 145, ls: 3.1,   sample: 'TINY LABEL' },
  ],
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return { r, g, b };
}

function makeRect(name, w, h, hex, radius = 0) {
  const r = figma.createRectangle();
  r.name = name;
  r.resize(w, h);
  r.cornerRadius = radius;
  r.fills = [{ type: 'SOLID', color: hexToRgb(hex) }];
  return r;
}

async function makeText(content, size, weight, hex, { lh, ls } = {}) {
  const t = figma.createText();
  await figma.loadFontAsync({ family: 'Inter', style: weight });
  t.fontName = { family: 'Inter', style: weight };
  t.fontSize = size;
  t.characters = content;
  t.fills = [{ type: 'SOLID', color: hexToRgb(hex) }];
  if (lh) t.lineHeight = { value: lh, unit: 'PERCENT' };
  if (ls) t.letterSpacing = { value: ls, unit: 'PERCENT' };
  return t;
}

function divider(page, w, x, y) {
  const r = figma.createRectangle();
  r.name = '—';
  r.resize(w, 1);
  r.x = x; r.y = y;
  r.fills = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  page.appendChild(r);
  return r;
}

async function sectionLabel(page, label, x, y) {
  const t = await makeText(label.toUpperCase(), 11, 'Semi Bold', '#9ca3af', { ls: 8 });
  t.x = x; t.y = y;
  page.appendChild(t);
  return t;
}

// ─────────────────────────────────────────────────────────────────────────────
async function build() {

  let page = figma.root.children.find(p => p.name === 'Design System');
  if (!page) {
    page = figma.createPage();
    page.name = 'Design System';
  }
  figma.currentPage = page;
  for (const child of [...page.children]) child.remove();

  const PAGE_X = 80;
  let cursorY = 80;
  const COL = 1200;

  // ── Page title ──────────────────────────────────────────────────────────────
  const pageTitle = await makeText('Design System', 40, 'Bold', '#111827');
  pageTitle.x = PAGE_X; pageTitle.y = cursorY;
  page.appendChild(pageTitle);

  const pageSub = await makeText('Schwager Portfolio · M3-inspired token scale → tailwind.config.js', 15, 'Regular', '#9ca3af');
  pageSub.x = PAGE_X; pageSub.y = cursorY + 52;
  page.appendChild(pageSub);

  cursorY += 120;
  divider(page, COL, PAGE_X, cursorY);
  cursorY += 40;

  // ══════════════════════════════════════════════════════════════════════════════
  // 01 — COLOR
  // ══════════════════════════════════════════════════════════════════════════════
  await sectionLabel(page, '01 — Foundation', PAGE_X, cursorY);
  cursorY += 28;

  const colorTitle = await makeText('Color', 28, 'Bold', '#111827');
  colorTitle.x = PAGE_X; colorTitle.y = cursorY;
  page.appendChild(colorTitle);
  cursorY += 52;

  // Brand
  await sectionLabel(page, 'Brand', PAGE_X, cursorY);
  cursorY += 24;

  const brandColors = [
    { hex: '#f97316', label: 'brand/primary',       sub: '#f97316' },
    { hex: '#ea6c0a', label: 'brand/primary-hover',  sub: '#ea6c0a' },
    { hex: '#ef4444', label: 'brand/secondary',      sub: '#ef4444' },
  ];

  let swatchX = PAGE_X;
  for (const col of brandColors) {
    const swatch = makeRect(col.label, 120, 80, col.hex, 8);
    swatch.x = swatchX; swatch.y = cursorY;
    page.appendChild(swatch);
    const label = await makeText(col.label, 11, 'Semi Bold', '#374151');
    label.x = swatchX; label.y = cursorY + 88; page.appendChild(label);
    const sub = await makeText(col.sub, 11, 'Regular', '#9ca3af');
    sub.x = swatchX; sub.y = cursorY + 103; page.appendChild(sub);
    swatchX += 136;
  }
  cursorY += 136;

  // Neutral scale
  await sectionLabel(page, 'Neutral Scale', PAGE_X, cursorY);
  cursorY += 24;

  const neutrals = [
    { hex: '#f9fafb', label: '50' },  { hex: '#f3f4f6', label: '100' },
    { hex: '#e5e7eb', label: '200' }, { hex: '#d1d5db', label: '300' },
    { hex: '#9ca3af', label: '400' }, { hex: '#6b7280', label: '500' },
    { hex: '#4b5563', label: '600' }, { hex: '#374151', label: '700' },
    { hex: '#1f2937', label: '800' }, { hex: '#111827', label: '900' },
  ];

  swatchX = PAGE_X;
  for (const col of neutrals) {
    const swatch = makeRect(`neutral/${col.label}`, 96, 56, col.hex, 8);
    swatch.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
    swatch.strokeWeight = 1;
    swatch.x = swatchX; swatch.y = cursorY;
    page.appendChild(swatch);
    const label = await makeText(col.label, 11, 'Semi Bold', '#374151');
    label.x = swatchX; label.y = cursorY + 64; page.appendChild(label);
    const sub = await makeText(col.hex, 11, 'Regular', '#9ca3af');
    sub.x = swatchX; sub.y = cursorY + 78; page.appendChild(sub);
    swatchX += 112;
  }
  cursorY += 120;

  // Semantic colors
  await sectionLabel(page, 'Semantic', PAGE_X, cursorY);
  cursorY += 24;

  const semantics = [
    { hex: '#111827', label: 'text/primary' },   { hex: '#4b5563', label: 'text/secondary' },
    { hex: '#9ca3af', label: 'text/muted' },      { hex: '#ffffff', label: 'text/inverse' },
    { hex: '#ffffff', label: 'bg/base' },          { hex: '#f9fafb', label: 'bg/subtle' },
    { hex: '#111827', label: 'bg/dark' },          { hex: '#e5e7eb', label: 'border/default' },
    { hex: '#9ca3af', label: 'border/strong' },
  ];

  swatchX = PAGE_X;
  for (const col of semantics) {
    const swatch = makeRect(col.label, 96, 56, col.hex, 8);
    swatch.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
    swatch.strokeWeight = 1;
    swatch.x = swatchX; swatch.y = cursorY;
    page.appendChild(swatch);
    const label = await makeText(col.label, 10, 'Semi Bold', '#374151');
    label.x = swatchX; label.y = cursorY + 64; page.appendChild(label);
    swatchX += 112;
  }
  cursorY += 112;

  divider(page, COL, PAGE_X, cursorY);
  cursorY += 48;

  // ══════════════════════════════════════════════════════════════════════════════
  // 02 — TYPOGRAPHY
  // ══════════════════════════════════════════════════════════════════════════════
  await sectionLabel(page, '02 — Typography', PAGE_X, cursorY);
  cursorY += 28;

  const typTitle = await makeText('Typography', 28, 'Bold', '#111827');
  typTitle.x = PAGE_X; typTitle.y = cursorY;
  page.appendChild(typTitle);
  cursorY += 8;

  const typSub = await makeText('M3-inspired semantic scale · display / headline / title / body / label × lg / md / sm', 13, 'Regular', '#9ca3af');
  typSub.x = PAGE_X; typSub.y = cursorY + 36;
  page.appendChild(typSub);
  cursorY += 72;

  for (const t of tokens.typeScale) {
    const rowH = Math.max(t.size + 8, 32);

    // Token name column
    const meta = await makeText(t.label, 11, 'Regular', '#9ca3af');
    meta.x = PAGE_X;
    meta.y = cursorY + Math.round(rowH / 2) - 7;
    meta.resize(160, meta.height);
    page.appendChild(meta);

    // Size annotation
    const sizeMeta = await makeText(`${t.size}px · ${(t.lh / 100).toFixed(2)} lh`, 10, 'Regular', '#d1d5db');
    sizeMeta.x = PAGE_X + 160;
    sizeMeta.y = cursorY + Math.round(rowH / 2) - 6;
    page.appendChild(sizeMeta);

    // Sample text
    const sample = await makeText(t.sample, t.size, t.weight, '#111827', { lh: t.lh, ls: t.ls });
    sample.x = PAGE_X + 290;
    sample.y = cursorY;
    page.appendChild(sample);

    cursorY += rowH + 20;
  }

  divider(page, COL, PAGE_X, cursorY);
  cursorY += 48;

  // ══════════════════════════════════════════════════════════════════════════════
  // 03 — BUTTONS
  // ══════════════════════════════════════════════════════════════════════════════
  await sectionLabel(page, '03 — Components', PAGE_X, cursorY);
  cursorY += 28;

  const compTitle = await makeText('Buttons', 28, 'Bold', '#111827');
  compTitle.x = PAGE_X; compTitle.y = cursorY;
  page.appendChild(compTitle);
  cursorY += 56;

  async function makeButton(label, bgHex, textHex, borderHex, x, y) {
    const frame = figma.createFrame();
    frame.name = `Button / ${label}`;
    frame.resize(160, 48);
    frame.x = x; frame.y = y;
    frame.cornerRadius = 6;
    frame.fills = bgHex ? [{ type: 'SOLID', color: hexToRgb(bgHex) }] : [];
    if (borderHex) {
      frame.strokes = [{ type: 'SOLID', color: hexToRgb(borderHex) }];
      frame.strokeWeight = 2;
    }
    frame.layoutMode = 'HORIZONTAL';
    frame.primaryAxisAlignItems = 'CENTER';
    frame.counterAxisAlignItems = 'CENTER';
    const t = await makeText(label, 14, 'Semi Bold', textHex);
    frame.appendChild(t);
    return frame;
  }

  const btnPrimary  = await makeButton('See Experience', '#f97316', '#ffffff', null,      PAGE_X,       cursorY);
  const btnOutline  = await makeButton('Get in Touch',   null,      '#111827', '#111827',  PAGE_X + 180, cursorY);
  const btnDisabled = await makeButton('Disabled',       '#f3f4f6', '#9ca3af', null,       PAGE_X + 360, cursorY);
  page.appendChild(btnPrimary);
  page.appendChild(btnOutline);
  page.appendChild(btnDisabled);

  const lbl1 = await makeText('Primary',  11, 'Regular', '#9ca3af'); lbl1.x = PAGE_X;       lbl1.y = cursorY + 56; page.appendChild(lbl1);
  const lbl2 = await makeText('Outline',  11, 'Regular', '#9ca3af'); lbl2.x = PAGE_X + 180; lbl2.y = cursorY + 56; page.appendChild(lbl2);
  const lbl3 = await makeText('Disabled', 11, 'Regular', '#9ca3af'); lbl3.x = PAGE_X + 360; lbl3.y = cursorY + 56; page.appendChild(lbl3);

  cursorY += 100;

  // ══════════════════════════════════════════════════════════════════════════════
  // 04 — NAVIGATION
  // ══════════════════════════════════════════════════════════════════════════════
  const navTitle = await makeText('Navigation', 28, 'Bold', '#111827');
  navTitle.x = PAGE_X; navTitle.y = cursorY;
  page.appendChild(navTitle);
  cursorY += 48;

  const navBar = figma.createFrame();
  navBar.name = 'Nav / Desktop';
  navBar.resize(COL, 64);
  navBar.x = PAGE_X; navBar.y = cursorY;
  navBar.fills = [{ type: 'SOLID', color: hexToRgb('#ffffff') }];
  navBar.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
  navBar.strokeWeight = 1;
  navBar.strokeAlign = 'OUTSIDE';
  navBar.layoutMode = 'HORIZONTAL';
  navBar.paddingLeft = 24; navBar.paddingRight = 24;
  navBar.primaryAxisAlignItems = 'SPACE_BETWEEN';
  navBar.counterAxisAlignItems = 'CENTER';

  const logo = await makeText('Brett.', 20, 'Bold', '#111827');
  navBar.appendChild(logo);

  const navLinks = figma.createFrame();
  navLinks.name = 'Nav Links';
  navLinks.fills = [];
  navLinks.layoutMode = 'HORIZONTAL';
  navLinks.itemSpacing = 32;
  navLinks.counterAxisAlignItems = 'CENTER';
  navLinks.primaryAxisSizingMode = 'AUTO';
  navLinks.counterAxisSizingMode = 'AUTO';

  for (const link of ['Experience', 'Work', 'Experiments', 'Contact']) {
    const l = await makeText(link, 15, 'Regular', '#111827');
    navLinks.appendChild(l);
  }
  navBar.appendChild(navLinks);
  page.appendChild(navBar);
  cursorY += 100;

  // ══════════════════════════════════════════════════════════════════════════════
  // 05 — EXPERIENCE CARDS
  // ══════════════════════════════════════════════════════════════════════════════
  const cardTitle = await makeText('Cards', 28, 'Bold', '#111827');
  cardTitle.x = PAGE_X; cardTitle.y = cursorY;
  page.appendChild(cardTitle);
  cursorY += 48;

  async function makeExperienceCard(company, role, year, desc, accent, x, y) {
    const card = figma.createFrame();
    card.name = `Card / ${company}`;
    card.resize(360, 200);
    card.x = x; card.y = y;
    card.cornerRadius = 10;
    card.fills = [{ type: 'SOLID', color: hexToRgb(accent) }];
    card.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
    card.strokeWeight = 1;
    card.layoutMode = 'VERTICAL';
    card.paddingTop = 32; card.paddingBottom = 32;
    card.paddingLeft = 32; card.paddingRight = 32;
    card.itemSpacing = 8;
    card.primaryAxisSizingMode = 'FIXED';
    card.counterAxisSizingMode = 'FIXED';

    const headerRow = figma.createFrame();
    headerRow.name = 'Header';
    headerRow.fills = [];
    headerRow.layoutMode = 'HORIZONTAL';
    headerRow.primaryAxisAlignItems = 'SPACE_BETWEEN';
    headerRow.counterAxisAlignItems = 'MIN';
    headerRow.primaryAxisSizingMode = 'FIXED';
    headerRow.counterAxisSizingMode = 'AUTO';
    headerRow.resize(296, 40);

    const nameText = await makeText(company, 18, 'Bold', '#111827');
    const yearText = await makeText(year, 13, 'Semi Bold', '#9ca3af');
    headerRow.appendChild(nameText);
    headerRow.appendChild(yearText);
    card.appendChild(headerRow);

    const roleText = await makeText(role, 13, 'Regular', '#4b5563');
    card.appendChild(roleText);

    const descText = await makeText(desc, 14, 'Regular', '#374151', { lh: 157 });
    descText.textAutoResize = 'HEIGHT';
    descText.resize(296, descText.height);
    card.appendChild(descText);

    page.appendChild(card);
    return card;
  }

  await makeExperienceCard('evo',           'Creative Manager',        '2022–Present', 'Leading creative strategy for global campaigns.', '#eff6ff', PAGE_X,       cursorY);
  await makeExperienceCard('Mendi',         'Co-founder & CCO',        '2019–2022',    '$650K first-year revenue. 20% sustained growth.',  '#fff7ed', PAGE_X + 392, cursorY);
  await makeExperienceCard('Schwager, Inc.','Owner & Creative Director','2014–Present', 'Identity, packaging, and campaigns for Microsoft, evo, Season.', '#faf5ff', PAGE_X + 784, cursorY);

  cursorY += 240;

  // ══════════════════════════════════════════════════════════════════════════════
  // 06 — EXPERIMENT CARDS
  // ══════════════════════════════════════════════════════════════════════════════
  const expCardTitle = await makeText('Experiment Cards', 28, 'Bold', '#111827');
  expCardTitle.x = PAGE_X; expCardTitle.y = cursorY;
  page.appendChild(expCardTitle);
  cursorY += 48;

  async function makeExpCard(category, title, x, y) {
    const card = figma.createFrame();
    card.name = `Experiment Card / ${title}`;
    card.resize(280, 140);
    card.x = x; card.y = y;
    card.cornerRadius = 10;
    card.fills = [{ type: 'SOLID', color: hexToRgb('#ffffff') }];
    card.strokes = [{ type: 'SOLID', color: hexToRgb('#e5e7eb') }];
    card.strokeWeight = 1;
    card.layoutMode = 'VERTICAL';
    card.paddingTop = 24; card.paddingBottom = 24;
    card.paddingLeft = 24; card.paddingRight = 24;
    card.itemSpacing = 12;
    card.primaryAxisSizingMode = 'FIXED';
    card.counterAxisSizingMode = 'FIXED';

    const badge = figma.createFrame();
    badge.name = 'Badge';
    badge.cornerRadius = 4;
    badge.fills = [{ type: 'SOLID', color: hexToRgb('#fff7ed') }];
    badge.layoutMode = 'HORIZONTAL';
    badge.paddingTop = 4; badge.paddingBottom = 4;
    badge.paddingLeft = 12; badge.paddingRight = 12;
    badge.primaryAxisSizingMode = 'AUTO';
    badge.counterAxisSizingMode = 'AUTO';
    const badgeText = await makeText(category, 12, 'Semi Bold', '#f97316');
    badge.appendChild(badgeText);
    card.appendChild(badge);

    const titleText = await makeText(title, 16, 'Bold', '#111827');
    card.appendChild(titleText);

    const dateText = await makeText('Coming Soon', 12, 'Regular', '#9ca3af');
    card.appendChild(dateText);

    page.appendChild(card);
    return card;
  }

  await makeExpCard('Video',           'Design Thinking in Motion', PAGE_X,       cursorY);
  await makeExpCard('Blog',            'Typography Deep Dive',      PAGE_X + 312, cursorY);
  await makeExpCard('Code Experiment', 'Creative Coding Sandbox',   PAGE_X + 624, cursorY);

  cursorY += 192;
  divider(page, COL, PAGE_X, cursorY);
  cursorY += 48;

  // ══════════════════════════════════════════════════════════════════════════════
  // 07 — SPACING SCALE
  // ══════════════════════════════════════════════════════════════════════════════
  await sectionLabel(page, '07 — Spacing', PAGE_X, cursorY);
  cursorY += 28;

  const spacingTitle = await makeText('Spacing Scale', 28, 'Bold', '#111827');
  spacingTitle.x = PAGE_X; spacingTitle.y = cursorY;
  page.appendChild(spacingTitle);
  cursorY += 52;

  const spacingScale = [
    { label: '1 · 4px', px: 4 },   { label: '2 · 8px',  px: 8 },
    { label: '3 · 12px', px: 12 },  { label: '4 · 16px', px: 16 },
    { label: '6 · 24px', px: 24 },  { label: '8 · 32px', px: 32 },
    { label: '12 · 48px', px: 48 }, { label: '16 · 64px', px: 64 },
    { label: '20 · 80px', px: 80 },
  ];

  let spX = PAGE_X;
  for (const s of spacingScale) {
    const bar = makeRect(s.label, s.px, s.px, '#f97316', 2);
    bar.x = spX; bar.y = cursorY + (80 - s.px);
    page.appendChild(bar);
    const lbl = await makeText(s.label, 10, 'Regular', '#9ca3af');
    lbl.x = spX; lbl.y = cursorY + 88;
    page.appendChild(lbl);
    spX += s.px + 32;
  }

  cursorY += 140;

  figma.viewport.scrollAndZoomIntoView(page.children);
  figma.notify('✅ Design System rebuilt with M3 type scale!', { timeout: 3000 });
}

build().catch(err => figma.notify('❌ Error: ' + err.message, { error: true }));
