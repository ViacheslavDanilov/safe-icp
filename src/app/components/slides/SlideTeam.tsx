import Image from 'next/image';

const groups = [
  {
    institution: 'Institute of Photonic Sciences',
    members: [
      {
        first: 'Turgut',
        last: 'Durduran',
        photo: 'turgut-durduran.png',
        role: 'Principal Investigator',
      },
      {
        first: 'Mirko',
        last: 'Fornasier',
        photo: 'mirko-fornasier.png',
        role: 'Doctoral Researcher',
      },
      { first: 'Carolina', last: 'Vega', photo: 'carolina-vega.png', role: 'Doctoral Researcher' },
      {
        first: 'Monica',
        last: 'Torrecilla',
        photo: 'monica-torrecilla.png',
        role: 'Doctoral Researcher',
      },
    ],
  },
  {
    institution: 'Pompeu Fabra University',
    members: [
      {
        first: 'Viacheslav',
        last: 'Danilov',
        photo: 'viacheslav-danilov.webp',
        role: 'Research Scientist',
      },
      { first: 'Gemma', last: 'Piella', photo: 'gemma-piella.png', role: 'Professor' },
      { first: 'Anton', last: 'Makoveev', photo: 'anton-makoveev.png', role: 'Research Scientist' },
    ],
  },
  {
    institution: "Vall d'Hebron Hospital",
    members: [
      {
        first: 'Maria',
        last: 'Poca',
        photo: 'maria-poca.png',
        alt: 'Maria A. Poca',
        role: 'Head of Neurosurgery',
      },
      { first: 'Juan', last: 'Sahuquillo', photo: 'juan-sahuquillo.png', role: 'Neurosurgeon' },
      {
        first: 'Murad',
        last: 'Al-Nusaif',
        photo: 'murad-al-nusaif.png',
        role: 'Doctoral Researcher',
      },
    ],
  },
  {
    institution: 'ProCareLight',
    members: [
      { first: 'Youcef', last: 'Lebour', photo: 'youcef-lebour.png', role: 'Research Engineer' },
    ],
  },
];

export default function SlideTeam() {
  return (
    <section className="slide slide-team" aria-labelledby="team-title">
      <div className="slide-content team-layout">
        <div className="team-header">
          <p className="hero-meta animate-in stagger-1">The Team</p>

          <h2 className="slide-title animate-in stagger-2" id="team-title">
            The people behind <span className="text-accent">SafeICP</span>
          </h2>

          <p className="slide-lead animate-in stagger-3">
            Researchers, clinicians, and engineers from four institutions, each contributing to the
            domain
          </p>
        </div>

        <div role="group" className="team-grid" aria-label="Team members">
          {groups.map((group, index) => (
            <div key={group.institution} className={`team-group animate-in stagger-${index + 4}`}>
              <p className="label team-group-label">{group.institution}</p>
              <div className="team-members">
                {group.members.map(({ first, last, photo, alt, role }) => (
                  <figure key={last} className="team-member">
                    <Image
                      className="team-avatar"
                      src={`/slide-team/${photo}`}
                      alt={alt ?? `${first} ${last}`}
                      width={200}
                      height={200}
                    />
                    <figcaption>
                      <p className="card-title team-name">
                        {first}
                        <br />
                        {last}
                      </p>
                      <p className="team-role">{role}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
