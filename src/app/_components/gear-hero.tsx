import Image from "next/image";

export function GearHero() {
  return (
    <div className="hero-machine reveal-up delay-1">
      <div className="hero-machine-frame">
        <div className="hero-image-wrap">
          <Image
            src="/engine7.jpg"
            alt="Industrial engine component"
            fill
            priority
            className="hero-image"
            sizes="(max-width: 960px) 100vw, 42vw"
          />
        </div>

        <div className="hero-machine-ring hero-machine-ring-primary" />
        <div className="hero-machine-ring hero-machine-ring-secondary" />

        <div className="hero-image-glass">
          <span className="hero-image-kicker">Industrial Assembly</span>
          <strong>Engineered components for high-demand service environments</strong>
        </div>

        <div className="hero-machine-card">
          <span className="hero-machine-card-label">Supply Focus</span>
          <p>Precision spare parts and fabricated assemblies for high-demand sectors.</p>
        </div>

        <div className="machine-footer reveal-up delay-2">
          <div className="machine-data">
            <p>SYSTEM_ID: AVERON_01</p>
            <p>STATUS: SYNCHRONIZED</p>
            <p>ASSET: ENGINE4</p>
          </div>
          <span className="machine-pill">Live Sync</span>
        </div>
      </div>

      <div className="hero-machine-caption">
        <span className="hero-machine-caption-line" />
        <p>Built for marine, power, and oil & gas operating environments.</p>
      </div>
    </div>
  );
}
