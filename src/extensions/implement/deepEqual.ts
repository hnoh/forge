export default function deepEqual(this: any, target: any): boolean {
        // 각 오브젝트의 프로퍼티 추출.
    const aProps = Object.getOwnPropertyNames(this);
    const bProps = Object.getOwnPropertyNames(target);

    // 프로퍼티 갯수가 다르면 바로 out
    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i];

        // 프로퍼티의 밸류가 다를경우
        if (this[propName] !== target[propName]) {

            // type이 object 일 경우
            // typeof a[propName] === 'object' && typeof b[propName] === 'object'
            if ((this[propName] === Object(this[propName])) && (target[propName] === Object(target[propName]))) {
                // recursive check
                return this.deepEqual(this[propName], target[propName]);
            } else {
                // primitive type이고 value가 다르므로 바로 out
                return false;

            }
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
