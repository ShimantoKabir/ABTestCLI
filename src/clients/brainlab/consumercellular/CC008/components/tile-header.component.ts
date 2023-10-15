export class TileHeaderComponent {
  static render = (headerText: string): string => {
    const htmlString: string = `
      <div class="title" >
        ${headerText}
      </div>
      <div class="remove-device" >
        <button>Remove Device</button
      </div>
    `;
    return htmlString.trim();
  };
}
