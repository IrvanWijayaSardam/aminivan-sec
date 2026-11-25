import type { DetailDialogProps } from "@/components/DetailDialog";

export type DialogData = Omit<DetailDialogProps, "id">;

export const experienceDialogs: Record<string, DialogData> = {
  doverunner: {
    title: "Technical Support Engineer · DoveRunner Inc",
    subtitle: "Contract, San Jose, California",
    meta: "2025, Present",
    overview: "Deliver technical support for mobile security products, from first response to root-cause analysis and escalation, while collaborating with engineering and sales teams.",
    whatIDid: [
      "Provided technical support by troubleshooting application and mobile security product issues, performing root-cause analysis, and delivering clear, effective solutions.",
      "Managed support tickets end-to-end, ensuring timely resolution, SLA compliance, and clear communication with customers.",
      "Supported and maintained mobile security solutions, including secure mobile applications, authentication, encryption, and device protection.",
      "Collaborated with engineering and security teams to escalate complex issues, improve product stability, and enhance overall system security.",
      "Collaborated with the sales team on PoC and pre-sales activities.",
    ],
    images: [],
  },
  "bank-rakyat-indonesia": {
    title: "Android Developer · PT Bank Rakyat Indonesia",
    subtitle: "Contract, Jakarta, Indonesia",
    meta: "Jan 2024, Dec 2025",
    overview: "Built and secured production Android investment features for BRImo, Bank Rakyat Indonesia's flagship mobile banking app.",
    whatIDid: [
      "Assessed and recommended optimized configuration rules for Android mobile security tools.",
      "Conducted comprehensive code reviews to ensure quality, performance, and security of Android applications.",
      "Developed and optimized the mutual fund (Reksadana) feature, improving user engagement and streamlining transactions.",
      "Developed the gRPC architecture powering the Stock (Saham) feature, improving API efficiency and supporting real-time trading data.",
      "Designed and implemented gold investment and printing functionalities.",
      "Developed the Investment Recap feature with Lottie animations.",
      "Overhauled the DPLK (Defined Contribution Pension Fund) feature for improved usability and integration.",
      "Contributed to BRImo Junior, a child-friendly version focused on financial literacy.",
      "Prepared technical documentation and debugging guides for internal teams.",
    ],
    images: [],
  },
  palmvb: {
    title: "Fullstack Android Developer · PalmVB",
    subtitle: "Part Time, Singapore",
    meta: "Jan 2025, Jul 2025",
    overview: "Engineered an Android kiosk application integrated with palm-vein biometric scanners and backed by modular architecture and containerized microservices.",
    whatIDid: [
      "Engineered an Android application for custom EDC/kiosk hardware, integrating third-party palm-vein biometric scanners via embedded systems.",
      "Architected a modular Android framework tailored for custom kiosk environments, reducing development time by 30%.",
      "Developed and deployed scalable microservices using Spring Boot and Golang with Docker-based containerization.",
      "Researched OSDP (Open Supervised Device Protocol) for secure, interoperable communication between kiosks and access-control devices.",
    ],
    images: [],
  },
  "kelola-karta-raya": {
    title: "Android Kotlin Developer · Kelola Karta Raya",
    subtitle: "Contract, Yogyakarta",
    meta: "Dec 2022, Apr 2023",
    overview: "Developed an integrated distribution system with a point-of-sale Android app and performed security testing across mobile and back-office systems.",
    whatIDid: [
      "Conceptualized and developed a scalable integrated distribution system with a point-of-sale (POS) Android app.",
      "Enabled real-time synchronization with backend systems, improving data accuracy and transaction processing speed.",
      "Implemented API token-based authentication and secure thermal printer integration.",
      "Performed penetration testing with MobSF, Frida, and Burp Suite to identify and mitigate vulnerabilities.",
    ],
    images: [],
  },
  "binar-academy": {
    title: "Android Developer · Binar Academy",
    subtitle: "Bootcamp, Jakarta",
    meta: "Aug 2022, Dec 2022",
    overview: "Led a team of Android developers to deliver a Kotlin flight-ticket booking app from architecture through Play Store release.",
    whatIDid: [
      "Led a team of Android developers to deliver a feature-rich flight ticket booking app using Kotlin.",
      "Designed the application architecture and user workflow with an intuitive interface.",
      "Managed end-to-end deployment of the FlitAirlines app on the Google Play Store.",
    ],
    images: [],
  },
  plns: {
    title: "PLNS · Mobile Security Engineer",
    subtitle: "Project",
    meta: "Project",
    overview: "Strengthened Android application security through mobile security SDK integration and hardening.",
    whatIDid: [
      "Integrated a mobile security SDK with Frida and root detection.",
      "Implemented anti-tampering measures and credential protection to prevent reverse engineering and unauthorized access.",
    ],
    images: [],
  },
  "metronome-engines": {
    title: "Metronome Engines · Android Reverse Engineer",
    subtitle: "Project",
    meta: "Project",
    overview: "Performed Android reverse engineering and automation for multiple clients using dynamic instrumentation and RPA techniques.",
    whatIDid: [
      "Used Frida to bypass root, emulator, NFC, and SSL pinning checks.",
      "Built Python scripts to automate Android app interaction and web data scraping.",
      "Integrated results into MongoDB for backend data workflows.",
    ],
    images: [],
  },
};

