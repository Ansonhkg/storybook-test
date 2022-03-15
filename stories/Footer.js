export const createFooter = () => {
  const btn = document.createElement('button');
  btn.innerText = 'test';
  btn.addEventListener('click', () => {
    console.log("Testing!");
  })
  return btn;
};
