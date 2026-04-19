export const scrollToId = (id) => {
  if (!id) return;
  const targetId = id.startsWith("#") ? id.slice(1) : id;
  const el = document.getElementById(targetId);
  
  if (el) {
    if (window.lenis) {
      window.lenis.scrollTo(el);
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
