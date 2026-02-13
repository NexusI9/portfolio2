
/**
  Concat and Sanitize class name
 */
export function catClass(values: Array<String | undefined>) {
	return values.filter(n => n && n.length).join(" ");
}
