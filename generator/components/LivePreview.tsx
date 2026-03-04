import React from 'react';
import { Block } from '../types';
import { DEFAULT_HEADING_STYLE, DEFAULT_PARAGRAPH_STYLE, DEFAULT_WRAPPER_STYLE, DEFAULT_LINK_STYLE, DEFAULT_IMAGE_STYLE, DEFAULT_NAV_STYLE, HEADING_SIZES, WRAPPER_VARIANTS, CANVAS_PALETTE } from '../constants';

interface LivePreviewProps {
  blocks: Block[];
}

export const LivePreview: React.FC<LivePreviewProps> = ({ blocks }) => {
  const getStyle = (block: Block): React.CSSProperties => {
    let defaultStyle = {};
    if (block.type === 'heading') defaultStyle = DEFAULT_HEADING_STYLE;
    else if (block.type === 'paragraph') defaultStyle = DEFAULT_PARAGRAPH_STYLE;
    else if (block.type === 'wrapper') defaultStyle = DEFAULT_WRAPPER_STYLE;
    else if (block.type === 'nav') defaultStyle = DEFAULT_NAV_STYLE;
    else if (block.type === 'link') defaultStyle = DEFAULT_LINK_STYLE;
    else if (block.type === 'image') defaultStyle = DEFAULT_IMAGE_STYLE;

    const combined = { ...defaultStyle, ...block.customStyles };
    
    // Apply heading size
    if (block.type === 'heading') {
      const level = block.headingLevel || 2;
      combined.fontSize = HEADING_SIZES[level as keyof typeof HEADING_SIZES];
      
      // Canvas-safe: Remove font-weight from CSS (handled by tags)
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

    // Wrapper specific layout styles
    const layoutStyles: React.CSSProperties = {};
    if (block.type === 'wrapper' && block.layout === 'columns') {
      layoutStyles.display = 'grid';
      layoutStyles.gridTemplateColumns = '1fr 1fr';
      layoutStyles.gap = '1.5rem';
      layoutStyles.alignItems = 'start';
    }

    const baseStyle: React.CSSProperties = {
      ...(combined as React.CSSProperties),
      ...layoutStyles,
      marginBottom: (block.type === 'heading' || block.type === 'nav') ? '1rem' : block.type === 'wrapper' ? '2rem' : '1.5rem',
      lineHeight: block.type === 'heading' ? '1.2' : '1.6',
      boxSizing: 'border-box',
    };

    return baseStyle;
  };

  const renderBlock = (block: Block) => {
    // HEADING
    if (block.type === 'heading') {
      const level = block.headingLevel || 2;
      const Tag = `h${level}` as React.ElementType;
      const style = getStyle(block);
      
      // Badge Logic
      const badge = block.badge ? (
        <span style={{
          background: CANVAS_PALETTE.primary,
          color: 'white',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '15px',
          fontSize: '1.2rem',
          flexShrink: 0,
        }}>
          <strong>{block.badge}</strong>
        </span>
      ) : null;

      // Flex display for badge alignment
      if (block.badge) {
        style.display = 'flex';
        style.alignItems = 'center';
      }

      return (
        <Tag key={block.id} id={block.htmlId} style={style}>
          {badge}
          {/* Canvas strips font-weight, so we wrap text in strong if it's a heading */}
          {block.variant === 'header' ? (
             <span style={{ fontWeight: 300 }}>{block.content || 'Empty Heading'}</span>
          ) : (
             <strong>{block.content || 'Empty Heading'}</strong>
          )}
        </Tag>
      );
    }
    
    // WRAPPER & NAV
    if (block.type === 'wrapper' || block.type === 'nav') {
      const style = getStyle(block);
      const ContainerTag = (block.type === 'nav' ? 'nav' : 'div') as React.ElementType;
      
      return (
        <ContainerTag key={block.id} style={style}>
          {block.children && block.children.length > 0 ? (
            block.children.map((child) => (
              <div key={child.id} style={block.layout === 'columns' ? { height: '100%' } : undefined}>
                 {renderBlock(child)}
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', width: '100%' }} className={`text-sm text-center italic border-2 border-dashed p-4 rounded ${block.type === 'nav' ? 'border-slate-300/50 text-slate-400' : 'border-blue-200 text-blue-400'}`}>
              {block.type === 'nav' ? 'Empty Nav Bar' : 'Empty Wrapper'}
            </div>
          )}
        </ContainerTag>
      );
    }

    // LINK
    if (block.type === 'link') {
      return (
        <div key={block.id} style={{ marginBottom: '0' /* links in navs shouldn't have bottom margin usually, but let's keep it safe */ }}>
          <a href={block.url || '#'} style={getStyle(block)}>
            {block.content || 'Link Text'}
          </a>
        </div>
      );
    }

    // IMAGE
    if (block.type === 'image') {
      const style = getStyle(block);
      
      if (block.imageMode === 'canvas') {
        return (
          <div key={block.id} style={{ ...style, backgroundColor: '#e2e8f0', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #cbd5e1' }}>
            <div style={{ textAlign: 'center', color: '#94a3b8' }}>
              <span style={{ fontSize: '24px', fontWeight: 'bold', display: 'block' }}>IMAGE CANVAS</span>
              <span style={{ fontSize: '14px' }}>{block.alt || 'Placeholder'}</span>
            </div>
          </div>
        );
      }

      return (
        <img 
          key={block.id} 
          src={block.url || ''} 
          alt={block.alt || ''} 
          style={style} 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              const errorMsg = document.createElement('div');
              errorMsg.innerText = "Invalid Image URL";
              errorMsg.style.color = "red";
              errorMsg.style.fontSize = "12px";
              errorMsg.style.padding = "10px";
              errorMsg.style.border = "1px solid red";
              target.parentElement.appendChild(errorMsg);
            }
          }}
        />
      );
    }

    // PARAGRAPH (Default)
    return (
      <p key={block.id} style={getStyle(block)}>
        {block.content || <span className="opacity-30">Empty Paragraph</span>}
      </p>
    );
  };

  if (blocks.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-gray-400 dark:text-slate-500 p-8 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-lg">
        <p className="text-center">No content to preview.</p>
        <p className="text-sm">Add some blocks on the left to get started.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden min-h-[300px]">
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center space-x-2">
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <span className="text-xs text-gray-500 font-medium ml-2">Preview</span>
      </div>
      <div className="p-8 bg-white" style={{ minHeight: '400px' }}>
        {blocks.map(renderBlock)}
      </div>
    </div>
  );
};