export const projectDialogs: Record<string, DialogData> = {
  "amice-vm-based-flattening": {
    title: "How Hard Can You Make It? · VM-Based Flattening",
    subtitle: "Reverse-Engineering Research · static analysis",
    meta: "2025",
    overview: "A static reverse-engineering study comparing a sample RASP native library compiled plain versus through the amice LLVM obfuscator, measuring exactly what one obfuscation pass costs a reverser, and why code virtualization is the next tier.",
    whatIDid: [
      "Measured both ARM64 .so files directly with the NDK llvm toolchain: file and section sizes, instruction counts, and per-technique mnemonic tallies.",
      "Mapped each enabled amice pass, flattening and VM-flattening, bogus control flow, indirect branch, MBA, and string encryption, to its measurable fingerprint in the binary.",
      "Captured real before/after disassembly: a 5-instruction function and a 1-instruction thunk each exploding past 1,050 instructions.",
      "Argued why control-flow flattening is already a crude virtual machine, making code virtualization the logical next protection tier.",
    ],
    images: [],
  },
  "tomoro-account-takeover-android": { title: "Tomoro Account Takeover Android", subtitle: "Android Penetration Testing", meta: "2024", images: [] },
  "android-unity-game-hack": { title: "Android Unity Game Hack", subtitle: "Unity Game Hacking", meta: "2024", images: [] },
  "android-backdoor": { title: "Android Backdoor", subtitle: "Android Backdoor", meta: "2024", images: [] },
  "manipulating-smali-code": { title: "Manipulating Smali Code", subtitle: "Capture The Flag", meta: "2024", images: [] },
  "reverse-engineering-apk-file": { title: "Reverse Engineering APK File", subtitle: "Penetration Testing", meta: "2024", images: [] },
  rootlab: { title: "RootLab", subtitle: "Android Security Research", meta: "2025", images: [] },
  "brimo-mobile-banking": { title: "BRImo Mobile Banking", subtitle: "Android App", meta: "January 2024", images: [] },
  "self-order-application": { title: "Self Order Application", subtitle: "Android Development", meta: "2024", images: [] },
  "point-of-sale-with-hardware-pager": { title: "Point of Sale with Hardware Pager", subtitle: "Android Application", meta: "2024", images: [] },
  "flit-flight-booking-app": { title: "Flit Flight Booking App", subtitle: "Android Application", meta: "2022", images: [] },
  "raih-peduli": { title: "Raih Peduli", subtitle: "Backend Development", meta: "2023", images: [] },
  "point-of-sale": { title: "Point Of Sale", subtitle: "Android Development", meta: "2022-2023", images: [] },
  "palm-vein-authentication-kiosk": { title: "Palm-Vein Authentication Kiosk", subtitle: "Embedded Android", meta: "January-July 2025", images: [] },
};