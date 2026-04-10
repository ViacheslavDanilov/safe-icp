export default function SlideModelZoo() {
  return (
    <section className="slide slide-modelzoo slide-alt" aria-labelledby="modelzoo-title">
      <div className="slide-content modelzoo-layout">
        <div className="modelzoo-copy">
          <p className="hero-meta animate-in stagger-1">Models / Benchmark</p>

          <h2 className="modelzoo-title animate-in stagger-2" id="modelzoo-title">
            10 time series architectures
            <span className="modelzoo-title-accent">A systematic comparison</span>
          </h2>

          <p className="modelzoo-lead animate-in stagger-3">
            We evaluate models spanning four architectural families: RNN hybrids, convolutional
            networks, transformers, and kernel-based methods. All are implemented via the TSAI
            library and trained with identical hyperparameters for a fair comparison.
          </p>

          <div className="modelzoo-config animate-in stagger-4" aria-label="Training configuration">
            <p className="modelzoo-config-label">Training configuration</p>
            <div className="modelzoo-config-grid">
              <span>
                <strong>Optimizer:</strong> Adam
              </span>
              <span>
                <strong>Loss:</strong> MAE
              </span>
              <span>
                <strong>LR:</strong> 0.0001
              </span>
              <span>
                <strong>Batch:</strong> 128
              </span>
              <span>
                <strong>Dropout:</strong> 0.25
              </span>
              <span>
                <strong>Epochs:</strong> 5
              </span>
            </div>
          </div>
        </div>

        <div className="modelzoo-table-wrap animate-in stagger-5">
          <div className="modelzoo-table" role="table" aria-label="Model comparison">
            <div className="modelzoo-thead" role="row">
              <span role="columnheader">Family</span>
              <span role="columnheader">Model</span>
              <span role="columnheader">Year</span>
              <span role="columnheader">Params, k</span>
              <span role="columnheader">MACs, M</span>
            </div>

            <div className="modelzoo-tbody">
              <div className="modelzoo-row" role="row">
                <span className="modelzoo-family modelzoo-family-rnn" role="cell">RNN</span>
                <span className="modelzoo-model" role="cell">LSTM-FCN</span>
                <span role="cell">2017</span>
                <span role="cell">785.1</span>
                <span role="cell">318.9</span>
              </div>
              <div className="modelzoo-row" role="row">
                <span className="modelzoo-family modelzoo-family-rnn" role="cell">RNN</span>
                <span className="modelzoo-model" role="cell">GRU-FCN</span>
                <span role="cell">2018</span>
                <span role="cell">654.9</span>
                <span role="cell">318.8</span>
              </div>

              <div className="modelzoo-row modelzoo-row-best" role="row">
                <span className="modelzoo-family modelzoo-family-cnn" role="cell">CNN</span>
                <span className="modelzoo-model" role="cell">mWDN</span>
                <span role="cell">2018</span>
                <span role="cell">4,239.2</span>
                <span role="cell">553.6</span>
              </div>
              <div className="modelzoo-row" role="row">
                <span className="modelzoo-family modelzoo-family-cnn" role="cell">CNN</span>
                <span className="modelzoo-model" role="cell">TCN</span>
                <span role="cell">2018</span>
                <span role="cell">66.7</span>
                <span role="cell">187.8</span>
              </div>
              <div className="modelzoo-row" role="row">
                <span className="modelzoo-family modelzoo-family-cnn" role="cell">CNN</span>
                <span className="modelzoo-model" role="cell">ResCNN</span>
                <span role="cell">2019</span>
                <span role="cell">256.1</span>
                <span role="cell">309.1</span>
              </div>
              <div className="modelzoo-row" role="row">
                <span className="modelzoo-family modelzoo-family-cnn" role="cell">CNN</span>
                <span className="modelzoo-model" role="cell">InceptionTime</span>
                <span role="cell">2019</span>
                <span role="cell">388.5</span>
                <span role="cell">470.6</span>
              </div>
              <div className="modelzoo-row" role="row">
                <span className="modelzoo-family modelzoo-family-cnn" role="cell">CNN</span>
                <span className="modelzoo-model" role="cell">XceptionTime</span>
                <span role="cell">2019</span>
                <span role="cell">399.1</span>
                <span role="cell">294.1</span>
              </div>
              <div className="modelzoo-row" role="row">
                <span className="modelzoo-family modelzoo-family-cnn" role="cell">CNN</span>
                <span className="modelzoo-model" role="cell">XCM</span>
                <span role="cell">2021</span>
                <span role="cell">615.9</span>
                <span role="cell">740.2</span>
              </div>

              <div className="modelzoo-row" role="row">
                <span className="modelzoo-family modelzoo-family-transformer" role="cell">Transf.</span>
                <span className="modelzoo-model" role="cell">TST</span>
                <span role="cell">2021</span>
                <span role="cell">703.4</span>
                <span role="cell">1,652.7</span>
              </div>

              <div className="modelzoo-row" role="row">
                <span className="modelzoo-family modelzoo-family-kernel" role="cell">Kernel</span>
                <span className="modelzoo-model" role="cell">MultiRocket</span>
                <span role="cell">2022</span>
                <span role="cell">149.2</span>
                <span role="cell">0.1</span>
              </div>
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
