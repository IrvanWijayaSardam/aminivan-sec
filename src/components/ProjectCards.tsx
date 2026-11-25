"use client";

import Link from "next/link";
import { DetailDialog, DialogTrigger } from "@/components/DetailDialog";
import { projectDialogs } from "@/data/dialogs";

export function ProjectCards({ items, start }: { items: string[][]; start: number }) {
  return (
    <>
      <div className="project-grid">
        {items.map(([title, text, slug, image], index) => (
          <article className="card" key={title}>
            {image && <img className="project-image" src={image} alt="" />}
            <div className="index">PROJECT-{String(start + index + 1).padStart(2, "0")}</div>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className="actions">
              <DialogTrigger dialogId={`project-dialog-${slug}`}>Explore ↗</DialogTrigger>
              <Link className="btn secondary" href={`/projects/${slug}`}>Full page ↗</Link>
            </div>
          </article>
        ))}
      </div>
      {items.map(([, , slug]) => {
        const data = projectDialogs[slug];
        return data ? <DetailDialog key={slug} id={`project-dialog-${slug}`} {...data} /> : null;
      })}
    </>
  );
}