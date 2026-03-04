import { StyleConfig } from './types';

export const CANVAS_PALETTE = {
  primary: '#667eea',
  primaryDark: '#764ba2',
  text: '#333333',
  heading: '#2c3e50',
  success: '#27ae60',
  warning: '#ffc107',
  danger: '#e74c3c',
  info: '#17a2b8',
  purple: '#8e44ad',
  bgLightBlue: '#e8f4fd',
  bgLightGreen: '#e8f5e8',
  bgLightYellow: '#fff3cd',
  bgLightRed: '#f8cac6',
  bgGray: '#f8f9fa',
  borderLight: '#e9ecef',
  borderMedium: '#dee2e6',
  borderDark: '#d1ecf1',
};

export const WRAPPER_VARIANTS = [
  { name: 'Default', value: 'default', bg: 'transparent', border: 'none' },
  { name: 'Card (Canvas Safe)', value: 'card', bg: '#ffffff', border: CANVAS_PALETTE.borderLight },
  { name: 'Page Header', value: 'header', bg: `linear-gradient(135deg, ${CANVAS_PALETTE.primary} 0%, ${CANVAS_PALETTE.primaryDark} 100%)`, border: 'none' },
  { name: 'Info Box', value: 'info', bg: CANVAS_PALETTE.bgLightBlue, border: CANVAS_PALETTE.primary },
  { name: 'Success Box', value: 'success', bg: CANVAS_PALETTE.bgLightGreen, border: CANVAS_PALETTE.success },
  { name: 'Warning Box', value: 'warning', bg: CANVAS_PALETTE.bgLightYellow, border: CANVAS_PALETTE.warning },
  { name: 'Danger Box', value: 'danger', bg: CANVAS_PALETTE.bgLightRed, border: CANVAS_PALETTE.danger },
];

export const HEADING_SIZES = {
  1: '2.2em',
  2: '1.8rem',
  3: '1.4rem',
  4: '1.2rem',
};

export const DEFAULT_HEADING_STYLE: StyleConfig = {
  color: CANVAS_PALETTE.heading,
  fontWeight: 'bold', // Will be converted to <strong> tag or ignored by Canvas if inline, but good for preview
  textAlign: 'left',
  padding: '0px',
  overflowWrap: 'break-word',
  borderBottom: `2px solid ${CANVAS_PALETTE.primary}`,
};

export const DEFAULT_PARAGRAPH_STYLE: StyleConfig = {
  color: CANVAS_PALETTE.text,
  fontSize: '1rem',
  fontWeight: '400',
  textAlign: 'left',
  padding: '0px', // Reset padding for standard paragraphs
  backgroundColor: 'transparent',
  borderRadius: '0px',
  overflowWrap: 'break-word',
  lineHeight: '1.6',
};

export const DEFAULT_WRAPPER_STYLE: StyleConfig = {
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '12px',
  border: `1px solid ${CANVAS_PALETTE.borderLight}`,
  maxWidth: '100%',
};

export const DEFAULT_NAV_STYLE: StyleConfig = {
  padding: '16px',
  backgroundColor: '#ffffff',
  borderBottom: `1px solid ${CANVAS_PALETTE.borderMedium}`,
  display: 'flex',
  gap: '24px',
  alignItems: 'center',
  maxWidth: '100%',
  overflowWrap: 'break-word',
};

export const DEFAULT_LINK_STYLE: StyleConfig = {
  color: CANVAS_PALETTE.primary,
  fontSize: '1rem',
  fontWeight: '600',
  textDecoration: 'none',
  padding: '0px',
  display: 'inline-block',
  overflowWrap: 'break-word',
};

export const DEFAULT_IMAGE_STYLE: StyleConfig = {
  width: '100%',
  borderRadius: '8px',
  display: 'block',
  maxWidth: '100%',
};

export const PREVIEW_WRAPPER_STYLE = `
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  overflow-wrap: break-word;
  color: #333;
  line-height: 1.6;
`;