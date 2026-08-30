# Rishitha Chilaka — Portfolio

A single-page portfolio built with React + Vite + Tailwind CSS, in the "Data/AI" visual
style (deep navy background, cyan/gold gradient accents, circuit-grid backdrop). The
contact form posts to a Vercel serverless function (`/api/send-email.js`) that sends
mail through [Resend](https://resend.com).

## Structure

```
├── api/
│   └── send-email.js        # Vercel serverless function (contact form → Resend)
├── public/
│   ├── favicon.svg
│   └── Rishitha_Chilaka_Resume.pdf
├── src/
│   ├── assets/               # hero/about photos + project images
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/useReveal.js    # scroll-triggered fade-in
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173). The contact form's
"Send Message" button will fail locally unless you also run `vercel dev` (see below),
since `/api/send-email` only exists as a Vercel Function.

To test the contact form locally with the real serverless function:

```bash
npm install -g vercel   # if you don't have the Vercel CLI yet
vercel dev
```

## 2. Contact form — Resend setup

The form posts to `/api/send-email`, which uses the `resend` npm package (already in
`package.json`) to send you an email.

1. Create a free account at [resend.com](https://resend.com).
2. Go to **API Keys** and create one — copy it.
3. (Optional but recommended) Verify your own domain in Resend so `from:` shows your
   name instead of Resend's shared sandbox domain. Until then, the code defaults to
   `onboarding@resend.dev` as the sender, which works immediately with no setup.
4. You will set the API key as an environment variable in Vercel (next step) — do
   **not** commit it to the repo. `.env.example` documents the three variables used:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (defaults to rishithareddych21@gmail.com if unset)
   - `CONTACT_FROM_EMAIL` (defaults to the Resend sandbox sender if unset)

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/RishithaChilaka/<your-repo-name>.git
git push -u origin main
```

## 4. Deploy to Vercel

Since you already have Vercel connected:

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo you just
   pushed. Vercel auto-detects Vite — no build settings to change.
2. Before the first deploy (or right after, then redeploy), add the environment
   variables from step 2 under **Project Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (optional — leave unset to use the Resend sandbox sender)
3. Deploy. Vercel will build the Vite site as static output and automatically deploy
   `api/send-email.js` as a serverless function at `/api/send-email`.
4. (Optional) Add a custom domain under **Project Settings → Domains**.

## 5. Swapping content later

- **Photos / project images**: replace files in `src/assets/` (keep the same filenames,
  or update the `import` paths in `Hero.jsx`, `About.jsx`, and `Projects.jsx`).
- **Resume**: replace `public/Rishitha_Chilaka_Resume.pdf` with a new PDF of the same
  filename, or update the `href` in `Navbar.jsx`.
- **Projects list**: edit the `projects` array in `src/components/Projects.jsx`.
- **Skills**: edit the `skillGroups` array in `src/components/About.jsx`.
- **Colors**: the cyan/gold "Data/AI" palette is defined in `tailwind.config.js`
  (`colors.cyan.glow`, `colors.gold`) and `src/index.css` (`.text-gradient`,
  `.glow-border`, `.glass-panel`).
