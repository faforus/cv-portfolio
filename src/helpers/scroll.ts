export const scroll = (sectionToScroll: string) => {
  const section = document.getElementById(sectionToScroll);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
