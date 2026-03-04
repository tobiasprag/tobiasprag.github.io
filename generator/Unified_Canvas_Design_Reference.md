# Unified Canvas Design Reference

## ⚠️ CONTENT PRESERVATION - CRITICAL RULE

> **🚨 NEVER REMOVE OR ALTER EXISTING CONTENT WITHOUT EXPLICIT PERMISSION**
> 
> When applying this design reference to existing Canvas pages:
> - **ALL original content MUST be preserved**
> - **NO text, questions, instructions, or materials should be removed**
> - **Only apply visual design improvements and structural organization**
> - **If content needs modification, explicitly ask for permission first**
> 
> This design reference is for **ENHANCEMENT**, not content replacement.

---

## Overview
This document establishes a unified design system for creating consistent, pedagogical, and clear Canvas pages based on analysis of successful implementations in both Gymnasiearbete and Programmering courses.

## General guidelines

### Content Preservation (CRITICAL)
When applying this design to Canvas Page structure the contents of those original files must always be kept at 100% the same. That means that informative text, headings, links and so on are not to be changed unless the user explicitly asks for it.

**No freedom can be taken with formulating text or information unless specifically asked for it.**

### Educational Content Development Methodology

#### Discovery-Based Learning Approach
When creating educational content with questions and facts:

- **Independent Discovery**: Structure facts to enable students to find answers independently rather than providing direct question-to-fact references
- **Comprehensive Factual Foundation**: Ensure factual content covers all learning objectives but doesn't explicitly reference which facts answer which questions
- **Learning Challenge Maintenance**: Remove direct answer references to preserve educational challenge and promote active learning
- **Complete Information Coverage**: Verify all questions can be answered from provided facts without gaps
- **Pedagogical Balance**: Balance comprehensive information provision with maintaining discovery-based learning experience

#### Content Enhancement Process
When expanding existing educational materials:

1. **Content Analysis**: Review existing questions/objectives to understand learning scope
2. **Gap Identification**: Identify missing factual content needed to answer all questions
3. **Style Analysis**: Study existing writing style, tone, and educational approach
4. **Content Addition**: Add comprehensive facts matching existing style and covering all learning objectives
5. **Integration Optimization**: Streamline content by integrating essential information into main text flow
6. **Reference Removal**: Remove direct question references to maintain independent discovery approach
7. **Quality Verification**: Ensure all learning objectives remain answerable from integrated content

### Design Application Process
1. **Preserve First**: Keep all original content exactly as is
2. **Structure Second**: Apply visual design improvements and organization
3. **Enhance Third**: Add design elements that complement existing content
4. **Ask Before Changing**: If content modification seems necessary, ask for explicit permission 

### Incremental Transformation Methodology

When applying this design system to large existing documents, always use an **incremental, step-by-step approach**:

#### Large Task Breakdown Strategy
- **Never attempt entire transformation at once** - this leads to errors, missed content, and poor quality
- **Break large documents into logical sections** (introduction, main sections, exercises, summary, etc.)
- **Work on one section at a time** - complete each section fully before moving to the next
- **Maintain clear progress tracking** - use todo lists or similar tracking methods to show current progress
- **Validate each section** - ensure content preservation and design quality before proceeding

#### Recommended Transformation Sequence
1. **Setup Phase**: Create main container structure and page header
2. **Section-by-Section**: Transform each major content section individually (1. Introduction, 2. Main Content, etc.)
3. **Subsection Refinement**: Within each section, handle subsections (1.1, 1.2, etc.) separately
4. **Exercise/Assessment Blocks**: Transform interactive elements as discrete units
5. **Summary/Conclusion**: Apply design to wrap-up content
6. **Final Review**: Comprehensive validation and consistency check

#### Benefits of Incremental Approach
- **Quality Control**: Each piece gets proper attention and validation
- **Content Preservation**: Reduces risk of accidentally removing or altering original content
- **Error Reduction**: Smaller changes are easier to review and correct
- **Progress Visibility**: Clear milestones show advancement and remaining work
- **Maintainability**: Easier to debug issues when changes are isolated to specific sections
- **Collaboration**: Multiple people can work on different sections simultaneously

#### AI Implementation Guidelines
For AI assistants applying this design system:
- **Always ask permission** before starting large transformations
- **Propose section breakdown** before beginning work
- **Work incrementally** - never attempt entire document transformation in one step
- **Show progress updates** - keep users informed of current section being worked on
- **Validate preservation** - explicitly confirm all original content is maintained
- **Request feedback** - check with user before moving to next major section

This methodology ensures high-quality, accurate transformations while maintaining the critical requirement of 100% content preservation.

## Design Philosophy

### Core Principles
- **Student-Centered Design**: Clean, readable layout with clear visual hierarchy
- **Pedagogical Alignment**: Content organization supports structured learning
- **Professional Aesthetics**: Modern, engaging appearance that builds confidence
- **Canvas Integration**: Inline CSS for reliable Canvas HTML editor compatibility
- **Accessibility First**: Good contrast, readable fonts, semantic structure
- **Mobile Responsive**: Flexible layouts that work on all devices

### Learning Workflow Primer Pattern

#### Strategic Implementation Rule
The **READ → TEST → REFLECT** workflow primer should be used strategically, not universally:

**When to Use the Primer Pattern:**
- **Complex theoretical content** that requires active engagement
- **Multi-step learning processes** where students need workflow guidance
- **Mixed content sections** combining theory and practice
- **Students struggle with structure** - when passive reading is insufficient

**When NOT to Use the Primer Pattern:**
- **Simple informational content** that doesn't require active engagement
- **Pure practical sessions** where the workflow is already hands-on
- **Short content blocks** where the primer would add unnecessary complexity
- **Well-structured existing content** that already has clear learning flow

#### Primer Pattern Implementation
```html
<div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 15px 0;">
    <div style="background-color: rgba(255,255,255,0.8); padding: 15px; border-radius: 6px; text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 8px;">📖</div>
        <h5 style="margin: 0 0 5px 0; color: #856404;">LÄS</h5>
        <p style="margin: 0; font-size: 0.9rem; color: #7d6608;">Kort teoritext</p>
    </div>
    <div style="background-color: rgba(255,255,255,0.8); padding: 15px; border-radius: 6px; text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 8px;">🧪</div>
        <h5 style="margin: 0 0 5px 0; color: #856404;">TESTA</h5>
        <p style="margin: 0; font-size: 0.9rem; color: #7d6608;">Prova i praktiken</p>
    </div>
    <div style="background-color: rgba(255,255,255,0.8); padding: 15px; border-radius: 6px; text-align: center;">
        <div style="font-size: 2rem; margin-bottom: 8px;">✍️</div>
        <h5 style="margin: 0 0 5px 0; color: #856404;">REFLEKTERA</h5>
        <p style="margin: 0; font-size: 0.9rem; color: #7d6608;">Analysera & dokumentera</p>
    </div>
</div>
```

**Key Benefits:**
- **Cognitive Scaffolding**: Provides clear mental framework for complex learning
- **Active Engagement**: Transforms passive reading into active learning process
- **Student Agency**: Students understand what they should do at each step
- **Assessment Integration**: Natural progression from theory to practical demonstration

**Design Decision Framework:**
Ask these questions before implementing the primer:
1. **Complexity**: Is the content complex enough to warrant workflow guidance?
2. **Engagement**: Will students benefit from structured active learning approach?
3. **Context**: Does the learning situation require theory-practice integration?
4. **Student Need**: Have students shown confusion about how to approach this type of content?

Only implement the primer when multiple answers are "yes".

### Visual Identity
- **Primary Color**: Blue (`#667eea` to `#764ba2`) - Professional, trustworthy, educational
- **Secondary Colors**: Purpose-driven color coding for different content types
- **Typography**: System font stack for consistency and readability
- **Layout**: Card-based design with consistent spacing and subtle shadows

## ⚠️ Canvas HTML Editor Limitations - CRITICAL INFORMATION

### CSS Properties Stripped by Canvas
Based on testing (December 2024), the Canvas HTML Editor automatically **removes certain CSS properties** when saving content. This affects the visual output and should be considered during design implementation.

#### Properties Canvas Removes:
1. **`font-weight: bold`** - All font-weight declarations are stripped
2. **`box-shadow`** - All box-shadow properties are removed completely

#### Properties Canvas Preserves:
✅ **All color properties** (background, color, border-color)  
✅ **Layout properties** (display, flex, grid, positioning)  
✅ **Spacing properties** (margin, padding, gap)  
✅ **Typography** (font-size, font-family, line-height)  
✅ **Border properties** (border-radius, border-bottom)  
✅ **Complex CSS** (gradients, flexbox alignment)  

### Canvas-Safe Alternatives

#### Bold Text Alternative
Instead of `font-weight: bold` in CSS:
```html
<!-- DON'T USE (Canvas will strip) -->
<span style="font-weight: bold;">Bold Text</span>

<!-- USE INSTEAD (Canvas-safe) -->
<strong>Bold Text</strong>
<!-- OR -->
<b>Bold Text</b>
```

