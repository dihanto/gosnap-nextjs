/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from "react";

export const UseIntersection = (targetId, callback, dependencies) => {
  const handleIntersection = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    const target = document.getElementById(targetId);
    if (target) {
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection, targetId, ...dependencies]);
};
