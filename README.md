# wheelchair-bot.github.io

Static website for the Wheelchair Bot project, built from markdown.

## Editing Content

The website content is maintained in `content.md` as markdown. To edit the website:

1. Edit `content.md` with your changes
2. Run `npm run build` to regenerate `index.html`
3. Commit both files

## Build System

This site uses a markdown-to-HTML build system:

- **content.md** - The source content in markdown format
- **template.html** - The HTML template wrapper
- **build.js** - Node.js script to convert markdown to HTML
- **styles.css** - Responsive CSS styling
- **index.html** - Generated HTML file (do not edit directly)

## Development

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Test locally
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Deployment

The site is automatically deployed to GitHub Pages from the `index.html` file. After making changes:

1. Edit `content.md`
2. Run `npm run build`
3. Commit and push both `content.md` and the generated `index.html`

