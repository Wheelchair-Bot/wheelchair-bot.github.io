const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

// Initialize markdown-it with plugins
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: false
}).use(markdownItAnchor, {
  permalink: markdownItAnchor.permalink.headerLink()
});

// Read the markdown content
const markdownContent = fs.readFileSync('content.md', 'utf8');

// Convert markdown to HTML
const htmlContent = md.render(markdownContent);

// Read the template
const template = fs.readFileSync('template.html', 'utf8');

// Replace the placeholder with the generated HTML
const finalHtml = template.replace('{{CONTENT}}', htmlContent);

// Write the output
fs.writeFileSync('index.html', finalHtml);

console.log('✓ Built index.html from content.md');
