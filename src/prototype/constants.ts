export class Example1 {
    public static readonly CONST_STRING = 'constString';
}

export namespace Example2 {
    export const CONST_STRING = 'constString';
}

class Test {
    public sample(): void {

        const exam1 = Example1.CONST_STRING;
        const exam2 = Example2.CONST_STRING;
    }
}

function StaticsFinal(target: any) {
    Object.freeze(target);
}
