import styled from '@emotion/styled';
import type { JSX } from 'react';
import React from 'react';

import { hashCode } from '../../../common';
import { insertElementAtIndex } from '../../../common/helpers/array';
import { trimSide } from '../../../common/helpers/string/trim';

const injectTable = ({
  tableRows,
  preprocessText,
}: {
  tableRows: string[];
  preprocessText: (s: string) => string | JSX.Element;
}) => (
  <table key={hashCode(JSON.stringify(tableRows))}>
    <thead>
      <tr>
        {tableRows[0]
          .split('|')
          .map((header) => header.trim())
          .map((header) => (
            <th key={header}>{preprocessText(header)}</th>
          ))}
      </tr>
    </thead>
    <tbody>
      {tableRows.slice(2).map((row) => {
        const cells = row.split('|').map((cell) => cell.trim());
        return (
          <tr key={row}>
            {cells.map((cell) => (
              <td key={cell}>{preprocessText(cell)}</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
);

const injectGroup = ({
  output,
  pos,
  wrap,
}: {
  pos: {
    outputIndex: number;
    matchLine: string;
  };
  output: JSX.Element[];
  wrap: (items: JSX.Element[]) => JSX.Element;
}) => {
  const outputEndIndex = output.length;
  const sum: JSX.Element[] = [];

  for (let a = pos.outputIndex; a <= outputEndIndex; a += 1) {
    sum.push(output[a]);
    delete output[a];
  }
  output = insertElementAtIndex(output, wrap(sum), pos.outputIndex);
  return output;
};

function renderMarkdown({
  markdown,
  preprocessText = (s) => s,
}: {
  preprocessText?: (s: string) => string | JSX.Element;
  markdown: string;
}) {
  const lines = markdown.split('\n');
  let output: JSX.Element[] = [];

  let ol: { outputIndex: number; matchLine: string } | undefined;
  let ul: { outputIndex: number; matchLine: string } | undefined;
  let tableRows: string[] = [];
  let a = -1;
  do {
    a += 1;
    const line = lines[a] ?? '';
    const la = line + a;

    const star = /\*\*(.*?)\*\*/gim;
    //handle inline **s
    if (line.match(star)) {
      output.push(
        <p
          key={la}
          dangerouslySetInnerHTML={{
            __html: line.replace(star, `<b>$1</b>`).trim(),
          }}
        />,
      );
      continue;
    }

    //table
    if (line.startsWith('|')) {
      tableRows.push(line);
      continue;
    } else {
      if (tableRows.length > 0) {
        output.push(injectTable({ tableRows, preprocessText }));
        tableRows = [];
      }
    }
    //ol
    if (line.match(/^[0-9]+\./gim)) {
      if (ol === undefined) {
        ol = { matchLine: line, outputIndex: output.length };
      }
    } else if (ol && ol.matchLine !== line) {
      output = injectGroup({
        output,
        pos: ol,
        wrap: (i) => <ol key={i[0].key}>{i}</ol>,
      });
      ol = undefined;
    }

    //ul
    if (line.startsWith('-') || line.startsWith('*')) {
      if (ul === undefined) {
        ul = { matchLine: line, outputIndex: output.length };
      }
    } else if (ul && ul.matchLine !== line) {
      output = injectGroup({
        output,
        pos: ul,
        wrap: (i) => <ul key={i[0].key}>{i}</ul>,
      });
      ul = undefined;
    }

    // h1
    if (line.startsWith('#')) {
      const level = line.match(/^#+/)?.[0]?.length ?? 0;
      const t = trimSide(line, true, '#').trim();
      if (level === 1) {
        output.push(<h1 key={t}>{preprocessText(t)}</h1>);
      } else if (level === 2) {
        output.push(<h2 key={t}>{preprocessText(t)}</h2>);
      } else if (level === 3) {
        output.push(<h3 key={t}>{preprocessText(t)}</h3>);
      } else if (level === 4) {
        output.push(<h4 key={t}>{preprocessText(t)}</h4>);
      } else if (level === 5) {
        output.push(<h5 key={t}>{preprocessText(t)}</h5>);
      } else if (level >= 6) {
        output.push(<h6 key={t}>{preprocessText(t)}</h6>);
      }
    }
    //ul - li
    else if (line.startsWith('*') || line.startsWith('-')) {
      const t = line.slice(2).trim();
      if (t.length > 0) {
        output.push(<li key={t}>{preprocessText(t)}</li>);
      }
    }
    //ol - li
    else if (line.match(/^[0-9]+\./gim)) {
      const t = line.slice(3).trim();
      if (t.length > 0) {
        output.push(<li key={t}>{preprocessText(t)}</li>);
      }
    }
    //text
    else {
      if (line.length > 0) {
        output.push(<p key={la}>{preprocessText(line)}</p>);
      }
    }
  } while (a < lines.length);
  return output;
}

const Base = styled.div`
  > * {
    margin: 0;
    white-space: pre-wrap;
  }
  ul {
    display: grid;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul,
  table {
    margin-bottom: 1rem;
  }
`;

export interface IMarkdown {
  markdown: string;
  className?: string;
  /** run after html is generated for markdown, but before applied */
  preprocessText?: (s: string) => string | JSX.Element;
}
export const Markdown = (p: IMarkdown) => (
  <Base className={p.className}>
    {renderMarkdown({
      preprocessText: p.preprocessText,
      markdown: p.markdown.trim(),
    })}
  </Base>
);
