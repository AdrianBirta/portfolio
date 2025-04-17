export default function HashNavigationHandle(sectionId: string, setHash?: (hash: string) => void) {



  const currentActive = document.querySelector('.hashSection.active');
  if (currentActive) {
    currentActive.classList.remove('active');
    currentActive.classList.add('previous');
  }


  const nextSection = document.getElementById(sectionId);
  if (nextSection) {
    nextSection.classList.add('active');
    nextSection.classList.remove('previous');
    nextSection.scrollIntoView({ behavior: 'smooth' });
    nextSection.scrollTop = 0;
  }


  window.location.hash = sectionId;
  if (setHash) setHash(sectionId);

  return null;
}