# AI Website Workshop — Showcase

A responsive, accessible workshop website for **Hands-On: Creating a Personal Financial Planning Web App**.

The site documents the two-prompt workflow used in the demonstration and includes two blind comparison activities. Participants compare anonymously labeled websites A–G, then effort variants 1–5, without seeing which system or setting produced each result.

The private label-to-system mapping is intentionally not stored in this repository.

## Files

- `index.html` — page structure and workshop content
- `styles.css` — responsive visual design
- `script.js` — copy-to-clipboard interaction
- `.nojekyll` — tells GitHub Pages to serve the site as plain static files
- `LICENSE` — open-source license

## Preview locally

You can open `index.html` directly in a browser. For a local web server, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Push the files to the `main` branch of `zhaochaoyi/AI-educator`.
2. Open the repository on GitHub and choose **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then click **Save**.
5. The public site will appear at `https://zhaochaoyi.github.io/AI-educator/` after GitHub finishes deploying it.

## Accessibility and privacy

The site uses semantic HTML, visible keyboard focus, strong contrast, reduced-motion support, responsive layouts, and a skip link. It has no analytics, forms, cookies, backend, or personal-data storage.
