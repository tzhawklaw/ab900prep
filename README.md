# AB900Prep.com

Free Microsoft AB-900 practice exam website.
Built with React + Vite + Tailwind CSS. Hosted on Netlify.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to `/dist` folder.

## Deploy to Netlify

### Option A — Drag & Drop (easiest)
1. Run `npm run build`
2. Go to netlify.com → Sites → "Deploy manually"
3. Drag the `/dist` folder into the browser window
4. Done ✓

### Option B — GitHub auto-deploy
1. Push this project to a GitHub repository
2. Go to netlify.com → "Add new site" → "Import from Git"
3. Select your GitHub repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click Deploy
7. Every time you push to GitHub, Netlify auto-deploys ✓

## Adding Questions

Edit `src/questions.js` — each question follows this format:

```js
{
  id: 101,                          // unique number
  domain: "M365 Core Services & Security",  // one of the 3 domains
  question: "Your question here?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correct: 0,                       // index of correct answer (0=A, 1=B, 2=C, 3=D)
  explanation: "Why this is correct...",
  source: "https://learn.microsoft.com/...",
  sourceLabel: "Microsoft Learn – Page title"
},
```

## Project Structure

```
ab900prep/
├── src/
│   ├── pages/
│   │   ├── Home.jsx        ← Landing page
│   │   ├── Exam.jsx        ← Quiz experience
│   │   ├── Results.jsx     ← Score & review
│   │   └── Disclaimer.jsx  ← Legal disclaimer
│   ├── components/
│   │   └── KofiButton.jsx  ← Donation button
│   ├── questions.js        ← All questions (edit this!)
│   ├── App.jsx             ← Page routing
│   ├── main.jsx            ← Entry point
│   └── index.css           ← Global styles
├── public/
│   └── favicon.svg
├── index.html              ← SEO meta tags
├── vite.config.js
├── package.json
└── netlify.toml            ← Netlify routing config
```

## Disclaimer

This is an independent study resource. Not affiliated with Microsoft Corporation.
All questions are original practice questions based on publicly available
Microsoft Learn documentation. Not real exam questions.

Microsoft, AB-900, and related names are trademarks of Microsoft Corporation.
