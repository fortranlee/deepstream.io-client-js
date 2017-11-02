interface Emitter {
    on(event: string, listener: Function): Emitter;
    once(event: string, listener: Function): Emitter;
    off(event?: string, listener?: Function): Emitter;
    emit(event: string, ...args: any[]): boolean;
    listeners(event: string): Function[];
    hasListeners(event: string): boolean;
    _callbacks: Array<Function>;
}

declare module 'component-emitter2' {
    
    const constructor: {
        (obj?: any): Emitter;
        new (obj?: any): Emitter;
    };
    
    export = constructor;
}

declare namespace NodeJS  {
    interface Global {
        WebSocket: WebSocket,
        MozWebSocket: WebSocket
    }
  }