const fonts = [
  {
    id: 'source-serif',
    name: 'Source Serif 4',
    tag: 'Serif',
    desc: 'Screen-optimized, shares design DNA with IBM Plex Sans',
    fontVar: 'var(--font-source-serif)',
  },
  {
    id: 'playfair',
    name: 'Playfair Display',
    tag: 'Serif',
    desc: 'Classic academic editorial, strong thick/thin contrast',
    fontVar: 'var(--font-playfair)',
  },
  {
    id: 'dm-serif',
    name: 'DM Serif Display',
    tag: 'Serif',
    desc: 'Modern and lighter, contemporary editorial feel',
    fontVar: 'var(--font-dm-serif)',
  },
  {
    id: 'outfit',
    name: 'Outfit',
    tag: 'Sans-serif',
    desc: 'Clean grotesque, distinctive letterforms, projector-friendly',
    fontVar: 'var(--font-outfit)',
  },
  {
    id: 'jakarta',
    name: 'Plus Jakarta Sans',
    tag: 'Sans-serif',
    desc: 'Premium geometric grotesque, modern and authoritative',
    fontVar: 'var(--font-jakarta)',
  },
  {
    id: 'space-grotesk',
    name: 'Space Grotesk',
    tag: 'Sans-serif',
    desc: 'Technical grotesque, engineered feel — suits medical device context',
    fontVar: 'var(--font-space-grotesk)',
  },
  {
    id: 'inter',
    name: 'Inter',
    tag: 'Sans-serif',
    desc: 'Previous font — neutral baseline for comparison',
    fontVar: 'var(--font-inter)',
  },
];

export default function SlideFontPreview() {
  return (
    <section className="slide slide-font-preview" aria-label="Font preview for heading selection">
      <div className="font-preview-layout">
        <div className="font-preview-header">
          <p className="hero-meta">Font Preview</p>
          <p className="font-preview-instruction">
            Heading candidates — body text stays in IBM Plex Sans
          </p>
        </div>

        <ol className="font-preview-list" aria-label="Font options">
          {fonts.map((font, i) => (
            <li key={font.id} className="font-preview-row">
              <div className="font-preview-meta">
                <span className="font-preview-index">0{i + 1}</span>
                <span className="font-preview-name">{font.name}</span>
                <span className="font-preview-tag">{font.tag}</span>
                <span className="font-preview-desc">{font.desc}</span>
              </div>
              <p
                className="font-preview-sample"
                style={{ fontFamily: `${font.fontVar}, serif` }}
              >
                A Safe Window Into{' '}
                <span className="font-preview-accent">Brain Pressure</span>
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
