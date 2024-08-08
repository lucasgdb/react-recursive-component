export function cx(...classNames: (string | boolean)[]) {
  return classNames.filter(Boolean).join(" ");
}
