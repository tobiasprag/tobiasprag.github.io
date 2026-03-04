import React, { useState } from 'react';
import { Trash2, MoveUp, MoveDown, Type, AlignLeft, Box, Plus, Image as ImageIcon, Link as LinkIcon, Navigation, Hash, ChevronDown, ChevronRight, X, ArrowRightLeft, Palette } from 'lucide-react';
import { Block, BlockType } from '../types';
import { WRAPPER_VARIANTS, CANVAS_PALETTE } from '../constants';

interface BlockEditorProps {
  block: Block;
  index: number;
  totalBlocks: number;
  onUpdate: (id: string, updates: Partial<Block>) => void;
  onRemove: (id: string) => void;
  onMove: (id: string, direction: 'up' | 'down') => void;
  onAddChild: (parentId: string, type: BlockType) => void;
  wrapperDepth?: number;
}

export const BlockEditor: React.FC<BlockEditorProps> = ({
  block,
  index,
  totalBlocks,
  onUpdate,
  onRemove,
  onMove,
  onAddChild,
  wrapperDepth = 0,
}) => {
  const [isChangingType, setIsChangingType] = useState(false);

  const isWrapper = block.type === 'wrapper';
  const isNav = block.type === 'nav';
  const isContainer = isWrapper || isNav;
  const isImage = block.type === 'image';
  const isLink = block.type === 'link';
  const isHeading = block.type === 'heading';
  
  const isCollapsed = block.collapsed;
  const isNestedWrapper = isWrapper && wrapperDepth > 0;

  const getTypeIcon = (type: BlockType) => {
    switch (type) {
      case 'heading': return <Type size={14} />;
      case 'paragraph': return <AlignLeft size={14} />;
      case 'wrapper': return <Box size={14} />;
      case 'nav': return <Navigation size={14} />;
      case 'image': return <ImageIcon size={14} />;
      case 'link': return <LinkIcon size={14} />;
    }
  };

  const getSummary = () => {
    if (isContainer) {
      const count = block.children?.length || 0;
      const variantLabel = block.variant ? `(${block.variant})` : '';
      return `${count} item${count !== 1 ? 's' : ''} ${variantLabel}`;
    }
    if (isHeading) {
      const level = block.headingLevel || 2;
      return `H${level}: ${block.content || 'Empty'}`;
    }
    if (isImage) return block.alt || block.url || 'Image block';
    if (isLink) return block.content || block.url || 'Link block';
    return block.content || `Empty ${block.type}`;
  };

  const allowedSwitchTypes: BlockType[] = ['heading', 'paragraph', 'link', 'image', 'wrapper', 'nav'];
  const allowedChildTypes: BlockType[] = ['heading', 'paragraph', 'image', 'link'];
  if (wrapperDepth < 1) {
    allowedChildTypes.push('wrapper');
  }

  const handleTypeChange = (newType: BlockType) => {
     onUpdate(block.id, { 
      type: newType, 
      children: (newType === 'wrapper' || newType === 'nav') ? block.children || [] : undefined,
      imageMode: newType === 'image' && !block.imageMode ? 'url' : block.imageMode,
      headingLevel: newType === 'heading' ? 2 : undefined
    });
    setIsChangingType(false);
  };

  return (
    <div className={`
      relative rounded-lg border shadow-sm transition-all group
      ${isContainer 
        ? isNav 
          ? 'bg-slate-50/50 dark:bg-slate-900/10 border-slate-200 dark:border-slate-800'
          : isNestedWrapper 
            ? 'bg-white dark:bg-slate-800 border-blue-300 dark:border-blue-700 shadow-md' 
            : 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800' 
        : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:shadow-md'
      }
      ${isCollapsed ? 'p-2' : 'p-0 overflow-hidden'}
    `}>
      {/* --- HEADER --- */}
      <div className={`
        flex justify-between items-center 
        ${!isCollapsed ? 'px-4 py-3 bg-gray-50/50 dark:bg-slate-900/20 border-b border-gray-100 dark:border-slate-700/50' : ''}
      `}>
        <div className="flex items-center space-x-2 overflow-hidden flex-1">
          {/* Collapse Toggle */}
          <button
            onClick={() => onUpdate(block.id, { collapsed: !isCollapsed })}
            className="p-1 rounded hover:bg-gray-200 dark:hover:bg-slate-700 text-gray-400 hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
          >
             {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
          </button>

          {/* Index Badge */}
          <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded opacity-70 ${
            isContainer ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : 'bg-gray-200 text-gray-600 dark:bg-slate-700 dark:text-gray-400'
          }`}>
            #{index + 1}
          </span>

          {/* Type Switcher / Label */}
          {isChangingType && !isCollapsed ? (
            <div className="flex items-center bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-600 p-0.5 shadow-sm animate-in fade-in zoom-in-95 duration-200">
               {allowedSwitchTypes.map((t) => {
                const isDisabled = t === 'wrapper' && wrapperDepth >= 2;
                if (isDisabled) return null;
                return (
                  <button
                    key={t}
                    onClick={() => handleTypeChange(t)}
                    className={`p-1.5 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors ${block.type === t ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 'text-gray-400 dark:text-slate-500'}`}
                    title={t.charAt(0).toUpperCase() + t.slice(1)}
                  >
                    {getTypeIcon(t)}
                  </button>
                );
              })}
              <div className="w-px h-4 bg-gray-200 dark:bg-slate-700 mx-1" />
              <button onClick={() => setIsChangingType(false)} className="p-1 hover:text-red-500 text-gray-400"><X size={12} /></button>
            </div>
          ) : (
            <button 
              onClick={() => !isCollapsed && setIsChangingType(true)}
              disabled={isCollapsed}
              className={`
                flex items-center space-x-1.5 px-2 py-1 rounded transition-all text-xs font-semibold tracking-wide uppercase
                ${isCollapsed 
                  ? 'cursor-default text-gray-500 dark:text-slate-400' 
                  : 'hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm text-gray-700 dark:text-gray-300 border border-transparent hover:border-gray-200 dark:hover:border-slate-600'
                }
              `}
            >
              {getTypeIcon(block.type)}
              <span>{block.type}</span>
              {!isCollapsed && <ArrowRightLeft size={10} className="opacity-0 group-hover:opacity-40 ml-1" />}
            </button>
          )}

          {/* Collapsed Summary */}
          {isCollapsed && (
             <>
               <span className="text-gray-300 dark:text-gray-600">|</span>
               <span className="truncate text-xs text-gray-500 dark:text-slate-400 italic">{getSummary()}</span>
             </>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`flex items-center space-x-0.5 flex-shrink-0 ${isChangingType ? 'opacity-30 pointer-events-none' : ''}`}>
          <button
            onClick={() => onMove(block.id, 'up')}
            disabled={index === 0}
            className="p-1.5 text-gray-400 hover:text-blue-600 disabled:opacity-20 transition-colors"
          >
            <MoveUp size={14} />
          </button>
          <button
            onClick={() => onMove(block.id, 'down')}
            disabled={index === totalBlocks - 1}
            className="p-1.5 text-gray-400 hover:text-blue-600 disabled:opacity-20 transition-colors"
          >
            <MoveDown size={14} />
          </button>
          <div className="w-px h-3 bg-gray-200 dark:bg-slate-700 mx-1"></div>
          <button
            onClick={() => onRemove(block.id)}
            className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* --- BODY --- */}
      {!isCollapsed && (
      <div className="p-4 space-y-4">
        
        {/* HEADING TOOLBAR */}
        {isHeading && (
          <div className="flex flex-wrap items-center justify-between gap-3 bg-gray-50 dark:bg-slate-900/50 p-2 rounded-md border border-gray-100 dark:border-slate-800">
             {/* Level Selector */}
            <div className="flex bg-white dark:bg-slate-800 p-0.5 rounded border border-gray-200 dark:border-slate-700 shadow-sm">
                {[1, 2, 3, 4].map(level => (
                    <button
                        key={level}
                        onClick={() => onUpdate(block.id, { headingLevel: level as 1|2|3|4 })}
                        className={`px-3 py-1 text-xs font-bold rounded-sm transition-all ${
                            (block.headingLevel || 2) === level 
                            ? 'bg-gray-100 dark:bg-slate-600 text-black dark:text-white' 
                            : 'text-gray-400 hover:text-gray-600 dark:text-slate-500 dark:hover:text-slate-300'
                        }`}
                    >
                        H{level}
                    </button>
                ))}
            </div>
            
            {/* Badge Input */}
            <div className="flex items-center space-x-2 flex-1 min-w-[100px]">
               <div className="text-gray-400 text-xs font-bold px-1">#</div>
               <input
                  type="text"
                  value={block.badge || ''}
                  onChange={(e) => onUpdate(block.id, { badge: e.target.value })}
                  placeholder="Badge (e.g. 1.1)"
                  className="flex-1 bg-transparent border-b border-gray-200 dark:border-slate-700 focus:border-blue-400 outline-none text-xs font-mono py-1 text-gray-600 dark:text-gray-300 placeholder-gray-400"
                />
            </div>

            {/* ID Input */}
            <div className="flex items-center space-x-2 flex-1 min-w-[120px]">
               <div className="text-gray-400"><Hash size={14} /></div>
               <input
                  type="text"
                  value={block.htmlId || ''}
                  onChange={(e) => onUpdate(block.id, { htmlId: e.target.value })}
                  placeholder="Anchor ID (optional)"
                  className="flex-1 bg-transparent border-b border-gray-200 dark:border-slate-700 focus:border-blue-400 outline-none text-xs font-mono py-1 text-gray-600 dark:text-gray-300 placeholder-gray-400"
                />
            </div>
          </div>
        )}

        {/* WRAPPER/NAV TOOLBAR */}
        {isWrapper && (
          <div className="flex flex-col gap-3 bg-gray-50 dark:bg-slate-900/50 p-3 rounded-md border border-gray-100 dark:border-slate-800 mb-2">
             <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Style Variant</span>
                <div className="flex items-center gap-2">
                   {/* Layout Toggle - Only show if not Header variant */}
                   {block.variant !== 'header' && (
                     <button
                        onClick={() => onUpdate(block.id, { layout: block.layout === 'columns' ? 'stack' : 'columns' })}
                        className={`text-xs px-2 py-1 rounded border ${block.layout === 'columns' ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-gray-200 text-gray-600'}`}
                     >
                       {block.layout === 'columns' ? 'Columns' : 'Stack'}
                     </button>
                   )}
                </div>
             </div>
             
             {/* Variant Selector */}
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {WRAPPER_VARIANTS.map(variant => (
                  <button
                    key={variant.value}
                    onClick={() => onUpdate(block.id, { variant: variant.value as any })}
                    className={`
                      text-xs p-2 rounded border text-left transition-all flex items-center gap-2
                      ${(block.variant || 'default') === variant.value 
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-500 ring-1 ring-blue-500' 
                        : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 hover:border-blue-300'
                      }
                    `}
                  >
                    <div 
                      className="w-3 h-3 rounded-full border border-black/10 shadow-sm"
                      style={{ background: variant.bg, borderColor: variant.border !== 'none' ? variant.border : 'transparent' }} 
                    />
                    <span className="truncate">{variant.name}</span>
                  </button>
                ))}
             </div>
          </div>
        )}

        {/* IMAGE EDITOR */}
        {isImage && (
          <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-3 bg-gray-50 dark:bg-slate-900/50 p-3 rounded-md border border-gray-100 dark:border-slate-800">
             <div className="flex flex-col gap-2">
               <button
                  onClick={() => onUpdate(block.id, { imageMode: 'url' })}
                  className={`text-xs px-3 py-1.5 rounded border transition-all text-center ${block.imageMode === 'url' || !block.imageMode ? 'bg-white dark:bg-slate-800 border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 font-medium shadow-sm' : 'border-transparent text-gray-500'}`}
               >
                 URL
               </button>
               <button
                  onClick={() => onUpdate(block.id, { imageMode: 'canvas' })}
                  className={`text-xs px-3 py-1.5 rounded border transition-all text-center ${block.imageMode === 'canvas' ? 'bg-white dark:bg-slate-800 border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 font-medium shadow-sm' : 'border-transparent text-gray-500'}`}
               >
                 Canvas
               </button>
             </div>
             
             <div className="space-y-2">
                {block.imageMode === 'url' || !block.imageMode ? (
                  <input
                    type="text"
                    value={block.url || ''}
                    onChange={(e) => onUpdate(block.id, { url: e.target.value })}
                    placeholder="Image URL (https://...)"
                    className="w-full px-3 py-1.5 text-sm bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                ) : (
                  <div className="px-3 py-1.5 text-xs text-gray-400 italic bg-gray-100 dark:bg-slate-800/50 rounded border border-transparent">
                    Using placeholder canvas
                  </div>
                )}
                 <input
                  type="text"
                  value={block.alt || ''}
                  onChange={(e) => onUpdate(block.id, { alt: e.target.value })}
                  placeholder="Alt text description"
                  className="w-full px-3 py-1.5 text-sm bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded focus:ring-1 focus:ring-blue-500 outline-none"
                />
             </div>
          </div>
        )}

        {/* LINK EDITOR */}
        {isLink && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
             <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Text</label>
                <input
                  type="text"
                  value={block.content}
                  onChange={(e) => onUpdate(block.id, { content: e.target.value })}
                  placeholder="Link Text"
                  className="w-full p-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                />
             </div>
             <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">URL</label>
                <input
                  type="text"
                  value={block.url || ''}
                  onChange={(e) => onUpdate(block.id, { url: e.target.value })}
                  placeholder="https://... or #anchor"
                  className="w-full p-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded focus:ring-1 focus:ring-blue-500 outline-none text-sm font-mono"
                />
             </div>
          </div>
        )}

        {/* CONTAINER CHILDREN */}
        {isContainer && (
          <div className="space-y-3">
            <div className={`space-y-3 pl-3 ml-1 border-l-2 ${isNav ? 'border-slate-200 dark:border-slate-700' : 'border-blue-100 dark:border-blue-900'}`}>
              {block.children && block.children.length > 0 ? (
                block.children.map((childBlock, childIndex) => (
                  <BlockEditor
                    key={childBlock.id}
                    block={childBlock}
                    index={childIndex}
                    totalBlocks={block.children!.length}
                    onUpdate={onUpdate}
                    onRemove={onRemove}
                    onMove={onMove}
                    onAddChild={onAddChild}
                    wrapperDepth={isWrapper ? wrapperDepth + 1 : wrapperDepth}
                  />
                ))
              ) : (
                <div className="p-6 border-2 border-dashed border-gray-100 dark:border-slate-800 rounded-lg text-center">
                  <span className="text-xs text-gray-400 dark:text-slate-500 block mb-2">
                    {isNav ? 'Empty Navigation Bar' : 'Empty Wrapper'}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 pl-4">
              {isNav ? (
                <button
                  onClick={() => onAddChild(block.id, 'link')}
                  className="flex items-center space-x-1.5 py-1.5 px-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-xs font-medium rounded hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                >
                  <Plus size={12} />
                  <span>Add Link</span>
                </button>
              ) : (
                allowedChildTypes.map(type => (
                   <button
                   key={type}
                   onClick={() => onAddChild(block.id, type)}
                   className="flex items-center space-x-1.5 py-1.5 px-3 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-xs font-medium rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors shadow-sm"
                 >
                   <Plus size={12} />
                   <span className="capitalize">{type}</span>
                 </button>
                ))
              )}
            </div>
          </div>
        )}

        {/* MAIN TEXT INPUT (Heading/Paragraph) */}
        {!isContainer && !isImage && !isLink && (
          <textarea
            value={block.content}
            onChange={(e) => onUpdate(block.id, { content: e.target.value })}
            placeholder={isHeading ? "Heading Text..." : "Paragraph Text..."}
            className={`
              w-full p-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-md 
              focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-y text-sm text-gray-800 dark:text-gray-100
              ${isHeading ? 'font-bold min-h-[60px]' : 'min-h-[100px]'}
            `}
            style={isHeading ? { fontSize: '1.1rem' } : {}}
          />
        )}
      </div>
      )}
    </div>
  );
};