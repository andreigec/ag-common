import styled from '@emotion/styled';
import React from 'react';

import { trimSide } from '../../../common/helpers/string/trim';

const renderMarkdownTable = (rows: string[]) => {
  const headers = rows[0].split('|').map((header) => header.trim());
  const tableBody = rows.slice(2).map((row) => {
    const cells = row.split('|').map((cell) => cell.trim());
    return `<tr>${cells.map((cell) => `<td>${cell}</td>`).join('')}</tr>`;
  });

  return `<table><thead><tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr></thead><tbody>${tableBody.join('')}</tbody></table>`;
};

function renderMarkdown(markdown: string): string {
  const lines = markdown.split('\n');
  let output = '';

  let ol = false;
  let tableRows: string[] = [];
  for (let line of lines) {
    //handle inline **s
    line = line.replace(/\*\*(.*?)\*\*/gim, `<b>$1</b>`);

    if (line.startsWith('|')) {
      tableRows.push(line);
      continue;
    } else {
      if (tableRows.length > 0) {
        output += renderMarkdownTable(tableRows);
        tableRows = [];
      }
    }

    if (line.match(/^[0-9]+\./gim)) {
      if (!ol) {
        output += '<ol>';
      }
      ol = true;
    } else {
      if (ol) {
        ol = false;
        output += '</ol>';
      }
    }

    // Handle headings
    if (line.startsWith('#')) {
      const level = line.match(/^#+/)?.length ?? 0;
      const t = trimSide(line, true, '#');
      output += `<h${level}>${t}</h${level}>\n`;
    } else if (line.startsWith('*')) {
      // Handle unordered lists
      output += `<ul>\n<li>${line.slice(2).trim()}</li>\n</ul>\n`;
    } else if (line.startsWith('-')) {
      // Handle unordered lists (alternative syntax)
      output += `<ul>\n<li>${line.slice(2).trim()}</li>\n</ul>\n`;
    } else if (line.match(/^[0-9]+\./gim)) {
      // Handle ordered lists
      output += `\n<li>${line.slice(3).trim()}</li>\n`;
    } else {
      // Handle paragraphs
      output += `<p>${line.trim()}</p>\n`;
    }
  }

  return output;
}

const Base = styled.div`
  p,
  li {
    white-space: pre-wrap;
  }
  ol {
    padding-inline-start: 1rem;
  }
`;
export const Markdown = (p: { content: string }) => {
  return (
    <Base dangerouslySetInnerHTML={{ __html: renderMarkdown(p.content) }} />
  );
};