#### Shadow Effect Alternatives
Instead of `box-shadow` for depth, use these Canvas-safe methods to maintain the "card" feeling:

**Option 1: Enhanced Border with Depth (RECOMMENDED)**
```html
<div style="background: white; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; border: 1px solid #e9ecef; border-bottom: 4px solid #dee2e6; border-right: 2px solid #f1f3f4;">
```
*Creates a subtle "lifted" appearance with directional borders that simulate shadow*

**Option 2: Double Border Technique**
```html
<div style="background: white; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; border: 2px solid #e9ecef; outline: 1px solid #f8f9fa; outline-offset: -1px;">
```
*Uses border + outline to create depth without shadows*

**Option 3: Background Gradient with Border**
```html
<div style="background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%); border-radius: 12px; padding: 2rem; margin-bottom: 2rem; border: 1px solid #dee2e6;">
```
*Subtle gradient provides depth perception with clean border separation*

**Option 4: Contrast Background Technique (BEST for separation)**
```html
<!-- Wrapper with background color -->
<div style="background: #f8f9fa; padding: 3px; border-radius: 15px; margin-bottom: 2rem;">
  <div style="background: white; border-radius: 12px; padding: 2rem;">
    <!-- Content here -->
  </div>
</div>
```
*Creates strong card separation using background contrast*

**Option 5: Inset Border Effect**
```html
<div style="background: white; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; border: 3px solid transparent; background-clip: padding-box; box-shadow: inset 0 0 0 1px #e9ecef;">
```
*Note: Test this in Canvas - uses inset shadow which may be preserved*

### Design Implementation Strategy

#### Development Workflow:
1. **Design with full CSS** including shadow and font-weight properties
2. **Test functionality** and visual hierarchy
3. **Create Canvas-safe version** using alternatives above
4. **Don't waste time** adding properties Canvas will strip

#### Component Updates:

**Numbered Section Badge (Canvas-Safe Version):**
```html
<span style="background: #27ae60; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 1.2rem;">
  <strong>1</strong>
</span>
```

**Content Card (Canvas-Safe Version):**
```html
<div style="background: white; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; border: 1px solid #e9ecef; border-bottom: 4px solid #dee2e6; border-right: 2px solid #f1f3f4;">
```

### Maintaining Card Aesthetics Without Box-Shadow

#### Visual Hierarchy Techniques
The "card" feeling is achieved through multiple visual cues, not just shadows:

