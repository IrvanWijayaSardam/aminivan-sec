import Link from "next/link";

const certificates = [
  ["Certified AppSec Pentester (CAPen)", "The SecOps Group", "/certificates/capen.pdf", "#/portfolio-collections/certificate/certified-appsec-pentester-capen"],
  ["Certified Mobile Pentester (CMPen-Android)", "The SecOps Group", "/certificates/cmpen-android.pdf", "#/portfolio-collections/certificate/certified-mobile-pentester-cmpen-android"],
  ["Cyber Security Engineer", "Merdeka Siber", "/certificates/cyber-security-engineer.pdf", "#/portfolio-collections/certificate/merdeka-siber"],
  ["100% Mastering Golang Programming", "Training certificate", "#", "#/portfolio-collections/certificate/100-mastering-golang-programming"],
  ["Android Engineering Wave 3", "Training certificate", "#", "#/portfolio-collections/certificate/android-engineering-wave-3"],
  ["Red Hat Enterprise Linux System Administration I", "Red Hat training", "#", "#/portfolio-collections/certificate/redhat-enterprise-linux-system-administration-i"],
];

export default function CertificationsPage() {
  return <><header className="top"><div className="wrap nav"><Link className="brand" href="/">irvan<span>@portfolio</span>:~$</Link><nav><Link href="/">home</Link><Link href="/projects">projects</Link><Link href="/certifications">certifications</Link><Link href="/#experience">experience</Link><Link href="/#contact">contact</Link></nav><span className="status">CREDENTIAL ARCHIVE</span></div></header><main><div className="wrap page-heading"><div className="kicker">07 / credentials</div><h1>Certification <em>archive.</em></h1><p className="lead">Professional and training credentials. Local files are available where provided; additional credentials are listed for reference until their original files are added.</p></div><section><div className="wrap project-grid">{certificates.map(([title, issuer, file, source], index) => <article className="card" key={title}><div className="index">CERT-{String(index + 1).padStart(2, "0")}</div><h3>{title}</h3><p>{issuer}</p><div className="actions">{file !== "#" && <a className="btn" href={file} target="_blank" rel="noreferrer">Open PDF ↗</a>}<a className="btn secondary" href={source} target="_blank" rel="noreferrer">Original page ↗</a></div></article>)}</div></section></main><footer className="wrap"><span>© {new Date().getFullYear()} Irvan Wijaya</span><Link href="/">Return home ↩</Link></footer></>;
}
