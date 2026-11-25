import Link from "next/link";
import { ProjectCards } from "@/components/ProjectCards";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const mobileSecurity = [
  ["How Hard Can You Make It? · VM-Based Flattening", "Leaning on AI to reverse native libs raised a question: how much RE difficulty can you add back? Measuring plain vs. amice's obfuscation and VM-flattening in the binary, up to where real code virtualization begins.", "amice-vm-based-flattening", ""],
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
export default function ProjectsPage() { return <><header className="top"><div className="wrap nav"><Link className="brand" href="/">irvan<span>@portfolio</span>:~$</Link><nav><Link href="/">home</Link><Link href="/projects">projects</Link><Link href="/certifications">certifications</Link><Link href="/#experience">experience</Link><Link href="/#contact">contact</Link></nav><span className="status">PROJECT SHOWCASE</span></div></header><main><div className="wrap page-heading"><div className="kicker">06 / project archive</div><h1>Project <em>showcase.</em></h1><p className="lead">A self-hosted archive of mobile security and mobile development work.</p></div><section><div className="wrap"><div className="kicker">MOBILE SECURITY</div><h2>Security research & analysis</h2><ProjectCards items={mobileSecurity} start={0} /></div></section><section><div className="wrap"><div className="kicker">MOBILE DEVELOPMENT</div><h2>Applications & systems</h2><ProjectCards items={mobileDevelopment} start={7} /></div></section></main><footer className="wrap"><span>© {new Date().getFullYear()} Irvan Wijaya</span><Link href="/">Return home ↩</Link></footer></>; }
