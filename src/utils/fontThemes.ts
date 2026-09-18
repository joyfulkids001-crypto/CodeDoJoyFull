/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FontComboRole {
  roleName: string;
  fontFamily: string;
  category: 'sans' | 'serif' | 'mono';
  description: string;
}

export interface FontCombo {
  id: string;
  name: string;
  badge: string;
  formula: string; // e.g. "SERIF • SANS • SERIF • MONO"
  isDefault?: boolean;
  tagline: string;
  description: string;
  bestFor: string;
  vibe: string;
  displayFont: string;
  bodyFont: string;
  codeFont: string;
  tutorialFont: string;
  roles: {
    display: FontComboRole;
    ui: FontComboRole;
    tutorial: FontComboRole;
    code: FontComboRole;
  };
  sampleHeadline: string;
  sampleParagraph: string;
  sampleCode: string;
}

export const RECOMMENDED_FONT_COMBOS: FontCombo[] = [
  {
    id: 'kotlin-native',
    name: 'Modern Kotlin Native',
    badge: 'DEFAULT',
    formula: 'SANS • SANS • SANS • MONO',
    isDefault: true,
    tagline: 'Tactile gamified energy + modern Android/JetBrains clarity',
    description:
      'The curated gold-standard CodeDo experience. Geometric high-impact display for XP, streaks, and badges paired with Google Android-grade Plus Jakarta Sans for reading and JetBrains Mono for exact code syntax.',
    bestFor: 'General Kotlin learning, daily streaks, interactive challenges, and mixed practice.',
    vibe: 'Modern • Energetic • Precise',
    displayFont: "'Outfit', sans-serif",
    bodyFont: "'Plus Jakarta Sans', sans-serif",
    codeFont: "'JetBrains Mono', monospace",
    tutorialFont: "'Plus Jakarta Sans', sans-serif",
    roles: {
      display: {
        roleName: 'Display & Gamification (XP, Map Nodes, Streaks)',
        fontFamily: 'Outfit (Geometric Sans)',
        category: 'sans',
        description: 'Vibrant geometric letterforms that make gamification elements feel punchy and rewarding.',
      },
      ui: {
        roleName: 'General App Interface (Buttons, Menus, Quizzes)',
        fontFamily: 'Plus Jakarta Sans (Sans)',
        category: 'sans',
        description: 'Open apertures and balanced ascenders for instant mobile scanning.',
      },
      tutorial: {
        roleName: 'Detailed Tutorial Reading (Articles & Notes)',
        fontFamily: 'Plus Jakarta Sans (Clean Sans)',
        category: 'sans',
        description: 'High x-height and generous line-tracking that aligns naturally with inline code tokens.',
      },
      code: {
        roleName: 'Code Snippets, Mobile IDE & Keycaps',
        fontFamily: 'JetBrains Mono (Mono)',
        category: 'mono',
        description: 'Created specifically by JetBrains for Kotlin; zero ambiguity between 0/O and 1/l/I.',
      },
    },
    sampleHeadline: 'World 1: Variables & Immutability',
    sampleParagraph:
      'In Kotlin, memory references are strictly governed by val and var keywords. By default, prefer immutable references to build crash-free concurrent systems.',
    sampleCode: 'val maxRetries: Int = 3\nprintln("Attempting connection: $maxRetries")',
  },
  {
    id: 'ibm-heritage',
    name: 'IBM Computing Heritage',
    badge: 'ENGINEERING ICON',
    formula: 'TECH SANS • SANS • RESEARCH SERIF • MONO',
    tagline: 'Historic mainframe engineering with the unified IBM Plex type system',
    description:
      'Honors the golden era of computer science and mainframe architecture. Built entirely around the unified IBM Plex open-source type system, combining industrial precision in headings with scholarly research readability in Plex Serif.',
    bestFor: 'Systems programmers, backend engineers, compiler architects, and computing history enthusiasts.',
    vibe: 'Heritage • Engineered • Scientific',
    displayFont: "'IBM Plex Sans', sans-serif",
    bodyFont: "'IBM Plex Sans', sans-serif",
    codeFont: "'IBM Plex Mono', monospace",
    tutorialFont: "'IBM Plex Serif', Georgia, serif",
    roles: {
      display: {
        roleName: 'Display & Gamification (XP, Map Nodes, Streaks)',
        fontFamily: 'IBM Plex Sans (Industrial)',
        category: 'sans',
        description: 'Authoritative technical sans developed specifically for IBM research and computing.',
      },
      ui: {
        roleName: 'General App Interface (Buttons, Menus, Quizzes)',
        fontFamily: 'IBM Plex Sans (Interface)',
        category: 'sans',
        description: 'Crisp, upright letterforms that render with razor-sharp precision in menus and buttons.',
      },
      tutorial: {
        roleName: 'Detailed Tutorial Reading (Articles & Notes)',
        fontFamily: 'IBM Plex Serif (Research)',
        category: 'serif',
        description: 'Contemporary editorial serif built for academic monographs and technical papers.',
      },
      code: {
        roleName: 'Code Snippets, Mobile IDE & Keycaps',
        fontFamily: 'IBM Plex Mono (Mainframe)',
        category: 'mono',
        description: 'Engineered terminal monospaced typeface with deliberate, legible operator symbols.',
      },
    },
    sampleHeadline: 'Architecture: Bytecode & Virtual Machine',
    sampleParagraph:
      'The Kotlin compiler compiles source into standard JVM bytecode instructions. Stack execution frames and heap allocations follow standardized specification protocols.',
    sampleCode:
      'fun dispatchOpcode(op: Opcode): ExecutionResult {\n  return VMContext.execute(op.instructionCode)\n}',
  },
  {
    id: 'tokyo-horizon',
    name: 'Tokyo Cyber & Horizon',
    badge: 'NEO-GEOMETRIC',
    formula: 'FUTURISTIC • CRISP SANS • NEO-SANS • LIGATURE MONO',
    tagline: 'Sharp futuristic Tokyo robotics aesthetic with Sora & Fira Code ligatures',
    description:
      'Inspired by Tokyo tech incubators, mecha aesthetics, and cutting-edge software HUDs. Sora delivers crisp, futuristic geometric personality in headers and reading, backed by Fira Code programming ligatures for operators like -> and =>.',
    bestFor: 'Modern Android app developers, creative technologists, and developers who love high-tech interfaces.',
    vibe: 'Futuristic • Precision • Aerodynamic',
    displayFont: "'Sora', sans-serif",
    bodyFont: "'Plus Jakarta Sans', sans-serif",
    codeFont: "'Fira Code', monospace",
    tutorialFont: "'Sora', sans-serif",
    roles: {
      display: {
        roleName: 'Display & Gamification (XP, Map Nodes, Streaks)',
        fontFamily: 'Sora (Futuristic Geometric)',
        category: 'sans',
        description: 'Bold, angular geometric proportions that command attention on milestones and maps.',
      },
      ui: {
        roleName: 'General App Interface (Buttons, Menus, Quizzes)',
        fontFamily: 'Plus Jakarta Sans (UI)',
        category: 'sans',
        description: 'High-contrast, clean sans that keeps interactive quiz cards and navigation effortless.',
      },
      tutorial: {
        roleName: 'Detailed Tutorial Reading (Articles & Notes)',
        fontFamily: 'Sora (Neo-Reading)',
        category: 'sans',
        description: 'Generous x-height and distinctive cuts make technical reading feel snappy and modern.',
      },
      code: {
        roleName: 'Code Snippets, Mobile IDE & Keycaps',
        fontFamily: 'Fira Code (Ligatures)',
        category: 'mono',
        description: 'Developer-beloved monospaced font with rich multi-character programming ligatures.',
      },
    },
    sampleHeadline: 'Reactive Streams: StateFlow & Channels',
    sampleParagraph:
      'Hot streams emit values independently of active collectors. StateFlow retains the current state in memory and conflates intermediate emissions seamlessly.',
    sampleCode:
      'private val _state = MutableStateFlow<UiState>(UiState.Loading)\nval state: StateFlow<UiState> = _state.asStateFlow()',
  },
  {
    id: 'vintage-storycraft',
    name: 'Vintage Editorial & Storycraft',
    badge: 'WARM SERIF',
    formula: 'SERIF • HUMANIST • SERIF • MONO',
    tagline: 'Warm Fraunces vintage serif + Figtree rounded humanist UI',
    description:
      'Brings artisanal craft and warmth. World titles and milestone celebrations use Fraunces (a quirky, warm 1970s-inspired display serif), paired with rounded Figtree UI and Literata book reading prose.',
    bestFor: 'Design-conscious learners, storytellers, and creative developers seeking warmth and charm.',
    vibe: 'Artisanal • Warm • Character-Rich',
    displayFont: "'Fraunces', Georgia, serif",
    bodyFont: "'Figtree', sans-serif",
    codeFont: "'JetBrains Mono', monospace",
    tutorialFont: "'Literata', Georgia, serif",
    roles: {
      display: {
        roleName: 'Display & Gamification (XP, Map Nodes, Streaks)',
        fontFamily: 'Fraunces (Warm Vintage Serif)',
        category: 'serif',
        description: 'Expressive variable serif with organic warmth, soft serifs, and handcrafted appeal.',
      },
      ui: {
        roleName: 'General App Interface (Buttons, Menus, Quizzes)',
        fontFamily: 'Figtree (Humanist Sans)',
        category: 'sans',
        description: 'Approachable rounded letterforms that make navigation and quiz answers feel welcoming.',
      },
      tutorial: {
        roleName: 'Detailed Tutorial Reading (Articles & Notes)',
        fontFamily: 'Literata (Editorial Serif)',
        category: 'serif',
        description: 'Literary cadence that gives programming essays the feeling of reading a beautifully bound book.',
      },
      code: {
        roleName: 'Code Snippets, Mobile IDE & Keycaps',
        fontFamily: 'JetBrains Mono (Mono)',
        category: 'mono',
        description: 'Crisp, modern code rendering providing functional balance to the vintage headings.',
      },
    },
    sampleHeadline: 'A Tale of Two Builders: DSLs in Kotlin',
    sampleParagraph:
      'Type-safe builders leverage function literals with receiver. By combining extension functions with lambdas, Kotlin allows you to craft domain-specific languages of sheer elegance.',
    sampleCode: 'fun html(init: HTML.() -> Unit): HTML {\n  return HTML().apply(init)\n}',
  },
  {
    id: 'friendly-beginner',
    name: 'Warm & Friendly Approachable',
    badge: 'DUOLINGO VIBE',
    formula: 'ROUNDED • HUMANIST • HUMANIST • MONO',
    tagline: 'Soft, rounded letterforms that make code inviting',
    description:
      'Designed to reduce cognitive intimidation. Uses Figtree for smooth, friendly typography that feels gentle and accessible to first-time programmers and young developers.',
    bestFor: 'Beginners, juniors, and learners who prefer welcoming, humanized learning environments.',
    vibe: 'Warm • Approachable • Cheerful',
    displayFont: "'Outfit', sans-serif",
    bodyFont: "'Figtree', sans-serif",
    codeFont: "'JetBrains Mono', monospace",
    tutorialFont: "'Figtree', sans-serif",
    roles: {
      display: {
        roleName: 'Display & Gamification (XP, Map Nodes, Streaks)',
        fontFamily: 'Outfit (Bold Geometric Sans)',
        category: 'sans',
        description: 'Cheery display headers that celebrate progress milestones.',
      },
      ui: {
        roleName: 'General App Interface (Buttons, Menus, Quizzes)',
        fontFamily: 'Figtree (Rounded Sans)',
        category: 'sans',
        description: 'Curved terminals that soften UI density without compromising clarity.',
      },
      tutorial: {
        roleName: 'Detailed Tutorial Reading (Articles & Notes)',
        fontFamily: 'Figtree (Approachable Sans)',
        category: 'sans',
        description: 'Gentle reading rhythm that keeps technical explanations friendly and engaging.',
      },
      code: {
        roleName: 'Code Snippets, Mobile IDE & Keycaps',
        fontFamily: 'JetBrains Mono (Friendly Mono)',
        category: 'mono',
        description: 'Crisp code clarity with friendly keyword highlighting.',
      },
    },
    sampleHeadline: 'Getting Started: Your First Function',
    sampleParagraph:
      'Functions are simply small reusable building blocks. Think of them like recipes: you pass in ingredients (arguments) and get a delicious result!',
    sampleCode: 'fun greetLearner(name: String) {\n  println("Welcome to Kotlin, $name!")\n}',
  },
  {
    id: 'paperback-digest',
    name: 'Paperback Digest & Editorial',
    badge: 'WARM PAPERBACK',
    formula: 'CALLIGRAPHIC SERIF • HUMANIST • NOVEL SERIF • MONO',
    tagline: 'Contemporary calligraphic brushed serif for extended reading comfort',
    description:
      'Transforms technical Kotlin lessons into a comfortable, warm paperback book. Lora is an award-winning contemporary serif with brushed calligraphic roots that eliminates reading fatigue during deep evening study.',
    bestFor: 'Night reading, weekend study marathons, and learners who absorb concepts best through book typography.',
    vibe: 'Comforting • Calligraphic • Warm',
    displayFont: "'Lora', Georgia, serif",
    bodyFont: "'Figtree', sans-serif",
    codeFont: "'JetBrains Mono', monospace",
    tutorialFont: "'Lora', Georgia, serif",
    roles: {
      display: {
        roleName: 'Display & Gamification (XP, Map Nodes, Streaks)',
        fontFamily: 'Lora (Brushed Display)',
        category: 'serif',
        description: 'Warm, calligraphic display serif that evokes literary journal and chapter headers.',
      },
      ui: {
        roleName: 'General App Interface (Buttons, Menus, Quizzes)',
        fontFamily: 'Figtree (Friendly UI)',
        category: 'sans',
        description: 'Softened curves that make quiz selections, buttons, and badges feel welcoming.',
      },
      tutorial: {
        roleName: 'Detailed Tutorial Reading (Articles & Notes)',
        fontFamily: 'Lora (Digest Reading)',
        category: 'serif',
        description: 'Optimized for continuous long-form reading with gentle curves and balanced stroke contrast.',
      },
      code: {
        roleName: 'Code Snippets, Mobile IDE & Keycaps',
        fontFamily: 'JetBrains Mono (Crisp Mono)',
        category: 'mono',
        description: 'Precise, modern monospace providing striking functional clarity alongside literary text.',
      },
    },
    sampleHeadline: 'Design Patterns: The Singleton Object',
    sampleParagraph:
      'In Kotlin, declaring an object creates a thread-safe singleton automatically upon first access. There is no need for synchronized blocks or double-checked locking.',
    sampleCode:
      'object DatabaseManager {\n  val connection = establishPool(maxConnections = 10)\n}',
  },
  {
    id: 'cognitive-clarity',
    name: 'Cognitive Velocity & Clarity',
    badge: 'HIGH READING SPEED',
    formula: 'EXPANSIVE • EXPANSIVE • EXPANSIVE • MONO',
    tagline: 'Scientifically engineered to reduce visual crowding',
    description:
      'Powered by Lexend, a typeface scientifically proven to improve reading velocity by customizing character spacing and aperture openness. Ideal for fast scanners and neurodivergent learners.',
    bestFor: 'Rapid quiz solving, speed runs, learners with dyslexia, or high eye fatigue.',
    vibe: 'Expansive • High Velocity • Clear',
    displayFont: "'Lexend', sans-serif",
    bodyFont: "'Lexend', sans-serif",
    codeFont: "'JetBrains Mono', monospace",
    tutorialFont: "'Lexend', sans-serif",
    roles: {
      display: {
        roleName: 'Display & Gamification (XP, Map Nodes, Streaks)',
        fontFamily: 'Lexend (Expansive Sans)',
        category: 'sans',
        description: 'Expansive letterforms that leap off the screen with instant recognition.',
      },
      ui: {
        roleName: 'General App Interface (Buttons, Menus, Quizzes)',
        fontFamily: 'Lexend (Open Aperture)',
        category: 'sans',
        description: 'Looser letter spacing helps the eyes glide quickly over quiz choices.',
      },
      tutorial: {
        roleName: 'Detailed Tutorial Reading (Articles & Notes)',
        fontFamily: 'Lexend (Reading Speed)',
        category: 'sans',
        description: 'Mathematically adjusted character widths that reduce reading friction and cognitive strain.',
      },
      code: {
        roleName: 'Code Snippets, Mobile IDE & Keycaps',
        fontFamily: 'JetBrains Mono (Mono)',
        category: 'mono',
        description: 'Fixed-width code tokens aligned with high-velocity prose.',
      },
    },
    sampleHeadline: 'Syntax Sprint: Safe Calls & Elvis Operator',
    sampleParagraph:
      'Kotlin eliminates NullPointerExceptions using safe-call operators. The Elvis operator provides a resilient fallback whenever a nullable expression evaluates to null.',
    sampleCode: 'val username: String? = null\nval display = username ?: "Guest"',
  },
];

