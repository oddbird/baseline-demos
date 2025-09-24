window.addEventListener("hashchange", () => {
  handleRoute(window.location.hash);
});

const CONTAINS_PATH_TEXT = "Contains current page link";

function handleRoute(newPage) {
  // Close all open popovers, would be unneeded if we actually had navigated to a new page
  document.querySelectorAll(":popover-open").forEach((popover) => {
    popover.hidePopover();
  });

  // Replace the content
  const heading = document.getElementById("id-page-title");
  heading.innerText = newPage;

  const formerLink = document.querySelector("[aria-current]");
  if (formerLink) formerLink.removeAttribute("aria-current");

  const linkToRoute = document.querySelector(`[href="${newPage}"]`);
  linkToRoute.setAttribute("aria-current", "page");

  // Remove existing title attributes
  document
    .querySelectorAll(`[title="${CONTAINS_PATH_TEXT}"]`)
    .forEach((element) => {
      element.removeAttribute("title");
    });

  // Add a title to ancestors
  document.querySelectorAll("li:has(a[aria-current])").forEach((element) => {
    element.setAttribute("title", CONTAINS_PATH_TEXT);
  });
}
