# Sakshi.exe

A playful, interactive Product Management portfolio. Plain HTML, CSS and JavaScript: no build step.

## Structure

```
index.html              page markup
assets/css/styles.css   all styling (design tokens, dark mode, animations)
assets/js/data.js       EDIT THIS: contact links, projects, timeline, skills, certificates
assets/js/main.js       interactions and rendering
assets/certs/           certificate images (cert-1.jpg ...)
assets/resume/          resume PDF + page previews used by "View Resume"
vercel.json             Vercel config (static, no build)
package.json            local dev server only
```

## Run locally

Option A (no install): `python3 -m http.server 3000`, then open http://localhost:3000

Option B: `npm install` then `npm run dev`, then open http://localhost:3000

(Opening index.html by double-click also works, but a local server is closer to production.)

## Deploy on Vercel

1. Create a GitHub repository and push this folder's contents (so `index.html` is at the repo root).
2. In Vercel choose **Add New > Project**, import the repository.
3. Leave the framework as **Other**, with no build command. `vercel.json` already sets this. Click **Deploy**.
4. Every push to `main` redeploys automatically. Add a custom domain under Project > Settings > Domains.

## Editing content

Open `assets/js/data.js`:

- `SITE`: email, LinkedIn, optional `resumeUrl` (leave "" to use the bundled PDF)
- `PROJECTS`: `status: "published"` shows a project; `"draft"` hides it. Each project has `links`.
- `TIMELINE`, `ABOUT`, `STATS`, `STICKS`, `CERTS`: the rest of the content.

To update the resume: replace `assets/resume/Sakshi_Singh_Resume.pdf`, and regenerate the two page previews
(`page-1.jpg`, `page-2.jpg`), for example with `pdftoppm -r 130 -jpeg resume.pdf page`.

To add a certificate: put a JPG in `assets/certs/` and add an entry to `CERTS` in `data.js`.
