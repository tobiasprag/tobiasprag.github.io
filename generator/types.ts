export type BlockType = 'heading' | 'paragraph' | 'wrapper' | 'image' | 'link' | 'nav';

export interface StyleConfig {
  color?: string;
  fontSize?: string;
  backgroundColor?: string;
  padding?: string;
  borderRadius?: string;
  fontWeight?: string;
  textAlign?: 'left' | 'center' | 'right';
  border?: string;
  width?: string;
  height?: string;
  display?: string;
  gap?: string;
  alignItems?: string;
  textDecoration?: string;
  borderBottom?: string;
  overflowWrap?: string;
  wordBreak?: string;
  maxWidth?: string;
}

export interface Block {
  id: string;
  type: BlockType;
  content: string; // Heading/Para/Link text. Unused for Image (uses alt/url)
  children?: Block[]; // Nested blocks for wrappers/nav
  customStyles?: Partial<StyleConfig>;
  
  // New properties for Link and Image
  url?: string;       // href for Links, src for Images
  alt?: string;       // alt text for Images
  imageMode?: 'url' | 'canvas'; // 'url' for actual image, 'canvas' for skeleton
  
  // New properties for Wrapper
  layout?: 'stack' | 'columns'; 
  variant?: 'default' | 'card' | 'header' | 'info' | 'success' | 'warning' | 'danger' | 'presentation' | 'terminal';
  
  // New property for Headings (Anchor Target & Level)
  htmlId?: string;
  headingLevel?: 1 | 2 | 3 | 4;
  badge?: string; // For numbered headings (e.g. "1", "1.1")

  // UI State
  collapsed?: boolean;
}

export interface GeneratedOutput {
  html: string;
  css: string;
}