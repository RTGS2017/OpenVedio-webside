import { useEffect, useRef, useState } from "react";
import "./video-frame.css";

function publicUrl(url: string) {
  if (!url.startsWith("/")) return url;
  const base = import.meta.env.BASE_URL;
  if (base === "/") return url;
  return `${base.replace(/\/$/, "")}${url}`;
}

type VideoFrameProps = {
  poster: string;
  alt: string;
  badge: string;
  caption: string;
  label?: string;
  filename?: string;
  duration?: string;
  eager?: boolean;
  hero?: boolean;
  src?: string;
};

export function VideoFrame({
  poster,
  alt,
  badge,
  caption,
  label,
  filename,
  duration,
  eager = false,
  hero = false,
  src,
}: VideoFrameProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [reduceMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const playable = Boolean(src) && !failed;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src || failed) return;

    if (reduceMotion) {
      video.pause();
      return;
    }

    const start = () => {
      video.play().catch(() => setFailed(true));
    };

    if (eager) {
      start();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else video.pause();
      },
      { threshold: 0.45 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [eager, failed, reduceMotion, src]);

  return (
    <figure className={`video-frame${hero ? " is-hero" : ""}${playable ? " has-src" : ""}`}>
      {label ? <p className="frame-label">{label}</p> : null}
      <div className="video-frame-media">
        <img
          className="frame-still"
          src={publicUrl(poster)}
          alt={playable ? "" : alt}
          width={1200}
          height={720}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={eager ? "high" : "auto"}
        />
        {playable ? (
          <video
            ref={videoRef}
            className="frame-video"
            src={publicUrl(src ?? "")}
            muted
            loop
            playsInline
            autoPlay={!reduceMotion}
            controls={reduceMotion}
            poster={publicUrl(poster)}
            preload={eager ? "auto" : "metadata"}
            aria-label={alt}
            onError={() => setFailed(true)}
          />
        ) : null}
        <span className="frame-corners" aria-hidden="true" />
        <span className="frame-badge">{badge}</span>
      </div>
      <figcaption>
        {filename || duration ? (
          <p className="frame-meta">
            {filename ? <span className="break-all">{filename}</span> : null}
            {duration ? <span>{duration}</span> : null}
          </p>
        ) : null}
        {caption ? <p>{caption}</p> : null}
      </figcaption>
    </figure>
  );
}
