export const renderTextWithHighlight = (text, highlight, highlightClass) => {
  const highlights = (Array.isArray(highlight) ? highlight : [highlight]).filter(
    (hl) => typeof hl === "string" && hl.length > 0
  );
  let parts = [text];

  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  highlights.forEach((hl) => {
    const escapedHl = escapeRegExp(hl);
    parts = parts.flatMap((part) => {
      if (typeof part === 'string') {
        return part.split(new RegExp(`(${escapedHl})`, "g"));
      }
      return [part];
    });
  });

  return parts.map((part, idx) =>
    highlights.includes(part) ? (
      <span key={idx} className={highlightClass}>
        {part}
      </span>
    ) : (
      <span key={idx}>{part}</span>
    )
  );
};