const STORAGE_KEY = 'codedo_font_combo_id';
export const DEFAULT_FONT_COMBO_ID = 'kotlin-native';

/**
 * Returns the currently persisted or default font combo
 */
export function getSavedFontCombo(): FontCombo {
  try {
    const savedId = localStorage.getItem(STORAGE_KEY);
    if (savedId) {
      const match = RECOMMENDED_FONT_COMBOS.find((c) => c.id === savedId);
      if (match) return match;
    }
  } catch {
    // Ignore storage issues
  }
  return RECOMMENDED_FONT_COMBOS[0];
}

/**
 * Applies CSS variables directly to document.documentElement
 * so all components and views update immediately.
 */
export function applyFontComboToDom(combo: FontCombo): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  root.style.setProperty('--font-display', combo.displayFont);
  root.style.setProperty('--font-body', combo.bodyFont);
  root.style.setProperty('--font-code', combo.codeFont);
  root.style.setProperty('--font-tutorial', combo.tutorialFont);

  // Backward-compatible direct variables
  root.style.setProperty('--font-outfit', combo.displayFont);
  root.style.setProperty('--font-jakarta', combo.bodyFont);
  root.style.setProperty('--font-mono', combo.codeFont);

  // Set active combo attribute on root for targeted CSS if needed
  root.setAttribute('data-font-combo', combo.id);
}

/**
 * Persists the selected combo and applies it to the DOM
 */
export function saveAndApplyFontCombo(comboId: string): FontCombo {
  const match = RECOMMENDED_FONT_COMBOS.find((c) => c.id === comboId) || RECOMMENDED_FONT_COMBOS[0];
  try {
    localStorage.setItem(STORAGE_KEY, match.id);
  } catch {
    // Ignore
  }
  applyFontComboToDom(match);
  return match;
}

/**
 * Resets typography back to Modern Kotlin Native (Default)
 */
export function resetFontComboToDefault(): FontCombo {
  return saveAndApplyFontCombo(DEFAULT_FONT_COMBO_ID);
}
