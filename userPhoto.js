export default class UserPhoto {
  constructor(element, onUpload) {
    this.element = element;
    this.onUpload = onUpload;

    this.element.addEventListener('dragover', (e) => {
      if (e.dataTransfer.item.length && e.dataTransfer.item[0].kind === 'file') {
        e.preventDefault();
      }
    });

    this.element.addEventListener('drop', (e) => {
      const file = e.dataTransfer.item[0].getAsFile();
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.addEventListener('load', () => this.onUpload(reader.result));
      e.preventDefault();
    });
  }

  set(photo) {
    this.element.style.backgroundImage = `url(${photo})`;
  }
}
