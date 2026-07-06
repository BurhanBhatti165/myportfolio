// Centralized external link helpers

export function openInNewTab(url, name) {
  if (!url) {
    if (name) {
      console.warn(`URL for ${name} not provided`);
    }
    return;
  }
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (win && typeof win.focus === "function") {
    win.focus();
  }
}

export function externalLinkProps(newTab = true) {
  return newTab
    ? {target: "_blank", rel: "noopener noreferrer"}
    : {};
}
