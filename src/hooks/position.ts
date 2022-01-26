export function usePopoverOffset(
  target: HTMLElement,
  self: HTMLElement,
  direction: string,
  isRelative?: boolean,
) {
  const position = {
    top: 0,
    left: 0,
  };
//   TODO ele position???
  if (isRelative) {
    const dom = {
      width: target.clientWidth,
      height: target.clientHeight,
    };
    let relative = -5;
    switch (direction) {
      case "top":
        position.top = relative;
        position.left = Math.round(dom.width / 2 - self.clientWidth / 2);
        break;
      case "right":
        position.left = Math.round(dom.width - self.clientWidth) - relative;
        position.top = Math.round(dom.height / 2 - self.clientHeight / 2);
        break;
      case "left":
        position.left = relative;
        position.top = Math.round(dom.height / 2 - self.clientHeight / 2);
        break;
      case "bottom":
        position.left = Math.round(dom.width / 2 - self.clientWidth / 2);
        position.top = Math.round(dom.height - self.clientHeight) - relative;
        break;
      default:
        break;
    }
    return position;
  }
  const targetDomRect = target.getBoundingClientRect();
  position.top = targetDomRect.top;
  position.left = targetDomRect.left;
  const tempDistance = 12;
  switch (direction) {
    case "top":
      position.top -= self.clientHeight + tempDistance;
      position.left += (target.clientWidth - self.clientWidth) / 2;
      break;
    case "right":
      position.top += (target.clientHeight - self.clientHeight) / 2;
      position.left += (target.clientWidth + tempDistance);
      break;
    case "left":
      position.left -= (self.clientWidth + tempDistance);
      position.top += (target.clientHeight - self.clientHeight) / 2;
      break;
    case "bottom":
      position.top += target.clientHeight + tempDistance;
      position.left += (target.clientWidth - self.clientWidth) / 2;
      break;
    default:
      break;
  }
  position.top = Math.round(position.top);
  position.left = Math.round(position.left);
  return position;
}
