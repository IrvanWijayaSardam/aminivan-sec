"use client";

import { useEffect, useId, useRef } from "react";

export type DialogImage = { src: string; caption?: string };
export type DialogLink = { label: string; href: string };

export type DetailDialogProps = {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  overview?: string;
  whatIDid?: string[];
  images?: DialogImage[];
  links?: DialogLink[];
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function DetailDialog({ id, title, subtitle, meta, overview, whatIDid, images, links }: DetailDialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  function close() {
    ref.current?.close();
  }

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    function onClick(event: MouseEvent) {
      if (event.target === dialog) close();
    }
    dialog.addEventListener("click", onClick);
    return () => dialog.removeEventListener("click", onClick);
  }, []);

  return (
    <dialog
      ref={ref}
      id={id}
      className="detail-dialog"
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <div className="dialog-inner">
        <div className="dialog-head">
          <div>
            <div className="kicker">{meta ? meta : "DETAIL"}</div>
            <h2 id={titleId}>{title}</h2>
            {subtitle && <span className="exp-subtitle">{subtitle}</span>}
          </div>
          <button type="button" className="dialog-close" onClick={close} aria-label="Close dialog">
            ✕
          </button>
        </div>
        {overview && <p className="lead">{overview}</p>}
        {whatIDid && whatIDid.length > 0 && (
          <div className="card">
            <h3>What I did</h3>
            <ul className="exp-list">
              {whatIDid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        {images && images.length > 0 ? (
          <div className="dialog-gallery">
            {images.map((image) => (
              <figure key={image.src}>
                <img src={`${BASE}${image.src}`} alt={image.caption || title} />
                {image.caption && <figcaption>{image.caption}</figcaption>}
              </figure>
            ))}
          </div>
        ) : (
          <div className="note">Image gallery coming soon.</div>
        )}
        {links && links.length > 0 && (
          <div className="actions">
            {links.map((link) => (
              <a key={link.href} className="btn secondary" href={link.href} target="_blank" rel="noreferrer">
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </dialog>
  );
}

export function DialogTrigger({ dialogId, children }: { dialogId: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="btn"
      onClick={() => {
        const dialog = document.getElementById(dialogId) as HTMLDialogElement | null;
        dialog?.showModal();
      }}
    >
      {children}
    </button>
  );
}