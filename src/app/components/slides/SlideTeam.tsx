import Image from 'next/image';

export default function SlideTeam() {
  return (
    <section className="slide slide-team slide-alt" aria-labelledby="team-title">
      <div className="slide-content team-layout">
        <div className="team-header">
          <p className="hero-meta animate-in stagger-1">The Team</p>

          <h2 className="team-title animate-in stagger-2" id="team-title">
            The people behind <span className="team-title-accent">SafeICP</span>
          </h2>

          <p className="team-lead animate-in stagger-3">
            Researchers, clinicians, and engineers from four institutions, each contributing to the
            domain
          </p>
        </div>

        <div className="team-grid" aria-label="Team members">
          <div className="team-group animate-in stagger-4">
            <p className="team-group-label">Institute of Photonic Sciences</p>
            <div className="team-members">
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/turgut-durduran.png"
                  alt="Turgut Durduran"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Turgut
                    <br />
                    Durduran
                  </p>
                  <p className="team-role">Principal Investigator</p>
                </figcaption>
              </figure>
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/mirko-fornasier.png"
                  alt="Mirko Fornasier"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Mirko
                    <br />
                    Fornasier
                  </p>
                  <p className="team-role">Doctoral Researcher</p>
                </figcaption>
              </figure>
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/carolina-vega.png"
                  alt="Carolina Vega"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Carolina
                    <br />
                    Vega
                  </p>
                  <p className="team-role">Doctoral Researcher</p>
                </figcaption>
              </figure>
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/monica-torrecilla.png"
                  alt="Monica Torrecilla"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Monica
                    <br />
                    Torrecilla
                  </p>
                  <p className="team-role">Doctoral Researcher</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="team-group animate-in stagger-5">
            <p className="team-group-label">Pompeu Fabra University</p>
            <div className="team-members">
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/viacheslav-danilov.png"
                  alt="Viacheslav Danilov"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Viacheslav
                    <br />
                    Danilov
                  </p>
                  <p className="team-role">Research Scientist</p>
                </figcaption>
              </figure>
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/gemma-piella.png"
                  alt="Gemma Piella"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Gemma
                    <br />
                    Piella
                  </p>
                  <p className="team-role">Professor</p>
                </figcaption>
              </figure>
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/anton-makoveev.png"
                  alt="Anton Makoveev"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Anton
                    <br />
                    Makoveev
                  </p>
                  <p className="team-role">Postdoctoral Researcher</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="team-group animate-in stagger-6">
            <p className="team-group-label">Vall d&apos;Hebron Hospital</p>
            <div className="team-members">
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/maria-poca.png"
                  alt="Maria A. Poca"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Maria
                    <br />
                    Poca
                  </p>
                  <p className="team-role">Head of Neurosurgery</p>
                </figcaption>
              </figure>
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/juan-sahuquillo.png"
                  alt="Juan Sahuquillo"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Juan
                    <br />
                    Sahuquillo
                  </p>
                  <p className="team-role">Neurosurgeon</p>
                </figcaption>
              </figure>
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/murad-al-nusaif.png"
                  alt="Murad Al-Nusaif"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Murad
                    <br />
                    Al-Nusaif
                  </p>
                  <p className="team-role">Doctoral Researcher</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="team-group animate-in stagger-7">
            <p className="team-group-label">ProCareLight</p>
            <div className="team-members">
              <figure className="team-member">
                <Image
                  className="team-avatar"
                  src="/slide-team/youcef-lebour.png"
                  alt="Youcef Lebour"
                  width={200}
                  height={200}
                />
                <figcaption>
                  <p className="team-name">
                    Youcef
                    <br />
                    Lebour
                  </p>
                  <p className="team-role">Research Engineer</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
