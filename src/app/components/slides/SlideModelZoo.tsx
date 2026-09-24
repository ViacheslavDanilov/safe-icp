const config = [
  ['Optimizer', 'Adam'],
  ['Loss', 'MAE'],
  ['LR', '0.0001'],
  ['Batch', '128'],
  ['Dropout', '0.25'],
  ['Epochs', '5'],
];

const familyLabels = { rnn: 'RNN', cnn: 'CNN', transformer: 'Transf.', kernel: 'Kernel' };

// Params in thousands, MACs in millions (see the footnote on the slide).
const models: {
  family: keyof typeof familyLabels;
  name: string;
  year: number;
  params: string;
  macs: string;
}[] = [
  { family: 'rnn', name: 'LSTM-FCN', year: 2017, params: '785', macs: '319' },
  { family: 'rnn', name: 'GRU-FCN', year: 2018, params: '655', macs: '319' },
  { family: 'cnn', name: 'mWDN', year: 2018, params: '4,239', macs: '554' },
  { family: 'cnn', name: 'TCN', year: 2018, params: '67', macs: '188' },
  { family: 'cnn', name: 'ResCNN', year: 2019, params: '256', macs: '309' },
  { family: 'cnn', name: 'InceptionTime', year: 2019, params: '389', macs: '471' },
  { family: 'cnn', name: 'XceptionTime', year: 2019, params: '399', macs: '294' },
  { family: 'cnn', name: 'XCM', year: 2021, params: '616', macs: '740' },
  { family: 'transformer', name: 'TST', year: 2021, params: '703', macs: '1,653' },
  { family: 'kernel', name: 'MultiRocket', year: 2022, params: '149', macs: '<1' },
];

export default function SlideModelZoo() {
  return (
    <section className="slide slide-modelzoo" aria-labelledby="modelzoo-title">
      <div className="slide-content modelzoo-layout">
        <div className="slide-copy">
          <p className="hero-meta animate-in stagger-1">Model Benchmark</p>

          <h2 className="slide-title animate-in stagger-2" id="modelzoo-title">
            10 time series architectures
            <span className="slide-title-accent">Trained under identical conditions</span>
          </h2>

          <p className="slide-lead animate-in stagger-3">
            We evaluate models spanning four architectural families: RNN hybrids, convolutional
            networks, transformers, and kernel-based methods. All are implemented via the TSAI
            library and trained with identical hyperparameters for a fair comparison.
          </p>

          <div
            role="group"
            className="card lift modelzoo-config animate-in stagger-4"
            aria-label="Training configuration"
          >
            <p className="label modelzoo-config-label">Training configuration</p>
            <div className="modelzoo-config-grid">
              {config.map(([name, value]) => (
                <span key={name}>
                  <strong>{`${name}:`}</strong>
                  {` ${value}`}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scrolls sideways on phones; focusable so the keyboard can scroll it too. */}
        <div
          className="modelzoo-table-wrap animate-in stagger-5"
          role="region"
          aria-label="Model comparison table"
          tabIndex={0}
        >
          <div className="card modelzoo-table" role="table" aria-label="Model comparison">
            <div className="modelzoo-thead" role="row">
              <span role="columnheader">Family</span>
              <span role="columnheader">Model</span>
              <span role="columnheader">Year</span>
              <span role="columnheader">Params, k</span>
              <span role="columnheader">MACs, M</span>
            </div>

            <div className="modelzoo-tbody" role="rowgroup">
              {models.map(({ family, name, year, params, macs }) => (
                <div key={name} className="modelzoo-row" role="row">
                  <span className={`modelzoo-family modelzoo-family-${family}`} role="cell">
                    {familyLabels[family]}
                  </span>
                  <span className="modelzoo-model" role="cell">
                    {name}
                  </span>
                  <span role="cell">{year}</span>
                  <span role="cell">{params}</span>
                  <span role="cell">{macs}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="modelzoo-footnote">
            Parameters = total learnable weights (thousands). MACs = multiply-accumulate operations
            per forward pass (millions).
          </p>
        </div>
      </div>
    </section>
  );
}
