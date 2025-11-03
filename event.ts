type EventListener<T extends object> = {
  event: string,
  listener: (event: Event) => void
}

export function listen<T extends object>(event: string, callback: (event: T) => void): EventListener<T> {
  const listener = (e: Event) => {
    const detail = (e as CustomEvent<T>).detail;
    callback(detail);
  };

  addEventListener(event, listener);

  return {
    event,
    listener
  };
}

export function unlisten<T extends object>(listener: EventListener<T>) {
  removeEventListener(listener.event, listener.listener);
}