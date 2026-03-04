import React, { useState, useEffect } from 'react';
import { Plus, Code2, Layers, Layout, Moon, Sun, MonitorPlay, FileCode, Box, Image as ImageIcon, Link as LinkIcon, Type, AlignLeft, Navigation } from 'lucide-react';
import { Block, BlockType } from './types';
import { BlockEditor } from './components/BlockEditor';
import { LivePreview } from './components/LivePreview';
import { CodeOutput } from './components/CodeOutput';
import { WRAPPER_VARIANTS } from './constants';

const App: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([
    { 
      id: '0', 
      type: 'nav', 
      content: '', 
      children: [
        { id: '0a', type: 'link', content: 'About', url: '#about', customStyles: { textDecoration: 'none', color: '#1e293b' } },
        { id: '0b', type: 'link', content: 'Contact', url: '#contact', customStyles: { textDecoration: 'none', color: '#1e293b' } }
      ] 
    },
    { id: '1', type: 'heading', headingLevel: 2, content: 'Welcome to the Generator' },
    { id: '2', type: 'paragraph', content: 'Create layouts with Headings, Paragraphs, Links, and Images.' },
    { 
      id: '3', 
      type: 'wrapper', 
      content: '', 
      variant: 'card',
      children: [
        { id: '4', type: 'heading', headingLevel: 3, content: 'About Us', htmlId: 'about' },
        { id: '5', type: 'paragraph', content: 'This section has an ID, so the Nav link above works.' }
      ] 
    }
  ]);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // --- Recursive Helpers ---

  const addBlockRecursive = (currentBlocks: Block[], parentId: string | null, newBlock: Block): Block[] => {
    if (parentId === null) {
      return [...currentBlocks, newBlock];
    }
    return currentBlocks.map(block => {
      if (block.id === parentId) {
        return { ...block, children: [...(block.children || []), newBlock] };
      }
      if (block.children) {
        return { ...block, children: addBlockRecursive(block.children, parentId, newBlock) };
      }
      return block;
    });
  };

  const updateBlockRecursive = (currentBlocks: Block[], id: string, updates: Partial<Block>): Block[] => {
    return currentBlocks.map(block => {
      if (block.id === id) {
        return { ...block, ...updates };
      }
      if (block.children) {
        return { ...block, children: updateBlockRecursive(block.children, id, updates) };
      }
      return block;
    });
  };

  const removeBlockRecursive = (currentBlocks: Block[], id: string): Block[] => {
    return currentBlocks
      .filter(block => block.id !== id)
      .map(block => {
        if (block.children) {
          return { ...block, children: removeBlockRecursive(block.children, id) };
        }
        return block;
      });
  };

  const moveBlockRecursive = (currentBlocks: Block[], id: string, direction: 'up' | 'down'): Block[] => {
    const index = currentBlocks.findIndex(b => b.id === id);
    if (index !== -1) {
      const newBlocks = [...currentBlocks];
      if (direction === 'up' && index > 0) {
        [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
      } else if (direction === 'down' && index < newBlocks.length - 1) {
        [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      }
      return newBlocks;
    }
    return currentBlocks.map(block => {
      if (block.children) {
        return { ...block, children: moveBlockRecursive(block.children, id, direction) };
      }
      return block;
    });
  };

  // --- Handlers ---

  const addBlock = (parentId: string | null = null, type: BlockType) => {
    let customStyles = {};
    let variant: Block['variant'] = undefined;
    
    if (type === 'wrapper') {
      variant = 'card';
    }

    const newBlock: Block = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
      type,
      headingLevel: type === 'heading' ? 2 : undefined,
      content: '',
      children: (type === 'wrapper' || type === 'nav') ? [] : undefined,
      imageMode: type === 'image' ? 'url' : undefined,
      customStyles,
      variant
    };
    setBlocks(prev => addBlockRecursive(prev, parentId, newBlock));
  };

  const updateBlock = (id: string, updates: Partial<Block>) => {
    setBlocks(prev => updateBlockRecursive(prev, id, updates));
  };

  const removeBlock = (id: string) => {
    setBlocks(prev => removeBlockRecursive(prev, id));
  };

  const moveBlock = (id: string, direction: 'up' | 'down') => {
    setBlocks(prev => moveBlockRecursive(prev, id, direction));
  };

  // Add Button Component helper
  const AddButton = ({ type, icon: Icon, label }: { type: BlockType, icon: any, label: string }) => (
    <button
      onClick={() => addBlock(null, type)}
      className="flex flex-col items-center justify-center p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all group shadow-sm hover:shadow"
    >
      <Icon size={18} className="mb-1 text-gray-400 group-hover:text-blue-500" />
      <span className="text-xs font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Code2 className="text-white" size={20} />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              HTML/CSS Generator
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm">
              Export
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          
          {/* Left Column: Editor */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200">
                <Layers size={20} />
                <h2 className="text-lg font-semibold">Structure</h2>
              </div>
            </div>

            <div className="space-y-4">
              {blocks.map((block, index) => (
                <BlockEditor
                  key={block.id}
                  block={block}
                  index={index}
                  totalBlocks={blocks.length}
                  onUpdate={updateBlock}
                  onRemove={removeBlock}
                  onMove={(id, dir) => moveBlock(id, dir)}
                  onAddChild={addBlock}
                />
              ))}

              {blocks.length === 0 && (
                <div className="text-center py-12 border-2 border-dashed border-gray-200 dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-800/50">
                  <p className="text-gray-500 dark:text-gray-400 mb-2">No blocks yet</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">Add a heading, paragraph or wrapper</p>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-slate-800">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                Add to Root
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                <AddButton type="heading" icon={Type} label="Heading" />
                <AddButton type="paragraph" icon={AlignLeft} label="Paragraph" />
                <AddButton type="wrapper" icon={Box} label="Wrapper" />
                <AddButton type="nav" icon={Navigation} label="Nav" />
                <AddButton type="link" icon={LinkIcon} label="Link" />
                <AddButton type="image" icon={ImageIcon} label="Image" />
              </div>
            </div>
          </div>

          {/* Right Column: Preview/Code */}
          <div className="lg:sticky lg:top-24 h-fit flex flex-col space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 overflow-hidden">
              <div className="flex border-b border-gray-200 dark:border-slate-700">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'preview'
                      ? 'bg-gray-50 dark:bg-slate-700/50 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <MonitorPlay size={16} />
                  <span>Live Preview</span>
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'code'
                      ? 'bg-gray-50 dark:bg-slate-700/50 text-blue-600 dark:text-blue-400 border-b-2 border-blue-600'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <FileCode size={16} />
                  <span>Generated HTML</span>
                </button>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-slate-900/50">
                {activeTab === 'preview' ? (
                  <LivePreview blocks={blocks} />
                ) : (
                  <CodeOutput blocks={blocks} />
                )}
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-900/50">
              <div className="flex items-start space-x-3">
                <Layout className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-300">Quick Tip</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                    To make navigation work, add a unique <strong>Anchor ID</strong> to your headings (e.g., "about"), then create a Link with the URL set to <strong>#about</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;