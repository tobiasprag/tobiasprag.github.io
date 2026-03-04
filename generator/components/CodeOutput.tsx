import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Block } from '../types';
import { DEFAULT_HEADING_STYLE, DEFAULT_PARAGRAPH_STYLE, DEFAULT_WRAPPER_STYLE, DEFAULT_LINK_STYLE, DEFAULT_IMAGE_STYLE, DEFAULT_NAV_STYLE, PREVIEW_WRAPPER_STYLE, HEADING_SIZES, WRAPPER_VARIANTS, CANVAS_PALETTE } from '../constants';

interface CodeOutputProps {
  blocks: Block[];
}

export const CodeOutput: React.FC<CodeOutputProps> = ({ blocks }) => {
  const [copied, setCopied] = useState(false);

  const cssToInline = (style: Record<string, any>) => {
    return Object.entries(style)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => {
        const cssKey = key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);
        return `${cssKey}: ${value}`;
      })
      .join('; ');
  };

  const getBlockStyle = (block: Block) => {
    let defaultStyle = {};
    if (block.type === 'heading') defaultStyle = DEFAULT_HEADING_STYLE;
    else if (block.type === 'paragraph') defaultStyle = DEFAULT_PARAGRAPH_STYLE;
    else if (block.type === 'wrapper') defaultStyle = DEFAULT_WRAPPER_STYLE;
    else if (block.type === 'nav') defaultStyle = DEFAULT_NAV_STYLE;
    else if (block.type === 'link') defaultStyle = DEFAULT_LINK_STYLE;
    else if (block.type === 'image') defaultStyle = DEFAULT_IMAGE_STYLE;

    const combined = { ...defaultStyle, ...block.customStyles };

    // Explicitly set heading size
    if (block.type === 'heading') {
        const level = block.headingLevel || 2;
        combined.fontSize = HEADING_SIZES[level as keyof typeof HEADING_SIZES];
        // Remove font-weight from CSS for Canvas safety
        delete combined.fontWeight;
    }

    // Wrapper Variants Logic
    if (block.type === 'wrapper' && block.variant) {
      const variant = WRAPPER_VARIANTS.find(v => v.value === block.variant);
      if (variant) {
        combined.backgroundColor = variant.bg;
        
        // Reset borders first
        combined.border = 'none';
        combined.borderLeft = 'none';
        combined.borderBottom = 'none';
        combined.borderRight = 'none';

        if (block.variant === 'card') {
          // Enhanced Border Technique
          combined.border = `1px solid ${CANVAS_PALETTE.borderLight}`;
          combined.borderBottom = `4px solid ${CANVAS_PALETTE.borderMedium}`;
          combined.borderRight = `2px solid #f1f3f4`;
        } else if (block.variant === 'header') {
           combined.color = 'white';
           combined.textAlign = 'center';
           combined.background = variant.bg; // Gradient
        } else if (['info', 'success', 'warning', 'danger'].includes(block.variant)) {
           combined.borderLeft = `4px solid ${variant.border}`;
           // Add a light border around the rest for better definition
           combined.border = `1px solid ${CANVAS_PALETTE.borderLight}`;
           combined.borderLeft = `4px solid ${variant.border}`; // Re-apply left border to override
        }
      }
    }

    return cssToInline(combined);
  };

  const generateBlockHtml = (block: Block, indentLevel: number = 2): string => {
    const indent = '  '.repeat(indentLevel);
    const style = getBlockStyle(block);

    // HEADING
    if (block.type === 'heading') {
      const idAttr = block.htmlId ? ` id="${block.htmlId}"` : '';
      const level = block.headingLevel || 2;
      
      let badgeHtml = '';
      let displayStyle = '';
      
      if (block.badge) {
        displayStyle = ' display: flex; align-items: center;';
        badgeHtml = `<span style="background: ${CANVAS_PALETTE.primary}; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 1.2rem; flex-shrink: 0;"><strong>${block.badge}</strong></span>`;
      }

      const contentHtml = block.variant === 'header' 
        ? `<span style="font-weight: 300;">${block.content}</span>`
        : `<strong>${block.content}</strong>`;

      return `${indent}<h${level}${idAttr} style="${style}; margin-bottom: 1rem; line-height: 1.2;${displayStyle}">\n${indent}  ${badgeHtml}${contentHtml}\n${indent}</h${level}>\n`;
    }
    
    // WRAPPER & NAV
    if (block.type === 'wrapper' || block.type === 'nav') {
      let layoutStyles = '';
      if (block.type === 'wrapper' && block.layout === 'columns') {
        layoutStyles = ' display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; align-items: start;';
      }

      const tagName = block.type === 'nav' ? 'nav' : 'div';
      const marginBottom = block.type === 'wrapper' ? '2rem' : '1rem';

      let wrapperHtml = `${indent}<${tagName} style="${style};${layoutStyles} margin-bottom: ${marginBottom};">\n`;
      if (block.children && block.children.length > 0) {
        block.children.forEach(child => {
           if (block.type === 'wrapper' && block.layout === 'columns') {
             // min-width: 0 prevents grid item blowout from long content
             wrapperHtml += `${indent}  <div style="height: 100%; min-width: 0;">\n`;
             wrapperHtml += generateBlockHtml(child, indentLevel + 2);
             wrapperHtml += `${indent}  </div>\n`;
           } else {
             wrapperHtml += generateBlockHtml(child, indentLevel + 1);
           }
        });
      }
      wrapperHtml += `${indent}</${tagName}>\n`;
      return wrapperHtml;
    }

    // LINK
    if (block.type === 'link') {
      return `${indent}<a href="${block.url || '#'}" style="${style}">${block.content || 'Link Text'}</a>\n`;
    }

    // IMAGE
    if (block.type === 'image') {
      if (block.imageMode === 'canvas') {
        const placeholderStyle = `background-color: #e2e8f0; min-height: 200px; display: flex; align-items: center; justify-content: center; border: 2px dashed #cbd5e1; color: #94a3b8; font-family: sans-serif; font-weight: bold;`;
        return `${indent}<div style="${style}; ${placeholderStyle} margin-bottom: 1.5rem;">${block.alt || 'IMAGE CANVAS'}</div>\n`;
      }
      return `${indent}<img src="${block.url || ''}" alt="${block.alt || ''}" style="${style}; margin-bottom: 1.5rem;" />\n`;
    }

    // PARAGRAPH
    return `${indent}<p style="${style}; margin-bottom: 1.5rem; line-height: 1.6;">${block.content}</p>\n`;
  };

  const generateCode = (): string => {
    if (blocks.length === 0) return '<!-- Add blocks to generate HTML -->';

    let html = `<div style="${PREVIEW_WRAPPER_STYLE.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim()}">\n`;
    blocks.forEach(block => {
      html += generateBlockHtml(block);
    });
    html += `</div>`;
    return html;
  };

  const code = generateCode();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 bg-gray-900 dark:bg-black text-gray-300">
      <div className="absolute top-2 right-2">
        <button
          onClick={handleCopy}
          className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded-md transition-colors border border-gray-700"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          <span>{copied ? 'Copied!' : 'Copy Code'}</span>
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-all">
          <code className="language-html">{code}</code>
        </pre>
      </div>
    </div>
  );
};