**1. Background Separation** (Most Important)
- **White content** against **light gray backgrounds** (#f8f9fa)
- **Strong contrast** creates natural card boundaries
- **Consistent spacing** reinforces separation

**2. Border Treatments** (Canvas-Safe)
- **Directional borders**: Heavier bottom/right borders simulate shadow
- **Color variation**: Slightly darker border colors suggest depth
- **Border radius**: Maintains modern card appearance

**3. Content Organization** (Always Preserved)
- **Consistent padding**: 2rem creates breathing room
- **Margin spacing**: 2rem bottom creates clear separation
- **Internal structure**: Headers, sections, and content blocks

#### Card Effect Comparison

| Technique | Card Feeling | Canvas Safe | Complexity | Best For |
|-----------|-------------|-------------|------------|----------|
| **Box Shadow** (Original) | ★★★★★ | ❌ No | Low | External files |
| **Enhanced Borders** | ★★★★☆ | ✅ Yes | Low | Most Canvas content |
| **Wrapper Background** | ★★★★★ | ✅ Yes | Medium | Important sections |
| **Double Border** | ★★★☆☆ | ✅ Yes | Medium | Subtle emphasis |
| **Gradient Background** | ★★★☆☆ | ✅ Yes | Low | Minimal designs |

#### Recommended Card Patterns

**Standard Content Cards:**
```html
<div style="background: white; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; border: 1px solid #e9ecef; border-bottom: 4px solid #dee2e6; border-right: 2px solid #f1f3f4;">
  <!-- Content -->
</div>
```

**High-Priority Cards:**
```html
<div style="background: #f8f9fa; padding: 3px; border-radius: 15px; margin-bottom: 2rem;">
  <div style="background: white; border-radius: 12px; padding: 2rem;">
    <!-- Content -->
  </div>
</div>
```

**Information Boxes (Already Have Color Backgrounds):**
```html
<div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin-bottom: 20px; border: 1px solid #d1ecf1;">
  <!-- These already have strong visual separation from color -->
</div>
```

#### Card Psychology and User Experience

**Why Card Design Works:**
- **Mental Organization**: Cards represent discrete information units
- **Scanning Pattern**: Eye naturally follows card boundaries
- **Content Hierarchy**: Cards establish clear information architecture
- **Touch Metaphor**: Familiar interaction pattern from mobile apps

**Maintaining Card Benefits Without Shadows:**
1. **Strong Background Contrast**: White cards on light gray backgrounds
2. **Consistent Spacing**: Predictable padding/margin creates rhythm
3. **Border Emphasis**: Directional borders guide eye movement
4. **Content Structure**: Clear headers and internal organization
5. **Color Coding**: Different border/background colors for content types

### Impact Assessment:
- **Visual Impact**: ~5% reduction in polish (no shadows, less bold emphasis)
- **Functionality Impact**: 0% - all content and structure preserved
- **Educational Impact**: 0% - pedagogical effectiveness maintained
- **Success Rate**: ~95% CSS preservation rate

### Testing Recommendations:
- Always test final HTML in Canvas HTML Editor before delivery
- Copy edited content back out to verify what Canvas preserves
- Document any new CSS limitations discovered
- Provide Canvas-safe alternatives in component library

## Design System

### Color Palette

#### Primary Colors
- **Main Blue**: `#667eea` - Primary headers, navigation, CTAs
- **Dark Blue**: `#764ba2` - Gradient partner, secondary elements
- **Text Gray**: `#333` - Main body text
- **Heading Gray**: `#2c3e50` - Section headings

#### Semantic Colors
- **Success/Green**: `#27ae60` - Positive elements, completed items
- **Warning/Yellow**: `#ffc107` - Important notices, attention items  
- **Danger/Red**: `#e74c3c` - Critical information, deadlines
- **Info/Teal**: `#17a2b8` - Additional information, tips
- **Purple**: `#8e44ad` - Creative/advanced content

#### Background Colors
- **Light Blue**: `#e8f4fd` - Information boxes
- **Light Green**: `#e8f5e8` - Success/positive boxes
- **Light Yellow**: `#fff3cd` - Warning boxes
- **Light Red**: `#f8cac6` - Important/critical boxes
- **Light Gray**: `#f8f9fa` - Neutral content areas

### Typography

#### Font Stack
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

#### Heading Hierarchy
- **H1 (Page Title)**: 2.2-2.5em, font-weight: 300, white text on gradient
- **H2 (Section)**: color: #2c3e50, border-bottom: 2px solid #667eea, **numbered** (1., 2., etc.)
- **H3 (Subsection)**: color varies by context, font-weight: 500, **numbered** (1.1, 1.2, etc.)

#### Numbered Heading System
Canvas pages should use a **numbered heading system** for pedagogical benefits:

**Benefits:**
- **Clear reference points** for student-teacher communication ("I have a question about section 2.1")
- **Easy navigation** and mental mapping of content structure
- **Better communication** between students and teachers during discussions
- **Structured learning progression** that students can follow systematically

**Implementation:**
- **Main sections**: Use numbers (1., 2., 3., etc.) in H2 headings
- **Subsections**: Use decimal numbering (1.1, 1.2, 1.3, etc.) in H3 headings
- **Sub-subsections**: Continue decimal pattern if needed (1.1.1, 1.1.2, etc.)

**Example Structure:**
```
1. Introduction
   1.1 Course Overview
   1.2 Learning Objectives
2. Main Content
   2.1 Theory Section
   2.2 Practical Exercises
3. Assessment
   3.1 Requirements
   3.2 Submission Guidelines
```

#### Body Text
- **Font Size**: 16px base, 1.1rem for emphasis
- **Line Height**: 1.6 for optimal readability
- **Small Text**: 14px for meta information

### Layout System

#### Main Container
```css
max-width: 1000px;        /* Compromise between 900px and 1200px */
margin: 0 auto;
padding: 20px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
line-height: 1.6;
color: #333;
```

#### Header Section
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
padding: 2rem;
border-radius: 12px;
margin-bottom: 2rem;
text-align: center;
```

#### Content Sections
- **Card Style**: White background, subtle shadow, rounded corners
- **Spacing**: 2rem margin-bottom between sections
- **Padding**: 2rem internal padding

## Component Library

> **⚠️ Canvas HTML Editor Note**: Components below are provided in two versions:
> - **Original Design**: Full visual design with all CSS properties
> - **Canvas-Safe**: Simplified version with properties that Canvas preserves

### 1. Page Header
**Original Design** (use for external files):
```html
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; text-align: center;">
  <h1 style="margin: 0 0 10px 0; font-size: 2.2em; font-weight: 300;">[MAIN TITLE]</h1>
  <p style="margin: 0; font-size: 1.1em; opacity: 0.9;">[SUBTITLE/DESCRIPTION]</p>
</div>
```
**Canvas-Safe Version** (use for Canvas HTML Editor):
```html
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; text-align: center;">
  <h1 style="margin: 0 0 10px 0; font-size: 2.2em; font-weight: 300;">[MAIN TITLE]</h1>
  <p style="margin: 0; font-size: 1.1em; opacity: 0.9;">[SUBTITLE/DESCRIPTION]</p>
</div>
```

### 2. Content Section with Numbered Heading
**Original Design** (use for external files):
```html
<div style="background: white; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <h2 style="color: #2c3e50; border-bottom: 2px solid #667eea; padding-bottom: 8px; margin-top: 0; display: flex; align-items: center;">
    <span style="background: #667eea; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 1.2rem; font-weight: bold;">1</span>
    [SECTION TITLE]
  </h2>
  <!-- Section content -->
</div>
```
**Canvas-Safe Version** (use for Canvas HTML Editor):
```html
<!-- Enhanced border technique for strong card feeling -->
<div style="background: white; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; border: 1px solid #e9ecef; border-bottom: 4px solid #dee2e6; border-right: 2px solid #f1f3f4;">
  <h2 style="color: #2c3e50; border-bottom: 2px solid #667eea; padding-bottom: 8px; margin-top: 0; display: flex; align-items: center;">
    <span style="background: #667eea; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 1.2rem;"><strong>1</strong></span>
    [SECTION TITLE]
  </h2>
  <!-- Section content -->
</div>
```

**Alternative Canvas-Safe Version (Contrast Background)** - Use when maximum card separation is needed:
```html
<!-- Wrapper technique for strongest card effect -->
<div style="background: #f8f9fa; padding: 3px; border-radius: 15px; margin-bottom: 2rem;">
  <div style="background: white; border-radius: 12px; padding: 2rem;">
    <h2 style="color: #2c3e50; border-bottom: 2px solid #667eea; padding-bottom: 8px; margin-top: 0; display: flex; align-items: center;">
      <span style="background: #667eea; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 1.2rem;"><strong>1</strong></span>
      [SECTION TITLE]
    </h2>
    <!-- Section content -->
  </div>
</div>
```

### 3. Subsection with Numbered Badge
**Original Design** (use for external files):
```html
<h3 style="color: #e67e22; margin-bottom: 15px; display: flex; align-items: center;">
  <span style="background: #e67e22; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 14px; font-weight: bold;">1.1</span>
  [SUBSECTION TITLE]
</h3>
```
**Canvas-Safe Version** (use for Canvas HTML Editor):
```html
<h3 style="color: #e67e22; margin-bottom: 15px; display: flex; align-items: center;">
  <span style="background: #e67e22; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 14px;"><strong>1.1</strong></span>
  [SUBSECTION TITLE]
</h3>
```

### 4. Information Boxes

#### Primary Info Box
```html
<div style="background-color: #e8f4fd; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin-bottom: 20px;">
  <h3 style="color: #2980b9; margin: 0 0 15px 0;">[BOX TITLE]</h3>
  <p>[CONTENT]</p>
</div>
```

#### Success Box
```html
<div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; border-left: 4px solid #27ae60; margin-bottom: 20px;">
  <h3 style="color: #229954; margin: 0 0 15px 0;">[SUCCESS TITLE]</h3>
  <p>[CONTENT]</p>
</div>
```

#### Warning Box
```html
<div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
  <p style="margin: 0; font-size: 14px;"><strong>[WARNING TITLE]:</strong> [CONTENT]</p>
</div>
```

### 5. Action Buttons
```html
<a href="[URL]" style="display: inline-block; background: #667eea; color: white; padding: 1rem 1.5rem; text-decoration: none; border-radius: 8px; text-align: center; font-weight: 600; transition: all 0.3s; margin: 0.5rem;">
  [ICON] [BUTTON TEXT]
</a>
```

#### Button Color Variations
- **Primary Action**: `#667eea` (Main brand blue)
- **External Link**: `#ff6b6b` (Red)
- **Download**: `#28a745` (Green)
- **Secondary**: `#4ecdc4` (Teal)

### 6. Presentation and Resource Cards

#### Enhanced Planning Form Card with Canvas Integration
```html
<div style="background: #e8f4fd; padding: 2rem; border-radius: 8px; border-left: 4px solid #667eea; text-align: center;">
    <div style="font-size: 3rem; margin-bottom: 1rem;">📋</div>
    <h4 style="margin: 0 0 1rem 0; color: #2c3e50;">Planeringsformulär</h4>
    <a style="display: block; background: linear-gradient(135deg, #0984e3, #74b9ff); color: white; padding: 1rem 1.5rem; text-decoration: none; border-radius: 8px; text-align: center;" href="#">Kommer att länkas här</a>
    <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: #666;">Strukturerat formulär för alla 16 områden</p>
</div>
```

#### Canvas File API Screenshot Integration
```html
<div style="width: 100%; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border: 2px dashed #dee2e6; border-radius: 12px; padding: 40px; text-align: center; margin: 20px 0;">
    <p style="margin: 5px 0 0 0; color: #6c757d; font-size: 0.9rem;">
        <img src="https://larande.instructure.com/courses/[COURSE_ID]/files/[FILE_ID]/preview" 
             alt="[DESCRIPTIVE_ALT_TEXT]" 
             data-api-endpoint="https://larande.instructure.com/api/v1/courses/[COURSE_ID]/files/[FILE_ID]" 
             data-api-returntype="File" />
    </p>
</div>
```
**Use case**: Direct integration of Canvas-hosted images with proper API endpoints for reliable display

#### PowerPoint/Document Presentation Card
```html
<div style="background: #f8f4ff; padding: 2rem; border-radius: 8px; border-left: 4px solid #8e44ad; text-align: center;">
  <div style="font-size: 3rem; margin-bottom: 1rem;">📊</div>
  <h4 style="margin: 0 0 1rem 0; color: #2c3e50;">PowerPoint-presentation</h4>
  <a style="display: block; background: linear-gradient(135deg, #a29bfe, #6c5ce7); color: white; padding: 1rem 1.5rem; text-decoration: none; border-radius: 8px; text-align: center;" href="[URL]" target="_blank" rel="noopener">[PRESENTATION TITLE]</a>
  <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: #666;">[DESCRIPTION]</p>
</div>
```

#### Word Document Card
```html
<div style="background: #e8f4fd; padding: 2rem; border-radius: 8px; border-left: 4px solid #667eea; text-align: center;">
  <div style="font-size: 3rem; margin-bottom: 1rem;">📝</div>
  <h4 style="margin: 0 0 1rem 0; color: #2c3e50;">Word-dokument</h4>
  <a style="display: block; background: linear-gradient(135deg, #0984e3, #74b9ff); color: white; padding: 1rem 1.5rem; text-decoration: none; border-radius: 8px; text-align: center;" href="[URL]" target="_blank" rel="noopener">[DOCUMENT TITLE]</a>
  <p style="margin: 0.5rem 0 0 0; font-size: 0.9rem; color: #666;">[DESCRIPTION]</p>
</div>
```

#### Resource Section Layout
```html
<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin-bottom: 2rem;">
  <div>
    <p>[DESCRIPTIVE TEXT ABOUT THE TOPIC/SECTION]</p>
    <p>[ADDITIONAL CONTEXT OR INSTRUCTIONS]</p>
  </div>
  [INSERT PRESENTATION/DOCUMENT CARD HERE]
</div>
```
**Use case**: Combines descriptive content with presentation materials in a professional grid layout.

### 7. Gradient Button System

#### Document Type Gradients
- **PowerPoint**: `background: linear-gradient(135deg, #a29bfe, #6c5ce7)` (Purple gradient)
- **Word Document**: `background: linear-gradient(135deg, #0984e3, #74b9ff)` (Blue gradient)
- **PDF/Reading**: `background: linear-gradient(135deg, #fd79a8, #fdcb6e)` (Pink-orange gradient)
- **External Link**: `background: linear-gradient(135deg, #ff6b6b, #ee5a52)` (Red gradient)

### 8. Learning Progress and Difficulty System

#### Skill Level Badges
```html
<!-- Beginner Level -->
<span style="margin-left: 15px; background: #27ae60; color: white; padding: 4px 12px; border-radius: 15px; font-size: 12px; font-weight: bold;">⭐ NYBÖRJARE</span>

<!-- Intermediate Level -->
<span style="margin-left: 15px; background: #e67e22; color: white; padding: 4px 12px; border-radius: 15px; font-size: 12px; font-weight: bold;">⭐⭐ MEDEL</span>

<!-- Advanced Level -->
<span style="margin-left: 15px; background: #8e44ad; color: white; padding: 4px 12px; border-radius: 15px; font-size: 12px; font-weight: bold;">⭐⭐⭐ AVANCERAD</span>
```

#### Advanced Educational Assessment Integration

**Understanding Evaluation Section Pattern:**
```html
<div style="background: white; border-radius: 12px; padding: 2rem; margin-bottom: 2rem;">
    <h2 style="color: #2c3e50; border-bottom: 2px solid #9b59b6; padding-bottom: 8px; margin-top: 0; display: flex; align-items: center;">
        <span style="background: #9b59b6; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 1.2rem;">3</span>
        Redovisning och Förståelse
    </h2>
    <p style="margin: 0 0 2rem 0; font-size: 1.1rem; line-height: 1.6;">Description that remains vague about evaluation method while emphasizing the importance of understanding.</p>
</div>
```

**Evaluation Preparation Without Method Disclosure:**
- Use **ambiguous language** about evaluation format ("olika sätt", "beroende på situation")
- Focus on **what students need to understand** rather than **how they'll be tested**
- Include **example questions** to guide preparation without revealing test structure
- Emphasize **professional context** to reduce anxiety about assessment

**Strategic Assessment Language Patterns:**
```html
<div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 20px;">
    <h4 style="color: #e65100; margin: 0 0 15px 0;">⚠️ Viktigt att veta:</h4>
    <p style="margin: 0 0 15px 0;">Du kommer att behöva visa att du förstår din egen kod och kan redovisa ditt arbete. Detta kan ske på olika sätt - muntligt, skriftligt, eller genom att demonstrera din kod. Oavsett form är det viktigt att du verkligen förstår det du har skapat.</p>
</div>
```

**Understanding-Focused Checkpoint Pattern:**
```html
<div style="background-color: #f0f3ff; padding: 20px; border-radius: 8px; border-left: 4px solid #9b59b6; margin-bottom: 2rem;">
    <h3 style="color: #7b1fa2; margin: 0 0 15px 0;">🎯 Checkpoint - Förståelse</h3>
    <p style="margin: 0 0 15px 0; font-size: 16px; color: #4a148c;"><strong>För att visa att du förstår ditt arbete behöver du kunna:</strong></p>
    <div style="display: flex; flex-direction: column; gap: 8px; color: #4a148c;">
        <div style="display: flex; align-items: center;"><span style="margin-right: 10px; font-size: 18px;">✅</span> <span>[UNDERSTANDING REQUIREMENT]</span></div>
    </div>
</div>
```

#### Progressive Question Hierarchy
```html
<h3 style="color: #27ae60; margin-bottom: 15px; display: flex; align-items: center;">
  <span style="background: #27ae60; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 14px; font-weight: bold;">1.1</span>
  [SECTION TITLE]
  <span style="margin-left: 15px; background: #27ae60; color: white; padding: 4px 12px; border-radius: 15px; font-size: 12px; font-weight: bold;">⭐ NYBÖRJARE</span>
</h3>
```

**Color Coding by Difficulty:**
- **Beginner (⭐)**: `#27ae60` (Green) - Basic, foundational concepts
- **Intermediate (⭐⭐)**: `#e67e22` (Orange) - Applied knowledge, connections
- **Advanced (⭐⭐⭐)**: `#8e44ad` (Purple) - Complex analysis, synthesis, research

**Progressive Question Structure:**
1. **Beginner Questions**: What, Where, When - Basic definitions and locations
2. **Intermediate Questions**: How, Why - Understanding processes and relationships  
3. **Advanced Questions**: Analysis, Evaluation, Creation - Critical thinking and application

### 9. Advanced Layout Patterns

#### Range Numbering for Related Subsections
```html
<h2 style="color: #2c3e50; border-bottom: 2px solid #27ae60; padding-bottom: 8px; margin-top: 0;">
  1.1-1.3 [SECTION TITLE]
</h2>
```
**Use case**: When grouping multiple related subsections under one main section for better pedagogical organization.

#### Multi-Step Process Visualization
```html
<div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 15px; align-items: center; margin-bottom: 15px;">
  <div style="background-color: rgba(255,255,255,0.8); padding: 15px; border-radius: 6px; text-align: center;">
    <h4 style="color: #27ae60; margin: 0 0 8px 0;">1. [STEP NAME]</h4>
    <p style="margin: 0; font-size: 14px;">[STEP DESCRIPTION]</p>
  </div>
  <div style="font-size: 24px; color: #27ae60;">→</div>
  <div style="background-color: rgba(255,255,255,0.8); padding: 15px; border-radius: 6px; text-align: center;">
    <h4 style="color: #27ae60; margin: 0 0 8px 0;">2. [STEP NAME]</h4>
    <p style="margin: 0; font-size: 14px;">[STEP DESCRIPTION]</p>
  </div>
</div>
```
**Use case**: Show sequential processes or workflows with visual progression arrows.

#### Nested Information Boxes
```html
<div style="background-color: #f4f1ff; padding: 20px; border-radius: 8px; border-left: 4px solid #8e44ad;">
  <!-- Main content -->
  <div style="background-color: #fff3cd; padding: 15px; border-radius: 6px; border-left: 4px solid #ffc107;">
    <!-- Nested warning or important info -->
    <p style="margin: 0; font-size: 15px;"><strong>⚠️ Viktigt:</strong> [NESTED CONTENT]</p>
  </div>
</div>
```
**Use case**: Create information hierarchies within sections - warnings inside content boxes, tips inside instructions, etc.

#### Checkpoint Progress Pattern
```html
<div style="background-color: #f8cac6; padding: 20px; border-radius: 8px; border-left: 4px solid #e74c3c;">
  <h3 style="color: #c0392b; margin: 0 0 15px 0;">🎯 Checkpoint [NUMBER]</h3>
  <p style="margin: 0 0 15px 0; font-size: 16px; color: #721c24;">[CHECKPOINT DESCRIPTION]</p>
  <div style="display: flex; align-items: center; color: #721c24;">
    <span style="margin-right: 10px; font-size: 18px;">✓</span>
    <span>[REQUIREMENT]</span>
  </div>
</div>
```
**Use case**: Mark progress points where students should validate their understanding or completion before proceeding.

#### Motivational Footer Section
```html
<div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); color: white; border-radius: 12px; margin-bottom: 2rem;">
  <h3 style="margin: 0 0 10px 0; font-size: 1.5em;">[MOTIVATIONAL TITLE] 🚀</h3>
  <p style="margin: 0; font-style: italic; opacity: 0.9;">[ENCOURAGING MESSAGE]</p>
</div>
```
**Use case**: End course pages with encouragement and motivation, separate from regular content sections.

### 7. Lists and Content Blocks

#### Structured Lists
```html
<ul style="margin: 0 0 15px 0; padding-left: 20px;">
  <li style="margin-bottom: 8px;">[LIST ITEM]</li>
</ul>
```

#### Highlight Blocks
```html
<div style="background-color: rgba(255,255,255,0.8); padding: 15px; border-radius: 6px;">
  <p style="margin: 0; font-size: 15px;"><strong>[LABEL]:</strong> [CONTENT]</p>
</div>
```

#### Color-Coded Content Categories
Use different background colors to distinguish content types:
- **APL Content**: `#fff3cd` (Yellow warning background)
- **Entrepreneurship Content**: `#f4f1ff` (Light purple background)
- **School Content**: `#e8f4fd` (Light blue background)
- **General Tips**: `rgba(255,255,255,0.8)` (Semi-transparent white)

### 8. Inline Technical Elements

#### Terminal/Command Styling
For inline terminal commands, CLI instructions, and shell commands:
```html
<code style="background: #1e1e1e; color: #4caf50; padding: 2px 8px; border-radius: 4px; font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 0.9em;">cd Documents</code>
```

**Styling breakdown:**
- **Background**: `#1e1e1e` (Dark terminal background)
- **Text color**: `#4caf50` (Classic terminal green)
- **Font**: Monospace for code appearance
- **Padding/Border-radius**: Professional, readable appearance

**Use cases:**
- Terminal commands: `pwd`, `ls`, `mkdir`
- CLI instructions: `git commit -m "message"`
- Shell commands in running text
- Directory navigation commands

#### File Path Styling
For inline file paths and directory references:
```html
<code style="background: #f5f5f5; color: #d63384; padding: 2px 8px; border-radius: 4px; font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 0.9em;">/home/username/Documents</code>
```

**Styling breakdown:**
- **Background**: `#f5f5f5` (Light gray, distinguishable from terminal)
- **Text color**: `#d63384` (Pink/magenta for paths)
- **Font**: Monospace for technical appearance

**Use cases:**
- File system paths: `/home/user/Documents`
- Windows paths: `C:\Users\username\Documents`
- Relative paths: `./folder/file.txt`
- Path references in instructions

#### Keyboard Shortcut Inline Styling
For inline keyboard shortcuts within text:
```html
<kbd style="background: #f0f0f0; color: #333; padding: 2px 6px; border-radius: 3px; border: 1px solid #ccc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 0.85em; font-weight: 600;">Ctrl+C</kbd>
```

**Styling breakdown:**
- **Background**: `#f0f0f0` (Light gray, keyboard key appearance)
- **Border**: `1px solid #ccc` (Key outline)
- **Text color**: `#333` (Dark, readable)
- **Font-weight**: `600` (Bold for emphasis)

**Use cases:**
- Keyboard shortcuts: `Ctrl+C`, `Alt+Tab`
- Key combinations in instructions
- Reference to specific keys: `Enter`, `Esc`

#### Application/Software Name Styling
For inline application names and software references:
```html
<strong style="color: #667eea;">[APPLICATION NAME]</strong>
```

**Styling breakdown:**
- **Color**: `#667eea` (Brand blue)
- **Font-weight**: Bold via `<strong>` tag

**Use cases:**
- Software names: **Files**, **Terminal**, **Ubuntu Software**
- Application references in instructions
- Program names in running text

#### Usage Examples

**Combined in context:**
```html
<p>Öppna <strong style="color: #667eea;">Terminal</strong> och navigera till mappen genom att skriva <code style="background: #1e1e1e; color: #4caf50; padding: 2px 8px; border-radius: 4px; font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 0.9em;">cd Documents</code> eller använd genvägen <kbd style="background: #f0f0f0; color: #333; padding: 2px 6px; border-radius: 3px; border: 1px solid #ccc; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 0.85em; font-weight: 600;">Ctrl+Alt+T</kbd> för att öppna terminalen snabbt.</p>
```

**Result:** Creates clear visual distinction between terminal commands (green on black), keyboard shortcuts (key-style buttons), and application names (brand blue bold).

## Content Organization Patterns

### 1. Course Introduction Pattern
- **Header**: Course title and subtitle
- **Overview section**: What the course covers
- **Resources section**: External links and materials
- **Getting started**: First steps for students

### 2. Assignment/Project Pattern
- **Header**: Assignment title and brief description
- **Requirements box**: What needs to be submitted
- **Process sections**: Step-by-step guidance with numbered subsections
- **Format/submission info**: Technical details

### 3. Reference/Documentation Pattern  
- **Header**: Resource title
- **Navigation/contents**: Quick links to sections
- **Detailed sections**: In-depth information
- **Examples**: Code samples or demonstrations

### 4. Multi-Option Process Pattern
- **Header**: Main process title
- **Overview**: Brief explanation of options available
- **Option sections**: Detailed explanation of each path (1.1, 1.2, 1.3)
- **Checkpoints**: Validation points between major sections
- **Motivational conclusion**: Encouraging completion message

### 5. Sequential Learning Pattern
- **Introduction**: Context and prerequisites
- **Process visualization**: Step-by-step flow with arrows
- **Detailed instructions**: Numbered sections with specific guidance
- **Progress validation**: Checkpoints to ensure understanding
- **Next steps**: Clear direction for continuation

## Extended Color Palette

### Difficulty/Skill Level Colors
- **Beginner Green**: `#27ae60` - For foundational, basic concepts
- **Intermediate Orange**: `#e67e22` - For applied knowledge and connections
- **Advanced Purple**: `#8e44ad` - For complex analysis and synthesis

### Document Type Background Colors
- **PowerPoint Background**: `#f8f4ff` with `#8e44ad` left border
- **Word Document Background**: `#e8f4fd` with `#667eea` left border
- **PDF/Reading Background**: `#fff5f5` with `#fd79a8` left border

### Gradient Systems
- **Purple Gradient**: `linear-gradient(135deg, #a29bfe, #6c5ce7)` - PowerPoint presentations
- **Blue Gradient**: `linear-gradient(135deg, #0984e3, #74b9ff)` - Word documents
- **Pink-Orange Gradient**: `linear-gradient(135deg, #fd79a8, #fdcb6e)` - PDF/Reading materials
- **Red Gradient**: `linear-gradient(135deg, #ff6b6b, #ee5a52)` - External links

### Implementation Guidelines

#### When to Use Different Components:
1. **Presentation Cards**: Always use for PowerPoint, Word documents, and PDF materials that are primary learning resources
2. **External Link Buttons**: Only for external websites, tools, or third-party resources
3. **Difficulty Badges**: Apply to all learning sections to show progressive complexity
4. **Grid Layout (2fr 1fr)**: Use when combining explanatory text with a single resource
5. **Numbered Section Badges**: Use for subsections within larger topics (1.1, 1.2, etc.)

#### Progressive Learning Structure:
- Start each major topic with beginner-level content
- Group related questions/activities by difficulty level
- Use visual progression indicators (stars, colors, numbering)
- Provide clear transitions between difficulty levels

#### Content Organization Principles:
- **Beginner**: Focus on "What" and "Where" - definitions, identification
- **Intermediate**: Focus on "How" and "Why" - processes, relationships
- **Advanced**: Focus on analysis, evaluation, creation - critical thinking

### 9. Programming and Technical Content Patterns

Based on successful implementation in JavaScript programming tutorials, these patterns are specifically designed for technical courses, programming instruction, and hands-on learning environments.

#### Technical Code Block System

**Code Block Theme Selection Guidelines:**
Choose the appropriate theme based on content type and educational context:

**Dark Theme Code Blocks** (Recommended for programming/technical content):
```html
<div style="background: #1e1e1e; color: #f8f8f2; padding: 20px; border-radius: 8px; margin: 20px 0; overflow-x: auto;">
    <pre style="margin: 0; font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 14px;">
        <code style="color: #f8f8f2;">[CODE CONTENT]</code>
    </pre>
</div>
```

**When to Use Dark Theme:**
- **Programming code examples** (JavaScript, Python, HTML, CSS, etc.)
- **Terminal/command line instructions**
- **Technical tutorials with executable code**
- **Code-heavy educational content**
- **When strong visual separation from explanatory text is needed**

**Benefits of Dark Theme:**
- **Superior Visual Hierarchy**: Creates strong contrast against white content cards
- **Reduced Eye Strain**: Easier on eyes when reading code for extended periods
- **Professional Standard**: Matches modern IDE conventions (VS Code, GitHub, etc.)
- **Educational Familiarity**: Students recognize this as "code environment"
- **Better Focus**: Dark blocks draw attention to executable/technical content

**Light Theme Code Blocks** (For documentation and reference):
```html
<div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 12px; margin: 2rem 0; border-left: 5px solid #6c757d; box-shadow: 0 4px 12px rgba(108, 117, 125, 0.15);">
    <h4 style="color: #495057; margin: 0 0 20px 0; font-size: 1.2rem; display: flex; align-items: center;">
        <span style="background: #6c757d; color: white; padding: 8px 12px; border-radius: 20px; margin-right: 12px; font-size: 0.85rem; font-weight: bold;">HTML</span>
        Code Block Title
    </h4>
    <div style="background: white; padding: 20px; border-radius: 8px; border: 2px solid #e9ecef; box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);">
        <div style="color: #495057; font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 14px; line-height: 1.8;">
            <!-- Syntax highlighted code goes here -->
        </div>
    </div>
</div>
```

**When to Use Light Theme:**
- **Documentation examples** with extensive explanation
- **Template code** that needs annotation
- **Reference materials** integrated with text
- **When formal language tags and titles are needed**
- **Configuration files** and structured data

**Recommended Implementation Strategy:**
- **Default to dark theme** for programming courses and technical content
- **Use light theme** for reference documentation and annotated examples
- **Be consistent** within the same course/page
- **Consider context**: executable code = dark, reference/template = light

**Language Tag Colors:**
- **HTML**: `#6c757d` (Gray)
- **JavaScript**: `#f39c12` (Orange) 
- **CSS**: `#17a2b8` (Teal)
- **Python**: `#27ae60` (Green)
- **General/Mixed**: `#8e44ad` (Purple)

**Syntax Highlighting Color Scheme (Light Theme):**
- **HTML Tags**: `#d63384` (Pink/Magenta)
- **Attributes**: `#0d6efd` (Blue)
- **Attribute Values/Strings**: `#198754` (Green)
- **Comments**: `#6f42c1` (Purple)
- **Text Content**: `#495057` (Dark Gray)
- **Operators/Punctuation**: `#495057` (Dark Gray)
- **Indentation**: `#6c757d` (Light Gray)

#### Professional Circular Section Badges

**Main Section Headers with Color-Coded Badges:**
```html
<h2 style="color: #2c3e50; border-bottom: 2px solid #27ae60; padding-bottom: 8px; margin-top: 0; display: flex; align-items: center;">
    <span style="background: #27ae60; color: white; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 1.2rem; font-weight: bold;">1</span>
    Section Title
</h2>
```

**Sequential Section Color Palette:**
1. **Section 1**: `#27ae60` (Green) - Introduction/Setup
2. **Section 2**: `#e67e22` (Orange) - Basic Concepts
3. **Section 3**: `#8e44ad` (Purple) - Intermediate Topics
4. **Section 4**: `#17a2b8` (Teal) - Advanced Features
5. **Section 5**: `#f39c12` (Yellow) - Complex Applications
6. **Section 6**: `#e74c3c` (Red) - Expert Techniques
7. **Section 7**: `#6c5ce7` (Purple Variant) - Mastery/Summary

**Subsection Mini-Badges:**
```html
<h3 style="color: #e65100; margin: 0 0 20px 0; display: flex; align-items: center; font-size: 1.3rem;">
    <span style="background: #ff9800; color: white; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 0.9rem; font-weight: bold;">1.1</span>
    Subsection Title
</h3>
```

#### Enhanced Assignment and Exercise Layout

**Multi-Exercise Assignment Box:**
```html
<div style="background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%); padding: 30px; border-radius: 12px; border-left: 6px solid #ffc107; margin-top: 2rem; box-shadow: 0 4px 8px rgba(255,193,7,0.2);">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center;">
        <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h3 style="color: #e65100; margin: 0 0 20px 0; display: flex; align-items: center; font-size: 1.3rem;">
                <span style="background: #ff9800; color: white; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 0.9rem; font-weight: bold;">1.1</span>
                Exercise Title
            </h3>
            <p style="margin: 0 0 20px 0; color: #5d4037; line-height: 1.6;">Exercise description...</p>
            
            <h3 style="color: #e65100; margin: 20px 0 15px 0; display: flex; align-items: center; font-size: 1.3rem;">
                <span style="background: #ff9800; color: white; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 0.9rem; font-weight: bold;">1.2</span>
                Next Exercise Title
            </h3>
            <p style="margin: 0; color: #5d4037; line-height: 1.6;">Next exercise description...</p>
        </div>
        <div style="text-align: center; background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <!-- Images, diagrams, or additional content -->
        </div>
    </div>
</div>
```

#### Enhanced Typography for Technical Content

**Information Boxes with Better Typography:**
```html
<div style="background-color: #e8f5e8; padding: 25px; border-radius: 12px; border-left: 5px solid #27ae60; margin: 2rem 0; box-shadow: 0 2px 8px rgba(39, 174, 96, 0.1);">
    <p style="color: #1b5e20; font-weight: 600; margin: 0 0 15px 0; font-size: 1.1rem; line-height: 1.6;">Enhanced information box with improved typography and spacing for better readability.</p>
</div>
```

**Optimized Body Text:**
```html
<p style="font-size: 1.05rem; line-height: 1.7; margin-bottom: 1.5rem; color: #2c3e50;">
    Body text optimized for technical content with improved line height and spacing.
</p>
```

**Enhanced Grid Layouts:**
```html
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2.5rem; align-items: start;">
    <div style="background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <!-- Content with enhanced container styling -->
    </div>
</div>
```

#### Technical Course Structure Patterns

**Programming Tutorial Layout:**
1. **Introduction Section** (Green badge) - Course overview, prerequisites, setup
2. **Basic Concepts** (Orange badge) - Fundamental building blocks
3. **Intermediate Topics** (Purple badge) - Combining concepts, practical applications
4. **Advanced Features** (Teal badge) - Complex functionality, optimization
5. **Expert Techniques** (Red badge) - Advanced patterns, best practices
6. **Summary Section** (Gradient background) - Key concepts review
7. **Assessment Section** (Blue gradient) - Testing and validation

**Code Example Progression:**
- Start with simple, single-line examples
- Progress to multi-line code blocks with syntax highlighting
- Include complete templates and file structures
- Show before/after comparisons when teaching modifications

#### Implementation Guidelines for Technical Content

**When to Use These Patterns:**
- **Programming courses** (JavaScript, Python, HTML/CSS, etc.)
- **Technical tutorials** with step-by-step instructions
- **Hands-on workshops** requiring practical exercises
- **Code documentation** and reference materials
- **Software development courses**
- **Technical skill assessments**

**Progressive Learning Structure:**
1. **Setup Phase** (Green) - Environment preparation, tool introduction
2. **Foundation Phase** (Orange) - Basic concepts and syntax
3. **Application Phase** (Purple) - Practical implementation
4. **Integration Phase** (Teal) - Combining multiple concepts
5. **Optimization Phase** (Yellow) - Performance and best practices
6. **Mastery Phase** (Red) - Complex projects and problem-solving
7. **Assessment Phase** (Blue) - Evaluation and next steps

**Code Block Best Practices:**
- Always use descriptive language tags for light theme blocks (HTML, JavaScript, CSS, etc.)
- Include context-setting headers above code blocks when using light theme
- **Use dark theme for programming content** - better visual hierarchy and student familiarity
- **Use light theme for documentation** - better for annotated reference material
- Apply consistent syntax highlighting colors across all code
- Provide complete, runnable examples when possible
- Break complex code into digestible sections with explanations
- **Maintain theme consistency** within the same course or page

**Exercise Design Principles:**
- Use numbered mini-badges for sequential exercises (1.1, 1.2, 1.3)
- Group related exercises within enhanced assignment boxes
- Include visual examples alongside text instructions
- Progress from simple to complex within each section
- Provide clear success criteria for each exercise

#### Color Psychology for Technical Learning

**Section Color Meanings:**
- **Green (#27ae60)**: Safe to start, foundational concepts, setup instructions
- **Orange (#e67e22)**: Active learning, hands-on practice, basic implementation
- **Purple (#8e44ad)**: Creative thinking, problem-solving, intermediate challenges
- **Teal (#17a2b8)**: Information-rich, reference material, advanced concepts
- **Yellow (#f39c12)**: Attention-required, important concepts, optimization
- **Red (#e74c3c)**: Critical information, advanced techniques, error handling
- **Purple Variant (#6c5ce7)**: Synthesis, mastery-level content, final concepts

This systematic approach ensures that technical courses have consistent visual hierarchy, clear learning progression, and professional presentation that supports effective programming education.

## Best Practices

### Content Guidelines
- **Clear hierarchy**: Use proper numbered heading levels (H1 → H2 → H3) with consistent numbering
- **Numbered sections**: Always number main sections (1., 2., 3.) and subsections (1.1, 1.2, etc.) for easy reference
- **Range numbering**: Use ranges (1.1-1.3) when grouping related subsections under one main heading
- **Sequential processes**: Use visual flow indicators (arrows) for step-by-step processes
- **Scannable**: Break up long text with bullets, boxes, and sections
- **Action-oriented**: Tell students what to do, not just what to know
- **Consistent terminology**: Use the same words for the same concepts
- **Progress indicators**: Use checkpoints to mark validation points in learning progression

### Content Writing and Style Matching Guidelines

#### Writing Style Consistency
When adding new content to existing materials, **always match the existing writing style**:

- **Tone Matching**: Analyze the formality level, use of personal pronouns (du/ni), and instructional approach of existing content
- **Vocabulary Consistency**: Use the same technical terms and expressions already established in the material
- **Sentence Structure**: Match the complexity and length of existing sentences
- **Educational Language**: Maintain the same level of educational formality (e.g., academic vs. conversational Swedish)
- **Metaphors and Examples**: Follow existing patterns for explanations (e.g., if the content uses everyday analogies, continue that pattern)

#### Content Integration Principles
When expanding factual content to support learning objectives:

- **Comprehensive Coverage**: Ensure all questions/objectives can be answered from the provided facts
- **Information Hierarchy**: Organize information from basic concepts to advanced applications
- **Cross-Referencing**: Structure facts so they support multiple questions without redundancy
- **Content Flow**: Integrate new information seamlessly into existing content structure
- **Language Consistency**: New content should be indistinguishable from original content in terms of writing style

#### Content Streamlining Guidelines
When optimizing content presentation:

- **Information Box Integration**: Only keep separate highlight boxes if they contain essential information for answering questions
- **Main Text Integration**: Incorporate important highlighted information into main paragraphs using matching language style
- **Essential vs. Supplementary**: Remove purely decorative or redundant information boxes
- **Reading Flow**: Optimize content for smoother, more integrated reading experience
- **Question Coverage**: Preserve all information needed to answer learning objectives

#### Quality Assurance for Content Addition
Before finalizing new content:

- [ ] Writing style matches existing content tone and vocabulary
- [ ] All learning objectives/questions can be answered from the factual content
- [ ] Information is organized in logical progression (basic → intermediate → advanced)
- [ ] Language consistency maintained throughout
- [ ] Content integrated seamlessly without obvious additions
- [ ] Essential information preserved while removing redundant highlights
- [ ] Reading experience optimized for clarity and flow

### Visual Guidelines
- **Consistent spacing**: Use 2rem between major sections, 1rem within
- **Color meaning**: Stick to semantic color usage (green=good, red=important, etc.)
- **Color-coded categories**: Use distinct background colors for different content types (APL=yellow, Entrepreneurship=purple, etc.)
- **Nested information**: Layer information boxes for hierarchical content organization
- **Progress visualization**: Use arrows and flow indicators for sequential processes
- **Responsive design**: Test layouts at different screen sizes
- **Icon usage**: Use emoji or simple icons for visual interest and scanning
- **Motivational elements**: Include encouraging messages and completion affirmations

### Technical Guidelines
- **Inline CSS only**: No external stylesheets (Canvas requirement)
- **System fonts**: Stick to the defined font stack
- **Relative units**: Use rem and em where possible for scalability
- **Semantic HTML**: Use proper heading structure for accessibility

## Quality Checklist

Before publishing a Canvas page, verify:
- [ ] Proper numbered heading hierarchy (H1 → H2 → H3 with consistent numbering)
- [ ] All main sections numbered (1., 2., 3., etc.) and subsections numbered (1.1, 1.2, etc.)
- [ ] Range numbering used appropriately for grouped subsections (1.1-1.3)
- [ ] Consistent color usage according to semantic meaning
- [ ] Color-coded content categories where applicable
- [ ] Sequential processes include visual flow indicators (arrows)
- [ ] Nested information boxes used for content hierarchy
- [ ] Checkpoint validation points included where appropriate
- [ ] All links open in new tabs where appropriate
- [ ] Content is scannable with clear numbered sections
- [ ] Mobile-friendly responsive layout
- [ ] Proper spacing and visual hierarchy
- [ ] All CSS is inline
- [ ] Text contrast meets accessibility standards
- [ ] Section numbers are easily referenceable for student-teacher communication
- [ ] Motivational elements included for student engagement

### Content Development Quality Checklist
For educational materials with questions and factual content:
- [ ] **Writing Style Consistency**: New content matches existing tone, vocabulary, and sentence structure
- [ ] **Comprehensive Question Coverage**: All learning objectives/questions can be answered from provided factual content
- [ ] **Discovery-Based Learning**: Direct question-to-fact references removed to maintain learning challenge
- [ ] **Information Hierarchy**: Content organized from basic concepts to advanced applications
- [ ] **Content Integration**: Essential information integrated into main text flow rather than separate highlight boxes
- [ ] **Language Matching**: New additions indistinguishable from original content in writing style
- [ ] **Educational Balance**: Maintains comprehensive information while preserving independent discovery approach
- [ ] **Content Streamlining**: Redundant or purely decorative information boxes removed or integrated
- [ ] **Reading Flow Optimization**: Content presents smoothly integrated reading experience

## Implementation Notes

### Canvas HTML Editor Compatibility
- Always use inline CSS - external stylesheets won't work
- Test in Canvas preview mode before publishing
- Avoid complex CSS features that Canvas might strip out
- Use semantic HTML for better accessibility and Canvas compatibility

### Maintenance
- Review and update pages regularly for content freshness
- Maintain consistency across all course pages
- Gather student feedback on page usability
- Update reference materials as needed

## Enhanced Components (Latest Updates)

### Improved Link Styling
For regular text links within content:
```html
<a href="[URL]" style="color: #667eea; text-decoration: none;">[LINK TEXT]</a>
```
**Critical**: Always ensure URLs are properly formatted without extra spaces (e.g., `http://example.com` not `http : / / example.com`)

### Enhanced Code Block System (Improved)
**Advanced Light Theme Code Blocks** with full syntax highlighting:
```html
<div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 12px; margin: 2rem 0; border-left: 5px solid #f39c12; box-shadow: 0 4px 12px rgba(243, 156, 18, 0.15);">
    <h4 style="color: #495057; margin: 0 0 20px 0; font-size: 1.2rem; display: flex; align-items: center;">
        <span style="background: #f39c12; color: white; padding: 8px 12px; border-radius: 20px; margin-right: 12px; font-size: 0.85rem; font-weight: bold;">JavaScript</span>
        Code Block Title
    </h4>
    <div style="background: white; padding: 20px; border-radius: 8px; border: 2px solid #e9ecef; box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);">
        <div style="color: #495057; font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 14px; line-height: 1.8;">
            <!-- Syntax highlighted code with proper color coding -->
        </div>
    </div>
</div>
```

**Enhanced Syntax Highlighting Colors:**
- **Keywords (var, function, if, else)**: `#d63384` (Pink/Magenta)
- **Function names**: `#0d6efd` (Blue)
- **Strings**: `#198754` (Green)
- **Numbers**: `#198754` (Green)
- **Comments**: `#6f42c1` (Purple)
- **Base text**: `#495057` (Dark Gray)

**Language Tag Colors:**
- **JavaScript**: `#f39c12` (Orange)
- **HTML**: `#6c757d` (Gray)
- **CSS**: `#17a2b8` (Teal)
- **Python**: `#27ae60` (Green)
- **General/Mixed**: `#8e44ad` (Purple)

This enhanced system provides superior readability and professional appearance compared to basic code blocks.

## 10. Multi-Method Learning Patterns

These patterns support teaching multiple approaches to accomplish the same task, helping students understand trade-offs between different methods and choose appropriate tools for different situations.

### Integrated Learning Cards (Theory + Practice)

**Pattern**: Combine theoretical content with immediate practical application in a single cohesive card.

**Structure**:
```html
<div style="background: white; border-radius: 12px; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <h4 style="color: #2980b9; margin: 0 0 20px 0; font-size: 1.2rem;">[TOPIC TITLE]</h4>
    
    <!-- Theory Section -->
    <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3498db; margin-bottom: 20px;">
        <h5 style="color: #2980b9; margin: 0 0 15px 0;">[THEORY HEADING]</h5>
        <!-- Theory content: tables, explanations, concepts -->
    </div>

    <!-- Integrated Exercise -->
    <div style="background-color: #e3f2fd; padding: 25px; border-radius: 12px; border: 2px solid #2196f3; margin-top: 20px;">
        <h5 style="margin: 0 0 15px 0; color: #1565c0; font-size: 1.1rem;">✍️ [EXERCISE TYPE] - ARBETA HÄR</h5>
        <!-- Exercise content: tasks, questions, activities -->
    </div>
</div>
```

**Pedagogical Benefits**:
- Students read theory and immediately apply it
- Clear connection between concept and practice
- Single, coherent learning unit
- Reduces cognitive load by keeping related content together

**Use Cases**:
- Teaching new concepts followed by practice problems
- Explaining theory with hands-on verification
- Presenting reference material with interactive exercises
- Any "learn then do" educational pattern

### Multi-Method Approach Pattern

**Pattern**: Teach multiple ways to accomplish the same task, showing different tools/approaches with distinct visual coding.

**Three-Method Structure** (adaptable to 2, 3, or 4 methods):
```html
<!-- Method 1: Visual/Easy (Green) -->
<div style="background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%); padding: 25px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #27ae60;">
    <h5 style="color: #1b5e20; margin: 0 0 15px 0; font-size: 1.2rem;">
        🖱️ [METHOD 1 NAME] (Enklast/Visuell)
    </h5>
    <!-- Method 1 steps -->
</div>

<!-- Method 2: Intermediate (Blue) -->
<div style="background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%); padding: 25px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #0288d1;">
    <h5 style="color: #01579b; margin: 0 0 15px 0; font-size: 1.2rem;">
        ⌨️ [METHOD 2 NAME] (Snabbare)
    </h5>
    <!-- Method 2 steps -->
</div>

<!-- Method 3: Advanced (Gray/Dark) -->
<div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 25px; border-radius: 10px; margin-bottom: 20px; border-left: 5px solid #495057;">
    <h5 style="color: #212529; margin: 0 0 15px 0; font-size: 1.2rem;">
        💻 [METHOD 3 NAME] (Kraftfullast)
    </h5>
    <!-- Method 3 steps -->
</div>
```

**Color Coding Strategy**:
- **Green**: Beginner-friendly, visual, GUI-based methods
- **Blue**: Intermediate, keyboard shortcuts, faster but requires learning
- **Gray/Dark**: Advanced, technical, powerful but complex (CLI, programming)

**Pedagogical Benefits**:
- Shows multiple pathways to same goal
- Students choose method matching their skill level
- Demonstrates trade-offs (ease vs. speed vs. power)
- Progressive skill building from easy to advanced

**Use Cases**:
- GUI vs. keyboard shortcuts vs. command line
- Multiple programming approaches to same problem
- Different research methods (library, online, databases)
- Various design tools (manual, templates, automated)

### Method Comparison Summary

**Pattern**: Visual summary helping students understand when to use each method.

```html
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; text-align: center;">
    <h4 style="margin: 0 0 15px 0; font-size: 1.4rem;">🎯 Sammanfattning: När ska du använda vad?</h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
        <div style="background: rgba(255,255,255,0.2); padding: 1.5rem; border-radius: 8px;">
            <h5 style="margin: 0 0 10px 0;">[METHOD 1]</h5>
            <p style="margin: 0; font-size: 0.95rem;">När: [USE CASE]</p>
        </div>
        <div style="background: rgba(255,255,255,0.2); padding: 1.5rem; border-radius: 8px;">
            <h5 style="margin: 0 0 10px 0;">[METHOD 2]</h5>
            <p style="margin: 0; font-size: 0.95rem;">När: [USE CASE]</p>
        </div>
        <div style="background: rgba(255,255,255,0.2); padding: 1.5rem; border-radius: 8px;">
            <h5 style="margin: 0 0 10px 0;">[METHOD 3]</h5>
            <p style="margin: 0; font-size: 0.95rem;">När: [USE CASE]</p>
        </div>
    </div>
</div>
```

**Use Case**: End of multi-method exercises to help students make informed tool choices.

### Comparative Practice Exercise

**Pattern**: Students practice same task with different methods and compare results.

```html
<div style="background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%); padding: 30px; border-radius: 12px; border-left: 6px solid #ff9800; margin-bottom: 20px; box-shadow: 0 4px 8px rgba(255,152,0,0.2);">
    <h4 style="color: #e65100; margin: 0 0 20px 0; font-size: 1.3rem; font-weight: bold; text-transform: uppercase;">
        ⏱️ [COMPARATIVE EXERCISE TITLE]
    </h4>
    
    <!-- Trial 1 -->
    <div style="background-color: rgba(255,255,255,0.9); padding: 20px; border-radius: 8px; margin-bottom: 15px;">
        <h5 style="color: #e65100; margin: 0 0 15px 0;">[METHOD 1]: [TASK DESCRIPTION]</h5>
        <p style="margin: 0; color: #bf360c;"><strong>Tid/Svårighet/Resultat:</strong> _____________</p>
    </div>
    
    <!-- Trial 2 -->
    <div style="background-color: rgba(255,255,255,0.9); padding: 20px; border-radius: 8px; margin-bottom: 15px;">
        <h5 style="color: #e65100; margin: 0 0 15px 0;">[METHOD 2]: [TASK DESCRIPTION]</h5>
        <p style="margin: 0; color: #bf360c;"><strong>Tid/Svårighet/Resultat:</strong> _____________</p>
    </div>
    
    <!-- Reflection -->
    <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; border: 2px solid #ffc107;">
        <p style="margin: 0 0 10px 0; color: #856404; font-weight: bold;">📊 ANALYS:</p>
        <ol style="margin: 0; padding-left: 20px; color: #856404;">
            <li style="margin-bottom: 8px;">[COMPARISON QUESTION 1]</li>
            <li style="margin-bottom: 8px;">[COMPARISON QUESTION 2]</li>
            <li style="margin-bottom: 8px;">[COMPARISON QUESTION 3]</li>
        </ol>
    </div>
</div>
```

**Pedagogical Benefits**:
- Hands-on comparison of methods
- Students discover speed/efficiency differences themselves
- Builds critical thinking about tool selection
- Makes abstract concepts concrete

**Use Cases**:
- Speed tests comparing different workflows
- Efficiency comparisons between tools
- Accuracy comparisons between methods
- Learning curve demonstrations

### Session Transition Visual

**Pattern**: Clear visual break between different learning modes or time periods.

```html
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin: 3rem 0 2rem 0; text-align: center; box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);">
    <div style="display: flex; align-items: center; justify-content: center; gap: 20px; margin-bottom: 15px;">
        <div>
            <div style="font-size: 2.5rem; margin-bottom: 10px;">[ICON 1]</div>
            <p style="margin: 0; font-weight: 600; font-size: 1.1rem;">[PREVIOUS MODE]</p>
            <p style="margin: 5px 0 0 0; font-size: 0.9rem; opacity: 0.9;">[PREVIOUS DESCRIPTION]</p>
        </div>
        <div style="font-size: 3rem;">→</div>
        <div>
            <div style="font-size: 2.5rem; margin-bottom: 10px;">[ICON 2]</div>
            <p style="margin: 0; font-weight: 600; font-size: 1.1rem;">[NEW MODE]</p>
            <p style="margin: 5px 0 0 0; font-size: 0.9rem; opacity: 0.9;">[NEW DESCRIPTION]</p>
        </div>
    </div>
    <p style="margin: 0; font-size: 1rem; opacity: 0.95;">[TRANSITION MESSAGE]</p>
</div>
```

**Use Cases**:
- Switching from practical to theoretical sessions
- Moving from individual to group work
- Transitioning between different days/weeks
- Changing from learning to assessment mode

### Session Introduction Box

**Pattern**: Context-setting introduction for new learning sessions.

```html
<div style="background-color: #fff9e6; padding: 25px; border-radius: 12px; border-left: 5px solid #f39c12; margin-bottom: 2rem;">
    <h4 style="color: #d68910; margin: 0 0 15px 0; font-size: 1.2rem;">📖 [SESSION NAME]</h4>
    <p style="margin: 0 0 15px 0; color: #7d6608; font-size: 1.05rem; line-height: 1.6;">
        [INTRODUCTION TEXT - explains purpose and connection to previous work]
    </p>
    <ul style="margin: 0 0 15px 0; padding-left: 20px; color: #7d6608;">
        <li>[TOPIC 1]</li>
        <li>[TOPIC 2]</li>
        <li>[TOPIC 3]</li>
    </ul>
    <div style="background-color: rgba(255,255,255,0.7); padding: 15px; border-radius: 6px; margin-top: 15px;">
        <p style="margin: 0; color: #856404; font-weight: 600;">
            ⚠️ [IMPORTANT NOTE - constraints, prerequisites, or context]
        </p>
    </div>
</div>
```

**Use Cases**:
- Starting new day/week of instruction
- Beginning assessment period
- Introducing major topic shift
- Setting expectations for different learning mode

### Implementation Guidelines

**When to Use Multi-Method Patterns:**
- Teaching technical skills with multiple approaches (GUI/CLI, visual/code, etc.)
- Comparing tools or techniques
- Building progressive skill mastery
- Helping students make informed tool choices

**Best Practices:**
- Use consistent color coding (green=easy, blue=intermediate, gray=advanced)
- Always include comparison/reflection component
- Show real-world use cases for each method
- Provide clear visual distinction between methods
- End with summary helping students choose appropriately

**Avoid These Patterns For:**
- Single-method instruction
- Purely theoretical content without alternatives
- When method choice is not relevant to learning objectives
- Situations where one method is always optimal

## Canvas Implementation Workflow - RECOMMENDED PROCESS

### Development and Testing Workflow

#### Phase 1: Development
1. **Create full design version** using original components with all CSS properties
2. **Test visual hierarchy** and educational flow
3. **Validate all content** and functionality
4. **Document any custom CSS** used

#### Phase 2: Canvas Preparation  
1. **Convert to Canvas-safe version** using component alternatives above
2. **Replace `font-weight: bold` with `<strong>` tags**
3. **Remove or replace `box-shadow` properties**
4. **Keep all other CSS as-is**

#### Phase 3: Canvas Testing
1. **Paste Canvas-safe HTML into Canvas HTML Editor**
2. **Save the page in Canvas**
3. **Reopen Canvas HTML Editor** 
4. **Copy the HTML back out** to verify what Canvas preserved
5. **Document any additional CSS limitations discovered**

#### Phase 4: Final Validation
1. **Check visual appearance** in Canvas preview
2. **Test on mobile devices** within Canvas
3. **Verify all links and images** work properly
4. **Confirm educational effectiveness** is maintained

### Decision Matrix: When to Use Which Version

| Scenario | Use Version | Reason |
|----------|-------------|--------|
| **Canvas HTML Editor** | Canvas-Safe | Canvas strips certain properties |
| **External HTML files** | Original Design | Full CSS support available |
| **Email/Export** | Original Design | Better visual polish |
| **PDF Generation** | Original Design | Print-friendly with shadows |
| **LMS Integration** | Canvas-Safe | Most LMS have similar limitations |
| **Prototype/Demo** | Original Design | Show full design intent |

### Quality Assurance Checklist

#### Before Canvas Implementation:
- [ ] All `font-weight: bold` converted to `<strong>` tags
- [ ] All `box-shadow` properties removed or replaced
- [ ] All other visual hierarchy maintained
- [ ] Content structure preserved 100%
- [ ] Educational objectives still achievable

#### After Canvas Testing:
- [ ] Visual appearance acceptable in Canvas preview
- [ ] All numbered badges still visible and functional
- [ ] Content cards still clearly separated
- [ ] Mobile responsiveness maintained
- [ ] No broken layouts or overlapping elements

#### Final Delivery:
- [ ] Canvas-safe HTML provided
- [ ] Original design files archived for future reference
- [ ] Any new Canvas limitations documented
- [ ] Client informed of any visual compromises

### Success Metrics
- **CSS Preservation Rate**: Target 95%+ (consistently achieved)
- **Educational Effectiveness**: 100% maintained
- **Visual Polish**: 90%+ retained (acceptable trade-off)
- **Functionality**: 100% preserved

This workflow ensures efficient development while accounting for Canvas limitations, resulting in professional educational content that works reliably within the Canvas platform.