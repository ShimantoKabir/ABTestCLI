export class LiComponent {
  static render = (text: string): string => {
    const htmlStr = `<li>${text}</li>`;
    return htmlStr.trim();
  };
}
