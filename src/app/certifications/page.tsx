import Link from "next/link";

const certificates = [
  ["Certified AppSec Pentester (CAPen)", "The SecOps Group", "2025", "certified-appsec-pentester-capen"],
  ["Certified Mobile Pentester (CMPen-Android)", "The SecOps Group", "2024", "certified-mobile-pentester-cmpen-android"],
  ["Merdeka Siber", "Merdeka Siber", "2025", "merdeka-siber"],
  ["100% Mastering Golang Programming", "Alterra Academy", "January 2024", "100-mastering-golang-programming"],
  ["Android Engineering Wave 3", "Binar Academy", "2023", "android-engineering-wave-3"],
  ["Red Hat Enterprise Linux System Administration I", "Red Hat", "2023", "redhat-enterprise-linux-system-administration-i"],
];

export default function CertificationsPage() {
  return <><header className="top"><div className="wrap nav"><Link className="brand" href="/">irvan<span>@portfolio</span>:~$</Link><nav><Link href="/">home</Link><Link href="/projects">projects</Link><Link href="/certifications">certifications</Link><Link href="/#experience">experience</Link><Link href="/#contact">contact</Link></nav><span className="status">CREDENTIAL ARCHIVE</span></div></header><main><div className="wrap page-heading"><div className="kicker">07 / credentials</div><h1>Certification <em>archive.</em></h1><p className="lead">Professional and training credentials. Click any certificate to view details.</p></div><section><div className="wrap project-grid">{certificates.map(([title, issuer, date, slug], index) => <article className="card" key={title}><div className="index">CERT-{String(index + 1).padStart(2, "0")}</div><h3>{title}</h3><p>{issuer}</p><div className="tags"><span className="tag">{date}</span></div><Link className="project-link" href={`/certifications/${slug}`}>View certificate ↗</Link></article>)}</div></section></main><footer className="wrap"><span>© {new Date().getFullYear()} Irvan Wijaya</span><Link href="/">Return home ↩</Link></footer></>;
}
