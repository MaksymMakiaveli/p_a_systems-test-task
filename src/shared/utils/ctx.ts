import { inject, provide } from 'vue';

export const createCtx = <T>(injectionKey: string) => {
  const provideContext = (contextValue: T) => {
    provide(injectionKey, contextValue);
    return contextValue;
  };

  const injectContext = () => {
    const context = inject<T>(injectionKey);

    if (context) return context;

    throw new Error(`${injectionKey} is not provided`);
  };

  return [provideContext, injectContext] as const;
};
