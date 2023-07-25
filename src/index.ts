import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'hello ladoo';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
