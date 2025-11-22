import React, { useRef, useState, useEffect } from 'react';

/**
 * LazyRender
 * - children: component to render when visible
 * - rootMargin: how far outside viewport we should start rendering
 * - placeholder: optional placeholder node while not visible
 */
export default function LazyRender({ children, rootMargin = '400px', placeholder = null }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return; // already visible, nothing to do
    if (!ref.current) return;

    // If IntersectionObserver isn't supported, render immediately (graceful fallback)
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      try { observer.disconnect(); } catch (e) {}
    };
  }, [rootMargin, visible]);

  return (
    <div ref={ref} className="lazy-render-wrapper">
      {visible ? children : (placeholder ?? <div className="card-placeholder" />)}
    </div>
  );
}
