import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const mobileSecurity = [
  ["Tomoro Account Takeover Android", "Mobile security assessment and Android application analysis.", "tomoro-account-takeover-android", `${BASE}/images/projects/mobile-security/tomoro.jpg`],
  ["Android Unity Game Hack", "Unity Android reverse engineering and emulator-detection research.", "android-unity-game-hack", ""],
  ["Android Backdoor", "Android application security learning project focused on defensive analysis.", "android-backdoor", ""],
  ["Manipulating Smali Code", "Controlled Smali inspection and Android bytecode modification study.", "manipulating-smali-code", `${BASE}/images/projects/mobile-security/smali.jpg`],
  ["Reverse Engineering APK File", "APK structure inspection and runtime analysis in an emulator.", "reverse-engineering-apk-file", `${BASE}/images/projects/mobile-security/reverse-engineering.jpg`],
  ["RootLab", "Self-built Android emulator testing environment with multiple root implementations.", "rootlab", ""],
];
const mobileDevelopment = [
  ["Self Order Application", "Customer self-order workflow with menus, cart, payment, and order tracking.", "self-order-application", `${BASE}/images/projects/mobile-development/self-order-application.png`],
  ["Point of Sale with Hardware Pager", "Android POS system paired with an IoT pager for order notifications.", "point-of-sale-with-hardware-pager", `${BASE}/images/projects/mobile-development/point-of-sale-with-hardware-pager.png`],
  ["BRImo Mobile Banking App", "Android investment features, gRPC integration, gold, recap, and DPLK workflows.", "brimo-mobile-banking", ""],
  ["Flit Flight Booking App", "Kotlin flight booking app with round-trip booking, authentication, and team leadership.", "flit-flight-booking-app", `${BASE}/images/projects/mobile-development/flit-flight-booking-app.png`],
  ["Raih Peduli", "Golang REST API backend work for a social campaign application.", "raih-peduli", ""],
  ["Point of Sale", "Integrated distribution and POS application for backend/frontend data synchronization.", "point-of-sale", `${BASE}/images/projects/mobile-development/point-of-sale.jpeg`],
];
function Cards({ items, start }: { items: string[][]; start: number }) { return <div className="project-grid">{items.map(([title, text, slug, image], index) => <article className="card" key={title}>{image && <img className="project-image" src={image} alt="" />}<div className="index">PROJECT-{String(start + index + 1).padStart(2, "0")}</div><h3>{title}</h3><p>{text}</p><Link className="project-link" href={`/projects/${slug}`}>View project ↗</Link></article>)}</div>; }
export default function ProjectsPage() { return <><header className="top"><div className="wrap nav"><Link className="brand" href="/">irvan<span>@portfolio</span>:~$</Link><nav><Link href="/">home</Link><Link href="/projects">projects</Link><Link href="/certifications">certifications</Link><Link href="/#experience">experience</Link><Link href="/#contact">contact</Link></nav><span className="status">PROJECT SHOWCASE</span></div></header><main><div className="wrap page-heading"><div className="kicker">06 / project archive</div><h1>Project <em>showcase.</em></h1><p className="lead">A self-hosted archive of mobile security and mobile development work.</p></div><section><div className="wrap"><div className="kicker">MOBILE SECURITY</div><h2>Security research & analysis</h2><Cards items={mobileSecurity} start={0} /></div></section><section><div className="wrap"><div className="kicker">MOBILE DEVELOPMENT</div><h2>Applications & systems</h2><Cards items={mobileDevelopment} start={6} /></div></section></main><footer className="wrap"><span>© {new Date().getFullYear()} Irvan Wijaya</span><Link href="/">Return home ↩</Link></footer></>; }
