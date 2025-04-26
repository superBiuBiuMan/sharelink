/**
 * 查找 React 节点
 * @param selector 选择器
 * @param findKeys 查找的键
 * @returns 查找的结果
 */
export function findNodeReact<const T extends readonly string[]>(
  selector: string | HTMLElement,
  findKeys: T
): { [K in T[number]]: any } {
  const node =
    typeof selector === "string" ? document.querySelector(selector) : selector;
  if (!node) return {} as any;

  // 获取 React Fiber 的内部 key（兼容旧版本）
  const reactKey = Object.keys(node).find(
    (key) =>
      key.startsWith("__reactFiber$") ||
      key.startsWith("__reactInternalInstance$")
  );
  if (!reactKey) return {} as any;

  // @ts-ignore
  const fiberNode = node[reactKey];
  if (!fiberNode) return {} as any;

  // 保存查找结果
  const result = {} as { [K in T[number]]: any };
  const foundKeys = new Set<string>(); // 用于记录已经找到的键

  // 查找目标值的递归方法
  const findInFiber = (fiber: any): void => {
    console.log(fiber, "fiber");
    if (!fiber || foundKeys.size === findKeys.length) return; // 找到所有键时停止

    // 查找 props 中的值
    if (fiber.memoizedProps && typeof fiber.memoizedProps === "object") {
      for (const key of findKeys) {
        const typedKey = key as T[number]; // 类型断言
        if (result[typedKey] === undefined && key in fiber.memoizedProps) {
          result[typedKey] = fiber.memoizedProps[key];
          foundKeys.add(key); // 标记为已找到
        }
      }
    }

    // 查找 hooks 中的值（memoizedState 是 hook 链表）
    let state = fiber.memoizedState;
    while (state) {
      if (
        typeof state === "object" &&
        state !== null &&
        "memoizedState" in state
      ) {
        const val = state.memoizedState;
        if (val && typeof val === "object") {
          for (const key of findKeys) {
            const typedKey = key as T[number]; // 类型断言
            if (result[typedKey] === undefined && key in val) {
              result[typedKey] = val[key];
              foundKeys.add(key); // 标记为已找到
            }
          }
        }
      }
      state = state.next;
    }

    // 深度遍历子 fiber 节点
    if (fiber.child) findInFiber(fiber.child);
    if (fiber.sibling) findInFiber(fiber.sibling);
  };

  findInFiber(fiberNode);
  return result;
}
