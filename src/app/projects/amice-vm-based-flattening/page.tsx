import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Hard Can You Make It? · VM-Based Flattening | Irvan Wijaya",
  description:
    "Leaning on AI to reverse-engineer Android native libraries raised a question: how much RE difficulty can you add back? Measuring a plain build against amice's obfuscation and VM-flattening in the binary, up to where real code virtualization would begin.",
};

const BODY = `
  <span class="eyebrow">VM-flattening &amp; code virtualization · reversing in the age of AI</span>
  <h1>How Hard Can You Make It?</h1>
  <p class="lede">Lately, when I need to reverse-engineer an Android native library, I lean on an AI that reads disassembly faster than I can scroll it. So the question I actually care about is the opposite one: <em>how much difficulty can I add back?</em> This is me pushing that dial, from a plain build through amice's obfuscation and VM-flattening, measuring in the binary how far each turn moves it, up to where real code virtualization would begin.</p>
  <div class="byline">
    <span>sample RASP · built from open-source techniques</span>
    <span>arm64-v8a · plain vs. amice</span>
    <span>static analysis · Ghidra · NDK llvm-objdump</span>
  </div>

  <div class="tiles">
    <div class="tile"><div class="k">Harder to read</div><div class="v">~5×</div><div class="s">analyst effort per function</div></div>
    <div class="tile"><div class="k">AI token cost</div><div class="v">~20×</div><div class="s">to decompile &amp; explain</div></div>
    <div class="tile"><div class="k">Code to decompile</div><div class="v">~10×</div><div class="s">more instructions to read</div></div>
  </div>

  <p>The target is a <strong>sample RASP</strong> (Runtime Application Self-Protection) native library I wrote, assembled from techniques common to open-source RASP projects: an Android <code>.so</code> that scans the process for Frida, Magisk, Xposed/LSPosed and friends and guards its own integrity, the kind of library a reverser sits down to read. I compiled it twice, once plain, once through the <a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener"><strong>amice</strong></a> LLVM obfuscator, and read both, to measure what that one pass costs the person holding the disassembler.</p>

  <div class="tbl-wrap"><table>
    <thead><tr><th>Build</th><th>File</th><th class="r">Size</th></tr></thead>
    <tbody>
      <tr><td><span style="color:var(--clean);font-weight:600">● Plain</span></td><td><code>librg…b8.so</code></td><td class="r num">146,008 B</td></tr>
      <tr><td><span style="color:var(--obf);font-weight:600">● amice</span></td><td><code>librg…6f.so</code></td><td class="r num">1,199,360 B</td></tr>
    </tbody>
  </table></div>

  <h2><span class="n">01</span>Every binary is reversible</h2>
  <p>Start with the uncomfortable premise, because it's true: there is no such thing as unreadable native code. The CPU has to execute it, so a disassembler can recover it, and a patient human, or a model with a disassembler, can rebuild its meaning. The plain build proves it in an afternoon.</p>
  <p>In the plain <code>.so</code>, all eight JNI entry points decompile into clean, linear C. The self-kill decision is a single branch: after a scan computes a tamper verdict, one compare-and-branch jumps straight into a routine that calls <code>kill(SIGKILL)</code>:</p>
  <div class="codecard" style="margin:1.3rem 0">
    <div class="chip clean"><span>● plain · the entire self-kill gate</span><span>1 branch</span></div>
<pre>bl   compute_verdict      <span class="cmt">; returns severity in w0</span>
cmp  w0, #1
<span class="hl">b.ge kill_routine</span>        <span class="cmt">; verdict ≥ 1 → kill(SIGKILL)/tgkill/_exit</span></pre>
  </div>
  <p>One byte region. The strings are in plaintext, the control flow mirrors the source, and the logic reads top to bottom. Time to fully understand and locate every kill path: a few hours. This is the baseline, and it's why "we obfuscated it" is never a finish line. The question is only how far you pushed the clock.</p>

  <h2><span class="n">02</span>What amice costs the reader</h2>
  <p>Same source, same compiler, same target, only the obfuscation pass differs, so every delta belongs to amice. Measured directly from both ELF files with the NDK's <code>llvm-*</code> tools (exact, not estimated):</p>

  <div class="tbl-wrap"><table>
    <thead><tr><th>Metric</th><th class="r">Plain</th><th class="r">amice</th><th class="r">Ratio</th></tr></thead>
    <tbody>
      <tr><td>File size</td><td class="r num">146,008</td><td class="r num">1,199,360</td><td class="r"><span class="ratio">8.2×</span></td></tr>
      <tr><td>Code, <code>.text</code> bytes</td><td class="r num">101,728</td><td class="r num">1,072,856</td><td class="r"><span class="ratio">10.5×</span></td></tr>
      <tr><td>Instructions</td><td class="r num">25,429</td><td class="r num">268,077</td><td class="r"><span class="ratio">10.5×</span></td></tr>
      <tr><td>Conditional branches</td><td class="r num">2,197</td><td class="r num">9,092</td><td class="r"><span class="ratio">4.1×</span></td></tr>
      <tr><td>Writable <code>.data</code></td><td class="r num">464</td><td class="r num">74,432</td><td class="r"><span class="ratio">160×</span></td></tr>
      <tr><td>Read-only <code>.rodata</code></td><td class="r num">20,167</td><td class="r num">11,123</td><td class="r"><span class="down">0.55×</span></td></tr>
    </tbody>
  </table></div>

  <figure>
    <svg class="chart" viewBox="0 0 720 272" role="img" aria-label="Growth factor by metric, logarithmic scale">
      <g class="grid" stroke-width="1">
        <line x1="160" y1="30" x2="160" y2="252"/><line x1="320" y1="30" x2="320" y2="252"/>
        <line x1="480" y1="30" x2="480" y2="252"/><line x1="640" y1="30" x2="640" y2="252"/>
      </g>
      <g class="axv" text-anchor="middle"><text x="160" y="22">1×</text><text x="320" y="22">10×</text><text x="480" y="22">100×</text><text x="640" y="22">1,000×</text></g>
      <g>
        <text class="lab" x="150" y="55" text-anchor="end">Branches</text><rect x="160" y="40" width="98" height="22" rx="4" fill="var(--obf)"/><text class="val" x="264" y="56">4.1×</text>
        <text class="lab" x="150" y="101" text-anchor="end">File size</text><rect x="160" y="86" width="146" height="22" rx="4" fill="var(--obf)"/><text class="val" x="312" y="102">8.2×</text>
        <text class="lab" x="150" y="147" text-anchor="end">Code · .text</text><rect x="160" y="132" width="163" height="22" rx="4" fill="var(--obf)"/><text class="val" x="329" y="148">10.5×</text>
        <text class="lab" x="150" y="193" text-anchor="end">Data · .data</text><rect x="160" y="178" width="353" height="22" rx="4" fill="var(--obf)"/><text class="val" x="519" y="194">160×</text>
        <text class="lab" x="150" y="239" text-anchor="end">Worst function</text><rect x="160" y="224" width="485" height="22" rx="4" fill="var(--obf)"/><text class="val" x="651" y="240">1,078×</text>
      </g>
    </svg>
    <figcaption>How much bigger the obfuscated build is, by metric (log scale). Code grows ~10×; injected writable data ~160×; the worst-hit function over 1,000×.</figcaption>
  </figure>

  <p>The fingerprint (code up 10×, read-only data <em>down</em>, writable data up 160×) is control-flow obfuscation plus string encryption: literals get lifted out of read-only memory, encrypted into writable blobs, and decrypted at runtime by injected code. And the tell that this is obfuscation, not optimization, is <em>which</em> functions grow most:</p>

  <figure>
    <svg class="chart" viewBox="0 0 740 404" role="img" aria-label="Per-function code growth factor, log scale">
      <g class="grid" stroke-width="1"><line x1="236" y1="30" x2="236" y2="384"/><line x1="374" y1="30" x2="374" y2="384"/><line x1="512" y1="30" x2="512" y2="384"/><line x1="650" y1="30" x2="650" y2="384"/></g>
      <g class="axv" text-anchor="middle"><text x="236" y="22">1×</text><text x="374" y="22">10×</text><text x="512" y="22">100×</text><text x="650" y="22">1,000×</text></g>
      <g>
        <text class="lab" x="8" y="54">nativeConfigureGuard</text><text class="lab2" x="8" y="68">4 B → 4,312 B</text><rect x="236" y="44" width="418" height="18" rx="4" fill="var(--obf)"/><text class="val" x="660" y="58">1,078×</text>
        <text class="lab" x="8" y="98">nativeArmDelayedKill</text><text class="lab2" x="8" y="112">12 B → 4,180 B</text><rect x="236" y="88" width="351" height="18" rx="4" fill="var(--obf)"/><text class="val" x="593" y="102">348×</text>
        <text class="lab" x="8" y="142">nativeVersion</text><text class="lab2" x="8" y="156">20 B → 4,200 B</text><rect x="236" y="132" width="320" height="18" rx="4" fill="var(--obf)"/><text class="val" x="562" y="146">210×</text>
        <text class="lab" x="8" y="186">nativeCancelDelayedKill</text><text class="lab2" x="8" y="200">4 B → 248 B</text><rect x="236" y="176" width="247" height="18" rx="4" fill="var(--obf)"/><text class="val" x="489" y="190">62×</text>
        <text class="lab" x="8" y="230">nativeNoteHardVerdict</text><text class="lab2" x="8" y="244">8 B → 168 B</text><rect x="236" y="220" width="182" height="18" rx="4" fill="var(--obf)"/><text class="val" x="424" y="234">21×</text>
        <text class="lab" x="8" y="274">nativeArtMethod</text><text class="lab2" x="8" y="288">16 B → 260 B</text><rect x="236" y="264" width="166" height="18" rx="4" fill="var(--obf)"/><text class="val" x="408" y="278">16×</text>
        <text class="lab" x="8" y="318">nativeProbeIds</text><text class="lab2" x="8" y="332">424 B → 6,512 B</text><rect x="236" y="308" width="162" height="18" rx="4" fill="var(--obf)"/><text class="val" x="404" y="322">15×</text>
        <text class="lab" x="8" y="362">nativeScan</text><text class="lab2" x="8" y="376">932 B → 8,096 B</text><rect x="236" y="352" width="130" height="18" rx="4" fill="var(--obf)"/><text class="val" x="372" y="366">8.7×</text>
      </g>
    </svg>
    <figcaption>The real work grows 9-15×. The near-empty stubs grow 60-1,000×, because the obfuscation tax is paid per function, not per line. <code>nativeConfigureGuard</code> goes from a single instruction to 4 KB.</figcaption>
  </figure>

  <h3>The same trivial function, before and after</h3>
  <p><code>nativeVersion</code> just returns a version string. Five instructions become <strong>1,050</strong>:</p>
  <div class="compare">
    <div class="codecard">
      <div class="chip clean"><span>● plain · real objdump</span><span><b>5</b> instr</span></div>
<pre>ldr   x8, [x0]
adrp  x1, 0x5000
add   x1, x1, #0x19a
ldr   x2, [x8, #0x538]
br    x2            <span class="cmt">; return string</span></pre>
    </div>
    <div class="codecard">
      <div class="chip obf"><span>● amice · real objdump</span><span><b>1,050</b> instr</span></div>
<pre>mov   w12, #52872
<span class="hl">movk  w12, #1, lsl #16</span>  <span class="cmt">; build a constant</span>
<span class="hl">ubfx  w10, w9, #17, #8</span>  <span class="cmt">; MBA bit-field</span>
<span class="hl">and   w9, w9, #0x1ffff</span>
add   w10, w10, #895
<span class="hl">lsl   x2, x10, #52</span>
<span class="hl">orr   x4, x2, x9, lsl #33</span>
<span class="dim">… ~1,040 more …</span>
<span class="hl">b     0x1db68</span>        <span class="cmt">; → flatten dispatch</span></pre>
    </div>
  </div>
  <p>Every one of those is a named amice pass, and each leaves a fingerprint you can <em>count</em> rather than assert. Below, each technique this sample build turns on is matched to amice's own switch, to the <a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener">amice reference</a>, and to its actual result measured across both <code>.so</code> files.</p>

  <h3>Technique → reference → result in the binary</h3>
  <div class="tbl-wrap"><table>
    <thead><tr><th>amice pass</th><th>What it does</th><th class="r">Result in this binary</th></tr></thead>
    <tbody>
      <tr><td><a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener"><code>AMICE_FLATTEN</code></a> + <a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener"><code>AMICE_VM_FLATTEN</code></a><br><span class="dim2">control-flow flattening, classic + VM-style</span></td><td>Linear code becomes a <code>while(1){ switch(state) }</code>; the VM pass lowers the dispatcher itself to a tiny bytecode interpreter. The control flow is virtualized, the block bodies stay native.</td><td class="r">conditional branches<br><b>2,197 → 9,092</b> <span class="ratio">4.1×</span></td></tr>
      <tr><td><a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener"><code>AMICE_INDIRECT_BRANCH</code></a> + <code>AMICE_INDIRECT_CALL</code><br><span class="dim2">indirect branch / call</span></td><td>Transfers routed through encrypted, shuffled jump tables to break naive xref recovery.</td><td class="r">register-indirect transfers<br><b>264 → 2,647</b> <span class="ratio">10×</span></td></tr>
      <tr><td><a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener"><code>AMICE_BOGUS_CONTROL_FLOW</code></a><br><span class="dim2">bogus control flow</span></td><td>Injects fake, never-taken branches; inflates even trivial functions.</td><td class="r"><code>configureGuard</code><br><b>1 → ~1,078</b> instr <span class="ratio">1,078×</span></td></tr>
      <tr><td><a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener"><code>AMICE_MBA</code></a><br><span class="dim2">mixed boolean arithmetic</span></td><td>Constants &amp; operations become <code>eor/and/orr</code> identity chains, many lifted into binary64 float math to wreck type recovery.</td><td class="r">integer MBA ops <b>1,369 → 85,925</b> <span class="ratio">63×</span><br>float ops <b>15 → 35,778</b> <span class="ratio">2,385×</span></td></tr>
      <tr><td><a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener"><code>AMICE_STRING_ENCRYPTION</code></a><br><span class="dim2">xor string encryption</span></td><td>Literals leave read-only memory, xor-encrypted into writable blobs, decrypted lazily at runtime.</td><td class="r">.rodata <b>20,167 → 11,123</b> <span class="down">0.55×</span><br>.data <b>464 → 74,432</b> <span class="ratio">160×</span></td></tr>
      <tr><td><a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener"><code>AMICE_SPLIT_BASIC_BLOCK</code></a> + <code>AMICE_SHUFFLE_BLOCKS</code><br><span class="dim2">block splitting + shuffle</span></td><td>Splits basic blocks and randomizes their layout, feeding the flattener a messier CFG.</td><td class="r">structural<br><span class="dim2">no single tally</span></td></tr>
    </tbody>
  </table></div>
  <p style="font-size:13px;color:var(--muted);margin-top:-.4rem">Counts are raw instruction-mnemonic tallies from <code>llvm-objdump -d</code> over each <code>.text</code>; section sizes from the ELF headers. The enabled passes are read from the build's <code>amice-passes.env</code>, and their switch names are amice's own.</p>

  <div class="note obf">
    <span class="lbl">What this build leaves off, and the one that matters</span>
    The passes left off are <code>AMICE_ALIAS_ACCESS</code>, <code>AMICE_BASIC_BLOCK_OUTLINING</code>, and the decisive one, <code>AMICE_VM_VIRTUALIZE</code>, full instruction-level VMP. <em>That</em> is real code virtualization, and it is the subject of §04. It is opt-in per function here via an <code>RG_VMP</code> annotation, yet on this build it lands on nothing: amice's VMP will not coexist with the global passes, so every candidate falls back to its flattened code. What <em>is</em> on, <code>AMICE_VM_FLATTEN</code>, virtualizes the control flow, not the instructions, which is why the detection logic above is still native ARM.
  </div>

  <h3>One more before / after: the one-instruction function</h3>
  <p><code>nativeConfigureGuard</code> is a thunk, in the plain build it is a single branch. amice turns that one instruction into roughly a thousand:</p>
  <div class="compare">
    <div class="codecard">
      <div class="chip clean"><span>● plain · real objdump</span><span><b>1</b> instr</span></div>
<pre>b    0xa9f0         <span class="cmt">; tail-call, that's all</span></pre>
    </div>
    <div class="codecard">
      <div class="chip obf"><span>● amice · real objdump</span><span><b>~1,078</b> instr</span></div>
<pre>sub   sp, sp, #176
stp   x29, x30, [sp, #80]
<span class="dim">… saves x19-x28 …</span>
<span class="hl">and   w15, w2, #0xff</span>
mov   w1, #15189
<span class="hl">movk  w1, #39751, lsl #16</span> <span class="cmt">; MBA const</span>
mov   w16, #51466
<span class="dim">… ~1,070 more …</span></pre>
    </div>
  </div>

  <h2><span class="n">03</span>Flattening is a virtual machine wearing a disguise</h2>
  <p>Look closely at what flattening actually does, because it's the bridge to the whole thesis. It cuts every basic block loose, numbers them, and routes them through a central dispatcher driven by a state variable:</p>

  <figure>
    <svg class="chart" viewBox="0 0 700 250" role="img" aria-label="Linear control flow versus a flattened dispatcher">
      <text x="20" y="26" class="lab" style="font-weight:600;fill:var(--clean)">plain · linear</text>
      <g fill="var(--surface-2)" stroke="var(--clean)" stroke-width="1.5"><rect x="40" y="40" width="90" height="30" rx="7"/><rect x="40" y="92" width="90" height="30" rx="7"/><rect x="40" y="144" width="90" height="30" rx="7"/><rect x="40" y="196" width="90" height="30" rx="7"/></g>
      <g class="lab2" fill="var(--fg)" text-anchor="middle"><text x="85" y="60">entry</text><text x="85" y="112">check</text><text x="85" y="164">verdict</text><text x="85" y="216">return</text></g>
      <g stroke="var(--clean)" stroke-width="1.5" fill="none" marker-end="url(#ac)"><line x1="85" y1="70" x2="85" y2="90"/><line x1="85" y1="122" x2="85" y2="142"/><line x1="85" y1="174" x2="85" y2="194"/></g>
      <line x1="250" y1="34" x2="250" y2="228" stroke="var(--border)" stroke-dasharray="4 4"/>
      <text x="300" y="26" class="lab" style="font-weight:600;fill:var(--obf)">amice · flattened = a tiny interpreter</text>
      <rect x="470" y="110" width="110" height="44" rx="9" fill="var(--obf-soft)" stroke="var(--obf)" stroke-width="2"/>
      <text x="525" y="128" class="lab2" fill="var(--obf)" text-anchor="middle" style="font-weight:700">dispatcher</text>
      <text x="525" y="144" class="lab2" fill="var(--muted)" text-anchor="middle">switch(state)</text>
      <g fill="var(--surface-2)" stroke="var(--obf)" stroke-width="1.3"><rect x="300" y="46" width="74" height="26" rx="6"/><rect x="300" y="100" width="74" height="26" rx="6"/><rect x="300" y="154" width="74" height="26" rx="6"/><rect x="300" y="200" width="74" height="26" rx="6"/><rect x="600" y="74" width="74" height="26" rx="6"/><rect x="600" y="138" width="74" height="26" rx="6"/><rect x="600" y="192" width="74" height="26" rx="6"/></g>
      <g class="lab2" fill="var(--muted)" text-anchor="middle"><text x="337" y="63">case 7</text><text x="337" y="117">case 3</text><text x="337" y="171">case 9</text><text x="337" y="217">case 1</text><text x="637" y="91">case 5</text><text x="637" y="155">case 2</text><text x="637" y="209">case 8</text></g>
      <g stroke="var(--obf)" stroke-width="1.2" fill="none" opacity="0.8"><path d="M374 59 Q440 70 470 120" marker-end="url(#ao)"/><path d="M374 113 Q430 120 470 128" marker-end="url(#ao)"/><path d="M374 167 Q430 150 470 140" marker-end="url(#ao)"/><path d="M374 213 Q440 180 470 148" marker-end="url(#ao)"/><path d="M580 124 Q592 90 600 87" marker-end="url(#ao)"/><path d="M580 134 Q592 150 600 151" marker-end="url(#ao)"/><path d="M580 144 Q592 195 600 205" marker-end="url(#ao)"/></g>
      <defs><marker id="ac" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="var(--clean)"/></marker><marker id="ao" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0 0 L6 3 L0 6 Z" fill="var(--obf)"/></marker></defs>
    </svg>
    <figcaption>Flattening replaces source order with a <code>while(1){ switch(state) }</code> loop. That structure is already an interpreter: the state variable is a program counter, the cases are handlers. It is virtualization's crude first cousin.</figcaption>
  </figure>

  <p class="pulls">A dispatcher plus a state variable <em>is</em> a tiny virtual machine. Code virtualization simply finishes the thought: lower the real instructions into a custom bytecode run by a bundled interpreter, so there are no native semantics left on screen to decompile at all.</p>

  <p>That is exactly where this build sits. amice's <code>AMICE_VM_FLATTEN</code> is on, so the dispatcher itself is already a little interpreter, but the blocks it jumps between are untouched. Disassemble the obfuscated <code>nativeScan</code> and the real work is right there in plain ARM, <code>cmp</code>, <code>ldr</code>, <code>str</code>, <code>blr</code>, just reached through the flattened jump table. The control flow is virtualized; the computation is not. Finishing the job, turning those <code>cmp</code>/<code>ldr</code>/<code>str</code> into bytecode too, is <code>AMICE_VM_VIRTUALIZE</code>, a heavier and separate step.</p>

  <h2><span class="n">04</span>VM-based flattening, and the tier past it</h2>
  <p>Put the builds on a single axis, time-to-defeat, and the strategy becomes obvious. Each tier doesn't make reversing impossible; it moves the clock:</p>

  <div class="ladder">
    <div class="lrow"><div class="name">Plain<small>readable C, plaintext strings</small></div><div class="track"><div class="fill" style="width:7%;background:var(--clean)"></div></div></div>
    <div class="lrow"><div class="name">Stripped<small>symbols gone</small></div><div class="track"><div class="fill" style="width:14%;background:var(--clean)"></div></div></div>
    <div class="lrow"><div class="name">Obfuscated<small>flattening + VM-flatten + MBA, measured here</small></div><div class="track"><div class="fill" style="width:55%;background:var(--obf)">~5-20× (measured)</div></div></div>
    <div class="lrow"><div class="name">Virtualized<small>custom bytecode + VM</small></div><div class="track"><div class="fill" style="width:100%;background:var(--obf)">reverse the VM first</div></div></div>
  </div>
  <p style="font-size:13px;color:var(--muted);margin-top:-.3rem">Relative time-to-defeat, illustrative; the obfuscated tier is anchored to the measured 5-20× from §02.</p>

  <p>Obfuscation (where amice sits) scrambles native instructions but leaves them <em>as</em> native instructions, a strong enough deobfuscation script eventually normalizes flattening and folds the MBA back, and the per-function cost amortizes across a codebase. <strong>Virtualization removes the native instructions entirely.</strong> The reverser can't decompile the logic because it isn't expressed in ARM or x86 anymore, it's custom bytecode. To get anywhere they must first reverse the interpreter itself, then every opcode handler, then the bytecode program, and a serious VM makes the handlers polymorphic and duplicated so that work doesn't amortize. (We already saw amice duplicate the kill routine; virtualization does this by design.) And this build already stands at its near edge: <code>AMICE_VM_FLATTEN</code> is on, so the control flow runs through an interpreter. What is missing is <code>AMICE_VM_VIRTUALIZE</code> (<a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener">reference</a>), which lowers the instructions themselves, and in this toolchain that is not a flag you flip alongside the rest: full VMP will not coexist with the global passes, so it has to live in its own dedicated single-pass translation unit. I keep it off globally on purpose, because module-wide VMP bloats and slows a RASP, and opt into it per function instead.</p>

  <p>It isn't magic, and it isn't free, the 8.2× size blow-up here is a preview, and virtualization adds runtime cost on top. It is not unbreakable; nothing is. What it buys is <strong>time</strong>: enough that reversing the protected logic costs more than it's worth within the window the attacker actually has, a game patch before a tournament, a key before a content window closes, a bypass before the next release. That window, not permanence, is the real target.</p>

  <h2><span class="n">05</span>Scoring the reader's cost</h2>
  <figure>
    <svg class="chart" viewBox="0 0 540 300" role="img" aria-label="Difficulty scores: plain versus obfuscated">
      <g class="grid" stroke-width="1"><line x1="50" y1="50" x2="500" y2="50"/><line x1="50" y1="150" x2="500" y2="150"/><line x1="50" y1="250" x2="500" y2="250"/></g>
      <g class="axv" text-anchor="end"><text x="42" y="54">10</text><text x="42" y="154">5</text><text x="42" y="254">0</text></g>
      <g><rect x="104" y="210" width="42" height="40" rx="4" fill="var(--clean)"/><text class="lab" x="125" y="202" text-anchor="middle" style="fill:var(--clean);font-weight:600">2</text><rect x="154" y="90" width="42" height="160" rx="4" fill="var(--obf)"/><text class="val" x="175" y="82" text-anchor="middle">8</text><text class="lab" x="150" y="272" text-anchor="middle">Effort</text></g>
      <g><rect x="254" y="210" width="42" height="40" rx="4" fill="var(--clean)"/><text class="lab" x="275" y="202" text-anchor="middle" style="fill:var(--clean);font-weight:600">2</text><rect x="304" y="90" width="42" height="160" rx="4" fill="var(--obf)"/><text class="val" x="325" y="82" text-anchor="middle">8</text><text class="lab" x="300" y="272" text-anchor="middle">Time</text></g>
      <g><rect x="404" y="210" width="42" height="40" rx="4" fill="var(--clean)"/><text class="lab" x="425" y="202" text-anchor="middle" style="fill:var(--clean);font-weight:600">2</text><rect x="454" y="70" width="42" height="180" rx="4" fill="var(--obf)"/><text class="val" x="475" y="62" text-anchor="middle">9</text><text class="lab" x="450" y="272" text-anchor="middle">Tokens</text></g>
    </svg>
    <div class="legend" style="margin-top:.6rem"><span><span class="sw" style="background:var(--clean)"></span>Plain build</span><span><span class="sw" style="background:var(--obf)"></span>Obfuscated build</span></div>
  </figure>
  <p>Per-function, to full understanding: effort ~<strong>4-5×</strong>, wall-clock ~<strong>5-6×</strong> (front-loaded by one-time deobfuscation tooling), and for an LLM-assisted pipeline ~<strong>15-25× the tokens</strong>, because the decompiler output is ~10× larger <em>and</em> needs 3-5 re-reading passes, which compound. Virtualization would push all three off this chart.</p>

  <h2>Verdict</h2>
  <div class="note obf">
    <span class="lbl">Bottom line</span>
    amice is a <span class="grade">strong speed-bump</span>: ~5× harder for a human, ~20× for an AI, for an 8.2× bigger binary, <b>63×</b> more boolean-arithmetic noise and <b>2,385×</b> more float ops to wade through. But a speed-bump is not a wall: the control flow is still native ARM, so a good deobfuscation script eventually normalizes the flattening and folds the MBA back, and that one-time cost amortizes across a codebase. Flattening already turns the code into a crude interpreter (§03); <strong>code virtualization</strong> is the same idea finished, lower the logic into custom bytecode so there are no native semantics left on screen to decompile at all. It doesn't make reversing impossible; nothing does. It pushes the cost past the clock the attacker is racing.
  </div>

  <h2>Quote of the day</h2>
  <div class="qotd">
    <p>A better model means a better reverse-engineering process. In this pay-to-win AI era, the model a security researcher chooses is itself critical, it shapes the result of your RE.</p>
    <span class="by">field note · reversing in the age of AI</span>
  </div>

  <hr>
  <p class="foot"><strong>Method.</strong> Structural numbers and per-technique instruction counts measured directly from both ELF files with the Android NDK LLVM toolchain, <code>llvm-objdump -d</code> over each <code>.text</code>, exact, not estimated. Plain-build decompilation from Ghidra. Effort/time/token scores are expert estimates anchored to the measured ratios. This is a sample RASP built from open-source techniques, analyzed statically; function names are the library's own (JNI exports can't be stripped).</p>
  <p class="foot"><strong>Reference.</strong> amice obfuscator, <a href="https://deepwiki.com/fuqiuluo/amice" target="_blank" rel="noopener">deepwiki.com/fuqiuluo/amice</a>; the <code>AMICE_*</code> pass switches are defined in its <code>EnvConfig</code> docs at <a href="https://github.com/fuqiuluo/amice" target="_blank" rel="noopener">github.com/fuqiuluo/amice</a>. Per-technique counts were produced with the NDK's <code>llvm-objdump -d</code> over each library's <code>.text</code> and are reproducible from the two <code>.so</code> files.</p>
`;

export default function CodeVirtualizationRaspPage() {
  return (
    <>
      <header className="top">
        <div className="wrap nav">
          <Link className="brand" href="/">irvan<span>@portfolio</span>:~$</Link>
          <nav>
            <Link href="/">home</Link>
            <Link href="/projects">projects</Link>
            <Link href="/certifications">certifications</Link>
            <Link href="/#contact">contact</Link>
          </nav>
          <span className="status">RESEARCH / WRITE-UP</span>
        </div>
      </header>
      <main>
        <div className="wrap" style={{ padding: "90px 0 70px" }}>
          <article className="writeup" dangerouslySetInnerHTML={{ __html: BODY }} />
          <div className="actions" style={{ maxWidth: 840, margin: "40px auto 0" }}>
            <Link className="btn secondary" href="/projects">Back to projects ↩</Link>
          </div>
        </div>
      </main>
      <footer className="wrap">
        <span>© {new Date().getFullYear()} Irvan Wijaya</span>
        <Link href="/">Return home ↩</Link>
      </footer>
    </>
  );
}
